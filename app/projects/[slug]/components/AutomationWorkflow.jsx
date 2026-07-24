"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm uppercase tracking-[6px] text-[#16f2b3]">
            Automation
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Execution Pipeline
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            End-to-end automation workflow executed during every test run.
          </p>
        </motion.div>

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
                      hover:shadow-[0_0_30px_rgba(22,242,179,.15)]

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
                        <div className="h-2 w-2 rounded-full bg-green-400" />

                        <span className="text-xs text-green-400">Ready</span>
                      </div>
                    </div>

                    {/* Icon */}

                    <div className="mb-5 inline-flex rounded-xl bg-[#16f2b3]/10 p-3">
                      <Icon className="text-2xl text-[#16f2b3]" />
                    </div>

                    {/* Title */}

                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      {item.subtitle}
                    </p>

                    {/* Progress */}

                    <div className="mt-6 h-1 rounded-full bg-white/10">
                      <div className="h-full w-full rounded-full bg-[#16f2b3]" />
                    </div>
                  </div>

                  {index !== project.workflow.length - 1 && (
                    <FiArrowRight className="mx-5 text-3xl text-[#16f2b3]" />
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
                  onClick={() => setActiveStep(item)}
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
                  <FiArrowDown className="my-5 text-2xl text-[#16f2b3]" />
                )}
              </div>
            );
          })}
        </div>

        {/* ================= DETAIL ================= */}

        <motion.div
          key={activeStep.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="
            mt-14
            rounded-2xl
            border
            border-white/10
            bg-[#111827]
            p-8
          "
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

              <pre className="overflow-auto rounded-xl bg-[#0d1117] p-5 text-sm text-[#16f2b3]">
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
                  <div
                    key={item}
                    className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-gray-300"
                  >
                    ✅ {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
