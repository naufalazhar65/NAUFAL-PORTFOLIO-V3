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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      whileHover={{
        scale: 1.18,
      }}
      className={`absolute group ${className}`}
    >
      <div
        className="
        relative
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full

        border
        border-white/10

        bg-white/5
        backdrop-blur-xl

        shadow-lg

        transition-all
        duration-300

        hover:border-[#16f2b3]/50
        hover:bg-[#16f2b3]/10
        hover:shadow-[0_0_40px_rgba(22,242,179,.45)]
      "
      >
        {icon && (
          <Image
            src={icon}
            alt={skill}
            width={30}
            height={30}
          />
        )}
      </div>

      {/* Tooltip */}
      {/* <div
        className="
        pointer-events-none
        absolute
        left-1/2
        top-full
        mt-3
        -translate-x-1/2

        rounded-lg

        bg-black/90
        px-3
        py-1

        text-xs
        whitespace-nowrap

        text-white

        opacity-0

        transition

        group-hover:opacity-100
      "
      >
        {skill}
      </div> */}
    </motion.div>
  );
}