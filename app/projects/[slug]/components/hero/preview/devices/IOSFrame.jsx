"use client";

import { motion } from "framer-motion";

export default function IOSFrame({
  children,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [1, -1, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.8,
      }}
      className="relative"
      style={{
        transform:
          "perspective(1600px) rotateY(12deg) rotateX(4deg)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          -z-10
          rounded-[48px]
          bg-sky-500/20
          blur-[50px]
        "
      />

      {/* Body */}

      <div
        className="
          relative
          h-[420px]
          w-[205px]
          rounded-[44px]
          border
          border-white/10
          bg-[#05070b]
          p-[6px]
          shadow-[0_40px_80px_rgba(0,0,0,.45)]
        "
      >
        {/* Reflection */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[44px]
            bg-gradient-to-br
            from-white/10
            via-transparent
            to-transparent
          "
        />

        {/* Dynamic Island */}

        <div
          className="
            absolute
            left-1/2
            top-3
            z-20
            h-7
            w-24
            -translate-x-1/2
            rounded-full
            bg-black
            ring-1
            ring-white/10
          "
        >
          <div
            className="
              absolute
              right-3
              top-1/2
              h-2
              w-2
              -translate-y-1/2
              rounded-full
              bg-[#1f2937]
            "
          />
        </div>

        {/* Screen */}

        <div
          className="
            h-full
            overflow-hidden
            rounded-[38px]
            bg-[#0d1117]
          "
        >
          {children}
        </div>

        {/* Bottom reflection */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-2
            left-8
            right-8
            h-5
            rounded-full
            bg-black/40
            blur-xl
          "
        />
      </div>
    </motion.div>
  );
}