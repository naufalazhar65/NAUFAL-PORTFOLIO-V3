"use client";

import { motion } from "framer-motion";

export default function TouchRipple() {
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0.45,
      }}
      animate={{
        scale: 3.8,
        opacity: 0,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="
        absolute
        inset-0
        m-auto
        h-8
        w-8
        rounded-full
        bg-white/40
        pointer-events-none
      "
    />
  );
}
