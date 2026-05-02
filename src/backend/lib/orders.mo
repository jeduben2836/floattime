import Map "mo:core/Map";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Types "../types/orders";
import Int "mo:core/Int";

module {
  public type OrdersState = Map.Map<Types.OrderId, Types.Order>;

  public func empty() : OrdersState {
    Map.empty<Types.OrderId, Types.Order>()
  };

  public func createOrder(state : OrdersState, req : Types.CreateOrderRequest) : Types.Order {
    let ts : Int = Time.now();
    let orderId = "order-" # Int.abs(ts).toText();
    let order : Types.Order = {
      orderId;
      color = req.color;
      customerEmail = req.customerEmail;
      shippingAddress = req.shippingAddress;
      status = #Pending;
      stripePaymentIntentId = req.stripePaymentIntentId;
      createdAt = Time.now();
    };
    state.add(orderId, order);
    order
  };

  public func getOrder(state : OrdersState, orderId : Types.OrderId) : ?Types.Order {
    state.get(orderId)
  };

  public func updateOrderStatus(state : OrdersState, orderId : Types.OrderId, status : Types.OrderStatus) : Bool {
    switch (state.get(orderId)) {
      case null { false };
      case (?existing) {
        state.add(orderId, { existing with status });
        true
      };
    }
  };

  public func listOrders(state : OrdersState) : [Types.Order] {
    state.values().toArray()
  };
};
