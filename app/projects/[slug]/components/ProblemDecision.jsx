"use client";

import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiCode,
  FiLayers,
  FiShield,
} from "react-icons/fi";

const decisions = [
  {
    number: "01",
    icon: FiCode,
    title: "Keep the flow understandable.",
    description:
      "Instead of hiding mobile test behavior inside a script, I wanted the sequence of actions to stay visible, editable, and reusable.",
  },
  {
    number: "02",
    icon: FiLayers,
    title: "Keep the important tools close together.",
    description:
      "Authoring, element inspection, device execution, logs, and evidence should be easier to move between without losing the context of the run.",
  },
  {
    number: "03",
    icon: FiShield,
    title: "Treat failure evidence as part of the test.",
    description:
      "A failed run needs more than a red status. Screenshots, page source, timing, execution state, and recovery information should remain close to the workflow.",
  },
];

export default function ProblemDecision({ project }) {
  if (project.slug !== "flowtest-studio") {
    return null;
  }

  return (
    <section
      id="problem-decision"
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
          top-[20%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-white/[0.015]
          blur-[140px]
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
            border-b
            border-white/[0.08]
            pb-10
          "
        >
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
              04
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
              Problem → Decision
            </span>
          </div>

          <div
            className="
              mt-8
              grid
              gap-8
              lg:grid-cols-[1fr_0.55fr]
              lg:items-end
            "
          >
            <h2
              className="
                max-w-4xl
                text-[clamp(48px,7vw,88px)]
                font-semibold
                leading-[0.94]
                tracking-[-0.07em]
                text-white
              "
            >
              Mobile automation
              <br />
              <span className="text-gray-400">
                was too fragmented.
              </span>
            </h2>

            <p
              className="
                max-w-md
                text-[15px]
                leading-7
                text-gray-300
              "
            >
              The problem was not simply writing more tests. It
              was keeping authoring, device interaction, inspection,
              execution, and failure evidence understandable as
              the workflow grew.
            </p>
          </div>
        </motion.div>

        {/* =========================
            PROBLEM
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
            py-12
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-20
            lg:py-16
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
              The problem
            </span>

            <p
              className="
                mt-4
                max-w-xs
                text-[12px]
                leading-6
                text-gray-500
              "
            >
              The workflow became harder to reason about as more
              steps moved into separate tools and scripts.
            </p>
          </div>

          <div className="max-w-4xl">
            <p
              className="
                text-[clamp(25px,3vw,42px)]
                font-medium
                leading-[1.2]
                tracking-[-0.04em]
                text-white
              "
            >
              {project.challenge}
            </p>
          </div>
        </motion.div>

        {/* =========================
            TRANSITION
        ========================= */}

        <div
          className="
            flex
            items-center
            justify-center
            py-8
            text-[#16f2b3]
          "
        >
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.02]
            "
          >
            <FiArrowDown size={14} />
          </div>
        </div>

        {/* =========================
            DECISIONS
        ========================= */}

        <div>
          <div className="mb-8">
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#16f2b3]
              "
            >
              The decisions
            </span>
          </div>

          <div className="grid lg:grid-cols-3">
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    relative
                    border-b
                    border-white/[0.08]
                    py-10
                    lg:border-r
                    lg:px-8
                    lg:py-12
                    first:lg:pl-0
                    last:lg:border-r-0
                    last:lg:pr-0
                  "
                >
                  <div className="flex items-center justify-between">
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

                    <Icon
                      size={15}
                      className="text-[#16f2b3]"
                    />
                  </div>

                  <h3
                    className="
                      mt-12
                      max-w-xs
                      text-[25px]
                      font-medium
                      leading-[1.05]
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    {decision.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-sm
                      text-[13px]
                      leading-7
                      text-gray-400
                    "
                  >
                    {decision.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =========================
            SOLUTION
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
          }}
          className="
            grid
            gap-8
            border-t
            border-white/[0.08]
            pt-12
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-20
            lg:pt-16
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
              The result we were aiming for
            </span>
          </div>

          <div>
            <p
              className="
                max-w-4xl
                text-[clamp(25px,3vw,42px)]
                font-medium
                leading-[1.2]
                tracking-[-0.04em]
                text-white
              "
            >
              {project.solution}
            </p>

            <p
              className="
                mt-7
                max-w-3xl
                text-[14px]
                leading-7
                text-gray-400
              "
            >
              The goal is not to hide complexity. It is to keep
              the important parts of the automation workflow close
              enough together that a test can be authored, run,
              inspected, and investigated without losing context.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}