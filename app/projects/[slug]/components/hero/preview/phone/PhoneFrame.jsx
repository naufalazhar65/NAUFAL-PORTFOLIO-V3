"use client";

import { motion } from "framer-motion";

export default function PhoneFrame({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
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
      className="flex justify-center"
    >
      <div className="relative">
        {/* Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -z-10
            h-72
            w-72
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#16f2b3]/20
            blur-[90px]
          "
        />

        {/* Phone */}

        <div
          className="
            relative
            h-[720px]
            w-[340px]
            overflow-hidden
            rounded-[42px]
            border
            border-white/10
            bg-[#090c13]
            shadow-[0_35px_100px_rgba(0,0,0,.55)]
          "
        >
          {/* Frame */}

          <div
            className="
              absolute
              inset-[2px]
              rounded-[40px]
              border
              border-white/5
            "
          />

          {/* Dynamic Island */}

          <div
            className="
              absolute
              left-1/2
              top-4
              z-30
              h-7
              w-32
              -translate-x-1/2
              rounded-full
              bg-black
              shadow-inner
            "
          />

          {/* Screen */}

          <div
            className="
              relative
              flex
              h-full
              flex-col
              overflow-hidden
              rounded-[40px]
              bg-[#0d1117]
              pt-12
            "
          >
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
