"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { skillsImage } from "@/utils/skill-image";
import { fadeUp } from "@/app/lib/motion";

export default function SkillCard({ skill }) {
  const icon = skillsImage(skill);

  if (!icon) {
    return null;
  }

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -1,
      }}
      transition={{
        duration: 0.18,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
  group
  inline-flex
  items-center
  gap-2.5
  border-b
  border-white/[0.08]
  px-1
  py-2
  transition-colors
  duration-200
  hover:border-white/[0.2]
"
    >
      <Image
        src={icon}
        alt=""
        width={18}
        height={18}
        loading="lazy"
        sizes="18px"
        className="
          object-contain
          opacity-80
          grayscale-[10%]
          transition-opacity
          duration-200
          group-hover:opacity-100
        "
      />

      <span
        className="
          text-[14px]
          font-medium
          tracking-[-0.02em]
          text-gray-300
          transition-colors
          duration-200
          group-hover:text-white
          sm:text-[15px]
        "
      >
        {skill}
      </span>
    </motion.div>
  );
}