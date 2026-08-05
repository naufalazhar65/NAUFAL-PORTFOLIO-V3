"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
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
      }}
      className={
        align === "center"
          ? "mx-auto mb-16 max-w-3xl text-center"
          : "mb-16"
      }
    >
      {eyebrow && (
        <p
          className="
            text-sm
            uppercase
            tracking-[4px]
            text-primary
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
          mt-4
          text-4xl
          font-black
          text-white
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-6
            leading-8
            text-text-secondary
          "
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}