"use client";

import { motion } from "framer-motion";

import TypingText from "./TypingText";

export default function PhoneInput({
  label,
  value = "",
  placeholder,
  active = false,
  password = false,
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-[11px]
          font-semibold
          uppercase
          tracking-[2px]
          text-gray-500
        "
      >
        {label}
      </label>

      <motion.div
        animate={{
          scale: active ? 1.02 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={`
          flex
          h-12
          items-center
          rounded-xl
          border
          px-4
          transition-all
          duration-300

          ${
            active
              ? "border-[#16f2b3]/50 bg-[#16f2b3]/5 shadow-[0_0_24px_rgba(22,242,179,.12)]"
              : "border-white/10 bg-white/[0.03]"
          }
        `}
      >
        {value ? (
          password ? (
            <TypingText
              text={"•".repeat(value.length)}
            />
          ) : (
            <TypingText text={value} />
          )
        ) : (
          <span className="text-sm text-gray-600">
            {placeholder}
          </span>
        )}
      </motion.div>
    </div>
  );
}