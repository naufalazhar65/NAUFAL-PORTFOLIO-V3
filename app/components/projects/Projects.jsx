"use client";

import { motion } from "framer-motion";

import { projectsData } from "@/utils/data/projects-data";

import SectionHeader from "../ui/SectionHeader";

import FeaturedProject from "./components/FeaturedProject";
import ProjectsList from "./components/ProjectsList";

export default function Projects() {
  const featuredProject = projectsData.find(
    (project) => project.featured,
  );

  const otherProjects = projectsData.filter(
    (project) => !project.featured,
  );

  return (
    <section
      id="projects"
      className="
        relative
        w-full
        overflow-visible
        px-6
        py-24
        sm:px-8
        lg:px-12
        lg:py-28
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-10
          top-20
          h-72
          w-72
          rounded-full
          bg-violet-600/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-20
          right-10
          h-72
          w-72
          rounded-full
          bg-pink-500/10
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
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
        />

        {/* Other Projects */}

        <div className="mt-20 lg:mt-24">
          <ProjectsList
            projects={otherProjects}
          />
        </div>
      </div>
    </section>
  );
}