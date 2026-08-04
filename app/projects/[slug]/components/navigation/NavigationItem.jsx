"use client";

import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

export default function NavigationItem({ id, label, active }) {
  return (
    <button
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
        overflow-hidden
        rounded-xl
        px-4
        py-3
        text-left
        transition-all
        duration-300

        ${
          active
            ? "bg-[#16f2b3]/10 text-[#16f2b3]"
            : "text-gray-400 hover:bg-white/5 hover:text-white"
        }
      `}
    >
      {/* Active Bar */}

      <motion.div
        animate={{
          scaleY: active ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          absolute
          left-0
          top-2
          bottom-2
          w-1
          rounded-full
          bg-[#16f2b3]
        "
      />

      {/* Bullet */}

      <div
        className={`
          h-2.5
          w-2.5
          rounded-full
          transition-all
          duration-300

          ${
            active
              ? "bg-[#16f2b3] shadow-[0_0_10px_rgba(22,242,179,.7)]"
              : "bg-white/20 group-hover:bg-white/40"
          }
        `}
      />

      {/* Label */}

      <span className="flex-1 font-medium">{label}</span>

      {/* Arrow */}

      <FiChevronRight
        className={`
          text-sm
          transition-all
          duration-300

          ${
            active
              ? "translate-x-0 opacity-100 text-[#16f2b3]"
              : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
          }
        `}
      />
    </button>
  );
}
