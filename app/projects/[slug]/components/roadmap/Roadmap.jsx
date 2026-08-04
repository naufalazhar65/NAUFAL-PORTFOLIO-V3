"use client";

import Section from "@/app/components/ui/section/Section";
import SectionHeader from "@/app/components/ui/section/SectionHeader";

import { roadmap } from "./roadmapData";
import RoadmapColumn from "./RoadmapColumn";

export default function Roadmap({ project }) {
  if (project.slug !== "flowtest-studio") {
    return null;
  }

  return (
    <Section id="roadmap" width="lg">
      <SectionHeader
        eyebrow="Future"
        title="Product Roadmap"
        description="FlowTest Studio is an experimental project that continues to evolve. This roadmap outlines the current progress and future direction."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {roadmap.map((section, index) => (
          <RoadmapColumn key={section.title} section={section} index={index} />
        ))}
      </div>
    </Section>
  );
}
