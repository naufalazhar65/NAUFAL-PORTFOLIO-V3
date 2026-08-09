"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { skillsImage } from "@/utils/skill-image";

export default function TechBadge({
  skill,
  className = "",
  duration = 5,
  delay = 0,
}) {
  const icon = skillsImage(skill);

  if (!icon) {
    return null;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        opacity: {
          duration: 0.5,
          delay,
          ease: "easeOut",
        },
        scale: {
          duration: 0.5,
          delay,
          ease: "easeOut",
        },
        y: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      whileHover={{
        scale: 1.08,
      }}
      className={`
        absolute
        group
        will-change-transform

        ${className}
      `}
    >
      <div
        className="
          relative

          flex
          h-14
          w-14

          items-center
          justify-center

          rounded-full

          border
          border-white/[0.08]

          bg-[#11151d]/80

          shadow-[0_12px_30px_rgba(0,0,0,0.25)]

          backdrop-blur-md

          transition-all
          duration-300

          group-hover:border-[#16f2b3]/40
          group-hover:bg-[#16f2b3]/10
          group-hover:shadow-[0_0_30px_rgba(22,242,179,0.20)]
        "
      >
        <Image
          src={icon}
          alt={skill}
          width={26}
          height={26}
          className="
            object-contain
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />
      </div>
    </motion.div>
  );
}