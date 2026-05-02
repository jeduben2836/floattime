import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateCheckoutSession } from "@/hooks/useBackend";
import type { Color, ColorOption } from "@/types";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

interface CheckoutFormProps {
  selectedColor: Color;
  colorOption: ColorOption;
}

export function CheckoutForm({
  selectedColor,
  colorOption,
}: CheckoutFormProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const { mutateAsync: createSession, isPending } = useCreateCheckoutSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !address || !city || !firstName) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      const session = await createSession({
        color: selectedColor,
        customerEmail: email,
        customerName: `${firstName} ${lastName}`.trim(),
      });
      window.location.href = session.url;
    } catch (err) {
      toast.error("Checkout failed. Please try again.");
      console.error(err);
    }
  };

  const glowColor = colorOption.hex;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl p-6 sm:p-8"
      style={{
        background: "oklch(0.10 0 0)",
        border: "1px solid oklch(0.22 0 0)",
      }}
    >
      <div className="mb-6">
        <h3 className="text-xl font-display font-semibold text-foreground mb-1">
          Complete Your Order
        </h3>
        <p className="text-sm text-muted-foreground">
          Shipping details for your{" "}
          <span style={{ color: glowColor }} className="font-semibold">
            {colorOption.label}
          </span>{" "}
          FloatTime clock
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="checkout-email"
            className="text-sm font-display text-muted-foreground"
          >
            Email Address *
          </Label>
          <Input
            id="checkout-email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            data-ocid="checkout.email_input"
            className="bg-card border-border focus:border-primary"
          />
        </div>

        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="checkout-first"
              className="text-sm font-display text-muted-foreground"
            >
              First Name *
            </Label>
            <Input
              id="checkout-first"
              placeholder="Alex"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              data-ocid="checkout.first_name_input"
              className="bg-card border-border focus:border-primary"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="checkout-last"
              className="text-sm font-display text-muted-foreground"
            >
              Last Name
            </Label>
            <Input
              id="checkout-last"
              placeholder="Johnson"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              data-ocid="checkout.last_name_input"
              className="bg-card border-border focus:border-primary"
            />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="checkout-address"
            className="text-sm font-display text-muted-foreground"
          >
            Street Address *
          </Label>
          <Input
            id="checkout-address"
            placeholder="123 Main Street"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            data-ocid="checkout.address_input"
            className="bg-card border-border focus:border-primary"
          />
        </div>

        {/* City + Postal */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="checkout-city"
              className="text-sm font-display text-muted-foreground"
            >
              City *
            </Label>
            <Input
              id="checkout-city"
              placeholder="New York"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              data-ocid="checkout.city_input"
              className="bg-card border-border focus:border-primary"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="checkout-postal"
              className="text-sm font-display text-muted-foreground"
            >
              Postal Code
            </Label>
            <Input
              id="checkout-postal"
              placeholder="10001"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              data-ocid="checkout.postal_input"
              className="bg-card border-border focus:border-primary"
            />
          </div>
        </div>

        {/* Color confirmation */}
        <div
          className="flex items-center justify-between rounded-xl px-4 py-3"
          style={{
            background: `${glowColor}10`,
            border: `1px solid ${glowColor}30`,
          }}
        >
          <span className="text-sm font-display text-muted-foreground">
            Selected Color
          </span>
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{
                background: glowColor,
                boxShadow: `0 0 6px ${glowColor}`,
              }}
            />
            <span
              className="text-sm font-display font-semibold"
              style={{ color: glowColor }}
            >
              {colorOption.label}
            </span>
          </div>
        </div>

        {/* Payment icons */}
        <div className="flex items-center gap-3 py-2">
          <span className="text-xs text-muted-foreground font-display">
            Secure checkout via
          </span>
          <div className="flex items-center gap-2">
            {["Apple Pay", "Google Pay", "Card"].map((method) => (
              <span
                key={method}
                className="text-xs font-display font-semibold px-2 py-1 rounded-md"
                style={{
                  background: "oklch(0.18 0 0)",
                  color: "oklch(0.70 0 0)",
                  border: "1px solid oklch(0.26 0 0)",
                }}
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isPending}
          data-ocid="checkout.submit_button"
          className="w-full h-12 font-display font-semibold text-base tracking-wide transition-smooth"
          style={{
            background: isPending
              ? "oklch(0.40 0.15 262)"
              : "linear-gradient(135deg, oklch(0.55 0.21 262), oklch(0.65 0.21 262))",
            boxShadow: isPending
              ? "none"
              : "0 0 20px oklch(0.65 0.21 262 / 0.4)",
            color: "oklch(0.08 0 0)",
          }}
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              Processing…
            </span>
          ) : (
            "Place Order — $12.99"
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Free global shipping · 30-day returns · Secure SSL checkout
        </p>
      </form>
    </motion.div>
  );
}
