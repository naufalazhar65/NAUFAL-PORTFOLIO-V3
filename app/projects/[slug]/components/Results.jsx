"use client";

import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiClock,
  FiCpu,
  FiGitBranch,
  FiLayers,
} from "react-icons/fi";

const flowtestState = [
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

const projectIcons = [
  FiCheckCircle,
  FiClock,
  FiLayers,
];

function getProjectStatus(project) {
  if (!project.status) {
    return "Implemented";
  }

  if (
    project.status.toLowerCase().includes("progress") ||
    project.status.toLowerCase().includes("development")
  ) {
    return "In Progress";
  }

  return "Completed";
}

export default function Results({ project }) {
  if (!project) {
    return null;
  }

  const isFlowTest =
    project.slug === "flowtest-studio";

  const stats = isFlowTest
    ? flowtestState
    : (project.stats ?? []).map(
        (item, index) => ({
          number: String(index + 1).padStart(
            2,
            "0",
          ),
          icon:
            projectIcons[
              index % projectIcons.length
            ],
          value:
            item.value ?? "—",
          label:
            item.label ?? "Result",
          status: item.status ?? getProjectStatus(project),
          description:
            item.description ??
            `Key metric from the ${project.name} project.`,
        }),
      );

  if (!stats.length) {
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
          lg:px-8
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
                08
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
                Current Results
              </span>
            </div>

            <h2
              className="
                mt-7
                max-w-4xl
                text-[clamp(44px,6vw,76px)]
                font-semibold
                leading-[0.94]
                tracking-[-0.07em]
                text-white
              "
            >
              What the project
              <br />
              <span className="text-gray-400">
                has actually produced.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-[14px]
              leading-7
              text-gray-300
            "
          >
            These are the measurable or explicitly reported
            results attached to this project. They are shown
            separately from planned work so the current state
            stays clear.
          </p>
        </motion.div>

        {/* =========================
            RESULTS
        ========================= */}

        <div className="grid md:grid-cols-2">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={`${item.label}-${index}`}
                initial={{
                  opacity: 0,
                  y: 18,
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
                  duration: 0.5,
                  delay: Math.min(
                    index * 0.04,
                    0.12,
                  ),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  border-b
                  border-white/[0.08]
                  px-0
                  py-8
                  md:px-8
                  md:py-10
                  md:[&:nth-child(odd)]:border-r
                  first:md:pl-0
                  last:md:pr-0
                "
              >
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
                    size={15}
                    className="
                      text-[#16f2b3]
                    "
                  />
                </div>

                <div className="mt-9">
                  <div
                    className="
                      flex
                      flex-wrap
                      items-baseline
                      gap-x-4
                      gap-y-2
                    "
                  >
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
                        item.status ===
                        "Validated"
                          ? "text-[#16f2b3]"
                          : item.status ===
                              "In Progress"
                            ? "text-gray-500"
                            : "text-gray-300"
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
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =========================
            NOTE
        ========================= */}

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
            duration: 0.5,
          }}
          className="
            border-t
            border-white/[0.08]
            pt-7
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
            Results reflect the data currently defined for this
            project. Metrics without additional context should be
            read as project-level reported figures, not universal
            benchmarks.
          </p>
        </motion.div>
      </div>
    </section>
  );
}