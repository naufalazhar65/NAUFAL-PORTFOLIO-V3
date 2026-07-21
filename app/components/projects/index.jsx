// @flow strict
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/utils/data/projects-data";
import ProjectItem from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <section id="projects" className="relative z-50 py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-pink-500/20 blur-[140px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="text-center mb-20"
      >
        <span className="text-[#16f2b3] uppercase tracking-[6px] text-sm">
          Portfolio
        </span>

        <h2 className="mt-4 text-5xl font-extrabold text-white">
          Featured Projects
        </h2>

        <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-8">
          A collection of software quality assurance projects, including
          automation testing, API testing, performance testing, CI/CD
          integration, and end-to-end testing frameworks.
        </p>
      </motion.div>

      {/* Projects */}
<div className="space-y-32">
  {projectsData.map((project, index) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <ProjectItem
        project={project}
        reverse={index % 2 !== 0}
        onOpen={(project) => {
          setSelectedProject(project);
          setOpen(true);
        }}
      />
    </motion.div>
  ))}
</div>
      <ProjectModal
        open={open}
        project={selectedProject}
        onClose={() => {
          setOpen(false);
          setSelectedProject(null);
        }}
      />
    </section>
  );
}

export default Projects;
