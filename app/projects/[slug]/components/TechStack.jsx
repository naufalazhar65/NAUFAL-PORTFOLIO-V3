"use client";

import { motion } from "framer-motion";
import { techIcons } from "@/utils/tech-icons";

export default function TechStack({ project }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="text-[#16f2b3] uppercase tracking-[5px] text-sm">
            Technology
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Tech Stack
          </h2>

          <p className="mt-5 max-w-3xl text-gray-400 leading-8">
            Technologies and tools used to build and maintain this project.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.tools.map((tool, index) => {
            const Icon = techIcons[tool.name];

            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-7
        transition-all
        duration-300
        hover:border-[#16f2b3]/40
        hover:bg-[#16f2b3]/5
      "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {tool.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">Technology</p>
                  </div>

                  <div
                    className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-[#16f2b3]/10
            text-3xl
            text-[#16f2b3]
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
