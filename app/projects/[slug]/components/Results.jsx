"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
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

export default function Results({ project }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="text-sm uppercase tracking-[5px] text-[#16f2b3]">
            Performance
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Results & Impact
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            Key metrics demonstrating the effectiveness and impact of this
            project.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid auto-rows-fr gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {project.stats.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
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
                  hover:border-[#16f2b3]/60
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

                <p className="text-5xl font-black text-[#16f2b3]">
                  {typeof item.value === "number" ? (
                    <CountUp
                      end={item.value}
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  ) : (
                    item.value
                  )}
                </p>

                {/* Label */}

                <p className="mt-5 text-xl font-bold text-white">
                  {item.label}
                </p>

                {/* Description */}

                {item.description && (
                  <p className="mt-2 leading-7 text-gray-400">
                    {item.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
