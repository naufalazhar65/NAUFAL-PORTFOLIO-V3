"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import { fadeUp } from "@/lib/motion";

import {
  FiSmartphone,
  FiCpu,
  FiActivity,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

import { FaGithub } from "react-icons/fa";

const iconMap = {
  platform: FiSmartphone,
  architecture: FiCpu,
  github: FaGithub,
  performance: FiActivity,
  tests: FiCheckCircle,
  duration: FiClock,
};

export default function MetricCard({ item, index = 0 }) {
  const { icon, value, label, description } = item;

  const Icon = iconMap[icon];

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
hover:border-[#16f2b3]/60
hover:shadow-[0_20px_50px_rgba(22,242,179,.12)]
      "
    >
      {/* Glow */}

      <div
        className="
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

      {/* Icon */}

      {Icon && (
        <div className="mb-8">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-[#16f2b3]/10
              text-[#16f2b3]
              transition
              duration-300
              group-hover:scale-110
              group-hover:bg-[#16f2b3]/15
            "
          >
            <Icon size={28} />
          </div>
        </div>
      )}

      {/* Value */}

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width:
              typeof value === "number" ? `${Math.min(value, 100)}%` : "80%",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
          }}
          className="h-full rounded-full bg-[#16f2b3]"
        />
      </div>

      <p className="text-5xl font-black text-[#16f2b3]">
        {typeof value === "number" ? (
          <CountUp end={value} duration={2} enableScrollSpy scrollSpyOnce />
        ) : (
          value
        )}
      </p>

      {/* Progress */}

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width:
              typeof value === "number" ? `${Math.min(value, 100)}%` : "80%",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
          }}
          className="h-full rounded-full bg-[#16f2b3]"
        />
      </div>

      {/* Badge */}

      <div className="mt-4 inline-flex w-fit rounded-full bg-[#16f2b3]/10 px-3 py-1 text-xs font-medium text-[#16f2b3]">
        Analytics
      </div>

      {/* Label */}

      <p className="mt-5 text-xl font-bold text-white">{label}</p>

      {/* Description */}

      {description && (
        <p className="mt-2 leading-7 text-gray-400">{description}</p>
      )}
    </motion.div>
  );
}
