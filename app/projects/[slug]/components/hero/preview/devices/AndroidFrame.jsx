"use client";

import { motion } from "framer-motion";

export default function AndroidFrame({ children }) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
      style={{
        transform: "perspective(1600px) rotateY(-12deg) rotateX(4deg)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          -z-10
          rounded-[42px]
          bg-[#16f2b3]/20
          blur-[45px]
        "
      />

      {/* Device */}

      <div
        className="
          relative
          h-[420px]
          w-[205px]
          rounded-[38px]
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
            rounded-[38px]
            bg-gradient-to-br
            from-white/10
            via-transparent
            to-transparent
          "
        />

        {/* Camera */}

        <div
          className="
            absolute
            left-1/2
            top-4
            z-20
            h-4
            w-4
            -translate-x-1/2
            rounded-full
            bg-black
            ring-2
            ring-[#1a1d24]
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-1.5
              w-1.5
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#20252d]
            "
          />
        </div>

        {/* Screen */}

        <div
          className="
            h-full
            overflow-hidden
            rounded-[32px]
            bg-[#0d1117]
          "
        >
          {children}
        </div>

        {/* Bottom Shadow */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-2
            left-6
            right-6
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
