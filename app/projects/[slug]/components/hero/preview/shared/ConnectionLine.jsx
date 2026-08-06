"use client";

import { motion } from "framer-motion";

export default function ConnectionLine({
  direction = "vertical",
  active = true,
  length,
}) {
  const isVertical = direction === "vertical";

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        width: isVertical ? 2 : length ?? "100%",
        height: isVertical ? length ?? 80 : 2,
      }}
    >
      {/* Base */}

      <div
        className={`
          absolute
          rounded-full

          ${
            isVertical
              ? "h-full w-px"
              : "h-px w-full"
          }

          ${
            active
              ? "bg-white/15"
              : "bg-white/5"
          }
        `}
      />

      {/* Glow */}

      {active && (
        <motion.div
          className={`
            absolute
            rounded-full

            ${
              isVertical
                ? "w-[4px]"
                : "h-[4px]"
            }
          `}
          style={{
            background: "#16f2b3",
            boxShadow:
              "0 0 16px rgba(22,242,179,.8)",
          }}
          animate={
            isVertical
              ? {
                  y: ["-50%", "50%"],
                }
              : {
                  x: ["-50%", "50%"],
                }
          }
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
}