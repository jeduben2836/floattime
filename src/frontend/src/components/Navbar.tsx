import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-card/90 backdrop-blur-md border-b border-border/40 shadow-elevated"
      data-ocid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-ocid="navbar.logo_link"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-sm group-hover:bg-primary/30 transition-smooth" />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="relative z-10"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="8"
                  width="18"
                  height="10"
                  rx="1.5"
                  stroke="oklch(var(--primary))"
                  strokeWidth="1.5"
                />
                <path
                  d="M6 11h2.5M10 11h1M12.5 11h2.5M6 14h1.5M9 14h1M11.5 14h2M15 14h.5"
                  stroke="oklch(var(--primary))"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="19" cy="8" r="2" fill="oklch(var(--primary))" />
              </svg>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-foreground">
              Float<span className="text-glow-accent">Time</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Main navigation"
          >
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              activeProps={{ className: "text-sm font-medium text-foreground" }}
              data-ocid="navbar.home_link"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              activeProps={{ className: "text-sm font-medium text-foreground" }}
              data-ocid="navbar.contact_link"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" data-ocid="navbar.support_button">
              <Button
                variant="outline"
                size="sm"
                className="border-primary/40 text-primary hover:bg-primary/10 transition-smooth"
              >
                Support
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-ocid="navbar.mobile_menu_toggle"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            className="md:hidden py-4 border-t border-border/30 flex flex-col gap-3"
            aria-label="Mobile navigation"
            data-ocid="navbar.mobile_menu"
          >
            <Link
              to="/"
              className="px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
              data-ocid="navbar.mobile_home_link"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
              data-ocid="navbar.mobile_contact_link"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
