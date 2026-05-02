import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetOrderById } from "@/hooks/useBackend";
import { COLOR_OPTIONS, getOrderStatusLabel } from "@/types";
import type { OrderStatus } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import { CheckCircle2, Circle, Package, Truck } from "lucide-react";
import { motion } from "motion/react";

const STEPS = [
  { key: "Pending", label: "Order Placed", Icon: Package },
  { key: "Shipped", label: "Shipped", Icon: Truck },
  { key: "Delivered", label: "Delivered", Icon: CheckCircle2 },
];

const STATUS_STEP_INDEX: Record<string, number> = {
  Pending: 0,
  Processing: 0,
  Shipped: 1,
  Delivered: 2,
  Cancelled: -1,
};

function StatusStepper({ status }: { status: OrderStatus }) {
  const label = getOrderStatusLabel(status);
  const currentStep = STATUS_STEP_INDEX[label] ?? 0;
  const isCancelled = label === "Cancelled";

  return (
    <div
      data-ocid="order.status_stepper"
      className="flex items-start gap-0 w-full"
    >
      {STEPS.map((step, i) => {
        const isCompleted = !isCancelled && i < currentStep;
        const isActive = !isCancelled && i === currentStep;
        return (
          <div key={step.key} className="flex-1 flex flex-col items-center">
            <div className="flex items-center w-full">
              {i > 0 && (
                <div
                  className={`flex-1 h-0.5 transition-smooth ${isCompleted ? "bg-accent" : "bg-border"}`}
                />
              )}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-smooth flex-shrink-0 ${
                  isActive
                    ? "border-accent bg-accent/20 text-accent shadow-[0_0_16px_oklch(var(--accent)/0.4)]"
                    : isCompleted
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border bg-card/50 text-muted-foreground"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <step.Icon className="w-5 h-5" />
                )}
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`flex-1 h-0.5 transition-smooth ${isCompleted ? "bg-accent" : "bg-border"}`}
                />
              )}
            </div>
            <p
              className={`mt-2 text-xs font-display font-medium text-center transition-smooth ${
                isActive
                  ? "text-accent"
                  : isCompleted
                    ? "text-foreground"
                    : "text-muted-foreground"
              }`}
            >
              {step.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function ColorDot({ color }: { color: string }) {
  const option = COLOR_OPTIONS.find((c) => c.value === color);
  if (!option) return <span className="text-foreground">{color}</span>;
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="w-3 h-3 rounded-full inline-block flex-shrink-0"
        style={{ background: option.hex, boxShadow: `0 0 6px ${option.glow}` }}
      />
      <span className="text-foreground">{option.label}</span>
    </span>
  );
}

function OrderSkeleton() {
  return (
    <div className="space-y-5">
      <Skeleton className="h-8 w-56" />
      <Skeleton className="h-32 w-full rounded-2xl" />
      <Skeleton className="h-40 w-full rounded-2xl" />
    </div>
  );
}

export default function OrderTracking() {
  const { orderId } = useParams({ from: "/order-tracking/$orderId" });
  const { data: order, isLoading, isError } = useGetOrderById(orderId);
  const statusLabel = order
    ? getOrderStatusLabel(order.status as OrderStatus)
    : "";

  return (
    <div
      data-ocid="order_tracking.page"
      className="min-h-[calc(100vh-4rem)] flex items-start justify-center py-16 px-4"
    >
      <motion.div
        className="w-full max-w-xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="mb-8">
          <p className="text-accent font-display text-xs tracking-widest uppercase mb-2">
            Order Status
          </p>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Track Your Order
          </h1>
        </div>

        {isLoading && <OrderSkeleton />}

        {isError && (
          <div
            data-ocid="order_tracking.error_state"
            className="glass-effect rounded-2xl p-8 text-center border border-destructive/30"
          >
            <p className="text-destructive font-display font-semibold text-lg mb-2">
              Something went wrong
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              We couldn't fetch your order. Please try again.
            </p>
            <Link to="/">
              <Button
                variant="outline"
                size="sm"
                data-ocid="order_tracking.back_home_link"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        )}

        {!isLoading && !isError && !order && (
          <div
            data-ocid="order_tracking.empty_state"
            className="glass-effect rounded-2xl p-10 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">
              Order Not Found
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              We couldn't find an order with ID{" "}
              <span className="font-mono text-accent">{orderId}</span>.
              Double-check your confirmation email and try again.
            </p>
            <Link to="/">
              <Button
                data-ocid="order_tracking.go_home_button"
                className="bg-gradient-accent text-primary-foreground hover:opacity-90 transition-smooth"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        )}

        {!isLoading && !isError && order && (
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <Badge
                data-ocid="order_tracking.status_badge"
                variant="outline"
                className={`font-display text-xs tracking-wide px-3 py-1 ${
                  statusLabel === "Delivered"
                    ? "bg-primary/20 text-primary border-primary/30"
                    : statusLabel === "Shipped"
                      ? "bg-accent/20 text-accent border-accent/30"
                      : statusLabel === "Cancelled"
                        ? "bg-destructive/20 text-destructive border-destructive/30"
                        : "bg-muted text-muted-foreground border-border"
                }`}
              >
                {statusLabel}
              </Badge>
            </div>

            {statusLabel !== "Cancelled" ? (
              <div className="glass-effect rounded-2xl p-6">
                <StatusStepper status={order.status as OrderStatus} />
              </div>
            ) : (
              <div className="glass-effect rounded-2xl p-6 border border-destructive/30">
                <p className="text-destructive font-display font-semibold">
                  Order Cancelled
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  This order has been cancelled. Contact us if you have
                  questions.
                </p>
              </div>
            )}

            <div
              data-ocid="order_tracking.details_card"
              className="glass-effect rounded-2xl p-6 space-y-0"
            >
              <h2 className="font-display font-semibold text-foreground text-xs uppercase tracking-widest mb-3">
                Order Details
              </h2>
              <div className="divide-y divide-border/50">
                <div className="flex justify-between items-center py-3">
                  <span className="text-muted-foreground text-sm">
                    Order ID
                  </span>
                  <span
                    data-ocid="order_tracking.order_id"
                    className="font-mono text-sm text-accent"
                  >
                    #{order.id.slice(0, 12)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-muted-foreground text-sm">Color</span>
                  <ColorDot color={order.color} />
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-muted-foreground text-sm">Price</span>
                  <span className="text-foreground font-semibold">
                    ${(order.price / 100).toFixed(2)}
                  </span>
                </div>
                {order.customerEmail && (
                  <div className="flex justify-between items-center py-3">
                    <span className="text-muted-foreground text-sm">Email</span>
                    <span className="text-foreground text-sm">
                      {order.customerEmail}
                    </span>
                  </div>
                )}
                {order.trackingNumber && (
                  <div className="flex justify-between items-center py-3">
                    <span className="text-muted-foreground text-sm">
                      Tracking #
                    </span>
                    <span className="font-mono text-sm text-foreground">
                      {order.trackingNumber}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <Link to="/">
                <Button
                  variant="ghost"
                  size="sm"
                  data-ocid="order_tracking.back_home_link"
                  className="text-muted-foreground hover:text-foreground"
                >
                  ← Back to Home
                </Button>
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
