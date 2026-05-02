import { ExternalLink, Mail } from "lucide-react";
import { motion } from "motion/react";
import { SiTiktok } from "react-icons/si";

const contactItems = [
  {
    id: "email",
    icon: Mail,
    iconBrand: null,
    label: "Email Us",
    value: "FloatTimeClocks@gmail.com",
    href: "mailto:FloatTimeClocks@gmail.com",
    description:
      "Send us a message anytime. We typically respond within 24 hours.",
    cta: "Send Email",
    ocid: "contact.email",
  },
  {
    id: "tiktok",
    icon: null,
    iconBrand: SiTiktok,
    label: "TikTok",
    value: "@float.time",
    href: "https://www.tiktok.com/@float.time",
    description:
      "Follow us for unboxings, product demos, and FloatTime content.",
    cta: "Visit Profile",
    ocid: "contact.tiktok",
  },
] as const;

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.65 0.21 262 / 0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="text-sm font-display font-semibold tracking-[0.2em] uppercase text-glow-accent mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.p>
          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            We're Here <span className="text-glow-accent">to Help</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            If you have any questions or need assistance, feel free to reach out
            to us. We love hearing from our FloatTime community.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 pb-24 flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactItems.map((item, index) => {
              const IconComponent = item.icon ?? item.iconBrand;
              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target={item.id === "tiktok" ? "_blank" : undefined}
                  rel={item.id === "tiktok" ? "noopener noreferrer" : undefined}
                  data-ocid={item.ocid}
                  className="group block rounded-2xl glass-effect p-8 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  style={{
                    border: "1px solid oklch(0.65 0.21 262 / 0.15)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-smooth group-hover:scale-110"
                    style={{
                      background: "oklch(0.65 0.21 262 / 0.12)",
                      border: "1px solid oklch(0.65 0.21 262 / 0.25)",
                    }}
                  >
                    {IconComponent && (
                      <IconComponent
                        size={26}
                        className="text-glow-accent"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Label */}
                  <p className="font-display text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-1">
                    {item.label}
                  </p>

                  {/* Value */}
                  <p className="font-display text-xl font-bold text-foreground mb-3 break-all">
                    {item.value}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-glow-accent transition-smooth group-hover:gap-3">
                    <span>{item.cta}</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Divider + reassurance */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm text-muted-foreground"
              style={{
                background: "oklch(0.12 0 0 / 0.8)",
                border: "1px solid oklch(0.65 0.21 262 / 0.12)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-accent animate-pulse"
                aria-hidden="true"
              />
              Response time: within 24 hours
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
