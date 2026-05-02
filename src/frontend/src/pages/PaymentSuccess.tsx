import { Button } from "@/components/ui/button";
import { Link, useSearch } from "@tanstack/react-router";
import { CheckCircle2, Package } from "lucide-react";
import { motion } from "motion/react";

export default function PaymentSuccess() {
  const search = useSearch({ strict: false }) as Record<string, string>;
  const orderId = search.order_id ?? null;

  return (
    <div
      data-ocid="payment_success.page"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4"
    >
      <motion.div
        className="w-full max-w-md text-center"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_oklch(var(--accent)/0.25)]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </motion.div>

        <h1 className="text-3xl font-display font-bold text-foreground mb-2">
          Payment Successful!
        </h1>
        <p className="text-muted-foreground text-base mb-8">
          Your FloatTime 3D LED Clock is on its way. You'll receive a
          confirmation email shortly.
        </p>

        <div className="glass-effect rounded-2xl p-6 mb-8 text-left space-y-3">
          {orderId && (
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Order ID</span>
              <span
                data-ocid="payment_success.order_id"
                className="font-mono text-sm text-accent"
              >
                #{orderId.slice(0, 12)}
              </span>
            </div>
          )}
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Shipping</span>
            <span className="text-accent font-semibold text-sm">FREE</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">
              Estimated Delivery
            </span>
            <span className="text-foreground text-sm">5–7 Business Days</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {orderId ? (
            <Link to="/order-tracking/$orderId" params={{ orderId }}>
              <Button
                data-ocid="payment_success.track_order_button"
                className="w-full bg-gradient-accent text-primary-foreground hover:opacity-90 transition-smooth font-display"
              >
                <Package className="w-4 h-4 mr-2" />
                Track My Order
              </Button>
            </Link>
          ) : (
            <p
              data-ocid="payment_success.no_order_id_message"
              className="text-center text-sm text-muted-foreground"
            >
              To track your order, check your confirmation email for the
              tracking link.
            </p>
          )}
          <Link to="/">
            <Button
              variant="outline"
              data-ocid="payment_success.back_home_button"
              className="w-full border-border hover:border-accent/50 transition-smooth"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
