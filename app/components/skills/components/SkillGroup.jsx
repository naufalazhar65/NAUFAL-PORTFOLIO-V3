"use client";

import { motion } from "framer-motion";

import { fadeUp, stagger } from "@/app/lib/motion";

import SkillCard from "./SkillCard";

export default function SkillGroup({ group }) {
  return (
    <motion.div
      variants={fadeUp}
      className="relative"
    >
      {/* ========================= */}
      {/* GROUP TITLE */}
      {/* ========================= */}

      <div className="mb-6 flex items-center gap-4">
        <h3
          className="
            text-xl
            font-bold
            tracking-tight
            text-white

            md:text-2xl
          "
        >
          {group.title}
        </h3>

        <div
          className="
            h-px
            flex-1

            bg-gradient-to-r
            from-[#16f2b3]/30
            to-transparent
          "
        />
      </div>

      {/* ========================= */}
      {/* SKILLS */}
      {/* ========================= */}

      <motion.div
        variants={stagger}
        className="
          grid
          grid-cols-2
          gap-4

          sm:grid-cols-3
          sm:gap-5

          lg:grid-cols-4
          xl:grid-cols-5
          xl:gap-6
        "
      >
        {group.skills.map((skill) => (
          <SkillCard
            key={skill}
            skill={skill}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}