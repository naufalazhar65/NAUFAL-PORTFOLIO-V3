"use client";

import { motion } from "framer-motion";

export default function BrowserFrame({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        overflow-hidden
        rounded-[20px]
        border
        border-white/10
        bg-[#111827]
        shadow-[0_30px_70px_rgba(0,0,0,.4)]
        sm:rounded-[28px]
        sm:shadow-[0_40px_80px_rgba(0,0,0,.45)]
      "
    >
      {/* Browser Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          bg-[#161b22]
          px-4
          py-3
          sm:px-6
          sm:py-4
        "
      >
        {/* Traffic Lights */}

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500 sm:h-3 sm:w-3" />

          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />

          <span className="h-2.5 w-2.5 rounded-full bg-green-500 sm:h-3 sm:w-3" />
        </div>

        {/* Address Bar */}

        <div
          className="
            mx-3
            min-w-0
            max-w-[220px]
            truncate
            rounded-full
            border
            border-white/10
            bg-white/5
            px-3
            py-1.5
            text-center
            text-xs
            text-gray-400
            sm:mx-6
            sm:max-w-none
            sm:px-5
            sm:py-2
            sm:text-sm
          "
        >
          flowtest-studio.demo
        </div>

        {/* Spacer */}

        <div className="w-6 shrink-0 sm:w-20" />
      </div>

      {/* Browser Content */}

      <div className="bg-[#0d1117]">
        {children}
      </div>
    </motion.div>
  );
}