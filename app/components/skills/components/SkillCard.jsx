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
        y: -5,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-2xl

        border
        border-white/[0.08]

        bg-white/[0.03]

        transition-colors
        duration-300

        hover:border-[#16f2b3]/30

        hover:shadow-[0_16px_40px_rgba(22,242,179,0.08)]
      "
    >
      {/* ========================= */}
      {/* HOVER GLOW */}
      {/* ========================= */}

      <div
        className="
          pointer-events-none

          absolute
          -right-10
          -top-10

          h-24
          w-24

          rounded-full

          bg-[#16f2b3]/10

          blur-2xl

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* ========================= */}
      {/* CONTENT */}
      {/* ========================= */}

      <div
        className="
          relative

          flex
          min-h-[150px]

          flex-col
          items-center
          justify-center

          p-6
        "
      >
        {/* Icon */}

        <div
          className="
            flex
            h-14
            w-14

            items-center
            justify-center

            rounded-2xl

            bg-white/[0.04]

            transition-all
            duration-300

            group-hover:bg-[#16f2b3]/10
          "
        >
          <Image
            src={icon}
            alt={skill}
            width={42}
            height={42}
            loading="lazy"
            sizes="42px"
            className="
              object-contain

              transition-transform
              duration-300

              group-hover:scale-105
            "
          />
        </div>

        {/* Skill Name */}

        <p
          className="
            mt-4

            text-sm
            font-medium

            text-gray-400

            transition-colors
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