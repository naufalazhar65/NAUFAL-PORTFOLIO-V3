"use client";

import Section from "@/app/components/ui/section/Section";
import SectionHeader from "@/app/components/ui/section/SectionHeader";
import MetricCard from "@/app/components/ui/card/MetricCard";

export default function Results({ project }) {
  return (
    <Section id="results" width="md">
      <SectionHeader
        eyebrow="Performance"
        title="Results & Impact"
        description="Key metrics demonstrating the effectiveness and impact of this project."
      />

      <div className="grid auto-rows-fr gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {project.stats.map((item, index) => (
          <MetricCard key={item.label} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}
