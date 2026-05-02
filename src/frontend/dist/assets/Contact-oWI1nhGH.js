import { b as createLucideIcon, j as jsxRuntimeExports, S as SiTiktok } from "./index-Cu8MRT0L.js";
import { m as motion } from "./proxy-Du3xhkon.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode);
const contactItems = [
  {
    id: "email",
    icon: Mail,
    iconBrand: null,
    label: "Email Us",
    value: "FloatTimeClocks@gmail.com",
    href: "mailto:FloatTimeClocks@gmail.com",
    description: "Send us a message anytime. We typically respond within 24 hours.",
    cta: "Send Email",
    ocid: "contact.email"
  },
  {
    id: "tiktok",
    icon: null,
    iconBrand: SiTiktok,
    label: "TikTok",
    value: "@float.time",
    href: "https://www.tiktok.com/@float.time",
    description: "Follow us for unboxings, product demos, and FloatTime content.",
    cta: "Visit Profile",
    ocid: "contact.tiktok"
  }
];
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[calc(100vh-8rem)] bg-background flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-20 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none",
          "aria-hidden": "true",
          style: {
            background: "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.65 0.21 262 / 0.12) 0%, transparent 70%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            className: "text-sm font-display font-semibold tracking-[0.2em] uppercase text-glow-accent mb-4",
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            children: "Get In Touch"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight",
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.55, delay: 0.08 },
            children: [
              "We're Here ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-glow-accent", children: "to Help" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            className: "text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed",
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.55, delay: 0.16 },
            children: "If you have any questions or need assistance, feel free to reach out to us. We love hearing from our FloatTime community."
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 pb-24 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: contactItems.map((item, index) => {
        const IconComponent = item.icon ?? item.iconBrand;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.a,
          {
            href: item.href,
            target: item.id === "tiktok" ? "_blank" : void 0,
            rel: item.id === "tiktok" ? "noopener noreferrer" : void 0,
            "data-ocid": item.ocid,
            className: "group block rounded-2xl glass-effect p-8 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10",
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.2 + index * 0.1 },
            whileHover: { y: -4 },
            style: {
              border: "1px solid oklch(0.65 0.21 262 / 0.15)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-smooth group-hover:scale-110",
                  style: {
                    background: "oklch(0.65 0.21 262 / 0.12)",
                    border: "1px solid oklch(0.65 0.21 262 / 0.25)"
                  },
                  children: IconComponent && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconComponent,
                    {
                      size: 26,
                      className: "text-glow-accent",
                      "aria-hidden": "true"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-1", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-bold text-foreground mb-3 break-all", children: item.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-6", children: item.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-glow-accent transition-smooth group-hover:gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.cta }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 14, "aria-hidden": "true" })
              ] })
            ]
          },
          item.id
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "mt-16 text-center",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.6, delay: 0.5 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm text-muted-foreground",
              style: {
                background: "oklch(0.12 0 0 / 0.8)",
                border: "1px solid oklch(0.65 0.21 262 / 0.12)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-2 h-2 rounded-full bg-accent animate-pulse",
                    "aria-hidden": "true"
                  }
                ),
                "Response time: within 24 hours"
              ]
            }
          )
        }
      )
    ] }) })
  ] });
}
export {
  Contact as default
};
