"use client";

import { motion } from "framer-motion";

export default function Features({ project }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-20"
        >
          <span className="text-[#16f2b3] uppercase tracking-[5px] text-sm">
            Capabilities
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Key Features
          </h2>

          <p className="mt-5 max-w-3xl text-gray-400 leading-8">
            The main capabilities implemented in this testing project.
          </p>
        </motion.div>

        <div className="space-y-8">
          {project.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .1,
              }}
              className="
                group
                flex
                gap-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                transition-all
                duration-300
                hover:border-[#16f2b3]/30
              "
            >
              <div
                className="
                  text-5xl
                  font-black
                  text-[#16f2b3]/30
                  w-20
                  shrink-0
                "
              >
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  {feature}
                </h3>

                <p className="mt-3 leading-8 text-gray-400">
                  This project includes {feature.toLowerCase()} to improve software quality,
                  maintainability and testing efficiency.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}