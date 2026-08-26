"use client";

import NavigationItem from "./NavigationItem";
import useActiveSection from "./useActiveSection";

export default function ProjectNavigation({
  project,
}) {
  const isFlowTest =
    project?.slug === "flowtest-studio";

  const hasWorkflow =
    Array.isArray(project?.workflow) &&
    project.workflow.length > 0;

  const hasRepository =
    Boolean(project?.repository);

  const sections = (
    project
      ? [
          ...(isFlowTest
            ? [
                {
                  id: "live-demo",
                  label: "Live Demo",
                },
              ]
            : []),

          {
            id: "overview",
            label: "Project Snapshot",
          },

          {
            id: "problem-decision",
            label: "Problem → Decision",
          },

          ...(isFlowTest
            ? [
                {
                  id: "gallery",
                  label: "Visual Evidence",
                },
              ]
            : []),

          {
            id: "tech-stack",
            label: isFlowTest
              ? "Technical Decisions"
              : "Technical Stack",
          },

          ...(hasWorkflow
            ? [
                {
                  id: "workflow",
                  label: "How It Works",
                },
              ]
            : []),

          {
            id: "results",
            label: isFlowTest
              ? "Current State"
              : "Current Results",
          },

          ...(isFlowTest
            ? [
                {
                  id: "roadmap",
                  label: "Now / Next / Later",
                },
              ]
            : []),

          ...(hasRepository
            ? [
                {
                  id: "repository",
                  label: "Repository",
                },
              ]
            : []),

          {
            id: "cta",
            label: "Continue",
          },
        ].map((section, index) => ({
          ...section,
          number: String(index + 2).padStart(
            2,
            "0",
          ),
        }))
      : []
  );

  const active = useActiveSection(
    sections.map((section) => section.id),
  );

  if (!project) {
    return null;
  }

  return (
    <aside
      className="
        fixed
        left-8
        top-1/2
        z-50
        hidden
        -translate-y-1/2
        xl:block
      "
    >
      <nav
        aria-label="Project sections"
        className="
          w-48
          border-l
          border-white/[0.08]
          pl-4
        "
      >
        <div className="mb-5">
          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-gray-600
            "
          >
            Project Contents
          </span>
        </div>

        <div className="space-y-1">
          {sections.map((section) => (
            <div
              key={section.id}
              className="relative"
            >
              {active === section.id && (
                <span
                  className="
                    absolute
                    -left-[17px]
                    top-1/2
                    h-5
                    w-px
                    -translate-y-1/2
                    bg-[#16f2b3]
                    shadow-[0_0_12px_rgba(22,242,179,.3)]
                  "
                />
              )}

              <NavigationItem
                id={section.id}
                label={section.label}
                number={section.number}
                active={
                  active === section.id
                }
              />
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}