import { CheckoutForm } from "@/components/CheckoutForm";
// Home page — implemented in subsequent task
import { ClockDisplay } from "@/components/ClockDisplay";
import { ColorSelector } from "@/components/ColorSelector";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { COLOR_OPTIONS } from "@/types";
import type { Color, ColorOption } from "@/types";
import { motion } from "motion/react";
import { useCallback, useMemo, useRef, useState } from "react";

const FEATURES = [
  {
    icon: "⚡",
    title: "3D Holographic LED",
    desc: "Edge-to-edge floating LED digits that create a stunning depth illusion.",
  },
  {
    icon: "📡",
    title: "WiFi App Sync",
    desc: "Auto-syncs time via internet. Set alarms and brightness from your phone.",
  },
  {
    icon: "🌈",
    title: "4 Glow Colors",
    desc: "Choose White, Blue, Red, or Green. Match your room's vibe perfectly.",
  },
  {
    icon: "🔔",
    title: "Smart Alarm",
    desc: "Gentle wake-up glow alarm, grows from dim to full brightness.",
  },
];

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<Color>("Green");
  const productRef = useRef<HTMLDivElement>(null);

  const colorOption: ColorOption = useMemo(
    () =>
      COLOR_OPTIONS.find((c) => c.value === selectedColor) ?? COLOR_OPTIONS[0],
    [selectedColor],
  );

  const scrollToProduct = useCallback(() => {
    productRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.09 0.02 262) 0%, oklch(0.06 0 0) 60%, oklch(0.08 0.01 262) 100%)",
        }}
        data-ocid="hero.section"
      >
        {/* Background radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 40%, oklch(0.65 0.21 262 / 0.08) 0%, transparent 70%)",
          }}
        />
        {/* Hero grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.65 0.21 262) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.21 262) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            className="flex flex-col gap-6 max-w-xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-accent"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <span className="text-xs font-display font-semibold tracking-[0.25em] uppercase text-accent">
                The Future of Time Is Here
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight">
              The Future
              <br />
              of <span className="text-glow-accent">Timekeeping</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Meet the{" "}
              <strong className="text-foreground">
                FloatTime 3D LED Clock
              </strong>{" "}
              — sleek floating LED digits, four stunning glow colors, and WiFi
              sync built in. Modern design for your home or office.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                type="button"
                onClick={scrollToProduct}
                data-ocid="hero.cta_button"
                size="lg"
                className="font-display font-semibold tracking-wide h-12 px-8 transition-smooth"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.21 262), oklch(0.65 0.21 262))",
                  boxShadow: "0 0 24px oklch(0.65 0.21 262 / 0.45)",
                  color: "oklch(0.08 0 0)",
                }}
              >
                Order Now — $12.99
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={scrollToProduct}
                data-ocid="hero.secondary_button"
                className="font-display font-semibold h-12 px-8 border-border hover:border-accent transition-smooth"
              >
                See Colors
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
              <Badge
                className="text-xs font-display tracking-wider font-semibold px-3 py-1"
                style={{
                  background: "oklch(0.65 0.21 262 / 0.15)",
                  color: "oklch(0.75 0.18 262)",
                  border: "1px solid oklch(0.65 0.21 262 / 0.3)",
                }}
              >
                FREE Shipping
              </Badge>
              <span className="text-xs text-muted-foreground font-display">
                Apple Pay · Google Pay · Card
              </span>
            </div>
          </motion.div>
          {/* Right: hero image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse, oklch(0.65 0.21 262 / 0.25) 0%, transparent 70%)",
                }}
              />
              <img
                src="/assets/generated/floattime-hero-clock.dim_1200x800.jpg"
                alt="FloatTime 3D LED floating clock"
                className="relative z-10 w-full max-w-lg rounded-2xl"
                style={{
                  boxShadow:
                    "0 0 60px oklch(0.65 0.21 262 / 0.2), 0 20px 60px oklch(0 0 0 / 0.5)",
                }}
              />
            </div>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.button
          type="button"
          onClick={scrollToProduct}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-accent transition-smooth cursor-pointer"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
        >
          <span className="text-xs font-display tracking-widest uppercase">
            Explore
          </span>
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 0v16M1 9l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.button>
      </section>

      {/* ── PRODUCT SHOWCASE ── */}
      <section
        ref={productRef}
        id="product"
        className="py-20 sm:py-28"
        style={{ background: "oklch(0.07 0 0)" }}
        data-ocid="product.section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-display font-semibold tracking-[0.3em] uppercase text-accent mb-3">
              FloatTime 3D LED Clock
            </p>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4">
              Select Your Glow
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Pick the LED color that matches your space. Each glow mode is
              fully adjustable in brightness.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Live clock preview */}
            <motion.div
              className="flex flex-col items-center gap-8"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ClockDisplay color={selectedColor} colorOption={colorOption} />
              <div
                className="text-center px-6 py-2 rounded-full text-sm font-display font-semibold tracking-wide"
                style={{
                  color: colorOption.hex,
                  background: `${colorOption.hex}12`,
                  border: `1px solid ${colorOption.hex}30`,
                }}
              >
                Live preview — {colorOption.label} glow
              </div>
            </motion.div>
            {/* Right panel: color selector + pricing */}
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "oklch(0.10 0 0)",
                  border: "1px solid oklch(0.20 0 0)",
                }}
              >
                <h3 className="text-sm font-display font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">
                  Select Your Glow:
                </h3>
                <ColorSelector
                  options={COLOR_OPTIONS}
                  selected={selectedColor}
                  onChange={setSelectedColor}
                />
              </div>
              <div
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  background: "oklch(0.10 0 0)",
                  border: "1px solid oklch(0.20 0 0)",
                }}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-5xl font-display font-bold"
                    style={{
                      color: "oklch(0.96 0 0)",
                      textShadow: "0 0 30px oklch(0.65 0.21 262 / 0.3)",
                    }}
                  >
                    $12.99
                  </span>
                  <Badge
                    data-ocid="product.free_shipping_badge"
                    className="text-xs font-display font-semibold tracking-wider px-3 py-1"
                    style={{
                      background: "oklch(0.55 0.17 145 / 0.2)",
                      color: "oklch(0.75 0.18 145)",
                      border: "1px solid oklch(0.55 0.17 145 / 0.4)",
                    }}
                  >
                    FREE Shipping
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-muted-foreground font-display">
                    Accepted:
                  </span>
                  {["Apple Pay", "Google Pay", "Visa", "Mastercard"].map(
                    (m) => (
                      <span
                        key={m}
                        className="text-xs font-display font-semibold px-2.5 py-1 rounded-lg"
                        style={{
                          background: "oklch(0.16 0 0)",
                          color: "oklch(0.65 0 0)",
                          border: "1px solid oklch(0.26 0 0)",
                        }}
                      >
                        {m}
                      </span>
                    ),
                  )}
                </div>
                <div
                  className="flex flex-wrap gap-4 pt-3"
                  style={{ borderTop: "1px solid oklch(0.18 0 0)" }}
                >
                  {[
                    "✓ Guaranteed Delivery",
                    "✓ 30-Day Returns",
                    "✓ 24/7 Support",
                  ].map((t) => (
                    <span
                      key={t}
                      className="text-xs text-muted-foreground font-display"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section
        className="py-20 sm:py-28"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.07 0 0) 0%, oklch(0.09 0.01 262) 100%)",
        }}
        data-ocid="features.section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-display font-semibold tracking-[0.3em] uppercase text-accent mb-3">
              Why FloatTime
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              Built Different
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="rounded-2xl p-6 flex flex-col gap-3 glass-effect hover:border-accent/30 transition-smooth"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`features.card.${i + 1}`}
              >
                <div className="text-3xl">{f.icon}</div>
                <h3 className="text-base font-display font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHECKOUT ── */}
      <section
        id="checkout"
        className="py-20 sm:py-28"
        style={{ background: "oklch(0.08 0 0)" }}
        data-ocid="checkout.section"
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-display font-semibold tracking-[0.3em] uppercase text-accent mb-3">
              Ready to Order
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-3">
              Ship It to Your Door
            </h2>
            <p className="text-muted-foreground">
              Free global shipping · Ships in 2–5 business days
            </p>
          </motion.div>
          <CheckoutForm
            selectedColor={selectedColor}
            colorOption={colorOption}
          />
        </div>
      </section>
    </div>
  );
}
