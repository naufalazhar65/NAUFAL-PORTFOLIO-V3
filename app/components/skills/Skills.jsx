"use client";

import { motion } from "framer-motion";

import { skillGroups } from "./constants";
import { stagger } from "@/app/lib/motion";

import SkillsHeader from "./components/SkillsHeader";
import SkillGroup from "./components/SkillGroup";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="
        relative
        my-24

        lg:my-28
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20

          h-80
          w-80

          -translate-x-1/2

          rounded-full

          bg-[#16f2b3]/10

          blur-[120px]
        "
      />

      {/* Header */}

      <SkillsHeader />

      {/* Skill Groups */}

      <div className="relative mt-12 space-y-12">
        {skillGroups.map((group) => (
          <SkillGroup
            key={group.title}
            group={group}
          />
        ))}
      </div>
    </motion.section>
  );
}