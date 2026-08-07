"use client";

import { motion } from "framer-motion";

import TypingText from "./TypingText";

export default function PhoneInput({
  label,
  value = "",
  placeholder,
  active = false,
  password = false,
  accent = "#16f2b3",
  onKeyPress,
}) {
  return (
    <div>
      <p
        className="
          mb-2
          text-[10px]
          font-semibold
          uppercase
          tracking-[2px]
          text-gray-500
        "
      >
        {label}
      </p>

      <motion.div
        animate={{
          scale: active ? 1.02 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          flex
          h-10
          items-center
          rounded-xl
          border
          px-3
          transition-all
          duration-300
        "
        style={
          active
            ? {
                borderColor: `${accent}80`,
                backgroundColor: `${accent}08`,
                boxShadow: `0 0 24px ${accent}22`,
              }
            : {
                borderColor: "rgba(255,255,255,.10)",
                backgroundColor: "rgba(255,255,255,.03)",
              }
        }
      >
        {value ? (
          <TypingText
            text={value}
            password={password}
            onKeyPress={onKeyPress}
          />
        ) : (
          <span className="text-sm text-gray-600">
            {placeholder}
          </span>
        )}
      </motion.div>
    </div>
  );
}