"use client";

import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiCpu,
  FiLayers,
  FiSmartphone,
} from "react-icons/fi";

const facts = [
  {
    icon: FiSmartphone,
    label: "Target",
    value: "Android + iOS",
  },
  {
    icon: FiLayers,
    label: "Editor",
    value: "React Flow",
  },
  {
    icon: FiCpu,
    label: "Runtime",
    value: "Appium",
  },
  {
    icon: FiCheckCircle,
    label: "State",
    value: "Active build",
  },
  {
    icon: null,
    label: "Language",
    value: "TypeScript",
  },
  {
    icon: null,
    label: "CI",
    value: "Headless + JUnit",
  },
];

export default function Overview({ project }) {
  if (!project) {
    return null;
  }

  return (
    <section
      id="overview"
      className="
        relative
        border-b
        border-white/[0.08]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-0
        "
      >
        {/* =========================
            HEADER
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            grid
            gap-8
            border-b
            border-white/[0.08]
            pb-8
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-20
          "
        >
          <div>
            <div className="flex items-center gap-4">
              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#16f2b3]
                "
              >
                03
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-gray-400
                "
              >
                Project Snapshot
              </span>
            </div>
          </div>

          <div>
            <p
              className="
                max-w-3xl
                text-[clamp(24px,3vw,40px)]
                font-medium
                leading-[1.2]
                tracking-[-0.04em]
                text-white
              "
            >
              {project.highlight}
            </p>

            <p
              className="
                mt-6
                max-w-3xl
                text-[14px]
                leading-7
                text-gray-400
              "
            >
              {project.description}
            </p>
          </div>
        </motion.div>

        {/* =========================
            FACTS
        ========================= */}

        <div
          className="
            mt-8
            grid
            border-l
            border-t
            border-white/[0.08]
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {facts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  min-h-[130px]
                  border-b
                  border-r
                  border-white/[0.08]
                  px-5
                  py-5
                  sm:min-h-[140px]
                "
              >
                <div className="flex items-center justify-between">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      tabular-nums
                      text-gray-600
                    "
                  >
                    {String(index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  {Icon && (
                    <Icon
                      size={14}
                      className="text-gray-500"
                    />
                  )}
                </div>

                <div className="mt-8">
                  <span
                    className="
                      block
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-gray-500
                    "
                  >
                    {item.label}
                  </span>

                  <strong
                    className="
                      mt-2
                      block
                      text-base
                      font-medium
                      tracking-[-0.025em]
                      text-white
                    "
                  >
                    {item.value}
                  </strong>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}