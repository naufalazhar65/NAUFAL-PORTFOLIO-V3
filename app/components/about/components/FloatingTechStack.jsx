"use client";

import TechBadge from "../../ui/TechBadge";

import { TECH_BADGES } from "../constants";

export default function FloatingTechStack() {
  return (
    <>
      {TECH_BADGES.map((badge) => (
        <TechBadge
          key={badge.skill}
          skill={badge.skill}
          className={badge.className}
          duration={badge.duration}
          delay={badge.delay}
        />
      ))}
    </>
  );
}