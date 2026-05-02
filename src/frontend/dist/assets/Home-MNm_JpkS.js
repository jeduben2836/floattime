import { j as jsxRuntimeExports, c as cn, r as reactExports, a as createSlot, B as Button, u as ue, R as React } from "./index-Cu8MRT0L.js";
import { u as useCreateCheckoutSession, B as Badge, C as COLOR_OPTIONS } from "./index-Dl49g4bq.js";
import { m as motion } from "./proxy-Du3xhkon.js";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function CheckoutForm({
  selectedColor,
  colorOption
}) {
  const [email, setEmail] = reactExports.useState("");
  const [firstName, setFirstName] = reactExports.useState("");
  const [lastName, setLastName] = reactExports.useState("");
  const [address, setAddress] = reactExports.useState("");
  const [city, setCity] = reactExports.useState("");
  const [postalCode, setPostalCode] = reactExports.useState("");
  const { mutateAsync: createSession, isPending } = useCreateCheckoutSession();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !address || !city || !firstName) {
      ue.error("Please fill in all required fields.");
      return;
    }
    try {
      const session = await createSession({
        color: selectedColor,
        customerEmail: email,
        customerName: `${firstName} ${lastName}`.trim()
      });
      window.location.href = session.url;
    } catch (err) {
      ue.error("Checkout failed. Please try again.");
      console.error(err);
    }
  };
  const glowColor = colorOption.hex;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5 },
      className: "rounded-2xl p-6 sm:p-8",
      style: {
        background: "oklch(0.10 0 0)",
        border: "1px solid oklch(0.22 0 0)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-display font-semibold text-foreground mb-1", children: "Complete Your Order" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            "Shipping details for your",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: glowColor }, className: "font-semibold", children: colorOption.label }),
            " ",
            "FloatTime clock"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "checkout-email",
                className: "text-sm font-display text-muted-foreground",
                children: "Email Address *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "checkout-email",
                type: "email",
                placeholder: "your@email.com",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                required: true,
                "data-ocid": "checkout.email_input",
                className: "bg-card border-border focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "checkout-first",
                  className: "text-sm font-display text-muted-foreground",
                  children: "First Name *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "checkout-first",
                  placeholder: "Alex",
                  value: firstName,
                  onChange: (e) => setFirstName(e.target.value),
                  required: true,
                  "data-ocid": "checkout.first_name_input",
                  className: "bg-card border-border focus:border-primary"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "checkout-last",
                  className: "text-sm font-display text-muted-foreground",
                  children: "Last Name"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "checkout-last",
                  placeholder: "Johnson",
                  value: lastName,
                  onChange: (e) => setLastName(e.target.value),
                  "data-ocid": "checkout.last_name_input",
                  className: "bg-card border-border focus:border-primary"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "checkout-address",
                className: "text-sm font-display text-muted-foreground",
                children: "Street Address *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "checkout-address",
                placeholder: "123 Main Street",
                value: address,
                onChange: (e) => setAddress(e.target.value),
                required: true,
                "data-ocid": "checkout.address_input",
                className: "bg-card border-border focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "checkout-city",
                  className: "text-sm font-display text-muted-foreground",
                  children: "City *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "checkout-city",
                  placeholder: "New York",
                  value: city,
                  onChange: (e) => setCity(e.target.value),
                  required: true,
                  "data-ocid": "checkout.city_input",
                  className: "bg-card border-border focus:border-primary"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "checkout-postal",
                  className: "text-sm font-display text-muted-foreground",
                  children: "Postal Code"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "checkout-postal",
                  placeholder: "10001",
                  value: postalCode,
                  onChange: (e) => setPostalCode(e.target.value),
                  "data-ocid": "checkout.postal_input",
                  className: "bg-card border-border focus:border-primary"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between rounded-xl px-4 py-3",
              style: {
                background: `${glowColor}10`,
                border: `1px solid ${glowColor}30`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-display text-muted-foreground", children: "Selected Color" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-3 h-3 rounded-full",
                      style: {
                        background: glowColor,
                        boxShadow: `0 0 6px ${glowColor}`
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-sm font-display font-semibold",
                      style: { color: glowColor },
                      children: colorOption.label
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-display", children: "Secure checkout via" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: ["Apple Pay", "Google Pay", "Card"].map((method) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs font-display font-semibold px-2 py-1 rounded-md",
                style: {
                  background: "oklch(0.18 0 0)",
                  color: "oklch(0.70 0 0)",
                  border: "1px solid oklch(0.26 0 0)"
                },
                children: method
              },
              method
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              disabled: isPending,
              "data-ocid": "checkout.submit_button",
              className: "w-full h-12 font-display font-semibold text-base tracking-wide transition-smooth",
              style: {
                background: isPending ? "oklch(0.40 0.15 262)" : "linear-gradient(135deg, oklch(0.55 0.21 262), oklch(0.65 0.21 262))",
                boxShadow: isPending ? "none" : "0 0 20px oklch(0.65 0.21 262 / 0.4)",
                color: "oklch(0.08 0 0)"
              },
              children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" }),
                "Processing…"
              ] }) : "Place Order — $12.99"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground", children: "Free global shipping · 30-day returns · Secure SSL checkout" })
        ] })
      ]
    }
  );
}
function useCurrentTime() {
  const [time, setTime] = React.useState(/* @__PURE__ */ new Date());
  React.useEffect(() => {
    const interval = setInterval(() => setTime(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(interval);
  }, []);
  return time;
}
function LedDigit({ char, glowColor }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "font-mono text-5xl sm:text-7xl font-bold tracking-widest tabular-nums",
      style: {
        color: glowColor,
        textShadow: `0 0 10px ${glowColor}, 0 0 25px ${glowColor}80, 0 0 50px ${glowColor}40`,
        fontVariantNumeric: "tabular-nums"
      },
      children: char
    }
  );
}
function ClockDisplay({ colorOption }) {
  const time = useCurrentTime();
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const dateStr = time.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  });
  const glowColor = colorOption.hex;
  const glowShadow = colorOption.glow;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "relative flex flex-col items-center justify-center",
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative rounded-2xl p-8 sm:p-12 overflow-hidden",
            style: {
              background: "linear-gradient(135deg, oklch(0.10 0 0) 0%, oklch(0.06 0 0) 100%)",
              border: `1px solid ${glowColor}30`,
              boxShadow: `0 0 40px ${glowShadow}, 0 0 80px ${glowShadow}40, inset 0 1px 0 ${glowColor}15`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 rounded-2xl",
                  style: {
                    background: `radial-gradient(ellipse at 50% 50%, ${glowShadow}20 0%, transparent 70%)`
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 rounded-2xl opacity-5",
                  style: {
                    backgroundImage: `
              linear-gradient(${glowColor}80 1px, transparent 1px),
              linear-gradient(90deg, ${glowColor}80 1px, transparent 1px)
            `,
                    backgroundSize: "20px 20px"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-display font-semibold tracking-[0.3em] uppercase",
                    style: { color: `${glowColor}80` },
                    children: "FloatTime"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "w-1.5 h-1.5 rounded-full",
                    style: { background: glowColor },
                    animate: { opacity: [0.3, 1, 0.3] },
                    transition: {
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.4
                    }
                  },
                  i
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center gap-1 sm:gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LedDigit, { char: hours[0], glowColor }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(LedDigit, { char: hours[1], glowColor }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    className: "text-4xl sm:text-6xl font-bold mb-1",
                    style: { color: glowColor },
                    animate: { opacity: [1, 0.2, 1] },
                    transition: { duration: 1, repeat: Number.POSITIVE_INFINITY },
                    children: ":"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(LedDigit, { char: minutes[0], glowColor }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(LedDigit, { char: minutes[1], glowColor }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    className: "text-4xl sm:text-6xl font-bold mb-1",
                    style: { color: glowColor },
                    animate: { opacity: [1, 0.2, 1] },
                    transition: { duration: 1, repeat: Number.POSITIVE_INFINITY },
                    children: ":"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(LedDigit, { char: seconds[0], glowColor }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(LedDigit, { char: seconds[1], glowColor })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "relative z-10 text-center mt-3 text-sm font-display tracking-widest uppercase",
                  style: { color: `${glowColor}60` },
                  children: dateStr
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "relative z-10 flex justify-center gap-3 mt-4 pt-4",
                  style: { borderTop: `1px solid ${glowColor}15` },
                  children: ["3D LED", "WIFI SYNC", "ADAPTIVE"].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-display tracking-widest",
                      style: { color: `${glowColor}40` },
                      children: tag
                    },
                    tag
                  ))
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-4/5 h-4 mt-2 rounded-full blur-xl",
            style: { background: `${glowShadow}30` }
          }
        )
      ]
    },
    colorOption.value
  );
}
function ColorSelector({
  options,
  selected,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: options.map((option) => {
    const isSelected = selected === option.value;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        type: "button",
        onClick: () => onChange(option.value),
        "data-ocid": `color-selector.${option.value.toLowerCase()}`,
        className: "relative flex flex-col items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.97 },
        children: [
          option.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-2 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "default",
              className: "text-[9px] px-1.5 py-0 font-display tracking-wider bg-primary text-primary-foreground",
              children: "POPULAR"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center overflow-hidden transition-smooth",
              style: {
                background: "linear-gradient(135deg, oklch(0.10 0 0), oklch(0.07 0 0))",
                border: isSelected ? `2px solid ${option.hex}` : "2px solid oklch(0.25 0 0)",
                boxShadow: isSelected ? `0 0 16px ${option.glow}, 0 0 32px ${option.glow}60` : "none"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full",
                    style: {
                      background: option.hex,
                      boxShadow: `0 0 12px ${option.glow}, 0 0 24px ${option.glow}`
                    },
                    animate: isSelected ? { scale: [1, 1.1, 1] } : { scale: 1 },
                    transition: {
                      duration: 1.5,
                      repeat: isSelected ? Number.POSITIVE_INFINITY : 0
                    }
                  }
                ),
                isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "absolute inset-0 rounded-xl",
                    style: {
                      background: `radial-gradient(ellipse at 50% 50%, ${option.hex}15 0%, transparent 70%)`
                    },
                    initial: { opacity: 0 },
                    animate: { opacity: 1 }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs font-display font-semibold tracking-widest uppercase transition-smooth",
              style: {
                color: isSelected ? option.hex : "oklch(0.55 0 0)"
              },
              children: option.label
            }
          )
        ]
      },
      option.value
    );
  }) });
}
const FEATURES = [
  {
    icon: "⚡",
    title: "3D Holographic LED",
    desc: "Edge-to-edge floating LED digits that create a stunning depth illusion."
  },
  {
    icon: "📡",
    title: "WiFi App Sync",
    desc: "Auto-syncs time via internet. Set alarms and brightness from your phone."
  },
  {
    icon: "🌈",
    title: "4 Glow Colors",
    desc: "Choose White, Blue, Red, or Green. Match your room's vibe perfectly."
  },
  {
    icon: "🔔",
    title: "Smart Alarm",
    desc: "Gentle wake-up glow alarm, grows from dim to full brightness."
  }
];
function Home() {
  const [selectedColor, setSelectedColor] = reactExports.useState("Green");
  const productRef = reactExports.useRef(null);
  const colorOption = reactExports.useMemo(
    () => COLOR_OPTIONS.find((c) => c.value === selectedColor) ?? COLOR_OPTIONS[0],
    [selectedColor]
  );
  const scrollToProduct = reactExports.useCallback(() => {
    var _a;
    (_a = productRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[90vh] flex items-center overflow-hidden",
        style: {
          background: "linear-gradient(160deg, oklch(0.09 0.02 262) 0%, oklch(0.06 0 0) 60%, oklch(0.08 0.01 262) 100%)"
        },
        "data-ocid": "hero.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 80% 60% at 60% 40%, oklch(0.65 0.21 262 / 0.08) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.03] pointer-events-none",
              style: {
                backgroundImage: "linear-gradient(oklch(0.65 0.21 262) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.21 262) 1px, transparent 1px)",
                backgroundSize: "60px 60px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "flex flex-col gap-6 max-w-xl",
                initial: { opacity: 0, x: -40 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.7, ease: "easeOut" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        className: "w-2 h-2 rounded-full bg-accent",
                        animate: { scale: [1, 1.4, 1], opacity: [1, 0.5, 1] },
                        transition: { duration: 2, repeat: Number.POSITIVE_INFINITY }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-display font-semibold tracking-[0.25em] uppercase text-accent", children: "The Future of Time Is Here" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight", children: [
                    "The Future",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "of ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-glow-accent", children: "Timekeeping" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base sm:text-lg text-muted-foreground leading-relaxed", children: [
                    "Meet the",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "FloatTime 3D LED Clock" }),
                    " ",
                    "— sleek floating LED digits, four stunning glow colors, and WiFi sync built in. Modern design for your home or office."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        onClick: scrollToProduct,
                        "data-ocid": "hero.cta_button",
                        size: "lg",
                        className: "font-display font-semibold tracking-wide h-12 px-8 transition-smooth",
                        style: {
                          background: "linear-gradient(135deg, oklch(0.55 0.21 262), oklch(0.65 0.21 262))",
                          boxShadow: "0 0 24px oklch(0.65 0.21 262 / 0.45)",
                          color: "oklch(0.08 0 0)"
                        },
                        children: "Order Now — $12.99"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        variant: "outline",
                        size: "lg",
                        onClick: scrollToProduct,
                        "data-ocid": "hero.secondary_button",
                        className: "font-display font-semibold h-12 px-8 border-border hover:border-accent transition-smooth",
                        children: "See Colors"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-2 pt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: "text-xs font-display tracking-wider font-semibold px-3 py-1",
                        style: {
                          background: "oklch(0.65 0.21 262 / 0.15)",
                          color: "oklch(0.75 0.18 262)",
                          border: "1px solid oklch(0.65 0.21 262 / 0.3)"
                        },
                        children: "FREE Shipping"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-display", children: "Apple Pay · Google Pay · Card" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "relative flex items-center justify-center",
                initial: { opacity: 0, scale: 0.85 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0 rounded-3xl blur-3xl",
                      style: {
                        background: "radial-gradient(ellipse, oklch(0.65 0.21 262 / 0.25) 0%, transparent 70%)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "/assets/generated/floattime-hero-clock.dim_1200x800.jpg",
                      alt: "FloatTime 3D LED floating clock",
                      className: "relative z-10 w-full max-w-lg rounded-2xl",
                      style: {
                        boxShadow: "0 0 60px oklch(0.65 0.21 262 / 0.2), 0 20px 60px oklch(0 0 0 / 0.5)"
                      }
                    }
                  )
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              type: "button",
              onClick: scrollToProduct,
              className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-accent transition-smooth cursor-pointer",
              animate: { y: [0, 6, 0] },
              transition: { duration: 1.8, repeat: Number.POSITIVE_INFINITY },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-display tracking-widest uppercase", children: "Explore" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    width: "16",
                    height: "20",
                    viewBox: "0 0 16 20",
                    fill: "none",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M8 0v16M1 9l7 7 7-7",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                      }
                    )
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        ref: productRef,
        id: "product",
        className: "py-20 sm:py-28",
        style: { background: "oklch(0.07 0 0)" },
        "data-ocid": "product.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-14",
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display font-semibold tracking-[0.3em] uppercase text-accent mb-3", children: "FloatTime 3D LED Clock" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4", children: "Select Your Glow" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md mx-auto", children: "Pick the LED color that matches your space. Each glow mode is fully adjustable in brightness." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "flex flex-col items-center gap-8",
                initial: { opacity: 0, x: -24 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.6 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ClockDisplay, { color: selectedColor, colorOption }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "text-center px-6 py-2 rounded-full text-sm font-display font-semibold tracking-wide",
                      style: {
                        color: colorOption.hex,
                        background: `${colorOption.hex}12`,
                        border: `1px solid ${colorOption.hex}30`
                      },
                      children: [
                        "Live preview — ",
                        colorOption.label,
                        " glow"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "flex flex-col gap-8",
                initial: { opacity: 0, x: 24 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: 0.1 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-2xl p-6",
                      style: {
                        background: "oklch(0.10 0 0)",
                        border: "1px solid oklch(0.20 0 0)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5", children: "Select Your Glow:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ColorSelector,
                          {
                            options: COLOR_OPTIONS,
                            selected: selectedColor,
                            onChange: setSelectedColor
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-2xl p-6 flex flex-col gap-4",
                      style: {
                        background: "oklch(0.10 0 0)",
                        border: "1px solid oklch(0.20 0 0)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-5xl font-display font-bold",
                              style: {
                                color: "oklch(0.96 0 0)",
                                textShadow: "0 0 30px oklch(0.65 0.21 262 / 0.3)"
                              },
                              children: "$12.99"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              "data-ocid": "product.free_shipping_badge",
                              className: "text-xs font-display font-semibold tracking-wider px-3 py-1",
                              style: {
                                background: "oklch(0.55 0.17 145 / 0.2)",
                                color: "oklch(0.75 0.18 145)",
                                border: "1px solid oklch(0.55 0.17 145 / 0.4)"
                              },
                              children: "FREE Shipping"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-display", children: "Accepted:" }),
                          ["Apple Pay", "Google Pay", "Visa", "Mastercard"].map(
                            (m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "text-xs font-display font-semibold px-2.5 py-1 rounded-lg",
                                style: {
                                  background: "oklch(0.16 0 0)",
                                  color: "oklch(0.65 0 0)",
                                  border: "1px solid oklch(0.26 0 0)"
                                },
                                children: m
                              },
                              m
                            )
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "flex flex-wrap gap-4 pt-3",
                            style: { borderTop: "1px solid oklch(0.18 0 0)" },
                            children: [
                              "✓ Guaranteed Delivery",
                              "✓ 30-Day Returns",
                              "✓ 24/7 Support"
                            ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "text-xs text-muted-foreground font-display",
                                children: t
                              },
                              t
                            ))
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 sm:py-28",
        style: {
          background: "linear-gradient(180deg, oklch(0.07 0 0) 0%, oklch(0.09 0.01 262) 100%)"
        },
        "data-ocid": "features.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-14",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display font-semibold tracking-[0.3em] uppercase text-accent mb-3", children: "Why FloatTime" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-display font-bold tracking-tight", children: "Built Different" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: FEATURES.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "rounded-2xl p-6 flex flex-col gap-3 glass-effect hover:border-accent/30 transition-smooth",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: i * 0.1 },
              "data-ocid": `features.card.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: f.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-display font-semibold text-foreground", children: f.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: f.desc })
              ]
            },
            f.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "checkout",
        className: "py-20 sm:py-28",
        style: { background: "oklch(0.08 0 0)" },
        "data-ocid": "checkout.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-12",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display font-semibold tracking-[0.3em] uppercase text-accent mb-3", children: "Ready to Order" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-display font-bold tracking-tight mb-3", children: "Ship It to Your Door" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Free global shipping · Ships in 2–5 business days" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckoutForm,
            {
              selectedColor,
              colorOption
            }
          )
        ] })
      }
    )
  ] });
}
export {
  Home as default
};
