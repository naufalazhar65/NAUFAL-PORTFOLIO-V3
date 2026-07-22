"use client";

import { motion } from "framer-motion";

export default function Overview({ project }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl">

        {/* Section Title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-16"
        >
          <span className="text-[#16f2b3] uppercase tracking-[5px] text-sm">
            Overview
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Project Overview
          </h2>
        </motion.div>

        {/* Grid */}

        <div className="grid gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <div className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
            ">
              <h3 className="text-2xl font-bold text-white">
                Highlight
              </h3>

              <p className="mt-6 text-lg leading-8 text-[#16f2b3]">
                {project.highlight}
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <div className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
            ">
              <h3 className="text-2xl font-bold text-white">
                Description
              </h3>

              <p className="mt-6 leading-8 text-gray-400">
                {project.description}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}