"use client";

import { motion } from "framer-motion";

export default function ArchitectureNode({
  icon: Icon,
  title,
  subtitle,
  active = false,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        relative
        w-64
        cursor-pointer
        rounded-3xl
        border
        p-6
        transition-all
        duration-300

        ${
          active
            ? "border-[#16f2b3] bg-[#162031] shadow-[0_0_35px_rgba(22,242,179,.18)]"
            : "border-white/10 bg-[#111827]"
        }
      `}
    >
      <div className="mb-5 inline-flex rounded-2xl bg-[#16f2b3]/10 p-4">
        <Icon className="text-3xl text-[#16f2b3]" />
      </div>

      <h3 className="text-xl font-bold text-white">{title}</h3>

      <p className="mt-2 text-sm leading-7 text-gray-400">{subtitle}</p>
    </motion.div>
  );
}
