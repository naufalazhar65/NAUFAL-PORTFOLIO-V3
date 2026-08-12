"use client";

import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

export default function FeaturedProject({ project }) {
  if (!project) {
    return null;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
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
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mt-16"
    >
      <div className="mb-8 flex items-center gap-5">
        <span
          className="
            shrink-0
            text-[11px]
            font-medium
            uppercase
            tracking-[2.5px]
            text-[#16f2b3]
          "
        >
          Featured Project
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-[#16f2b3]/30 to-transparent" />
      </div>

      <ProjectCard
        project={project}
        featured
      />
    </motion.div>
  );
}