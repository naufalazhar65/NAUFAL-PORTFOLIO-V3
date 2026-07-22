"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function Hero({ project }) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
      absolute
      -top-32
      left-[-10%]
      h-[500px]
      w-[500px]
      rounded-full
      bg-[#7c3aed]/20
      blur-[180px]
    "
        />

        <div
          className="
      absolute
      top-40
      right-[-10%]
      h-[450px]
      w-[450px]
      rounded-full
      bg-[#16f2b3]/15
      blur-[180px]
    "
        />

        <div
          className="
      absolute
      bottom-[-120px]
      left-1/2
      h-[600px]
      w-[600px]
      -translate-x-1/2
      rounded-full
      bg-pink-500/10
      blur-[220px]
    "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* Badge */}

            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl">{project.icon}</span>

              <span
                className="
                  rounded-full
                  border
                  border-white/10
                  px-5
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[4px]
                  backdrop-blur-xl
                "
                style={{
                  background: `${project.color}20`,
                  color: project.color,
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Title */}

            <h1
              className="
                mt-8
                text-5xl
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
                font-black
                leading-[0.95]
                tracking-tight
                text-white
              "
            >
              {project.name}
            </h1>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-gray-400
                sm:text-xl
              "
            >
              {project.summary}
            </p>

            {/* Badges */}

            <div className="mt-10 flex flex-wrap gap-3">
              {[project.status, project.year, project.role].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-5
                    py-2
                    text-sm
                    text-gray-300
                    backdrop-blur-xl
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="
                    flex
                    h-14
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#16f2b3]
                    px-8
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-[#16f2b3]
                    hover:text-black
                  "
                >
                  <FaGithub />

                  {project.githubLabel}
                </Link>
              )}

              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  className="
                    flex
                    h-14
                    items-center
                    gap-3
                    rounded-full
                    bg-[#16f2b3]
                    px-8
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  {project.liveLabel}

                  <FiArrowUpRight />
                </Link>
              )}
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
              },
              x: {
                duration: 0.8,
              },
              y: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative"
          >
            {/* Glow */}

            <div
              className="
                absolute
                -inset-10
                rounded-full
                bg-[#16f2b3]/20
                blur-[120px]
              "
            />

            {/* Browser Frame */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-[#11152c]
                shadow-[0_40px_120px_rgba(0,0,0,.45)]
              "
            >
              {/* Browser Top */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  border-b
                  border-white/10
                  bg-[#0b1120]
                  px-6
                  py-4
                "
              >
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-500" />

                <div
                  className="
                    ml-5
                    rounded-full
                    bg-white/5
                    px-4
                    py-1
                    text-xs
                    text-gray-400
                  "
                >
                  {project.github
                    ? project.github.replace("https://github.com/", "")
                    : project.name}
                </div>
              </div>

              {/* Screenshot */}

              <Image
                src={project.image}
                alt={project.name}
                priority
                className="
                  w-full
                  h-auto
                  transition-all
                  duration-700
                  hover:scale-[1.03]
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
