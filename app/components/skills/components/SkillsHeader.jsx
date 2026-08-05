"use client";

import { motion } from "framer-motion";

import SectionHeader from "@/app/components/ui/SectionHeader";
import { fadeUp } from "@/app/lib/motion";


export default function SkillsHeader() {
  return (
    <motion.div variants={fadeUp}>
      <SectionHeader
        eyebrow="TECH STACK"
        title="Technologies & Tools"
        description="A collection of programming languages, testing frameworks, automation tools, CI/CD platforms, and technologies I use to deliver reliable and high-quality software."
      />
    </motion.div>
  );
}
