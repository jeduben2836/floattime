# FloatTime: Design Brief

**Tone:** Retro-futuristic premium tech showcase. Confident, clean, electric.
**Purpose:** E-commerce hero + checkout for 3D LED clock. Dark background with blue/white accents. High-tech, professional, aspirational.
**Differentiation:** LED-inspired typography & accents. Product color selector as hero centerpiece. Glass-effect card treatments. Minimal rounding, sharp edges.

## Palette (Dark Mode)

| Token | OKLCH | Usage |
|-------|-------|-------|
| background | 0.08 0 0 | Deep navy/black page |
| foreground | 0.96 0 0 | Crisp white text |
| card | 0.12 0 0 | Product card, elevated surfaces |
| primary | 0.65 0.21 262 | Electric cyan-blue CTAs, accents |
| secondary | 0.18 0 0 | Subtle dividers, muted surfaces |
| accent | 0.65 0.21 262 | Same as primary, reinforces color |
| destructive | 0.65 0.19 22 | Error states, warnings |

## Typography

- **Display:** Space Grotesk (bold, geometric, futuristic)
- **Body:** Figtree (modern, open, readable)
- **Mono:** System monospace (tracking info, order IDs)
- **Hierarchy:** H1 (56px), H2 (40px), Body (16px), Small (14px)

## Structural Zones

| Zone | Treatment | Purpose |
|------|-----------|----------|
| Header | bg-card, border-b (primary/20) | Navigation, logo, sticky |
| Hero | bg-background, gradient accent corners | Full-width product showcase |
| Product Grid | bg-background, cards with glass-effect | 4 color options (White, Blue, Red, Green) |
| Pricing/CTA | bg-card, primary-accent button | $12.99, free shipping badge |
| Checkout | bg-card overlay, Stripe integration | Order form, payment |
| Footer | bg-card, border-t | Contact, social, links |

## Spacing & Rhythm

- Gap: 16px (base), 24px (sections), 32px (major breaks)
- Padding: 16px (cards), 24px (sections), 32px (page edges)
- Border radius: 0px (cards), 4px (inputs), 8px (buttons)

## Component Patterns

- **Buttons:** Primary (cyan bg, black text), Secondary (border only), Destructive (red)
- **Cards:** No shadow, subtle border, dark background
- **Color Selector:** Large swatches (100px), animated border highlight on selection
- **Price Badge:** white bg, dark text, bold, positioned top-right
- **Badges:** Inline, small, muted background, colored text

## Motion

- Entrance: Fade-in + slide-up on page load (200ms)
- Color selector: Border glow on hover (300ms ease-out)
- Buttons: Opacity + subtle scale on hover/active (200ms)
- Checkout: Slide-up modal, backdrop blur

## Constraints

- No gradients except accent highlights and button states
- No transparency except glass-effect cards (0.5 opacity + blur)
- OKLCH color system, no hex/rgb values
- Product colors: White (0.96 0 0), Blue (0.65 0.21 262), Red (0.65 0.19 22), Green (0.6 0.18 140)

## Signature Detail

LED-inspired glow text on hero headline (`text-glow-accent` utility). Subtle 20px blur shadow in accent color creates "neon sign" effect without garish overuse.
