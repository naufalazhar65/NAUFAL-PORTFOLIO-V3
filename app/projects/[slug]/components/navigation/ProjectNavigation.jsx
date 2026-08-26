"use client";

import NavigationItem from "./NavigationItem";
import useActiveSection from "./useActiveSection";

const sections = [
  {
    id: "live-demo",
    label: "Live Demo",
    number: "02",
  },
  {
    id: "overview",
    label: "Project Snapshot",
    number: "03",
  },
  {
    id: "problem-decision",
    label: "Problem → Decision",
    number: "04",
  },
  {
    id: "gallery",
    label: "Visual Evidence",
    number: "05",
  },
  {
    id: "tech-stack",
    label: "Technical Decisions",
    number: "06",
  },
  {
    id: "workflow",
    label: "How It Works",
    number: "07",
  },
  {
    id: "results",
    label: "Current State",
    number: "08",
  },
  {
    id: "roadmap",
    label: "Now / Next / Later",
    number: "09",
  },
  {
    id: "repository",
    label: "Repository",
    number: "10",
  },
  {
    id: "cta",
    label: "Continue",
    number: "11",
  },
];

export default function ProjectNavigation() {
  const active = useActiveSection(
    sections.map((section) => section.id),
  );

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
                active={active === section.id}
              />
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}