"use client";

import { motion } from "framer-motion";
import { FiZap, FiCpu, FiLayers, FiSmartphone } from "react-icons/fi";

export default function Overview({ project }) {
  const facts = [
    {
      icon: <FiSmartphone />,
      label: "Platform",
      value: "Android",
    },
    {
      icon: <FiLayers />,
      label: "Framework",
      value: "React Flow",
    },
    {
      icon: <FiCpu />,
      label: "Execution",
      value: "Appium",
    },
    {
      icon: <FiZap />,
      label: "Language",
      value: "TypeScript",
    },
  ];

  return (
    <section
      id="overview"
      className="relative py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[6px]
              text-primary
            "
          >
            Overview
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-black
              text-white
              md:text-5xl
            "
          >
            Understand the Project
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-lg
              leading-8
              text-gray-400
            "
          >
            A quick overview of the purpose, architecture,
            and technologies behind FlowTest Studio.
          </p>
        </motion.div>

        {/* Top Grid */}

        <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">

          {/* Highlight */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  rounded-xl
                  bg-primary/10
                  p-3
                  text-primary
                "
              >
                ✨
              </div>

              <h3
                className="
                  text-xl
                  font-bold
                  text-white
                "
              >
                Highlight
              </h3>
            </div>

            <p
              className="
                mt-8
                text-3xl
                font-bold
                leading-relaxed
                text-primary
              "
            >
              {project.highlight}
            </p>
          </motion.div>

          {/* Quick Facts */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
            "
          >
            <h3
              className="
                mb-6
                text-xl
                font-bold
                text-white
              "
            >
              Quick Facts
            </h3>

            <div className="space-y-5">
              {facts.map((item) => (
                <div
                  key={item.label}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/5
                    pb-4
                    last:border-none
                    last:pb-0
                  "
                >
                  <div className="flex items-center gap-3 text-gray-400">
                    <span className="text-primary">
                      {item.icon}
                    </span>

                    {item.label}
                  </div>

                  <span
                    className="
                      font-semibold
                      text-white
                    "
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Description */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-10
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-8
          "
        >
          <h3
            className="
              text-xl
              font-bold
              text-white
            "
          >
            Description
          </h3>

          <p
            className="
              mt-6
              max-w-4xl
              text-lg
              leading-9
              text-gray-400
            "
          >
            {project.description}
          </p>
        </motion.div>

      </div>
    </section>
  );
}