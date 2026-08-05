"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { skillsImage } from "@/utils/skill-image";

import { fadeUp } from "@/app/lib/motion";

export default function SkillCard({
  skill,
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[#25213b]
        bg-[#11152c]/90
        transition-all
        duration-500
        hover:border-[#16f2b3]/40
        hover:shadow-[0_0_24px_rgba(22,242,179,0.15)]
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#16f2b3]/10
          via-transparent
          to-violet-500/10
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
        "
      />

      <div
        className="
          relative
          flex
          flex-col
          items-center
          justify-center
          p-8
        "
      >
        <Image
          src={skillsImage(skill)?.src}
          alt={skill}
          width={50}
          height={50}
          loading="lazy"
          decoding="async"
          sizes="50px"
          className="
            transition-all
            duration-500
            group-hover:scale-110
          "
        />

        <p
          className="
            mt-5
            text-gray-300
            transition-all
            duration-300
            group-hover:text-white
          "
        >
          {skill}
        </p>
      </div>
    </motion.div>
  );
}