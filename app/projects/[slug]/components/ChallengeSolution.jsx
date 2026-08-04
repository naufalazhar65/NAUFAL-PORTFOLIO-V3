"use client";

import { motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function ChallengeSolution({ project }) {
  return (
    <section id="challenge" className="relative py-24">
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
            Case Study
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Challenge & Solution
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            Every project starts with a problem. Here's the challenge I faced
            and the solution implemented to improve software quality and testing
            efficiency.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Challenge */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-red-500/20
              bg-red-500/5
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-red-500/40
              hover:shadow-[0_20px_50px_rgba(239,68,68,.15)]
            "
          >
            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-44
                w-44
                rounded-full
                bg-red-500/10
                blur-3xl
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-red-500/10
                    text-red-400
                    transition
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <FiAlertCircle size={30} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[4px] text-red-400/70">
                    Problem
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Challenge
                  </h3>
                </div>
              </div>

              <p className="leading-8 text-gray-300">{project.challenge}</p>
            </div>
          </motion.div>

          {/* Solution */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-[#16f2b3]/20
              bg-[#16f2b3]/5
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[#16f2b3]/50
              hover:shadow-[0_20px_50px_rgba(22,242,179,.15)]
            "
          >
            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-44
                w-44
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
              <div className="mb-6 flex items-center gap-4">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#16f2b3]/10
                    text-[#16f2b3]
                    transition
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <HiOutlineLightBulb size={30} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[4px] text-[#16f2b3]/70">
                    Implementation
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Solution
                  </h3>
                </div>
              </div>

              <p className="leading-8 text-gray-300">{project.solution}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
