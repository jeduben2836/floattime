import type { backendInterface, Order, Color, OrderStatus, UserRole } from "../backend";

const sampleOrder: Order = {
  orderId: "order-001",
  color: "Green" as unknown as Color,
  status: "Shipped" as unknown as OrderStatus,
  createdAt: BigInt(1746000000000000000),
  customerEmail: "customer@example.com",
  stripePaymentIntentId: "pi_sample_123",
  shippingAddress: {
    name: "Jane Smith",
    line1: "123 Main Street",
    line2: "",
    city: "San Francisco",
    state: "CA",
    postalCode: "94105",
    country: "US",
  },
};

export const mockBackend: backendInterface = {
  assignCallerUserRole: async (_user, _role) => undefined,
  createCheckoutSession: async (_color, _successUrl, _cancelUrl) => "https://checkout.stripe.com/pay/cs_test_sample",
  createOrder: async (_req) => sampleOrder,
  getCallerUserRole: async () => "user" as unknown as UserRole,
  getOrderById: async (_orderId) => sampleOrder,
  getStripeSessionStatus: async (_sessionId) => ({
    __kind__: "completed",
    completed: { response: "{}", userPrincipal: undefined },
  }),
  isCallerAdmin: async () => false,
  isStripeConfigured: async () => true,
  listOrders: async () => [sampleOrder],
  setStripeConfiguration: async (_config) => undefined,
  transform: async (input) => ({
    status: BigInt(200),
    body: input.response.body,
    headers: input.response.headers,
  }),
  updateOrderStatus: async (_orderId, _status) => true,
  _initializeAccessControl: async () => undefined,
};
