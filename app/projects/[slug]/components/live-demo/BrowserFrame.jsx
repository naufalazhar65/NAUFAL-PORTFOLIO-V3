"use client";

import { motion } from "framer-motion";

export default function BrowserFrame({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 32,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        overflow-hidden
        border
        border-white/[0.08]
        bg-[#050505]
        shadow-[0_35px_100px_rgba(0,0,0,.45)]
      "
    >
      {/* =========================
          BROWSER HEADER
      ========================= */}

      <div
        className="
          grid
          h-12
          grid-cols-[1fr_auto_1fr]
          items-center
          border-b
          border-white/[0.08]
          bg-[#080808]
          px-4
          sm:px-5
        "
      >
        {/* Traffic Lights */}

        <div className="flex items-center gap-[6px]">
          <span className="h-[7px] w-[7px] rounded-full bg-[#ff5f57]" />
          <span className="h-[7px] w-[7px] rounded-full bg-[#febc2e]" />
          <span className="h-[7px] w-[7px] rounded-full bg-[#28c840]" />
        </div>

        {/* Address */}

        <span
          className="
            max-w-[220px]
            truncate
            text-[10px]
            font-medium
            tracking-[0.02em]
            text-gray-600
            sm:max-w-none
          "
        >
          flowtest-studio.demo
        </span>

        {/* Right */}

        <div className="justify-self-end">
          <span
            className="
              hidden
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-gray-700
              sm:block
            "
          >
            Live Preview
          </span>
        </div>
      </div>

      {/* =========================
          BROWSER CONTENT
      ========================= */}

      <div className="bg-[#0d1117]">
        {children}
      </div>
    </motion.div>
  );
}