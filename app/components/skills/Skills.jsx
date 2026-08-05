"use client";

import { motion } from "framer-motion";

import SectionHeader from "../ui/SectionHeader";

import { skillGroups } from "./constants";
import { stagger } from "@/app/lib/motion";
import { fadeUp } from "@/app/lib/motion";

import SkillGroup from "./components/SkillGroup";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative my-28"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-20
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-violet-600/20
          blur-[120px]
        "
      />

      <motion.div variants={fadeUp}>
        <SectionHeader
          eyebrow="TECH STACK"
          title="Technologies & Tools"
          description="A collection of programming languages, testing frameworks, automation tools, CI/CD platforms, and technologies I use to deliver reliable and high-quality software."
        />
      </motion.div>

      <div className="space-y-12">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} group={group} />
        ))}
      </div>
    </motion.section>
  );
}
