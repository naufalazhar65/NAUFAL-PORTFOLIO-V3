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

        <div className="flex flex-wrap items-center gap-2">
          {featured && (
            <span
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-white/[0.08]

                bg-white/[0.03]

                px-3
                py-1

                text-[11px]
                font-medium
                uppercase
                tracking-[2px]

                text-gray-400

                backdrop-blur-xl
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#16f2b3]
                  shadow-[0_0_8px_rgba(22,242,179,0.8)]
                "
              />
              Flagship
            </span>
          )}

          <span
            className="
              rounded-full

              border
              border-white/[0.08]

              bg-white/[0.03]

              px-3
              py-1

              text-[11px]
              font-medium

              text-gray-400
            "
          >
            {project.category}
          </span>

          <span className="text-[11px] text-gray-600">
            {project.status}
          </span>
        </div>

        {/* Title */}

        <h2
          className={`
            mt-5

            font-semibold
            leading-[1.1]
            tracking-tight

            text-white

            ${
              featured
                ? "text-4xl lg:text-5xl"
                : "text-3xl lg:text-4xl"
            }
          `}
        >
          {project.name}
        </h2>

        {/* Highlight */}

        <p
          className="
            mt-4

            text-base
            font-medium
            tracking-tight

            text-[#16f2b3]
          "
        >
          {project.highlight}
        </p>

        {/* Description */}

        <p
          className="
            mt-5

            max-w-lg

            text-[15px]
            leading-7

            text-gray-500
          "
        >
          {project.description}
        </p>

        {/* Featured Stats */}

        {featured && project.stats?.length > 0 && (
          <div
            className="
              mt-8

              flex
              flex-wrap

              divide-x
              divide-white/[0.06]
            "
          >
            {project.stats.slice(0, 3).map((stat) => (
              <div
                key={stat.label}
                className="px-5 first:pl-0"
              >
                <p
                  className="
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  {stat.value}
                </p>

                <p
                  className="
                    mt-1

                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[1.5px]

                    text-gray-600
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
                  rounded-lg

                  border
                  border-white/[0.08]

                  bg-white/[0.03]

                  px-2.5
                  py-1

                  font-mono
                  text-xs

                  text-gray-400

                  transition-colors
                  duration-200

                  hover:border-[#16f2b3]/30
                  hover:text-[#16f2b3]
                "
              >
                {tool.name}
              </span>
            ))}

            {project.tools.length > 5 && (
              <span
                className="
                  rounded-lg

                  border
                  border-[#16f2b3]/20

                  bg-[#16f2b3]/[0.06]

                  px-2.5
                  py-1

                  font-mono
                  text-xs

                  text-[#16f2b3]
                "
              >
                +{project.tools.length - 5}
              </span>
            )}
          </div>
        )}

        {/* Actions */}

        <div className="mt-9 flex flex-wrap items-center gap-3">
          {featured && project.live && (
            <Link
              href="/flowtest"
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                bg-[#16f2b3]

                px-5
                py-2.5

                text-sm
                font-medium

                text-black

                transition-transform
                duration-200

                hover:scale-[1.03]
              "
            >
              Launch Live Demo

              <FiArrowUpRight className="text-[13px]" />
            </Link>
          )}

          <Link
            href={`/projects/${project.slug}`}
            className="
              group

              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-white/[0.08]

              bg-white/[0.03]

              px-5
              py-2.5

              text-sm
              font-medium

              text-white

              backdrop-blur-xl

              transition-colors
              duration-200

              hover:border-[#16f2b3]/30
              hover:bg-white/[0.05]
            "
          >
            View Case Study

            <FiArrowUpRight
              className="
                text-[13px]

                transition-transform
                duration-200

                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>
      </motion.div>

      {/* ========================= */}
      {/* RIGHT IMAGE — window chrome */}
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

        {/* Window */}

        <div
          className="
            relative
            overflow-hidden

            rounded-2xl

            border
            border-white/[0.08]

            bg-[#0d1117]

            shadow-[0_25px_70px_rgba(0,0,0,0.35)]
          "
        >
          {/* Title bar */}

          <div
            className="
              relative
              flex
              h-10
              items-center
              justify-center
              border-b
              border-white/[0.06]
              bg-white/[0.02]
              px-4
            "
          >
            <div className="absolute left-4 flex items-center gap-[6px]">
              <span className="h-[10px] w-[10px] rounded-full bg-[#FF5F57]" />
              <span className="h-[10px] w-[10px] rounded-full bg-[#FEBC2E]" />
              <span className="h-[10px] w-[10px] rounded-full bg-[#28C840]" />
            </div>

            <span className="text-[11px] font-medium text-gray-500">
              {project.slug}
            </span>
          </div>

          {/* Image */}

          <div className="relative">
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

                h-28

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

                  rounded-full

                  bg-white

                  px-5
                  py-2.5

                  text-sm
                  font-medium

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
        </div>
      </motion.div>
    </div>
  );
}