"use client";

import { motion } from "framer-motion";

export default function ProgressBar() {
  return (
    <div
      className="
        h-2
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
          duration: 1.1,
          ease: "easeInOut",
        }}
        className="
          h-full
          rounded-full
          bg-[#16f2b3]
        "
      />
    </div>
  );
}
