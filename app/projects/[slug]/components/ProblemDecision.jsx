"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiCode, FiLayers, FiShield } from "react-icons/fi";

const flowtestDecisions = [
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
  if (!project) {
    return null;
  }

  const isFlowTest = project.slug === "flowtest-studio";

  return (
    <section
      id="problem-decision"
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
          relative
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#16f2b3]">
                04
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                Problem → Decision
              </span>
            </div>

            <h2
              className="
                mt-7
                max-w-4xl
                text-[clamp(44px,6vw,76px)]
                font-semibold
                leading-[1.02]
                tracking-[-0.07em]
                text-white
                lg:leading-[0.94]
              "
            >
              {isFlowTest
                ? "Mobile automation was too fragmented."
                : project.challenge}
            </h2>
          </div>

          <p className="max-w-md text-[14px] leading-7 text-gray-300">
            {isFlowTest
              ? "The problem was not simply writing more tests. It was keeping authoring, device interaction, inspection, execution, and failure evidence understandable as the workflow grew."
              : "Every project started with a specific pain point — manual repetition, scattered evidence, or fragile workflows — and focused on making that part of QA work less painful."}
          </p>
        </motion.div>

        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="
            grid
            gap-8
            border-b
            border-white/[0.08]
            py-10
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-20
            lg:py-12
          "
        >
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
              The problem
            </span>
            <p className="mt-4 max-w-xs text-[12px] leading-6 text-gray-500">
              What made the existing workflow harder to repeat, maintain, or
              investigate?
            </p>
          </div>

          <div className="max-w-4xl">
            <p className="text-[clamp(23px,3vw,38px)] font-medium leading-[1.2] tracking-[-0.04em] text-white">
              {project.challenge}
            </p>
          </div>
        </motion.div>

        {/* FlowTest-specific decisions */}
        {isFlowTest && (
          <>
            <div className="flex items-center justify-center py-7 text-[#16f2b3]">
              <div className="flex h-8 w-8 items-center justify-center border border-white/[0.08] bg-white/[0.02]">
                <FiArrowDown size={13} />
              </div>
            </div>

            <div>
              <div className="mb-7">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#16f2b3]">
                  The decisions
                </span>
              </div>

              <div className="grid lg:grid-cols-3">
                {flowtestDecisions.map((decision) => {
                  const Icon = decision.icon;
                  return (
                    <motion.article
                      key={decision.number}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.12 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="
                        border-b
                        border-white/[0.08]
                        py-8
                        lg:border-r
                        lg:px-8
                        lg:py-10
                        first:lg:pl-0
                        last:lg:border-r-0
                        last:lg:pr-0
                      "
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-gray-500">
                          {decision.number}
                        </span>
                        <Icon size={15} className="text-[#16f2b3]" />
                      </div>

                      <h3
                        className="
                          mt-10
                          max-w-xs
                          text-[23px]
                          font-medium
                          leading-[1.1]
                          tracking-[-0.04em]
                          text-white
                          lg:leading-[1.05]
                        "
                      >
                        {decision.title}
                      </h3>

                      <p className="mt-4 max-w-sm text-[13px] leading-7 text-gray-400">
                        {decision.description}
                      </p>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="
            grid
            gap-8
            border-t
            border-white/[0.08]
            pt-10
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-20
            lg:pt-12
          "
        >
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
              The approach
            </span>
          </div>

          <div>
            <p className="max-w-4xl text-[clamp(23px,3vw,38px)] font-medium leading-[1.2] tracking-[-0.04em] text-white">
              {project.solution}
            </p>

            {isFlowTest && (
              <p className="mt-6 max-w-3xl text-[14px] leading-7 text-gray-400">
                The goal is not to hide complexity. It is to keep the important
                parts of the automation workflow close enough together that a
                test can be authored, run, inspected, and investigated without
                losing context.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
