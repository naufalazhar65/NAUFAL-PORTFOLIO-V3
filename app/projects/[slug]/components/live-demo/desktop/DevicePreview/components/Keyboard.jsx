"use client";

import { motion } from "framer-motion";

const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

export default function Keyboard() {
  return (
    <motion.div
      initial={{ y: 120 }}
      animate={{ y: 0 }}
      exit={{ y: 120 }}
      transition={{
        duration: 0.28,
        ease: "easeOut",
      }}
      className="
        absolute
        bottom-0
        left-0
        right-0
        rounded-t-2xl
        border-t
        border-white/10
        bg-[#1a1f28]
        px-2
        py-2
      "
    >
      {rows.map((row, i) => (
        <div key={i} className="mb-1 flex justify-center gap-1">
          {row.map((key) => (
            <div
              key={key}
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded
                bg-[#2a303a]
                text-[8px]
                text-gray-300
              "
            >
              {key}
            </div>
          ))}
        </div>
      ))}

      <div className="mt-1 flex justify-center gap-2">
        <div className="h-5 w-10 rounded bg-[#2a303a]" />
        <div className="h-5 flex-1 rounded bg-[#2a303a]" />
        <div className="h-5 w-10 rounded bg-[#2a303a]" />
      </div>
    </motion.div>
  );
}
