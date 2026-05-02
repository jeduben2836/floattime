import { b as createLucideIcon, d as useParams, j as jsxRuntimeExports, L as Link, B as Button, e as Skeleton } from "./index-Cu8MRT0L.js";
import { a as useGetOrderById, g as getOrderStatusLabel, B as Badge, C as COLOR_OPTIONS } from "./index-Dl49g4bq.js";
import { m as motion } from "./proxy-Du3xhkon.js";
import { P as Package, C as CircleCheck } from "./package-D3rXGHP6.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode);
const STEPS = [
  { key: "Pending", label: "Order Placed", Icon: Package },
  { key: "Shipped", label: "Shipped", Icon: Truck },
  { key: "Delivered", label: "Delivered", Icon: CircleCheck }
];
const STATUS_STEP_INDEX = {
  Pending: 0,
  Processing: 0,
  Shipped: 1,
  Delivered: 2,
  Cancelled: -1
};
function StatusStepper({ status }) {
  const label = getOrderStatusLabel(status);
  const currentStep = STATUS_STEP_INDEX[label] ?? 0;
  const isCancelled = label === "Cancelled";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-ocid": "order.status_stepper",
      className: "flex items-start gap-0 w-full",
      children: STEPS.map((step, i) => {
        const isCompleted = !isCancelled && i < currentStep;
        const isActive = !isCancelled && i === currentStep;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center w-full", children: [
            i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `flex-1 h-0.5 transition-smooth ${isCompleted ? "bg-accent" : "bg-border"}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-10 h-10 rounded-full flex items-center justify-center border-2 transition-smooth flex-shrink-0 ${isActive ? "border-accent bg-accent/20 text-accent shadow-[0_0_16px_oklch(var(--accent)/0.4)]" : isCompleted ? "border-accent bg-accent/10 text-accent" : "border-border bg-card/50 text-muted-foreground"}`,
                children: isCompleted ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(step.Icon, { className: "w-5 h-5" })
              }
            ),
            i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `flex-1 h-0.5 transition-smooth ${isCompleted ? "bg-accent" : "bg-border"}`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `mt-2 text-xs font-display font-medium text-center transition-smooth ${isActive ? "text-accent" : isCompleted ? "text-foreground" : "text-muted-foreground"}`,
              children: step.label
            }
          )
        ] }, step.key);
      })
    }
  );
}
function ColorDot({ color }) {
  const option = COLOR_OPTIONS.find((c) => c.value === color);
  if (!option) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: color });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "w-3 h-3 rounded-full inline-block flex-shrink-0",
        style: { background: option.hex, boxShadow: `0 0 6px ${option.glow}` }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: option.label })
  ] });
}
function OrderSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-56" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full rounded-2xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 w-full rounded-2xl" })
  ] });
}
function OrderTracking() {
  const { orderId } = useParams({ from: "/order-tracking/$orderId" });
  const { data: order, isLoading, isError } = useGetOrderById(orderId);
  const statusLabel = order ? getOrderStatusLabel(order.status) : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-ocid": "order_tracking.page",
      className: "min-h-[calc(100vh-4rem)] flex items-start justify-center py-16 px-4",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "w-full max-w-xl",
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, ease: "easeOut" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent font-display text-xs tracking-widest uppercase mb-2", children: "Order Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground", children: "Track Your Order" })
            ] }),
            isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(OrderSkeleton, {}),
            isError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "order_tracking.error_state",
                className: "glass-effect rounded-2xl p-8 text-center border border-destructive/30",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive font-display font-semibold text-lg mb-2", children: "Something went wrong" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "We couldn't fetch your order. Please try again." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      "data-ocid": "order_tracking.back_home_link",
                      children: "Back to Home"
                    }
                  ) })
                ]
              }
            ),
            !isLoading && !isError && !order && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "order_tracking.empty_state",
                className: "glass-effect rounded-2xl p-10 text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-8 h-8 text-muted-foreground" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-semibold text-foreground mb-2", children: "Order Not Found" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mb-6", children: [
                    "We couldn't find an order with ID",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-accent", children: orderId }),
                    ". Double-check your confirmation email and try again."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": "order_tracking.go_home_button",
                      className: "bg-gradient-accent text-primary-foreground hover:opacity-90 transition-smooth",
                      children: "Back to Home"
                    }
                  ) })
                ]
              }
            ),
            !isLoading && !isError && order && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  "data-ocid": "order_tracking.status_badge",
                  variant: "outline",
                  className: `font-display text-xs tracking-wide px-3 py-1 ${statusLabel === "Delivered" ? "bg-primary/20 text-primary border-primary/30" : statusLabel === "Shipped" ? "bg-accent/20 text-accent border-accent/30" : statusLabel === "Cancelled" ? "bg-destructive/20 text-destructive border-destructive/30" : "bg-muted text-muted-foreground border-border"}`,
                  children: statusLabel
                }
              ) }),
              statusLabel !== "Cancelled" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-effect rounded-2xl p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusStepper, { status: order.status }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-effect rounded-2xl p-6 border border-destructive/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive font-display font-semibold", children: "Order Cancelled" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "This order has been cancelled. Contact us if you have questions." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": "order_tracking.details_card",
                  className: "glass-effect rounded-2xl p-6 space-y-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground text-xs uppercase tracking-widest mb-3", children: "Order Details" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-border/50", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "Order ID" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            "data-ocid": "order_tracking.order_id",
                            className: "font-mono text-sm text-accent",
                            children: [
                              "#",
                              order.id.slice(0, 12)
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "Color" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ColorDot, { color: order.color })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "Price" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-semibold", children: [
                          "$",
                          (order.price / 100).toFixed(2)
                        ] })
                      ] }),
                      order.customerEmail && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "Email" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground text-sm", children: order.customerEmail })
                      ] }),
                      order.trackingNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "Tracking #" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-foreground", children: order.trackingNumber })
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  "data-ocid": "order_tracking.back_home_link",
                  className: "text-muted-foreground hover:text-foreground",
                  children: "← Back to Home"
                }
              ) }) })
            ] })
          ]
        }
      )
    }
  );
}
export {
  OrderTracking as default
};
