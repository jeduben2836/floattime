import Time "mo:core/Time";

module {
  public type OrderId = Text;

  public type Color = {
    #White;
    #Blue;
    #Red;
    #Green;
  };

  public type ShippingAddress = {
    name : Text;
    line1 : Text;
    line2 : Text;
    city : Text;
    state : Text;
    postalCode : Text;
    country : Text;
  };

  public type OrderStatus = {
    #Pending;
    #Shipped;
    #Delivered;
  };

  public type Order = {
    orderId : OrderId;
    color : Color;
    customerEmail : Text;
    shippingAddress : ShippingAddress;
    status : OrderStatus;
    stripePaymentIntentId : Text;
    createdAt : Time.Time;
  };

  public type CreateOrderRequest = {
    color : Color;
    customerEmail : Text;
    shippingAddress : ShippingAddress;
    stripePaymentIntentId : Text;
  };
};
