"use client";

import { useEffect, useState } from "react";
import WorkflowMobileModal from "./WorkflowMobileModal";
import Section from "@/app/components/ui/section/Section";
import SectionHeader from "@/app/components/ui/section/SectionHeader";
import Panel from "@/app/components/ui/panel/Panel";
import {
  FiArrowRight,
  FiArrowDown,
  FiFileText,
  FiCpu,
  FiCheckCircle,
  FiBox,
} from "react-icons/fi";
import { FaApple, FaAndroid, FaTelegram, FaHtml5 } from "react-icons/fa";
import { SiAppium, SiPytest } from "react-icons/si";
import { motion } from "framer-motion";


const iconMap = {
  test: FiCheckCircle,
  pytest: SiPytest,
  page: FiFileText,
  driver: FiCpu,
  appium: SiAppium,
  android: FaAndroid,
  ios: FaApple,
  report: FaHtml5,
  telegram: FaTelegram,
};

export default function AutomationWorkflow({ project }) {
  if (!project?.workflow?.length) return null;

  const [activeStep, setActiveStep] = useState(project.workflow[0]);
  const [mobileStep, setMobileStep] = useState(null);
  const [runningStep, setRunningStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRunningStep((current) => {
        const next = (current + 1) % project.workflow.length;

        setActiveStep(project.workflow[next]);

        return next;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [project.workflow]);

  return (
    <Section width="xl">
      <SectionHeader
        eyebrow="Automation"
        title="Execution Pipeline"
        description="End-to-end automation workflow executed during every test run."
      />
      {/* Heading */}

      {/* ================= DESKTOP ================= */}

      <Panel animated padding="none" className="overflow-hidden bg-[#0b1120]">
        {/* ================= DESKTOP ================= */}

        <div className="hidden overflow-x-auto scrollbar-hide pb-6 lg:block">
          <div className="flex min-w-max items-center">
            {project.workflow.map((item, index) => {
              const Icon = iconMap[item.icon] || FiBox;

              return (
                <div key={item.title} className="flex items-center">
                  <div
                    onClick={() => setActiveStep(item)}
                    className={`
                      w-64
                      cursor-pointer
                      rounded-2xl
                      border
                      p-6
                      transition-all
                      duration-300

                      hover:border-[#16f2b3]
                      hover:-translate-y-1
hover:border-[#16f2b3]
hover:shadow-[0_0_30px_rgba(22,242,179,.18)]

                      ${
                        activeStep.title === item.title
                          ? "border-[#16f2b3] bg-[#162031]"
                          : "border-white/10 bg-[#111827]"
                      }
                    `}
                  >
                    {/* Step */}

                    <div className="mb-6 flex items-center justify-between">
                      <span className="rounded-full bg-[#16f2b3]/10 px-3 py-1 text-xs font-semibold text-[#16f2b3]">
                        STEP {index + 1}
                      </span>

                      <div className="flex items-center gap-2">
                        <div
                          className={`
    h-2
    w-2
    rounded-full
    transition-all

    ${
      index < runningStep
        ? "bg-emerald-400"
        : index === runningStep
          ? "animate-pulse bg-[#16f2b3]"
          : "bg-gray-500"
    }
  `}
                        />

                        <span
                          className={`
    text-xs
    font-medium

    ${
      index < runningStep
        ? "text-emerald-400"
        : index === runningStep
          ? "text-[#16f2b3]"
          : "text-gray-500"
    }
  `}
                        >
                          {index < runningStep
                            ? "Completed"
                            : index === runningStep
                              ? "Running"
                              : "Pending"}
                        </span>
                      </div>
                    </div>

                    {/* Icon */}

                    <div className="mb-5 inline-flex rounded-xl bg-[#16f2b3]/10 p-3">
                      <Icon
                        className={`
    text-2xl
    transition-all

    ${
      index === runningStep
        ? "scale-110 text-[#16f2b3]"
        : index < runningStep
          ? "text-emerald-400"
          : "text-gray-400"
    }
  `}
                      />
                    </div>

                    {/* Title */}

                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      {item.subtitle}
                    </p>

                    {/* Progress */}

                    <div className="mt-6 h-1 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`
      h-full
      rounded-full
      transition-all
      duration-700

      ${
        index < runningStep
          ? "w-full bg-emerald-400"
          : index === runningStep
            ? "w-2/3 bg-[#16f2b3]"
            : "w-0"
      }
    `}
                      />
                    </div>
                  </div>

                  {index !== project.workflow.length - 1 && (
                    <div className="mx-4 flex w-16 items-center">
                      <div
                        className={`
      h-[2px]
      flex-1
      transition-all
      duration-700

      ${
        index < runningStep
          ? "bg-emerald-400"
          : index === runningStep
            ? "bg-[#16f2b3]"
            : "bg-white/10"
      }
    `}
                      />

                      <FiArrowRight
                        className={`
      -ml-1
      text-xl
      transition-all
      duration-700

      ${
        index < runningStep
          ? "text-emerald-400"
          : index === runningStep
            ? "animate-pulse text-[#16f2b3]"
            : "text-gray-600"
      }
    `}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= MOBILE ================= */}

        <div className="flex flex-col items-center lg:hidden">
          {project.workflow.map((item, index) => {
            const Icon = iconMap[item.icon] || FiBox;

            return (
              <div key={item.title} className="flex flex-col items-center">
                <div
                  onClick={() => {}}
                  className={`
                    w-full
                    max-w-sm
                    cursor-pointer
                    rounded-2xl
                    border
                    p-6
                    transition-all

                    ${
                      activeStep.title === item.title
                        ? "border-[#16f2b3] bg-[#162031]"
                        : "border-white/10 bg-[#111827]"
                    }
                  `}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-full bg-[#16f2b3]/10 px-3 py-1 text-xs font-semibold text-[#16f2b3]">
                      STEP {index + 1}
                    </span>

                    <Icon className="text-2xl text-[#16f2b3]" />
                  </div>

                  <h3 className="text-lg font-bold text-white">{item.title}</h3>

                  <p className="mt-2 text-sm text-gray-400">{item.subtitle}</p>
                </div>

                {index !== project.workflow.length - 1 && (
                  <div className="my-4 flex flex-col items-center">
                    <div
                      className={`
      w-[2px]
      h-8
      transition-all

      ${
        index < runningStep
          ? "bg-emerald-400"
          : index === runningStep
            ? "bg-[#16f2b3]"
            : "bg-white/10"
      }
    `}
                    />

                    <FiArrowDown
                      className={`
      mt-1
      transition-all

      ${
        index < runningStep
          ? "text-emerald-400"
          : index === runningStep
            ? "animate-pulse text-[#16f2b3]"
            : "text-gray-600"
      }
    `}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= DETAIL (Desktop Only) ================= */}

        <motion.div
          key={activeStep.title}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="hidden border-t border-white/10 p-8 lg:block"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-[#16f2b3]/10 p-3">
              {(iconMap[activeStep.icon] || FiBox)({
                className: "text-2xl text-[#16f2b3]",
              })}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                {activeStep.title}
              </h3>

              <p className="text-gray-400">{activeStep.subtitle}</p>
            </div>
          </div>

          <p className="mt-8 leading-8 text-gray-300">
            {activeStep.description || "No description available."}
          </p>

          {activeStep.command && (
            <div className="mt-8">
              <p className="mb-3 text-sm uppercase tracking-[3px] text-gray-500">
                Command
              </p>

              <pre
                className="
overflow-auto
rounded-2xl
border
border-white/10
bg-[#0d1117]
p-5
font-mono
text-sm
text-[#16f2b3]
"
              >
                {activeStep.command}
              </pre>
            </div>
          )}

          {activeStep.output?.length > 0 && (
            <div className="mt-8">
              <p className="mb-3 text-sm uppercase tracking-[3px] text-gray-500">
                Output
              </p>

              <div className="space-y-3">
                {activeStep.output.map((item) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-gray-300"
                  >
                    ✅ {item}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </Panel>
      <WorkflowMobileModal
        step={mobileStep}
        onClose={() => setMobileStep(null)}
      />
    </Section>
  );
}
