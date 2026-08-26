"use client";

import { motion } from "framer-motion";

export default function NavigationItem({
  id,
  label,
  number,
  active,
}) {
  return (
    <button
      type="button"
      onClick={() =>
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
      className={`
        group
        relative
        flex
        w-full
        items-center
        gap-3
        py-2
        text-left
        transition-colors
        duration-200
        ${
          active
            ? "text-white"
            : "text-gray-600 hover:text-gray-300"
        }
      `}
    >
      <motion.span
        initial={false}
        animate={{
          opacity: active ? 1 : 0,
          scaleY: active ? 1 : 0.5,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className="
          absolute
          -left-[17px]
          top-1/2
          h-4
          w-px
          -translate-y-1/2
          origin-center
          bg-[#16f2b3]
        "
      />

      <span
        className={`
          w-6
          shrink-0
          font-mono
          text-[9px]
          tabular-nums
          tracking-[0.04em]
          ${
            active
              ? "text-[#16f2b3]"
              : "text-gray-700 group-hover:text-gray-500"
          }
        `}
      >
        {number}
      </span>

      <span
        className="
          min-w-0
          truncate
          text-[11px]
          font-medium
          tracking-[-0.01em]
        "
      >
        {label}
      </span>
    </button>
  );
}