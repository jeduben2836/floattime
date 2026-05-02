import Map "mo:core/Map";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import Stripe "mo:caffeineai-stripe/stripe";
import OutCall "mo:caffeineai-http-outcalls/outcall";
import OrdersApi "mixins/orders-api";
import Types "types/orders";
import Runtime "mo:core/Runtime";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let orders = Map.empty<Types.OrderId, Types.Order>();
  include OrdersApi(accessControlState, orders);

  // Stripe configuration
  var stripeConfig : ?Stripe.StripeConfiguration = null;

  public query func isStripeConfigured() : async Bool {
    stripeConfig != null
  };

  public shared ({ caller }) func setStripeConfiguration(config : Stripe.StripeConfiguration) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can configure Stripe");
    };
    stripeConfig := ?config;
  };

  func requireStripeConfig() : Stripe.StripeConfiguration {
    switch (stripeConfig) {
      case null { Runtime.trap("Stripe is not configured") };
      case (?cfg) { cfg };
    }
  };

  /// Create a Stripe checkout session for a FloatTime clock ($12.99 USD).
  public shared ({ caller }) func createCheckoutSession(color : Types.Color, successUrl : Text, cancelUrl : Text) : async Text {
    let colorName = switch (color) {
      case (#White) "White";
      case (#Blue) "Blue";
      case (#Red) "Red";
      case (#Green) "Green";
    };
    let items : [Stripe.ShoppingItem] = [{
      currency = "usd";
      productName = "FloatTime 3D LED Clock";
      productDescription = colorName # " - Floating LED Display Clock";
      priceInCents = 1299;
      quantity = 1;
    }];
    await Stripe.createCheckoutSession(requireStripeConfig(), caller, items, successUrl, cancelUrl, transform)
  };

  /// Check Stripe session payment status.
  public func getStripeSessionStatus(sessionId : Text) : async Stripe.StripeSessionStatus {
    await Stripe.getSessionStatus(requireStripeConfig(), sessionId, transform)
  };

  public query func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input)
  };
};
