"use client";

import { experiences } from "@/utils/data/experience";

import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="flex flex-col gap-6">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
}
