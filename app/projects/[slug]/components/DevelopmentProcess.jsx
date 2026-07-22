"use client";

import { motion } from "framer-motion";

export default function DevelopmentProcess({ project }) {
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
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-20"
        >
          <span className="text-[#16f2b3] uppercase tracking-[5px] text-sm">
            Workflow
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Development Process
          </h2>

          <p className="mt-5 max-w-3xl text-gray-400 leading-8">
            A simplified workflow describing how this project was designed,
            developed and executed.
          </p>
        </motion.div>

        <div className="relative">

          <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-[#16f2b3] via-[#16f2b3]/30 to-transparent" />

          <div className="space-y-12">

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .08,
                }}
                className="relative flex gap-8"
              >
                <div
                  className="
                    z-10
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-[#16f2b3]
                    font-bold
                    text-black
                    shadow-[0_0_25px_rgba(22,242,179,.35)]
                  "
                >
                  {index + 1}
                </div>

                <div
                  className="
                    flex-1
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    transition-all
                    duration-300
                    hover:border-[#16f2b3]/40
                    hover:bg-[#16f2b3]/5
                  "
                >
                  <h3 className="text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-400">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}