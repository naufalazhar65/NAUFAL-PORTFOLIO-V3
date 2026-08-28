"use client";

import { motion } from "framer-motion";

import { projectsData } from "@/utils/data/projects-data";

import FeaturedProject from "./components/FeaturedProject";
import ProjectsList from "./components/ProjectsList";

export default function Projects() {
  const featuredProject = projectsData.find((project) => project.featured);

  const otherProjects = projectsData.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="
        relative
        w-full
        overflow-hidden
        pb-16
        pt-28
        sm:pb-20
        sm:pt-32
        lg:pb-24
        lg:pt-28
      "
    >
      {/* Ambient Background */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[10%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-white/[0.02]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[5%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#16f2b3]/[0.015]
          blur-[140px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =========================
            HEADER
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            border-b
            border-white/[0.08]
            pb-10
            lg:pb-14
          "
        >
          <div className="mb-6 flex items-center gap-4">
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-gray-400
              "
            >
              01
            </span>

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-gray-400
              "
            >
              Selected Work
            </span>
          </div>

          <h1
            className="
              max-w-5xl
              text-[clamp(52px,8vw,112px)]
              font-semibold
              leading-[0.96]
              tracking-[-0.07em]
              text-white
            "
          >
            QA work,
            <br />
            <span className="text-gray-400">built around real problems.</span>
          </h1>

          <p
            className="
              mt-8
              max-w-2xl
              text-[15px]
              leading-7
              text-gray-300
              sm:text-base
            "
          >
            Automation frameworks, mobile test tooling, API validation,
            performance testing, and QA documentation built to make testing more
            repeatable and easier to investigate.
          </p>
        </motion.div>

        {/* =========================
            FEATURED (Only if exists)
        ========================= */}

        {featuredProject && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pt-14 lg:pt-20"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#16f2b3]
                  "
                >
                  02
                </span>

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-gray-400
                  "
                >
                  The Project I&apos;m Building Now
                </span>
              </div>

              <span
                className="
                  hidden
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-gray-400
                  sm:block
                "
              >
                Current Build
              </span>
            </div>

            {/* Featured Ambient Glow */}

            <div className="relative">
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  -z-10
                  h-[420px]
                  w-[70%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-white/[0.018]
                  blur-[100px]
                "
              />

              <FeaturedProject project={featuredProject} />
            </div>
          </motion.div>
        )}

        {/* =========================
            OTHER PROJECTS
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: 0.7,
            delay: 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`${featuredProject ? "pt-20 lg:pt-28" : "pt-14 lg:pt-20"}`}
        >
          <div
            className="
              mb-8
              flex
              items-center
              justify-between
              border-b
              border-white/[0.08]
              pb-6
            "
          >
            <div className="flex items-center gap-4">
              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-gray-400
                "
              >
                03
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-gray-400
                "
              >
                Earlier Work
              </span>
            </div>

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-gray-400
              "
            >
              {otherProjects.length.toString().padStart(2, "0")} projects
            </span>
          </div>

          <ProjectsList projects={otherProjects} />
        </motion.div>
      </div>
    </section>
  );
}