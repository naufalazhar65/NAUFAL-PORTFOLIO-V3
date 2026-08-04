"use client";

import Panel from "@/app/components/ui/panel/Panel";

import NavigationItem from "./NavigationItem";
import useActiveSection from "./useActiveSection";

const sections = [
  {
    id: "live-demo",
    label: "Live Demo",
  },
  {
    id: "why-built",
    label: "Why I Built It",
  },
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "challenge",
    label: "Challenge",
  },
  {
    id: "tech-stack",
    label: "Tech Stack",
  },
  {
    id: "roadmap",
    label: "Roadmap",
  },
  {
    id: "repository",
    label: "Repository",
  },
  {
    id: "features",
    label: "Features",
  },
  {
    id: "workflow",
    label: "Workflow",
  },
  {
    id: "results",
    label: "Results",
  },
  {
    id: "development",
    label: "Development",
  },
];

export default function ProjectNavigation() {
  const active = useActiveSection(sections.map((section) => section.id));

  return (
    <div
      className="
        fixed
        left-6
        top-1/2
        z-50
        hidden
        -translate-y-1/2
        xl:block
      "
    >
      <Panel
        variant="glass"
        padding="sm"
        className="
          w-56
          border
          border-white/5
          backdrop-blur-xl
        "
      >
        <p
          className="
            px-3
            text-[11px]
            font-semibold
            uppercase
            tracking-[4px]
            text-gray-500
          "
        >
          Project Contents
        </p>

        <div className="my-4 h-px bg-white/5" />

        <div className="space-y-1">
          {sections.map((section) => (
            <NavigationItem
              key={section.id}
              {...section}
              active={active === section.id}
            />
          ))}
        </div>
      </Panel>
    </div>
  );
}
