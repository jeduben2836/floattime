import { b as createLucideIcon, j as jsxRuntimeExports, L as Link, B as Button } from "./index-Cu8MRT0L.js";
import { m as motion } from "./proxy-Du3xhkon.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
];
const ShoppingCart = createLucideIcon("shopping-cart", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
function PaymentFailure() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-ocid": "payment_failure.page",
      className: "min-h-[calc(100vh-4rem)] flex items-center justify-center px-4",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "w-full max-w-md text-center",
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, ease: "easeOut" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "w-20 h-20 rounded-full bg-destructive/20 border border-destructive/30 flex items-center justify-center mx-auto mb-6",
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: {
                  delay: 0.15,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-10 h-10 text-destructive" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground mb-2", children: "Payment Failed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base mb-8", children: "Your payment could not be processed. No charge was made to your account — please try again or use a different payment method." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "payment_failure.error_state",
                className: "glass-effect rounded-2xl p-6 mb-8 border border-destructive/20",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive/90 text-sm font-display font-medium mb-3", children: "What might have gone wrong:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-muted-foreground text-sm space-y-2 text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive/60 mt-0.5 flex-shrink-0", children: "•" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Insufficient funds or card declined" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive/60 mt-0.5 flex-shrink-0", children: "•" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Incorrect card details entered" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive/60 mt-0.5 flex-shrink-0", children: "•" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Payment session expired — please restart checkout" })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  "data-ocid": "payment_failure.try_again_button",
                  className: "w-full bg-gradient-accent text-primary-foreground hover:opacity-90 transition-smooth font-display",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 mr-2" }),
                    "Try Again"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  "data-ocid": "payment_failure.back_home_button",
                  className: "w-full border-border hover:border-accent/50 transition-smooth",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4 mr-2" }),
                    "Back to Shop"
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 text-muted-foreground text-xs", children: [
              "Need help?",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "mailto:FloatTimeClocks@gmail.com",
                  className: "text-accent hover:underline transition-smooth",
                  "data-ocid": "payment_failure.contact_link",
                  children: "Contact us"
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
export {
  PaymentFailure as default
};
