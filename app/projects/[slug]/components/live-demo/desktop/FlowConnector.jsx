"use client";

import { motion } from "framer-motion";

export default function FlowConnector({ active, completed }) {
  return (
    <div className="relative h-8 w-[2px] overflow-hidden bg-white/10">
      {completed && (
        <motion.div
          animate={{
            y: [-40, 60],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.9,
            ease: "linear",
          }}
          className="absolute h-10 w-full bg-green-400"
        />
      )}

      {active && (
        <motion.div
          animate={{
            y: [-40, 60],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            ease: "linear",
          }}
          className="absolute h-10 w-full bg-[#16f2b3]"
        />
      )}
    </div>
  );
}
