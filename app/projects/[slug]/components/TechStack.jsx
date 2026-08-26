"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
} from "react-icons/fi";

const flowtestDecisions = [
  {
    number: "01",
    icon: FiGitBranch,
    title: "Make the workflow a graph.",
    technology:
      "React Flow · Zustand · TypeScript",
    decision:
      "Test actions are represented as nodes and edges rather than hidden inside a script. That makes the workflow visible, selectable, reusable, and easier to validate before it runs.",
    tradeoff:
      "A graph-based editor introduces more state and interaction complexity, but it gives the product a structure that can support plugins and visual execution.",
  },
  {
    number: "02",
    icon: FiCpu,
    title: "Keep device execution behind Appium.",
    technology:
      "Appium · WebDriver · UiAutomator2 · XCUITest",
    decision:
      "The browser should describe and control the workflow without owning the device-specific implementation. Appium provides the execution boundary for Android and iOS sessions.",
    tradeoff:
      "The runtime has to deal with capabilities, sessions, drivers, and platform differences, but the editor stays focused on workflow behavior.",
  },
  {
    number: "03",
    icon: FiDatabase,
    title: "Keep execution evidence with the run.",
    technology:
      "Execution state · Reports · Screenshots · Page source",
    decision:
      "A test result should carry enough context to explain what happened. Logs, screenshots, timings, page source, and result state are treated as part of the execution output.",
    tradeoff:
      "Keeping evidence increases the amount of execution data to manage, but it makes failures much easier to reproduce and investigate.",
  },
  {
    number: "04",
    icon: FiCode,
    title: "Keep AI close to the workflow, not above it.",
    technology:
      "Express · Ollama · OpenAI SDK",
    decision:
      "AI is integrated around concrete QA tasks such as test generation, flow analysis, locator recovery, and suggestions instead of becoming the authority that changes a workflow automatically.",
    tradeoff:
      "Human approval and validation add another step, but they keep AI-assisted changes reviewable and traceable.",
  },
];

const genericIcons = [
  FiCode,
  FiLayers,
  FiGitBranch,
  FiCpu,
];

const genericDescriptions = {
  "automation-testing":
    "The framework is centered around reusable browser automation, Page Object Model structure, reporting, and CI execution.",

  "mobile-app-testing":
    "The framework separates platform configuration, driver creation, page objects, test suites, reporting, and CI execution for Android and iOS.",

  "api-testing":
    "The work combines documented API scenarios with repeatable validation and automated execution across service behavior.",

  "performance-testing":
    "The testing setup focuses on scenario-based load, stress, spike, and endurance checks using dedicated performance tooling.",

  "qa-documentation":
    "The work is organized around structured test scenarios, planning artifacts, boundary analysis, and defect reporting.",
};

function getGenericDescription(project) {
  return (
    genericDescriptions[project.slug] ??
    "The project combines the tools and practices listed below around a specific QA workflow."
  );
}

export default function TechStack({ project }) {
  if (!project) {
    return null;
  }

  const isFlowTest =
    project.slug === "flowtest-studio";

  if (isFlowTest) {
    return (
      <section
        id="tech-stack"
        className="
          relative
          border-b
          border-white/[0.08]
          py-20
          sm:py-24
          lg:py-28
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
                  06
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
                  Technical Decisions
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
                Why the system
                <br />
                <span className="text-gray-400">
                  is built this way.
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
              The important choices are not the number of tools in
              the stack. They are the boundaries between the editor,
              the device runtime, execution evidence, and AI-assisted
              work.
            </p>
          </motion.div>

          <div>
            {flowtestDecisions.map(
              (decision, index) => {
                const Icon = decision.icon;

                return (
                  <motion.article
                    key={decision.number}
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
                      duration: 0.55,
                      delay: Math.min(
                        index * 0.04,
                        0.12,
                      ),
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      grid
                      gap-8
                      border-b
                      border-white/[0.08]
                      py-9
                      lg:grid-cols-[34px_0.65fr_1.35fr]
                      lg:gap-10
                      lg:py-11
                    "
                  >
                    <div className="flex items-start">
                      <Icon
                        size={15}
                        className="text-[#16f2b3]"
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className="
                            font-mono
                            text-[10px]
                            tabular-nums
                            text-gray-500
                          "
                        >
                          {decision.number}
                        </span>

                        <span
                          className="
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.12em]
                            text-gray-400
                          "
                        >
                          Decision
                        </span>
                      </div>

                      <h3
                        className="
                          mt-4
                          max-w-md
                          text-[clamp(23px,2.5vw,34px)]
                          font-medium
                          leading-[1]
                          tracking-[-0.045em]
                          text-white
                        "
                      >
                        {decision.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          max-w-md
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.08em]
                          text-gray-400
                        "
                      >
                        {decision.technology}
                      </p>
                    </div>

                    <div className="max-w-2xl lg:pt-8">
                      <p
                        className="
                          text-[14px]
                          leading-7
                          text-gray-300
                        "
                      >
                        {decision.decision}
                      </p>

                      <p
                        className="
                          mt-5
                          text-[12px]
                          leading-7
                          text-gray-500
                        "
                      >
                        <span className="text-gray-400">
                          Trade-off:
                        </span>{" "}
                        {decision.tradeoff}
                      </p>
                    </div>
                  </motion.article>
                );
              },
            )}
          </div>
        </div>
      </section>
    );
  }

  const tools = project.tools ?? [];
  const features = project.features ?? [];

  if (!tools.length && !features.length) {
    return null;
  }

  return (
    <section
      id="tech-stack"
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
                06
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
                Technical Stack
              </span>
            </div>

            <h2
              className="
                mt-7
                max-w-3xl
                text-[clamp(44px,6vw,76px)]
                font-semibold
                leading-[0.94]
                tracking-[-0.07em]
                text-white
              "
            >
              The tools behind
              <br />
              <span className="text-gray-400">
                the work.
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
            {getGenericDescription(project)}
          </p>
        </motion.div>

        <div
          className="
            grid
            gap-10
            border-b
            border-white/[0.08]
            py-10
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-20
          "
        >
          <div>
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-gray-400
              "
            >
              Tools
            </span>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-4">
            {tools.map((tool, index) => {
              const Icon =
                genericIcons[
                  index % genericIcons.length
                ];

              return (
                <motion.span
                  key={tool.name}
                  whileHover={{
                    y: -1,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[18px]
                    font-medium
                    tracking-[-0.03em]
                    text-white
                    transition-colors
                    duration-200
                    hover:text-[#16f2b3]
                  "
                >
                  <Icon
                    size={13}
                    className="text-gray-500"
                  />

                  {tool.name}
                </motion.span>
              );
            })}
          </div>
        </div>

        {features.length > 0 && (
          <div
            className="
              grid
              gap-8
              pt-10
              lg:grid-cols-[0.7fr_1.3fr]
              lg:gap-20
            "
          >
            <div>
              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-gray-400
                "
              >
                What it covers
              </span>
            </div>

            <div className="grid sm:grid-cols-2">
              {features.map(
                (feature, index) => (
                  <div
                    key={feature}
                    className="
                      border-b
                      border-white/[0.08]
                      py-4
                      sm:pr-8
                      sm:[&:nth-child(odd)]:border-r
                      sm:[&:nth-child(odd)]:pr-8
                      sm:[&:nth-child(even)]:pl-8
                    "
                  >
                    <span className="flex items-start gap-3 text-[13px] leading-6 text-gray-300">
                      <span className="mt-1 text-[#16f2b3]">
                        {String(index + 1).padStart(
                          2,
                          "0",
                        )}
                      </span>

                      {feature}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}