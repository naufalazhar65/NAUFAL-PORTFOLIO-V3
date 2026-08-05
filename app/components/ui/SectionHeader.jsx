"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <motion.div
      className="mb-20 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      {eyebrow && (
        <p
          className="
            text-sm
            uppercase
            tracking-[0.35em]
            text-[#16f2b3]
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
          mt-3
          text-4xl
          font-bold
          text-white
          md:text-5xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            leading-8
            text-gray-400
          "
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}