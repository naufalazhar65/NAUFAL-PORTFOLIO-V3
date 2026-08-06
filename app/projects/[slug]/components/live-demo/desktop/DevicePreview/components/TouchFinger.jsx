"use client";

import { motion } from "framer-motion";

export default function TouchFinger({
  target,
  tap = false,
}) {
  if (!target) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        x: target.x,
        y: target.y,
        scale: tap
          ? [1, 0.9, 1]
          : 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        x: {
          duration: 0.45,
          ease: "easeInOut",
        },
        y: {
          duration: 0.45,
          ease: "easeInOut",
        },
        scale: {
          duration: 0.25,
        },
      }}
      className="
        absolute
        left-0
        top-0
        z-40
        pointer-events-none
      "
    >
      <div
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-xl
        "
      >
        <span className="text-lg">
          👆
        </span>
      </div>
    </motion.div>
  );
}