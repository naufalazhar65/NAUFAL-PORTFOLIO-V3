"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiMail,
} from "react-icons/fi";

export default function CTA({ project }) {
  if (!project) {
    return null;
  }

  const isFlowTest =
    project.slug === "flowtest-studio";

  const hasGithub =
    Boolean(project.github);

  const hasLive =
    Boolean(project.live);

  return (
    <section
      id="cta"
      className="
        relative
        overflow-hidden
        border-b
        border-white/[0.08]
        py-16
        sm:py-20
        lg:py-24
      "
    >
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="
            grid
            gap-10
            border-t
            border-white/[0.08]
            pt-10
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-20
            lg:pt-12
          "
        >
          {/* CONTEXT */}
          <div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#16f2b3]">
                09
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                Continue
              </span>
            </div>

            <p className="mt-7 max-w-sm text-[13px] leading-7 text-gray-400">
              {isFlowTest
                ? "FlowTest Studio is an active engineering project. The implementation is still evolving, but the repository and interactive build are available to inspect."
                : `${project.name} is part of my QA and automation work. The project source or supporting material is available below.`}
            </p>
          </div>

          {/* MAIN */}
          <div>
            <h2 className="max-w-4xl text-[clamp(46px,6.5vw,92px)] font-semibold leading-[0.92] tracking-[-0.07em] text-white">
              {isFlowTest ? (
                <>
                  See the implementation.
                  <br />
                  <span className="text-gray-400">Then talk to me about QA.</span>
                </>
              ) : (
                <>
                  Take a closer look.
                  <br />
                  <span className="text-gray-400">Then explore the rest.</span>
                </>
              )}
            </h2>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              {/* GitHub */}
              {hasGithub && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-3 rounded-full bg-white px-5 text-sm font-medium text-black transition-colors duration-200 hover:bg-gray-200"
                >
                  <FiGithub size={14} />
                  {isFlowTest ? "View repository" : "View GitHub"}
                  <FiArrowUpRight size={13} />
                </Link>
              )}

              {/* Live / Documentation */}
              {hasLive && (
                <Link
                  href={project.live}
                  target={project.live.startsWith("/") ? undefined : "_blank"}
                  rel={project.live.startsWith("/") ? undefined : "noopener noreferrer"}
                  className="inline-flex min-h-11 items-center gap-3 rounded-full border border-white/[0.1] px-5 text-sm font-medium text-white transition-colors duration-200 hover:border-white/[0.2] hover:bg-white/[0.02]"
                >
                  <FiExternalLink size={14} />
                  {project.liveLabel || "View project"}
                  <FiArrowUpRight size={13} />
                </Link>
              )}

              {/* Contact */}
              {isFlowTest && (
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center gap-3 rounded-full border border-white/[0.1] px-5 text-sm font-medium text-white transition-colors duration-200 hover:border-white/[0.2] hover:bg-white/[0.02]"
                >
                  <FiMail size={14} />
                  Discuss QA tooling
                  <FiArrowUpRight size={13} />
                </Link>
              )}

              {/* Other projects */}
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-1 text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-white"
              >
                Other projects
                <FiArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}