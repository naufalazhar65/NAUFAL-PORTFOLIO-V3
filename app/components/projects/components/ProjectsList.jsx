"use client";

import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

export default function ProjectsList({ projects, onOpen }) {
  return (
    <div className="space-y-28">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <ProjectCard
            project={project}
            reverse={index % 2 !== 0}
            onOpen={onOpen}
          />
        </motion.div>
      ))}
    </div>
  );
}
