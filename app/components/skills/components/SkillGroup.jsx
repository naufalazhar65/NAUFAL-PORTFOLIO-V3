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
      "The languages I write automation in — Python for mobile, JavaScript for browser, TypeScript when I need type safety.",

    "Test Automation":
      "The frameworks that actually run my tests — Selenium for browsers, Appium for devices, Cypress when I need fast feedback.",

    "API Testing":
      "How I validate APIs before they break in production — Postman for exploration, Newman for automation.",

    "Performance Testing":
      "Finding bottlenecks before users do — k6 for modern load testing, JMeter when I need more control.",

    "CI/CD & Tools":
      "The glue that makes automation actually run — GitHub Actions for CI, Jenkins when I need more flexibility.",
  };

  return (
    descriptions[title] ??
    "Tools that support the test workflow."
  );
}