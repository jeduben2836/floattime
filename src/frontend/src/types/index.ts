export type Color = "White" | "Blue" | "Red" | "Green";

export type OrderStatus =
  | { Pending: null }
  | { Processing: null }
  | { Shipped: null }
  | { Delivered: null }
  | { Cancelled: null };

export interface Order {
  id: string;
  color: Color;
  price: number;
  status: OrderStatus;
  createdAt: bigint;
  customerEmail?: string;
  trackingNumber?: string;
  stripeSessionId?: string;
}

export interface CheckoutSession {
  id: string;
  url: string;
}

export type ColorOption = {
  value: Color;
  label: string;
  hex: string;
  glow: string;
  popular?: boolean;
};

export const COLOR_OPTIONS: ColorOption[] = [
  {
    value: "White",
    label: "White",
    hex: "#e8f0fe",
    glow: "rgba(232,240,254,0.5)",
  },
  {
    value: "Blue",
    label: "Electric Blue",
    hex: "#3b9eff",
    glow: "rgba(59,158,255,0.5)",
  },
  { value: "Red", label: "Red", hex: "#ff4d4d", glow: "rgba(255,77,77,0.5)" },
  {
    value: "Green",
    label: "Green",
    hex: "#22c55e",
    glow: "rgba(34,197,94,0.5)",
    popular: true,
  },
];

export function getOrderStatusLabel(status: OrderStatus): string {
  if ("Pending" in status) return "Pending";
  if ("Processing" in status) return "Processing";
  if ("Shipped" in status) return "Shipped";
  if ("Delivered" in status) return "Delivered";
  if ("Cancelled" in status) return "Cancelled";
  return "Unknown";
}
