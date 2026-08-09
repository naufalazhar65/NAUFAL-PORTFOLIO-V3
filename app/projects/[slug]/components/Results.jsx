"use client";

import Section from "@/app/components/ui/section/Section";
import SectionHeader from "@/app/components/ui/section/SectionHeader";
import MetricCard from "@/app/components/ui/card/MetricCard";

export default function Results({ project }) {
  return (
    <Section id="results">
      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}

      <SectionHeader
        eyebrow="Performance"
        title="Results & Impact"
        description="Key metrics demonstrating the effectiveness and impact of this project."
      />

      {/* ========================= */}
      {/* METRICS */}
      {/* ========================= */}

      <div className="mt-16 grid auto-rows-fr gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {project.stats?.map((item, index) => (
          <MetricCard
            key={`${item.label}-${index}`}
            item={item}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}