"use client";

import { motion } from "framer-motion";

import { fadeUp } from "@/app/lib/motion";

import SkillCard from "./SkillCard";

export default function SkillGroup({
  group,
  index = 0,
}) {
  return (
    <motion.section
      variants={fadeUp}
      className="
        grid
        gap-8
        border-b
        border-white/[0.08]
        py-8
        lg:grid-cols-[0.3fr_1fr]
        lg:gap-16
        lg:py-10
      "
    >
      <div>
        <div className="flex items-center gap-4">
          <span
            className="
              font-mono
              text-[10px]
              tabular-nums
              text-gray-500
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <h2
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-gray-300
            "
          >
            {getGroupTitle(group.title)}
          </h2>
        </div>

        <p
          className="
            mt-4
            max-w-xs
            text-[11px]
            leading-6
            text-gray-500
          "
        >
          {getGroupDescription(group.title)}
        </p>
      </div>

      <div
        className="
          flex
          flex-wrap
          items-center
          gap-x-4
          gap-y-3
          sm:gap-x-5
          sm:gap-y-4
        "
      >
        {group.skills.map((skill) => (
          <SkillCard
            key={skill}
            skill={skill}
          />
        ))}
      </div>
    </motion.section>
  );
}

function getGroupTitle(title) {
  const titles = {
    Programming: "Programming",
    "Test Automation": "Automation",
    "API Testing": "API",
    "Performance Testing": "Performance",
    "CI/CD & Tools": "Delivery & tooling",
  };

  return titles[title] ?? title;
}

function getGroupDescription(title) {
  const descriptions = {
    Programming:
      "Languages I use for automation, tooling, and application logic.",

    "Test Automation":
      "Browser and mobile automation frameworks used in day-to-day test work.",

    "API Testing":
      "Tools for checking requests, contracts, and service behavior.",

    "Performance Testing":
      "Load and performance tools used to model and analyze system behavior.",

    "CI/CD & Tools":
      "Source control, delivery, project, database, and operating-system tooling.",
  };

  return (
    descriptions[title] ??
    "Tools that support the test workflow."
  );
}