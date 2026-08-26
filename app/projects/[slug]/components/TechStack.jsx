"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
} from "react-icons/fi";

const decisions = [
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

export default function TechStack({ project }) {
  if (project.slug !== "flowtest-studio") {
    return null;
  }

  return (
    <section
      id="tech-stack"
      className="
        relative
        border-b
        border-white/[0.08]
        py-20
        sm:py-24
        lg:py-32
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
                mt-8
                max-w-4xl
                text-[clamp(48px,7vw,88px)]
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
              text-[15px]
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

        {/* =========================
            DECISIONS
        ========================= */}

        <div>
          {decisions.map((decision, index) => {
            const Icon = decision.icon;

            return (
              <motion.article
                key={decision.number}
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
                  duration: 0.6,
                  delay: Math.min(
                    index * 0.04,
                    0.16,
                  ),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  grid
                  gap-8
                  border-b
                  border-white/[0.08]
                  py-10
                  lg:grid-cols-[34px_0.65fr_1.35fr]
                  lg:gap-10
                  lg:py-12
                "
              >
                {/* Marker */}

                <div className="flex items-start">
                  <Icon
                    size={15}
                    className="text-[#16f2b3]"
                  />
                </div>

                {/* Decision */}

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

                {/* Reasoning */}

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
          })}
        </div>
      </div>
    </section>
  );
}