"use client";

import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiCpu,
  FiGitBranch,
  FiClock,
} from "react-icons/fi";

const currentState = [
  {
    number: "01",
    icon: FiGitBranch,
    value: "38",
    label: "Registered Nodes",
    status: "Implemented",
    description:
      "The plugin-based flow system currently exposes automation, getter, logic, and variable nodes that can be assembled into workflows.",
  },
  {
    number: "02",
    icon: FiCpu,
    value: "Android + iOS",
    label: "Mobile Platforms",
    status: "Validated",
    description:
      "The runtime supports Android through UiAutomator2 and iOS through XCUITest, including validated real-device workflows.",
  },
  {
    number: "03",
    icon: FiCheckCircle,
    value: "CI Ready",
    label: "Headless Execution",
    status: "Implemented",
    description:
      "The headless runner produces machine-readable results, JUnit XML, GitHub Actions workflows, and execution artifacts.",
  },
  {
    number: "04",
    icon: FiClock,
    value: "In Progress",
    label: "M3 Resilience",
    status: "In Progress",
    description:
      "Test data, environment overlays, parameterized runs, retry policies, transient-failure handling, and secret-aware execution are part of the current M3 work.",
  },
];

export default function Results({ project }) {
  if (project.slug !== "flowtest-studio") {
    return null;
  }

  return (
    <section
      id="results"
      className="
        relative
        overflow-hidden
        border-b
        border-white/[0.08]
        py-20
        sm:py-24
        lg:py-32
      "
    >
      {/* Ambient Background */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[18%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-white/[0.018]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[10%]
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#16f2b3]/[0.01]
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-0
        "
      >
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            grid
            gap-8
            border-b
            border-white/[0.08]
            pb-10
            lg:grid-cols-[1fr_0.55fr]
            lg:items-end
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
                13
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
                Current State
              </span>
            </div>

            <h2
              className="
                mt-8
                max-w-4xl
                text-[clamp(48px,7vw,88px)]
                font-semibold
                leading-[0.94]
                tracking-[-0.07em]
                text-white
              "
            >
              What is
              <br />
              <span className="text-gray-400">
                actually there.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-[15px]
              leading-7
              text-gray-300
            "
          >
            A snapshot of the current implementation: what has
            been built, what has been validated, and what is still
            being worked on.
          </p>
        </motion.div>

        {/* Current State */}

        <div className="grid md:grid-cols-2">
          {currentState.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
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
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(
                    index * 0.04,
                    0.12,
                  ),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  group
                  relative
                  min-h-[260px]
                  overflow-hidden
                  border-b
                  border-white/[0.08]
                  bg-white/[0.004]
                  px-0
                  py-10
                  transition-colors
                  duration-300
                  hover:border-white/[0.13]
                  hover:bg-white/[0.01]
                  md:px-8
                  md:py-12
                  md:[&:nth-child(odd)]:border-r
                  lg:min-h-[280px]
                  first:md:pl-0
                  last:md:pr-0
                "
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <span
                      className="
                        font-mono
                        text-[10px]
                        tabular-nums
                        text-gray-500
                      "
                    >
                      {item.number}
                    </span>

                    <Icon
                      size={16}
                      className="
                        text-[#16f2b3]
                        transition-colors
                        duration-200
                        group-hover:text-white
                      "
                    />
                  </div>

                  <div className="mt-10">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                      <strong
                        className="
                          text-[clamp(30px,4vw,48px)]
                          font-medium
                          leading-none
                          tracking-[-0.05em]
                          text-white
                        "
                      >
                        {item.value}
                      </strong>

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-gray-400
                        "
                      >
                        {item.label}
                      </span>
                    </div>

                    <span
                      className={`
                        mt-4
                        inline-block
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        ${
                          item.status === "Validated"
                            ? "text-[#16f2b3]"
                            : item.status === "Implemented"
                              ? "text-gray-300"
                              : "text-gray-500"
                        }
                      `}
                    >
                      {item.status}
                    </span>

                    <p
                      className="
                        mt-4
                        max-w-lg
                        text-[13px]
                        leading-7
                        text-gray-400
                        transition-colors
                        duration-200
                        group-hover:text-gray-300
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Source Note */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            border-t
            border-white/[0.08]
            pt-8
          "
        >
          <p
            className="
              max-w-3xl
              text-[11px]
              leading-6
              text-gray-500
            "
          >
            Status labels reflect the current project roadmap:
            implemented is not the same as validated, and work
            marked in progress should not be read as complete.
          </p>
        </motion.div>
      </div>
    </section>
  );
}