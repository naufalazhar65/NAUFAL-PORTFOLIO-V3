"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiPlay } from "react-icons/fi";

import Section from "@/app/components/ui/section/Section";

export default function CTA({ project }) {
  if (project.slug !== "flowtest-studio") {
    return null;
  }

  return (
    <Section id="cta" width="md" className="pb-32">
      <motion.div
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
          duration: 0.7,
        }}
        className="
          overflow-hidden
          rounded-[36px]
          border
          border-[#16f2b3]/20
          bg-gradient-to-br
          from-[#16f2b3]/10
          via-[#111827]
          to-[#111827]
          p-12
          text-center
        "
      >
        <span className="text-sm uppercase tracking-[5px] text-[#16f2b3]">
          Thank You
        </span>

        <h2 className="mt-5 text-5xl font-black text-white">
          Ready to Explore
          <br />
          FlowTest Studio?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
          Experience the interactive demo, explore the project source code, or
          continue discovering more Software QA engineering projects from my
          portfolio.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link
            href="/flowtest"
            target="_blank"
            className="
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-[#16f2b3]
              px-7
              py-4
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <FiPlay />
            Launch Live Demo
          </Link>

          <Link
            href={project.github}
            target="_blank"
            className="
              inline-flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-7
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:border-[#16f2b3]/40
              hover:bg-[#16f2b3]/10
            "
          >
            <FiGithub />
            View Source Code
          </Link>

          <Link
            href="/projects"
            className="
              inline-flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-7
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/10
            "
          >
            More Projects
            <FiArrowRight />
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
