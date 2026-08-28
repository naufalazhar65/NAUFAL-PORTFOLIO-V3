"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import FlowTestStudioPreview from "@/app/components/flowtest-preview/FlowTestStudioPreview";

export default function ProjectCard({
  project,
  reverse = false,
  featured = false,
  index = 0,
}) {
  if (!project) {
    return null;
  }

  const actions = getProjectAction(project);

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="project-featured"
      >
        <div className="project-featured-content">
          <div className="project-meta">
            <span className="project-index">01</span>
            <span className="project-category">{project.category}</span>
            <span className="project-status">{project.status}</span>
          </div>

          <h2 className="project-featured-title">{project.name}</h2>
          <p className="project-highlight">{project.highlight}</p>
          <p className="project-description">{project.description}</p>

          {project.stats?.length > 0 && (
            <div className="project-stats">
              {project.stats.slice(0, 3).map((stat, idx) => (
                <div key={`${stat.label}-${idx}`} className="project-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          {project.tools?.length > 0 && (
            <div className="project-tools">
              {project.tools.slice(0, 5).map((tool, idx) => (
                <span key={`${tool.name}-${idx}`}>{tool.name}</span>
              ))}
              {project.tools.length > 5 && (
                <span>+{project.tools.length - 5}</span>
              )}
            </div>
          )}

          <div className="project-actions">
            {actions.primary && (
              <Link
                href={getPrimaryHref(project)}
                className="project-primary-link"
              >
                {actions.primary}
                <FiArrowUpRight />
              </Link>
            )}

            <Link
              href={`/projects/${project.slug}`}
              className="project-secondary-link"
            >
              {actions.secondary}
              <FiArrowUpRight />
            </Link>
          </div>
        </div>

        <ProjectPreview
          project={project}
          featured
          overlayLabel={actions.overlay}
        />
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`project-standard ${reverse ? "project-standard-reverse" : ""}`}
    >
      <div className="project-standard-meta">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{project.category}</span>
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`View ${project.name}`}
        >
          <FiArrowUpRight />
        </Link>
      </div>

      <div className="project-standard-content">
        <div>
          <h2>{project.name}</h2>
          <p className="project-highlight">{project.highlight}</p>
          <p className="project-description">{project.description}</p>
        </div>

        {project.tools?.length > 0 && (
          <div className="project-tools project-tools-compact">
            {project.tools.slice(0, 5).map((tool, idx) => (
              <span key={`${tool.name}-${idx}`}>{tool.name}</span>
            ))}
            {project.tools.length > 5 && (
              <span>+{project.tools.length - 5}</span>
            )}
          </div>
        )}

        <Link href={`/projects/${project.slug}`} className="project-text-link">
          {actions.secondary}
          <FiArrowUpRight />
        </Link>
      </div>

      <ProjectPreview project={project} overlayLabel={actions.overlay} />
    </motion.article>
  );
}

function ProjectPreview({ project, featured = false, overlayLabel }) {
  return (
    <div
      className={`
        project-preview
        ${featured ? "project-preview-featured" : ""}
        ${project.slug === "flowtest-studio" ? "project-preview-flowtest-shell" : ""}
      `}
    >
      {project.slug !== "flowtest-studio" && (
        <div className="project-preview-header">
          <div className="project-preview-dots">
            <span />
            <span />
            <span />
          </div>
          <span>{project.slug}</span>
          <span className="flex items-center gap-1">
            VIEW
            <FiArrowUpRight size={11} />
          </span>
        </div>
      )}

      <Link
        href={`/projects/${project.slug}`}
        className={
          project.slug === "flowtest-studio"
            ? "project-preview-image project-preview-flowtest project-preview-flowtest-image"
            : "project-preview-image"
        }
      >
        {project.slug === "flowtest-studio" ? (
          <FlowTestStudioPreview hideFrame />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            width={1200}
            height={800}
            className="project-preview-img"
          />
        ) : (
          <div className="project-preview-img bg-gray-800" />
        )}

        <div
          className="project-preview-overlay"
          style={{ pointerEvents: "none" }}
        >
          <span>
            {overlayLabel}
            <FiArrowUpRight />
          </span>
        </div>
      </Link>
    </div>
  );
}

function getProjectAction(project) {
  switch (project.slug) {
    case "flowtest-studio":
      return {
        primary: "Launch Live Demo",
        secondary: "Explore the build",
        overlay: "Open FlowTest",
      };

    case "automation-testing":
      return {
        primary: null,
        secondary: "View automation framework",
        overlay: "Open framework",
      };

    case "mobile-app-testing":
      return {
        primary: null,
        secondary: "View mobile framework",
        overlay: "Inspect framework",
      };

    case "api-testing":
      return {
        primary: project.live ? "Open API documentation" : null,
        secondary: "View API work",
        overlay: "Open API work",
      };

    case "performance-testing":
      return {
        primary: null,
        secondary: "View performance work",
        overlay: "Open performance work",
      };

    case "qa-documentation":
      return {
        primary: project.live ? "View documentation" : null,
        secondary: "View QA work",
        overlay: "Open documentation",
      };

    default:
      return {
        primary: project.live ? project.liveLabel || "Open live work" : null,
        secondary: "View project",
        overlay: "Open project",
      };
  }
}

function getPrimaryHref(project) {
  if (project.slug === "flowtest-studio") {
    return "/flowtest";
  }

  return project.live || `/projects/${project.slug}`;
}
