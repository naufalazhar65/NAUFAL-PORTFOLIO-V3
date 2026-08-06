"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={[
        "mb-14",
        isCenter ? "text-center" : "text-left",
        className,
      ].join(" ")}
    >
      {eyebrow && (
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-primary/20
            bg-primary/10
            px-4
            py-1.5
            text-xs
            font-semibold
            uppercase
            tracking-[0.28em]
            text-primary
          "
        >
          {eyebrow}
        </span>
      )}

      <h2
        className="
          mt-5
          text-4xl
          font-black
          leading-tight
          text-white
          md:text-5xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className={[
            "mt-5 max-w-2xl text-lg leading-8 text-gray-400",
            isCenter ? "mx-auto" : "",
          ].join(" ")}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}