"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { projectsData } from "@/utils/data/projects-data";

import SectionHeader from "../ui/SectionHeader";

import FeaturedProject from "./components/FeaturedProject";
import ProjectsList from "./components/ProjectsList";
import ProjectModal from "./components/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const featuredProject = projectsData.find(
    (project) => project.slug === "flowtest-studio"
  );

  const otherProjects = projectsData.filter(
    (project) => project.slug !== "flowtest-studio"
  );

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}

      <div
        className="
          absolute
          left-20
          top-20
          h-72
          w-72
          rounded-full
          bg-violet-600/20
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          bottom-10
          right-20
          h-72
          w-72
          rounded-full
          bg-pink-500/20
          blur-[140px]
        "
      />

      {/* Section Header */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
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
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <SectionHeader
          eyebrow="PORTFOLIO"
          title="Engineering Projects"
          description="A curated collection of software quality assurance, automation engineering, API testing, performance testing, and modern testing tools built throughout my journey."
        />
      </motion.div>

      {/* Featured */}

      <FeaturedProject
        project={featuredProject}
        onOpen={handleOpen}
      />

      {/* Other Projects */}

      <ProjectsList
        projects={otherProjects}
        onOpen={handleOpen}
      />

      {/* Modal */}

      <ProjectModal
        open={open}
        project={selectedProject}
        onClose={handleClose}
      />
    </section>
  );
}