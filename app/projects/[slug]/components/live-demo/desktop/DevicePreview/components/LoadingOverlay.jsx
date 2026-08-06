"use client";

import { motion } from "framer-motion";

export default function LoadingOverlay() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        absolute
        inset-0
        z-50
        flex
        flex-col
        items-center
        justify-center
        bg-black/70
        backdrop-blur-sm
      "
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          ease: "linear",
        }}
        className="
          h-8
          w-8
          rounded-full
          border-[3px]
          border-[#16f2b3]/30
          border-t-[#16f2b3]
        "
      />

      <p className="mt-4 text-xs font-medium tracking-wide text-white">
        Authenticating...
      </p>
    </motion.div>
  );
}
