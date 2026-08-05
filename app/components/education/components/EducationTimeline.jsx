"use client";

import { educations } from "@/utils/data/educations";

import EducationCard from "./EducationCard";

export default function EducationTimeline() {
  return (
    <div className="flex flex-col gap-6">
      {educations.map((education) => (
        <EducationCard
          key={education.id}
          education={education}
        />
      ))}
    </div>
  );
}