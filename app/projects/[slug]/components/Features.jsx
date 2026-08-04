"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function Features({ project }) {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="text-sm uppercase tracking-[6px] text-[#16f2b3]">
            Capabilities
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Key Features
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            Core capabilities implemented to improve software quality,
            automation reliability, and testing efficiency.
          </p>
        </motion.div>

        {/* List */}

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
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                transition-all
                duration-300
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
                  bg-[#16f2b3]
                  scale-y-0
                  origin-top
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

              <div className="relative z-10 flex gap-8">
                {/* Number */}

                <div
                  className="
                    flex
                    h-20
                    w-20
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#16f2b3]/10
                    text-3xl
                    font-black
                    text-[#16f2b3]
                  "
                >
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                {/* Content */}

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <FiCheckCircle className="text-xl text-[#16f2b3]" />

                    <h3 className="text-2xl font-bold text-white">
                      {feature}
                    </h3>
                  </div>

                  <p className="mt-4 leading-8 text-gray-400">
                    This capability helps improve software quality, maintainability,
                    and execution reliability throughout the testing lifecycle.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}