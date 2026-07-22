"use client";

import { motion } from "framer-motion";
import { FiFolder, FiFileText, FiGithub, FiExternalLink } from "react-icons/fi";

export default function Repository({ project }) {
  if (!project.repository) return null;

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-sm uppercase tracking-[6px] text-[#16f2b3]">
            Source Code
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Repository Structure
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            A simplified view of the repository architecture used in this
            project.
          </p>
        </motion.div>

        {/* Card */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-[#0b1120]
            shadow-[0_20px_80px_rgba(0,0,0,.45)]
            backdrop-blur-xl
          "
        >
          {/* Header */}

          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-[#16f2b3]/10 p-3">
                <FiGithub className="text-2xl text-[#16f2b3]" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{project.name}</h3>

                <p className="text-sm text-gray-400">Repository Overview</p>
              </div>
            </div>

            <span className="rounded-full bg-[#16f2b3]/10 px-4 py-1 text-sm font-medium text-[#16f2b3]">
              {project.repository.length} Items
            </span>
          </div>

          {/* Files */}

          <div className="divide-y divide-white/5">
            {project.repository.map((item, index) => {
              const isFolder = item.type === "folder";

              return (
                <motion.div
                  key={item.name}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  style={{
                    paddingLeft: `${item.level * 30 + 24}px`,
                  }}
                  className="
    flex
    items-center
    justify-between
    pr-6
    py-4
    transition-all
    duration-300
    hover:bg-white/[0.03]
  "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl

                        ${
                          isFolder
                            ? "bg-[#16f2b3]/10 text-[#16f2b3]"
                            : "bg-violet-500/10 text-violet-400"
                        }
                      `}
                    >
                      {isFolder ? (
                        <FiFolder size={20} />
                      ) : (
                        <FiFileText size={20} />
                      )}
                    </div>

                    <span className="font-mono text-gray-200">{item.name}</span>
                  </div>

                  <FiExternalLink className="text-gray-500" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
