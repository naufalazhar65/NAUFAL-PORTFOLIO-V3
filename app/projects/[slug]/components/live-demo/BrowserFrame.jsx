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
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-[#111827]
        shadow-[0_40px_80px_rgba(0,0,0,.45)]
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
          px-6
          py-4
        "
      >
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />

          <span className="h-3 w-3 rounded-full bg-yellow-400" />

          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-5
            py-2
            text-sm
            text-gray-400
          "
        >
          flowtest-studio.demo
        </div>

        <div className="w-20" />
      </div>

      {/* Browser Content */}

      <div className="bg-[#0d1117]">{children}</div>
    </motion.div>
  );
}
