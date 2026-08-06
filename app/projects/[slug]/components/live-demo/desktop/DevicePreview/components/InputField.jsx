"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

const InputField = forwardRef(function InputField(
  { value = "", placeholder = "", active = false },
  ref,
) {
  return (
    <div
      ref={ref}
      className={`
        mb-3
        flex
        items-center
        rounded-lg
        border
        px-3
        py-2
        text-xs
        transition-all
        duration-300

        ${
          active
            ? "border-[#16f2b3] bg-[#16f2b3]/10 shadow-[0_0_10px_rgba(22,242,179,.2)]"
            : "border-white/10 bg-white/5"
        }
      `}
    >
      <span className="text-white">{value || placeholder}</span>

      {active && (
        <motion.span
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
          }}
          className="ml-0.5 text-[#16f2b3]"
        >
          |
        </motion.span>
      )}
    </div>
  );
});

export default InputField;
