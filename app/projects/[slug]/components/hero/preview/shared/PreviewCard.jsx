"use client";

import { motion } from "framer-motion";

export default function PreviewCard({
  icon: Icon,
  title,
  subtitle,
  active = false,
  completed = false,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
      animate={
        active
          ? {
              scale: [1, 1.03, 1],
            }
          : {}
      }
      transition={{
        duration: 0.35,
      }}
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        backdrop-blur-xl
        transition-all
        duration-500

        ${
          active
            ? "border-[#16f2b3]/40 bg-[#16f2b3]/10 shadow-[0_0_40px_rgba(22,242,179,.16)]"
            : completed
              ? "border-green-500/30 bg-green-500/10"
              : "border-white/10 bg-white/[0.03]"
        }

        ${className}
      `}
    >
      {/* Glow */}

      {active && (
        <motion.div
          animate={{
            opacity: [0.2, 0.45, 0.2],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            bg-[#16f2b3]/10
          "
        />
      )}

      {/* Reflection */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/10
          via-transparent
          to-transparent
        "
      />

      {/* Content */}

      <div className="relative flex items-center gap-4 p-5">
        {/* Icon */}

        <div
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            transition-all
            duration-500

            ${
              active
                ? "bg-[#16f2b3] text-black"
                : completed
                  ? "bg-green-500 text-white"
                  : "bg-white/10 text-gray-400"
            }
          `}
        >
          {Icon && <Icon size={18} strokeWidth={2.2} />}
        </div>

        {/* Text */}

        <div className="min-w-0 flex-1">
          <h3
            className={`
              truncate
              text-sm
              font-semibold

              ${
                active || completed
                  ? "text-white"
                  : "text-gray-300"
              }
            `}
          >
            {title}
          </h3>

          {subtitle && (
            <p
              className="
                mt-1
                truncate
                text-[11px]
                text-gray-500
              "
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Status */}

        {completed && !active && (
          <div
            className="
              h-2.5
              w-2.5
              rounded-full
              bg-green-500
            "
          />
        )}

        {active && (
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
            className="
              h-2.5
              w-2.5
              rounded-full
              bg-[#16f2b3]
            "
          />
        )}
      </div>
    </motion.div>
  );
}