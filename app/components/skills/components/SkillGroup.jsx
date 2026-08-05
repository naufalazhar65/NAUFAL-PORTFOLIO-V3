"use client";

import { motion } from "framer-motion";

import { stagger } from "@/app/lib/motion";

import SkillCard from "./SkillCard";
import { fadeUp } from "@/app/lib/motion";


export default function SkillGroup({ group }) {
  return (
    <motion.div
      variants={fadeUp}
    >
      <h3 className="mb-6 text-2xl font-semibold text-white">
        {group.title}
      </h3>

      <motion.div
        variants={stagger}
        className="
          grid
          grid-cols-2
          gap-6
          sm:grid-cols-3
          lg:grid-cols-5
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