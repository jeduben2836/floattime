import { al as useSearch, j as jsxRuntimeExports, L as Link, B as Button } from "./index-Cu8MRT0L.js";
import { m as motion } from "./proxy-Du3xhkon.js";
import { C as CircleCheck, P as Package } from "./package-D3rXGHP6.js";
function PaymentSuccess() {
  const search = useSearch({ strict: false });
  const orderId = search.order_id ?? null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-ocid": "payment_success.page",
      className: "min-h-[calc(100vh-4rem)] flex items-center justify-center px-4",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "w-full max-w-md text-center",
          initial: { opacity: 0, scale: 0.92 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5, ease: "easeOut" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "w-20 h-20 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_oklch(var(--accent)/0.25)]",
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: {
                  delay: 0.2,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10 text-accent" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground mb-2", children: "Payment Successful!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base mb-8", children: "Your FloatTime 3D LED Clock is on its way. You'll receive a confirmation email shortly." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-effect rounded-2xl p-6 mb-8 text-left space-y-3", children: [
              orderId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "Order ID" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    "data-ocid": "payment_success.order_id",
                    className: "font-mono text-sm text-accent",
                    children: [
                      "#",
                      orderId.slice(0, 12)
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "Shipping" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-semibold text-sm", children: "FREE" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "Estimated Delivery" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground text-sm", children: "5–7 Business Days" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
              orderId ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/order-tracking/$orderId", params: { orderId }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  "data-ocid": "payment_success.track_order_button",
                  className: "w-full bg-gradient-accent text-primary-foreground hover:opacity-90 transition-smooth font-display",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 mr-2" }),
                    "Track My Order"
                  ]
                }
              ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  "data-ocid": "payment_success.no_order_id_message",
                  className: "text-center text-sm text-muted-foreground",
                  children: "To track your order, check your confirmation email for the tracking link."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  "data-ocid": "payment_success.back_home_button",
                  className: "w-full border-border hover:border-accent/50 transition-smooth",
                  children: "Back to Home"
                }
              ) })
            ] })
          ]
        }
      )
    }
  );
}
export {
  PaymentSuccess as default
};
