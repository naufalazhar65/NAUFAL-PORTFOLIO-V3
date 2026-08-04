"use client";

import { motion } from "framer-motion";

import RoadmapItem from "./RoadmapItem";

export default function RoadmapColumn({ section, index }) {
  const Icon = section.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{
            background: `${section.color}20`,
            color: section.color,
          }}
        >
          <Icon />
        </div>

        <h3 className="text-2xl font-bold text-white">{section.title}</h3>
      </div>

      <ul className="mt-8 space-y-3">
        {section.items.map((item) => (
          <RoadmapItem key={item}>{item}</RoadmapItem>
        ))}
      </ul>
    </motion.div>
  );
}
