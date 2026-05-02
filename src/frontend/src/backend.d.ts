import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface TransformationOutput {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export type Time = bigint;
export interface ShippingAddress {
    country: string;
    city: string;
    postalCode: string;
    name: string;
    line1: string;
    line2: string;
    state: string;
}
export interface Order {
    status: OrderStatus;
    createdAt: Time;
    color: Color;
    orderId: OrderId;
    shippingAddress: ShippingAddress;
    stripePaymentIntentId: string;
    customerEmail: string;
}
export interface http_header {
    value: string;
    name: string;
}
export interface http_request_result {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface TransformationInput {
    context: Uint8Array;
    response: http_request_result;
}
export type StripeSessionStatus = {
    __kind__: "completed";
    completed: {
        userPrincipal?: string;
        response: string;
    };
} | {
    __kind__: "failed";
    failed: {
        error: string;
    };
};
export interface StripeConfiguration {
    allowedCountries: Array<string>;
    secretKey: string;
}
export interface CreateOrderRequest {
    color: Color;
    shippingAddress: ShippingAddress;
    stripePaymentIntentId: string;
    customerEmail: string;
}
export type OrderId = string;
export enum Color {
    Red = "Red",
    Blue = "Blue",
    Green = "Green",
    White = "White"
}
export enum OrderStatus {
    Delivered = "Delivered",
    Shipped = "Shipped",
    Pending = "Pending"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    /**
     * / Create a Stripe checkout session for a FloatTime clock ($12.99 USD).
     */
    createCheckoutSession(color: Color, successUrl: string, cancelUrl: string): Promise<string>;
    createOrder(req: CreateOrderRequest): Promise<Order>;
    getCallerUserRole(): Promise<UserRole>;
    getOrderById(orderId: OrderId): Promise<Order | null>;
    /**
     * / Check Stripe session payment status.
     */
    getStripeSessionStatus(sessionId: string): Promise<StripeSessionStatus>;
    isCallerAdmin(): Promise<boolean>;
    isStripeConfigured(): Promise<boolean>;
    listOrders(): Promise<Array<Order>>;
    setStripeConfiguration(config: StripeConfiguration): Promise<void>;
    transform(input: TransformationInput): Promise<TransformationOutput>;
    updateOrderStatus(orderId: OrderId, status: OrderStatus): Promise<boolean>;
}
