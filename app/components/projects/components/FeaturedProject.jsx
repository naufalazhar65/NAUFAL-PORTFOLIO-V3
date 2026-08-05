"use client";

import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

export default function FeaturedProject({ project, onOpen }) {
  if (!project) {
    return null;
  }

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 70,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="mb-24"
      >
        <div className="mb-8 flex items-center gap-4">
          <span
            className="
              rounded-full
              border
              border-[#16f2b3]/30
              bg-[#16f2b3]/10
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[3px]
              text-[#16f2b3]
            "
          >
            ⭐ Featured Project
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-[#16f2b3]/40 to-transparent" />
        </div>

        <ProjectCard featured project={project} onOpen={onOpen} />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="mb-16"
      >
        <div className="flex items-center gap-5">
          <div className="h-px flex-1 bg-white/10" />

          <span className="text-sm uppercase tracking-[5px] text-gray-500">
            Other Projects
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>
      </motion.div>
    </>
  );
}
