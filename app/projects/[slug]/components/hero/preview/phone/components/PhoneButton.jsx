"use client";

import { motion } from "framer-motion";
import TouchRipple from "./TouchRipple";

export default function PhoneButton({
  loading = false,
  ripple = false,
  children = "Login",
}) {
  return (
    <motion.button
      whileTap={{
        scale: 0.97,
      }}
      animate={{
        scale: loading ? [1, 0.985, 1] : 1,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
    relative
    overflow-hidden
    flex
    h-9
    w-full
    items-center
    justify-center
    rounded-xl
    bg-[#16f2b3]
    font-semibold
    text-[#07110f]
    shadow-[0_0_28px_rgba(22,242,179,.35)]
  "
    >
      <TouchRipple active={ripple} />

      <span className="relative z-10">
        {loading ? (
          <div className="flex items-center gap-2">
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
            h-2
            w-2
            rounded-full
            border-2
            border-[#07110f]/20
            border-t-[#07110f]
          "
            />

            <span>Signing In...</span>
          </div>
        ) : (
          children
        )}
      </span>
    </motion.button>
  );
}
