"use client";

import { motion } from "framer-motion";

import { skillGroups } from "./constants";
import { stagger } from "@/app/lib/motion";

import SkillsHeader from "./components/SkillsHeader";
import SkillGroup from "./components/SkillGroup";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        border-b
        border-white/[0.08]
        py-20
        sm:py-24
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          <SkillsHeader />

          <div className="mt-12 space-y-12 lg:mt-16 lg:space-y-16">
            {skillGroups.map((group, index) => (
              <SkillGroup
                key={group.title}
                group={group}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}