"use client";

import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <div
      className="
        relative
        flex
        h-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-[#0d1117]
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-56
          w-56
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#16f2b3]/10
          blur-[90px]
        "
      />

      {/* Logo */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [1, 0.9, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-3xl
          border
          border-[#16f2b3]/30
          bg-[#16f2b3]/10
          shadow-[0_0_40px_rgba(22,242,179,.18)]
        "
      >
        <span
          className="
            text-4xl
            font-black
            text-[#16f2b3]
          "
        >
          F
        </span>
      </motion.div>

      {/* Title */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.15,
        }}
        className="
          mt-7
          text-xl
          font-bold
          tracking-tight
          text-white
        "
      >
        FlowTest Studio
      </motion.h2>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
        }}
        className="
          mt-2
          text-xs
          tracking-wide
          text-gray-400
        "
      >
        Visual Mobile Automation
      </motion.p>

      {/* Progress */}

      <div className="mt-10 w-44">
        <div
          className="
            h-1.5
            overflow-hidden
            rounded-full
            bg-white/10
          "
        >
          <motion.div
            initial={{
              width: "0%",
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
            className="
              h-full
              rounded-full
              bg-[#16f2b3]
            "
          />
        </div>

        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
          }}
          className="
            mt-3
            text-center
            text-[11px]
            text-gray-500
          "
        >
          Initializing workspace...
        </motion.p>
      </div>
    </div>
  );
}
