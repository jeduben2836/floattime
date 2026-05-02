import { SiTiktok } from "react-icons/si";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="bg-card border-t border-border/40 mt-auto"
      data-ocid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-display font-bold text-lg text-foreground">
                Float<span className="text-glow-accent">Time</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              The future of timekeeping. Sleek 3D LED clocks with floating
              displays and customizable glow.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Follow Us
            </h3>
            <a
              href="https://www.tiktok.com/@float.time"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-ocid="footer.tiktok_link"
            >
              <SiTiktok size={16} />
              @float.time
            </a>
            <div className="mt-3 text-sm text-muted-foreground">
              <a
                href="mailto:FloatTimeClocks@gmail.com"
                className="hover:text-foreground transition-colors duration-200"
                data-ocid="footer.email_link"
              >
                FloatTimeClocks@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} FloatTime. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200 underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
