"use client";

import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

export default function ProjectsList({ projects }) {
  return (
    <div className="space-y-24 lg:space-y-28">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.7,
        }}
        className="flex items-center gap-5"
      >
        <div className="h-px flex-1 bg-white/10" />

        <span
          className="
            shrink-0
            text-xs
            font-semibold
            uppercase
            tracking-[4px]
            text-gray-500
          "
        >
          Other Projects
        </span>

        <div className="h-px flex-1 bg-white/10" />
      </motion.div>

      {projects.map((project, index) => (
        <motion.div
          key={project.id}
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <ProjectCard
            project={project}
            reverse={index % 2 !== 0}
          />
        </motion.div>
      ))}
    </div>
  );
}