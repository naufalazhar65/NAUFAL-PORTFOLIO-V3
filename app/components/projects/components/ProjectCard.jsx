"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

export default function ProjectCard({
  project,
  reverse = false,
  featured = false,
}) {
  return (
    <div
      className={`
        grid
        items-center
        gap-12

        lg:grid-cols-2
        lg:gap-14

        xl:gap-20

        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* ========================= */}
      {/* LEFT CONTENT */}
      {/* ========================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Category / Status */}

        <div className="flex flex-wrap items-center gap-3">
          {featured && (
            <span
              className="
                rounded-full

                border
                border-[#16f2b3]/30

                bg-[#16f2b3]/10

                px-3
                py-1

                text-xs
                font-semibold
                uppercase
                tracking-[2px]

                text-[#16f2b3]
              "
            >
              Flagship Project
            </span>
          )}

          <span
            className="
              rounded-full

              border
              border-white/10

              bg-white/[0.04]

              px-4
              py-2

              text-sm
              font-semibold
            "
            style={{
              color: project.color,
            }}
          >
            {project.category}
          </span>

          <span className="text-sm text-gray-500">
            {project.status}
          </span>
        </div>

        {/* Title */}

        <h2
          className={`
            mt-5

            font-black
            leading-[1.05]
            tracking-tight

            text-white

            ${
              featured
                ? "text-5xl lg:text-6xl"
                : "text-4xl lg:text-5xl"
            }
          `}
        >
          {project.name}
        </h2>

        {/* Highlight */}

        <p
          className="
            mt-6

            text-lg
            font-semibold
            tracking-wide

            text-[#16f2b3]
          "
        >
          {project.highlight}
        </p>

        {/* Description */}

        <p
          className="
            mt-7

            max-w-xl

            leading-8

            text-gray-400
          "
        >
          {project.description}
        </p>

        {/* Featured Stats */}

        {featured && project.stats?.length > 0 && (
          <div className="mt-8 grid grid-cols-3 gap-5">
            {project.stats.slice(0, 3).map((stat) => (
              <div key={stat.label}>
                <p
                  className="
                    text-3xl
                    font-black
                    text-white
                  "
                >
                  {stat.value}
                </p>

                <p
                  className="
                    mt-1

                    text-xs
                    uppercase
                    tracking-wider

                    text-gray-500
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tools */}

        {project.tools?.length > 0 && (
          <div
            className="
              mt-8

              flex
              max-h-24
              flex-wrap
              gap-2
              overflow-hidden
            "
          >
            {project.tools.slice(0, 5).map((tool) => (
              <span
                key={tool.name}
                className="
                  rounded-full

                  border
                  border-white/[0.08]

                  bg-white/[0.03]

                  px-3
                  py-1.5

                  text-xs
                  font-medium

                  text-gray-300

                  transition-colors
                  duration-300

                  hover:border-[#16f2b3]/30
                  hover:bg-[#16f2b3]/10
                  hover:text-[#16f2b3]
                "
              >
                {tool.name}
              </span>
            ))}

            {project.tools.length > 5 && (
              <span
                className="
                  rounded-full

                  border
                  border-[#16f2b3]/20

                  bg-[#16f2b3]/10

                  px-3
                  py-1.5

                  text-xs
                  font-medium

                  text-[#16f2b3]
                "
              >
                +{project.tools.length - 5}
              </span>
            )}
          </div>
        )}

        {/* Actions */}

        <div className="mt-10 flex flex-wrap gap-4">
          {featured && project.live && (
            <Link
              href="/flowtest"
              className="
                inline-flex
                items-center
                gap-2

                rounded-xl

                bg-[#16f2b3]

                px-6
                py-3

                font-semibold

                text-black

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:shadow-[0_10px_35px_rgba(22,242,179,.20)]
              "
            >
              Launch Live Demo

              <FiArrowUpRight />
            </Link>
          )}

          <Link
            href={`/projects/${project.slug}`}
            className="
              group

              inline-flex
              items-center
              gap-2

              rounded-xl

              border
              border-white/10

              px-6
              py-3

              font-semibold

              text-white

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-[#16f2b3]/30
              hover:bg-white/[0.04]
              hover:text-[#16f2b3]
            "
          >
            View Case Study

            <FiArrowUpRight
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>
        </div>
      </motion.div>

      {/* ========================= */}
      {/* RIGHT IMAGE */}
      {/* ========================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: reverse ? -35 : 35,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group relative"
      >
        {/* Glow */}

        <div
          className="
            pointer-events-none

            absolute
            -inset-8
            -z-10

            rounded-[40px]

            bg-[#16f2b3]/5

            blur-[100px]

            opacity-0

            transition-opacity
            duration-700

            group-hover:opacity-100
          "
        />

        {/* Image */}

        <div
          className={`
            relative
            overflow-hidden

            border
            border-white/[0.08]

            bg-[#0d1117]

            ${
              featured
                ? "rounded-[28px] shadow-[0_30px_80px_rgba(0,0,0,0.30)]"
                : "rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            }
          `}
        >
          <Image
            src={project.image}
            alt={project.name}
            width={1200}
            height={800}
            className="
              block
              h-auto
              w-full

              transition-transform
              duration-700
              ease-out

              group-hover:scale-[1.02]
            "
          />

          {/* Bottom Gradient */}

          <div
            className="
              pointer-events-none

              absolute
              inset-x-0
              bottom-0

              h-32

              bg-gradient-to-t
              from-[#0d1117]/50
              to-transparent
            "
          />

          {/* View Details */}

          <div
            className="
              pointer-events-none

              absolute
              inset-0

              flex
              items-center
              justify-center

              bg-black/0

              transition-colors
              duration-500

              group-hover:bg-black/30
            "
          >
            <Link
              href={`/projects/${project.slug}`}
              className="
                pointer-events-auto

                translate-y-3

                rounded-xl

                bg-white

                px-6
                py-3

                font-semibold

                text-black

                opacity-0

                transition-all
                duration-300

                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              View Details
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}