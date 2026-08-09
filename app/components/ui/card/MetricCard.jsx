"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import { fadeUp } from "@/lib/motion";

export default function MetricCard({ item, index = 0 }) {
  const {
    value,
    label,
    description,
    progress = 80,
  } = item;

  const isNumber = typeof value === "number";

  return (
    <motion.div
      {...fadeUp}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        ...fadeUp.transition,
        delay: index * 0.08,
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-white/[0.03]

        p-9

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-[#16f2b3]/40
        hover:shadow-[0_20px_50px_rgba(22,242,179,.10)]
      "
    >
      {/* ========================= */}
      {/* PROGRESS */}
      {/* ========================= */}

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${progress}%`,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="
            h-full
            rounded-full
            bg-[#16f2b3]
          "
        />
      </div>

      {/* ========================= */}
      {/* VALUE */}
      {/* ========================= */}

      <p
        className="
          mt-2
          text-5xl
          font-black
          tracking-tight
          text-[#16f2b3]
        "
      >
        {isNumber ? (
          <CountUp
            end={value}
            duration={2}
            enableScrollSpy
            scrollSpyOnce
          />
        ) : (
          value
        )}
      </p>

      {/* ========================= */}
      {/* BADGE */}
      {/* ========================= */}

      <div
        className="
          mt-6
          inline-flex
          w-fit

          rounded-full

          bg-[#16f2b3]/10

          px-3
          py-1

          text-xs
          font-medium

          text-[#16f2b3]
        "
      >
        Analytics
      </div>

      {/* ========================= */}
      {/* LABEL */}
      {/* ========================= */}

      <p
        className="
          mt-5
          text-xl
          font-bold
          text-white
        "
      >
        {label}
      </p>

      {/* ========================= */}
      {/* DESCRIPTION */}
      {/* ========================= */}

      {description && (
        <p
          className="
            mt-2
            leading-7
            text-gray-400
          "
        >
          {description}
        </p>
      )}

      {/* ========================= */}
      {/* HOVER GLOW */}
      {/* ========================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16

          h-40
          w-40

          rounded-full

          bg-[#16f2b3]/10

          blur-3xl

          opacity-0

          transition
          duration-500

          group-hover:opacity-100
        "
      />
    </motion.div>
  );
}