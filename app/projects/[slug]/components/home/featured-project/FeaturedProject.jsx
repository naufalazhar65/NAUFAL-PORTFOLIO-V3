"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPlay, FiStar } from "react-icons/fi";

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="relative overflow-hidden py-28">
      {/* Background glow */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#16f2b3]/10
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-sky-500/10
            blur-[160px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3">
            <FiStar className="text-[#16f2b3]" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[5px]
                text-[#16f2b3]
              "
            >
              Featured Project
            </span>
          </div>

          <div className="mt-5 h-px w-full bg-gradient-to-r from-[#16f2b3]/40 via-white/10 to-transparent" />
        </motion.div>

        {/* Main card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            group
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-white/[0.03]
            p-6
            backdrop-blur-xl
            sm:p-8
            lg:p-10
          "
        >
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Content */}

            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#16f2b3]/20
                  bg-[#16f2b3]/10
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-[#16f2b3]
                "
              >
                Flagship Project
              </div>

              <h2
                className="
                  mt-7
                  text-4xl
                  font-black
                  tracking-tight
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                FlowTest Studio
              </h2>

              <p className="mt-5 text-xl font-semibold text-[#16f2b3]">
                Visual Mobile Automation Testing Platform
              </p>

              <p className="mt-6 max-w-xl leading-8 text-gray-400">
                A visual workflow-based testing platform designed to explore a
                simpler way of building and simulating mobile automation
                workflows through reusable nodes.
              </p>

              {/* Tech */}

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "React Flow",
                  "Zustand",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-gray-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/projects/flowtest-studio"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-[#16f2b3]
                    px-6
                    py-3.5
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_15px_40px_rgba(22,242,179,.18)]
                  "
                >
                  Explore Case Study
                  <FiArrowUpRight />
                </Link>

                <Link
                  href="/flowtest"
                  target="_blank"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-6
                    py-3.5
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#16f2b3]/30
                    hover:bg-[#16f2b3]/10
                  "
                >
                  <FiPlay />
                  Try Live Demo
                </Link>
              </div>
            </div>

            {/* Preview */}

            <div className="relative">
              <div
                className="
                  absolute
                  inset-10
                  rounded-full
                  bg-[#16f2b3]/10
                  blur-[100px]
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#0d1117]
                  shadow-[0_30px_80px_rgba(0,0,0,.45)]
                  transition-transform
                  duration-500
                  group-hover:-translate-y-2
                "
              >
                {/* Window header */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    border-b
                    border-white/10
                    bg-[#161b22]
                    px-5
                    py-4
                  "
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                  <span className="ml-3 text-xs text-gray-500">
                    FlowTest Studio
                  </span>
                </div>

                <div className="relative aspect-[16/10]">
                  <Image
                    src="/projects/flowtest-studio.png"
                    alt="FlowTest Studio visual automation workflow preview"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </div>

              {/* Floating badge */}

              <div
                className="
                  absolute
                  -bottom-4
                  right-6
                  rounded-2xl
                  border
                  border-[#16f2b3]/20
                  bg-[#111827]/90
                  px-4
                  py-3
                  backdrop-blur-xl
                "
              >
                <p className="text-xs text-gray-500">Interactive Demo</p>

                <p className="mt-1 font-semibold text-[#16f2b3]">
                  Available Now
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
