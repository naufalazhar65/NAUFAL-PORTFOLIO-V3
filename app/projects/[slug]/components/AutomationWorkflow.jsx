"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiPlay,
  FiSearch,
} from "react-icons/fi";

import WorkflowMobileModal from "./WorkflowMobileModal";

const flowtestStages = [
  {
    id: "author",
    number: "01",
    icon: FiPlay,
    title: "Author",
    subtitle: "Build the flow",
    description:
      "Create the test as connected actions instead of burying the sequence inside a script.",
    command:
      "Tap → Fill → Wait → Assert → Continue",
    output: [
      "Visible execution order",
      "Reusable nodes",
    ],
  },
  {
    id: "inspect",
    number: "02",
    icon: FiSearch,
    title: "Inspect",
    subtitle: "Check the device",
    description:
      "Inspect the active mobile session, verify the page state, and check locators before the flow depends on them.",
    command:
      "Session → Page source → Locator",
    output: [
      "Element context",
      "Validated selectors",
    ],
  },
  {
    id: "execute",
    number: "03",
    icon: FiPlay,
    title: "Execute",
    subtitle: "Run on the target",
    description:
      "Send the flow through the Appium runtime and keep execution state visible while the device session runs.",
    command:
      "Flow → Appium → Android / iOS",
    output: [
      "Node execution state",
      "Timing and status",
    ],
  },
  {
    id: "evidence",
    number: "04",
    icon: FiCheckCircle,
    title: "Evidence",
    subtitle: "Keep what happened",
    description:
      "A completed or failed run leaves behind the context needed to understand the result.",
    command:
      "Run → Logs → Screenshot → Report",
    output: [
      "Failure evidence",
      "Machine-readable results",
    ],
  },
];

const genericIcons = [
  FiPlay,
  FiSearch,
  FiCheckCircle,
];

