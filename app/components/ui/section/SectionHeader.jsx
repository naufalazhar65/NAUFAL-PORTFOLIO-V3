"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const alignments = {
  left: "text-left",
  center: "text-center",
};

const widths = {
  sm: "max-w-2xl",
  md: "max-w-3xl",
  lg: "max-w-4xl",
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  width = "md",
  className = "",
}) {
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
        duration: 0.7,
      }}
      className={clsx("mb-20", alignments[align], className)}
    >
      {eyebrow && (
        <span
          className="
            text-sm
            font-medium
            uppercase
            tracking-[6px]
            text-[#16f2b3]
          "
        >
          {eyebrow}
        </span>
      )}

      {title && (
        <h2
          className="
            mt-4
            text-4xl
            font-extrabold
            leading-tight
            text-white
            lg:text-5xl
          "
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={clsx(
            "mt-5 leading-8 text-gray-400",
            widths[width],
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}