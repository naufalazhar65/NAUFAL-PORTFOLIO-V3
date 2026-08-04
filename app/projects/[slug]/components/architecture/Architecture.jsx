"use client";

import Section from "@/app/components/ui/section/Section";
import SectionHeader from "@/app/components/ui/section/SectionHeader";

import { architecture } from "./architectureData";
import ArchitectureCard from "./ArchitectureCard";

export default function Architecture({ project }) {
  if (project.slug !== "flowtest-studio") {
    return null;
  }

  return (
    <Section id="architecture" width="lg">
      <SectionHeader
        eyebrow="System Design"
        title="Architecture"
        description="A simplified overview of how FlowTest Studio is structured, from visual workflow creation to mobile automation execution."
      />

      <div className="grid gap-8 md:grid-cols-5">
        {architecture.map((item, index) => (
          <ArchitectureCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}
