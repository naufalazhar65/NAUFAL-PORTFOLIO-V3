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

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}

      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-pink-500/20 blur-[140px]" />

      {/* Heading */}

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
        className="mb-24 text-center"
      >
        <span className="text-sm uppercase tracking-[6px] text-[#16f2b3]">
          Portfolio
        </span>

        <h2 className="mt-4 text-5xl font-black text-white lg:text-6xl">
          Engineering Projects
        </h2>

        <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
          A curated collection of software quality assurance,
          automation engineering, API testing, performance testing,
          and modern testing tools built throughout my journey.
        </p>
      </motion.div>

      {/* ========================= */}
      {/* FLAGSHIP PROJECT */}
      {/* ========================= */}

      {featuredProject && (
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
                ⭐ Flagship Project
              </span>

              <div className="h-px flex-1 bg-gradient-to-r from-[#16f2b3]/40 to-transparent" />
            </div>

            <ProjectItem
              featured
              project={featuredProject}
              onOpen={handleOpen}
            />
          </motion.div>

          {/* Divider */}

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
      )}

      {/* ========================= */}
      {/* OTHER PROJECTS */}
      {/* ========================= */}

      <div className="space-y-28">
        {otherProjects.map((project, index) => (
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
            <ProjectItem
              project={project}
              reverse={index % 2 !== 0}
              onOpen={handleOpen}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}

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