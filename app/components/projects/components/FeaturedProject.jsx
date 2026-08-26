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
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -2,
      }}
    >
      <ProjectCard
        project={project}
        featured
      />
    </motion.div>
  );
}