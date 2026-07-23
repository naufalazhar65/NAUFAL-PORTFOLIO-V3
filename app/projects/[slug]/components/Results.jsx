"use client";

import { motion } from "framer-motion";


export default function Results({ project }) {
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
          <span className="uppercase tracking-[5px] text-sm text-[#16f2b3]">
            Performance
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Results & Impact
          </h2>

          <p className="mt-5 max-w-3xl text-gray-400 leading-8">
            Key metrics demonstrating the effectiveness and impact of this
            project.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {project.stats.map((item, index,) => (

            <motion.div
              key={item.label}
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
                delay: index * .08,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
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
              "
            >

              {/* Glow */}

              <div
                className="
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
              
              <p className= "text-5xl font-black text-[#16f2b3]">
                {item.value}
              </p>

              <p className="mt-4 text-lg font-semibold text-white">
                {item.label}
              </p>

              <div className="mt-6 h-[2px] w-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: .3,
                  }}
                  className="h-full rounded-full bg-[#16f2b3]"
                />
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}