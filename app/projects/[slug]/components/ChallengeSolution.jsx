"use client";

import { motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function ChallengeSolution({ project }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
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

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Challenge */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              rounded-3xl
              border
              border-red-500/20
              bg-red-500/5
              p-8
            "
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-red-500/10 p-3 text-red-400">
                <FiAlertCircle size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Challenge
              </h3>
            </div>

            <p className="leading-8 text-gray-300">
              {project.challenge}
            </p>
          </motion.div>

          {/* Solution */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              rounded-3xl
              border
              border-[#16f2b3]/20
              bg-[#16f2b3]/5
              p-8
            "
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-[#16f2b3]/10 p-3 text-[#16f2b3]">
                <HiOutlineLightBulb size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Solution
              </h3>
            </div>

            <p className="leading-8 text-gray-300">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}