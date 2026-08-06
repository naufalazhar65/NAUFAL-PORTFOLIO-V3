"use client";

import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <div
      className="
        flex
        h-full
        flex-col
        items-center
        justify-center
        bg-[#0d1117]
      "
    >
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="text-5xl"
      >
        🚀
      </motion.div>

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
          delay: 0.2,
        }}
        className="mt-5 text-lg font-bold text-white"
      >
        FlowTest
      </motion.h2>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
        }}
        className="mt-2 text-xs tracking-wide text-gray-400"
      >
        Initializing...
      </motion.p>
    </div>
  );
}