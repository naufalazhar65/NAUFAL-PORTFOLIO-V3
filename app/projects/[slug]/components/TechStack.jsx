"use client";

import { motion } from "framer-motion";
import { techIcons } from "@/utils/tech-icons";

export default function TechStack({ project }) {
  return (
    <section id="tech-stack" className="relative py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="text-sm uppercase tracking-[6px] text-[#16f2b3]">
            Technology
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Tech Stack
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            Technologies and tools used to build, automate, and maintain this
            project.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.tools.map((tool, index) => {
            const Icon = techIcons[tool.name];

            return (
              <motion.div
                key={tool.name}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-7
                  transition-all
                  duration-300
                  hover:border-[#16f2b3]/50
                  hover:bg-[#16f2b3]/5
                  hover:shadow-[0_20px_50px_rgba(22,242,179,.12)]
                "
              >
                {/* Top Accent */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-full
                    origin-left
                    scale-x-0
                    bg-[#16f2b3]
                    transition
                    duration-300
                    group-hover:scale-x-100
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

                <div className="relative z-10 flex items-center justify-between">
                  {/* Left */}

                  <div>
                    <p className="text-xs uppercase tracking-[4px] text-[#16f2b3]/70">
                      Technology
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {tool.name}
                    </h3>
                  </div>

                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#16f2b3]/10
                      text-4xl
                      text-[#16f2b3]
                      transition
                      duration-300
                      group-hover:scale-110
                      group-hover:rotate-6
                      group-hover:bg-[#16f2b3]/15
                    "
                  >
                    {Icon ? <Icon /> : "⚙️"}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

