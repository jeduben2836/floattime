import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, RefreshCw, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";

export default function PaymentFailure() {
  return (
    <div
      data-ocid="payment_failure.page"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4"
    >
      <motion.div
        className="w-full max-w-md text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-destructive/20 border border-destructive/30 flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.15,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <AlertTriangle className="w-10 h-10 text-destructive" />
        </motion.div>

        <h1 className="text-3xl font-display font-bold text-foreground mb-2">
          Payment Failed
        </h1>
        <p className="text-muted-foreground text-base mb-8">
          Your payment could not be processed. No charge was made to your
          account — please try again or use a different payment method.
        </p>

        <div
          data-ocid="payment_failure.error_state"
          className="glass-effect rounded-2xl p-6 mb-8 border border-destructive/20"
        >
          <p className="text-destructive/90 text-sm font-display font-medium mb-3">
            What might have gone wrong:
          </p>
          <ul className="text-muted-foreground text-sm space-y-2 text-left">
            <li className="flex items-start gap-2">
              <span className="text-destructive/60 mt-0.5 flex-shrink-0">
                •
              </span>
              <span>Insufficient funds or card declined</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive/60 mt-0.5 flex-shrink-0">
                •
              </span>
              <span>Incorrect card details entered</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive/60 mt-0.5 flex-shrink-0">
                •
              </span>
              <span>Payment session expired — please restart checkout</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <Link to="/">
            <Button
              data-ocid="payment_failure.try_again_button"
              className="w-full bg-gradient-accent text-primary-foreground hover:opacity-90 transition-smooth font-display"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </Link>
          <Link to="/">
            <Button
              variant="outline"
              data-ocid="payment_failure.back_home_button"
              className="w-full border-border hover:border-accent/50 transition-smooth"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Back to Shop
            </Button>
          </Link>
        </div>

        <p className="mt-8 text-muted-foreground text-xs">
          Need help?{" "}
          <a
            href="mailto:FloatTimeClocks@gmail.com"
            className="text-accent hover:underline transition-smooth"
            data-ocid="payment_failure.contact_link"
          >
            Contact us
          </a>
        </p>
      </motion.div>
    </div>
  );
}
