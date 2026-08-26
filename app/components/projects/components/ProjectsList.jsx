"use client";

import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

export default function ProjectsList({ projects }) {
  if (!projects?.length) {
    return null;
  }

  return (
    <div className="projects-list">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
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
            amount: 0.12,
          }}
          transition={{
            duration: 0.65,
            delay: Math.min(index * 0.05, 0.2),
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            y: -2,
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