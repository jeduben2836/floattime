import { Badge } from "@/components/ui/badge";
import type { Color, ColorOption } from "@/types";
import { motion } from "motion/react";

interface ColorSelectorProps {
  options: ColorOption[];
  selected: Color;
  onChange: (color: Color) => void;
}

export function ColorSelector({
  options,
  selected,
  onChange,
}: ColorSelectorProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const isSelected = selected === option.value;
        return (
          <motion.button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            data-ocid={`color-selector.${option.value.toLowerCase()}`}
            className="relative flex flex-col items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Popular badge */}
            {option.popular && (
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                <Badge
                  variant="default"
                  className="text-[9px] px-1.5 py-0 font-display tracking-wider bg-primary text-primary-foreground"
                >
                  POPULAR
                </Badge>
              </div>
            )}

            {/* Color swatch box */}
            <div
              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center overflow-hidden transition-smooth"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.10 0 0), oklch(0.07 0 0))",
                border: isSelected
                  ? `2px solid ${option.hex}`
                  : "2px solid oklch(0.25 0 0)",
                boxShadow: isSelected
                  ? `0 0 16px ${option.glow}, 0 0 32px ${option.glow}60`
                  : "none",
              }}
            >
              {/* Inner glow circle */}
              <motion.div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                style={{
                  background: option.hex,
                  boxShadow: `0 0 12px ${option.glow}, 0 0 24px ${option.glow}`,
                }}
                animate={isSelected ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: isSelected ? Number.POSITIVE_INFINITY : 0,
                }}
              />

              {/* Selected ring overlay */}
              {isSelected && (
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `radial-gradient(ellipse at 50% 50%, ${option.hex}15 0%, transparent 70%)`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}
            </div>

            {/* Label */}
            <span
              className="text-xs font-display font-semibold tracking-widest uppercase transition-smooth"
              style={{
                color: isSelected ? option.hex : "oklch(0.55 0 0)",
              }}
            >
              {option.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
