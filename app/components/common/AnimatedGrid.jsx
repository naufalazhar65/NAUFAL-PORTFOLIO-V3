"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">

      {/* Grid */}

      <motion.div
        animate={{
          backgroundPosition: [
            "0px 0px",
            "40px 40px",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          opacity-[0.05]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}

      <motion.div
        animate={{
          x: [-100, 120, -100],
          y: [-80, 60, -80],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#16f2b3]/10
          blur-[180px]
        "
      />

    </div>
  );
}