import type { Color, ColorOption } from "@/types";
import { motion } from "motion/react";
import React from "react";

interface ClockDisplayProps {
  color: Color;
  colorOption: ColorOption;
}

// Real-time clock hook
function useCurrentTime() {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return time;
}

// LED-style digit segments (7-segment display)
function LedDigit({ char, glowColor }: { char: string; glowColor: string }) {
  return (
    <span
      className="font-mono text-5xl sm:text-7xl font-bold tracking-widest tabular-nums"
      style={{
        color: glowColor,
        textShadow: `0 0 10px ${glowColor}, 0 0 25px ${glowColor}80, 0 0 50px ${glowColor}40`,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {char}
    </span>
  );
}

export function ClockDisplay({ colorOption }: ClockDisplayProps) {
  const time = useCurrentTime();
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const dateStr = time.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const glowColor = colorOption.hex;
  const glowShadow = colorOption.glow;

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      key={colorOption.value}
    >
      {/* Clock body */}
      <div
        className="relative rounded-2xl p-8 sm:p-12 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.10 0 0) 0%, oklch(0.06 0 0) 100%)",
          border: `1px solid ${glowColor}30`,
          boxShadow: `0 0 40px ${glowShadow}, 0 0 80px ${glowShadow}40, inset 0 1px 0 ${glowColor}15`,
        }}
      >
        {/* Ambient glow orb behind clock */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${glowShadow}20 0%, transparent 70%)`,
          }}
        />

        {/* Grid lines overlay */}
        <div
          className="absolute inset-0 rounded-2xl opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(${glowColor}80 1px, transparent 1px),
              linear-gradient(90deg, ${glowColor}80 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Top label */}
        <div className="relative z-10 flex items-center justify-between mb-4">
          <span
            className="text-xs font-display font-semibold tracking-[0.3em] uppercase"
            style={{ color: `${glowColor}80` }}
          >
            FloatTime
          </span>
          {/* Indicator dots */}
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: glowColor }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>
        </div>

        {/* Time display */}
        <div className="relative z-10 flex items-center gap-1 sm:gap-2">
          <LedDigit char={hours[0]} glowColor={glowColor} />
          <LedDigit char={hours[1]} glowColor={glowColor} />
          <motion.span
            className="text-4xl sm:text-6xl font-bold mb-1"
            style={{ color: glowColor }}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            :
          </motion.span>
          <LedDigit char={minutes[0]} glowColor={glowColor} />
          <LedDigit char={minutes[1]} glowColor={glowColor} />
          <motion.span
            className="text-4xl sm:text-6xl font-bold mb-1"
            style={{ color: glowColor }}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            :
          </motion.span>
          <LedDigit char={seconds[0]} glowColor={glowColor} />
          <LedDigit char={seconds[1]} glowColor={glowColor} />
        </div>

        {/* Date */}
        <div
          className="relative z-10 text-center mt-3 text-sm font-display tracking-widest uppercase"
          style={{ color: `${glowColor}60` }}
        >
          {dateStr}
        </div>

        {/* Bottom feature tags */}
        <div
          className="relative z-10 flex justify-center gap-3 mt-4 pt-4"
          style={{ borderTop: `1px solid ${glowColor}15` }}
        >
          {["3D LED", "WIFI SYNC", "ADAPTIVE"].map((tag) => (
            <span
              key={tag}
              className="text-xs font-display tracking-widest"
              style={{ color: `${glowColor}40` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Floating shadow beneath */}
      <div
        className="w-4/5 h-4 mt-2 rounded-full blur-xl"
        style={{ background: `${glowShadow}30` }}
      />
    </motion.div>
  );
}
