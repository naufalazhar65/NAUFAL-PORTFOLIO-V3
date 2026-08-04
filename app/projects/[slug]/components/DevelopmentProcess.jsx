"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export default function DevelopmentProcess() {
  const steps = [
    {
      title: "Requirement Analysis",
      description:
        "Understand business requirements and identify testing scope.",
    },
    {
      title: "Test Planning",
      description:
        "Prepare test strategy, scenarios, test cases and automation plan.",
    },
    {
      title: "Automation Development",
      description:
        "Develop reusable Page Object Model and automation scripts.",
    },
    {
      title: "Test Execution",
      description:
        "Execute automated test suites and monitor execution results.",
    },
    {
      title: "Reporting",
      description:
        "Generate HTML reports and analyze failed test cases.",
    },
    {
      title: "CI/CD Integration",
      description:
        "Integrate automated testing into GitHub Actions pipelines.",
    },
  ];

  return (
    <section id="development" className="relative py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="text-sm uppercase tracking-[6px] text-[#16f2b3]">
            Workflow
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Development Process
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            A simplified workflow describing how this project was designed,
            developed, tested, and continuously improved.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-[#16f2b3] via-[#16f2b3]/30 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="relative flex gap-8"
              >
                {/* Timeline Node */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#16f2b3]
                    text-black
                    shadow-[0_0_30px_rgba(22,242,179,.35)]
                  "
                >
                  <FiCheck size={24} />
                </div>

                {/* Card */}

                <div
                  className="
                    group
                    relative
                    flex-1
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#16f2b3]/40
                    hover:bg-[#16f2b3]/5
                    hover:shadow-[0_20px_50px_rgba(22,242,179,.12)]
                  "
                >
                  {/* Accent */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-1
                      origin-top
                      scale-y-0
                      bg-[#16f2b3]
                      transition
                      duration-300
                      group-hover:scale-y-100
                    "
                  />

                  {/* Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      bg-[#16f2b3]/10
                      blur-3xl
                      opacity-0
                      transition
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10">
                    <p className="text-xs uppercase tracking-[4px] text-[#16f2b3]/70">
                      STEP {(index + 1).toString().padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}