export default function AutomationWorkflow({
  project,
}) {
  const workflow = useMemo(
    () => project?.workflow ?? [],
    [project?.workflow],
  );

  const isFlowTest =
    project?.slug === "flowtest-studio";

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [mobileStep, setMobileStep] =
    useState(null);

  useEffect(() => {
    if (!isFlowTest || !workflow.length) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveIndex((current) => {
        return (
          (current + 1) %
          flowtestStages.length
        );
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [isFlowTest, workflow.length]);

  const activeStage =
    flowtestStages[
      activeIndex %
        flowtestStages.length
    ];

  const activeWorkflowStep = useMemo(() => {
    if (!workflow.length) {
      return null;
    }

    return (
      workflow.find(
        (step) =>
          step.title
            ?.toLowerCase()
            .includes(
              activeStage.title.toLowerCase(),
            ),
      ) ??
      workflow[
        activeIndex % workflow.length
      ]
    );
  }, [
    workflow,
    activeIndex,
    activeStage.title,
  ]);

  if (!project || !workflow.length) {
    return null;
  }

  /* ==================================
     FLOWTEST
  ================================== */

  if (isFlowTest) {
    return (
      <section
        id="workflow"
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
            lg:px-0
          "
        >
          <WorkflowHeader
            number="07"
            title={
              <>
                One flow,
                <br />
                <span className="text-gray-400">
                  four important moments.
                </span>
              </>
            }
            description="FlowTest is built around a simple loop: author the workflow, inspect the target, execute it, and keep enough evidence to understand what happened."
          />

          <div className="mt-10 overflow-x-auto pb-5 scrollbar-hide">
            <div className="flex min-w-max items-center">
              {flowtestStages.map(
                (stage, index) => {
                  const Icon = stage.icon;

                  const isActive =
                    index === activeIndex;

                  const isComplete =
                    index < activeIndex;

                  return (
                    <div
                      key={stage.id}
                      className="flex items-center"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setActiveIndex(index);

                          setMobileStep(
                            activeWorkflowStep ??
                              stage,
                          );
                        }}
                        className="group w-[220px] text-left"
                      >
                        <div
                          className={`
                            min-h-[150px]
                            border
                            px-5
                            py-5
                            transition-colors
                            duration-300
                            ${
                              isActive
                                ? "border-[#16f2b3]/40 bg-white/[0.025]"
                                : "border-white/[0.08] bg-white/[0.004] hover:border-white/[0.14] hover:bg-white/[0.01]"
                            }
                          `}
                        >
                          <div className="flex items-start justify-between">
                            <span
                              className={`
                                font-mono
                                text-[9px]
                                ${
                                  isActive
                                    ? "text-[#16f2b3]"
                                    : "text-gray-500"
                                }
                              `}
                            >
                              {stage.number}
                            </span>

                            <Icon
                              size={15}
                              className={`
                                ${
                                  isActive ||
                                  isComplete
                                    ? "text-[#16f2b3]"
                                    : "text-gray-500"
                                }
                              `}
                            />
                          </div>

                          <div className="mt-9">
                            <h3
                              className={`
                                text-lg
                                font-medium
                                tracking-[-0.03em]
                                ${
                                  isActive
                                    ? "text-white"
                                    : "text-gray-300"
                                }
                              `}
                            >
                              {stage.title}
                            </h3>

                            <p className="mt-2 text-[11px] text-gray-500">
                              {stage.subtitle}
                            </p>
                          </div>

                          <div className="mt-5 h-px bg-white/[0.06]">
                            <div
                              className={`
                                h-full
                                bg-[#16f2b3]
                                transition-all
                                duration-500
                                ${
                                  isComplete
                                    ? "w-full"
                                    : isActive
                                      ? "w-2/3"
                                      : "w-0"
                                }
                              `}
                            />
                          </div>
                        </div>
                      </button>

                      {index <
                        flowtestStages.length -
                          1 && (
                        <div className="mx-3 flex w-8 items-center">
                          <div
                            className={`
                              h-px
                              flex-1
                              ${
                                index <
                                activeIndex
                                  ? "bg-[#16f2b3]/40"
                                  : "bg-white/[0.08]"
                              }
                            `}
                          />

                          <FiArrowRight
                            size={13}
                            className={
                              index <
                              activeIndex
                                ? "text-[#16f2b3]"
                                : "text-gray-600"
                            }
                          />
                        </div>
                      )}
                    </div>
                  );
                },
              )}
            </div>
          </div>

          <motion.div
            key={activeStage.id}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              grid
              gap-8
              border-t
              border-white/[0.08]
              pt-8
              lg:grid-cols-[0.7fr_1.3fr]
              lg:gap-20
            "
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-[#16f2b3]">
                  {activeStage.number}
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                  Active stage
                </span>
              </div>

              <h3 className="mt-5 text-xl font-medium tracking-[-0.03em] text-white">
                {activeStage.title}
              </h3>

              <p className="mt-2 text-[11px] text-gray-500">
                {activeStage.subtitle}
              </p>
            </div>

            <div>
              <p className="max-w-3xl text-[14px] leading-7 text-gray-300">
                {activeWorkflowStep?.description ??
                  activeStage.description}
              </p>

              <div className="mt-6">
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                  Example
                </span>

                <pre
                  className="
                    mt-3
                    overflow-x-auto
                    border
                    border-white/[0.08]
                    bg-[#050505]
                    px-4
                    py-4
                    font-mono
                    text-[11px]
                    leading-6
                    text-[#16f2b3]
                  "
                >
                  {activeWorkflowStep?.command ??
                    activeStage.command}
                </pre>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {(
                  activeWorkflowStep?.output ??
                  activeStage.output
                ).map((item) => (
                  <span
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2
                      text-[11px]
                      text-gray-400
                    "
                  >
                    <FiCheckCircle
                      size={12}
                      className="text-[#16f2b3]"
                    />

                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mt-8 lg:hidden">
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-500">
              Tap a stage for details
            </p>

            <div className="mt-4">
              {flowtestStages.map((stage) => {
                const Icon = stage.icon;

                return (
                  <button
                    key={`${stage.id}-mobile`}
                    type="button"
                    onClick={() =>
                      setMobileStep(stage)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      border-t
                      border-white/[0.08]
                      py-4
                      text-left
                    "
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-gray-600">
                        {stage.number}
                      </span>

                      <span className="text-sm text-gray-300">
                        {stage.title}
                      </span>
                    </div>

                    <Icon
                      size={14}
                      className="text-gray-500"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <WorkflowMobileModal
          step={mobileStep}
          onClose={() =>
            setMobileStep(null)
          }
        />
      </section>
    );
  }

  /* ==================================
     GENERIC PROJECT WORKFLOW
  ================================== */

  return (
    <section
      id="workflow"
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
        <WorkflowHeader
          number="06"
          title={
            <>
              How the work
              <br />
              <span className="text-gray-400">
                moves through the system.
              </span>
            </>
          }
          description={`A simplified view of how ${project.name} moves from the initial test step to its final output.`}
        />

        <div className="mt-10">
          {workflow.map((step, index) => {
            const Icon =
              genericIcons[
                index % genericIcons.length
              ];

            return (
              <motion.article
                key={`${step.title}-${index}`}
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
                  grid
                  gap-6
                  border-b
                  border-white/[0.08]
                  py-8
                  lg:grid-cols-[40px_0.55fr_1fr]
                  lg:items-start
                  lg:gap-10
                "
              >
                <div className="flex items-center gap-3 lg:block">
                  <span className="font-mono text-[10px] text-gray-500">
                    {String(index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <Icon
                    size={15}
                    className="text-[#16f2b3] lg:mt-4"
                  />
                </div>

                <div>
                  <h3 className="text-[23px] font-medium tracking-[-0.04em] text-white">
                    {step.title}
                  </h3>

                  {step.subtitle && (
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-500">
                      {step.subtitle}
                    </p>
                  )}
                </div>

                <div>
                  {step.description && (
                    <p className="max-w-2xl text-[14px] leading-7 text-gray-300">
                      {step.description}
                    </p>
                  )}

                  {step.command && (
                    <pre
                      className="
                        mt-5
                        overflow-x-auto
                        border
                        border-white/[0.08]
                        bg-[#050505]
                        px-4
                        py-3
                        font-mono
                        text-[11px]
                        leading-6
                        text-[#16f2b3]
                      "
                    >
                      {step.command}
                    </pre>
                  )}

                  {step.output?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                      {step.output.map(
                        (item) => (
                          <span
                            key={item}
                            className="
                              flex
                              items-center
                              gap-2
                              text-[11px]
                              text-gray-400
                            "
                          >
                            <FiCheckCircle
                              size={12}
                              className="text-[#16f2b3]"
                            />

                            {item}
                          </span>
                        ),
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkflowHeader({
  number,
  title,
  description,
}) {
  return (
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
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#16f2b3]">
            {number}
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
            How It Works
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
          {title}
        </h2>
      </div>

      <p className="max-w-md text-[14px] leading-7 text-gray-300">
        {description}
      </p>
    </motion.div>
  );
}