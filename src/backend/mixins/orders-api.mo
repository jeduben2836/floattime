import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import OrdersLib "../lib/orders";
import Types "../types/orders";

mixin (
  accessControlState : AccessControl.AccessControlState,
  orders : Map.Map<Types.OrderId, Types.Order>,
) {

  /// Called after successful Stripe payment to create an order.
  public shared func createOrder(req : Types.CreateOrderRequest) : async Types.Order {
    OrdersLib.createOrder(orders, req)
  };

  /// Retrieve an order by ID for the tracking page.
  public query func getOrderById(orderId : Types.OrderId) : async ?Types.Order {
    OrdersLib.getOrder(orders, orderId)
  };

  /// Update order status (admin use): Pending -> Shipped -> Delivered.
  public shared ({ caller }) func updateOrderStatus(orderId : Types.OrderId, status : Types.OrderStatus) : async Bool {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can update order status");
    };
    OrdersLib.updateOrderStatus(orders, orderId, status)
  };

  /// List all orders (admin use).
  public shared ({ caller }) func listOrders() : async [Types.Order] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can list orders");
    };
    OrdersLib.listOrders(orders)
  };
};
