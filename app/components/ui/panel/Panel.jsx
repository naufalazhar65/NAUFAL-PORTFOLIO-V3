"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const variants = {
  default: `
    border border-white/10
    bg-[#111827]
  `,

  glass: `
    border border-white/10
    bg-white/[0.03]
    backdrop-blur-xl
  `,

  terminal: `
    border border-[#16f2b3]/20
    bg-[#0d1117]
  `,

  repository: `
    border border-white/10
    bg-[#0b1120]
  `,

  workflow: `
    border border-[#16f2b3]/20
    bg-[#0b1120]
  `,

  success: `
    border border-[#16f2b3]/30
    bg-[#111827]
  `,
};

const paddings = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
};

export default function Panel({
  children,
  className = "",
  variant = "default",
  padding = "lg",
  hover = false,
  animated = false,
  as = "div",
}) {
  const Component = animated ? motion[as] || motion.div : as;

  return (
    <Component
      {...(animated ? fadeUp : {})}
      className={clsx(
        `
          rounded-3xl
          shadow-[0_20px_80px_rgba(0,0,0,.45)]
          transition-all
          duration-300
        `,
        variants[variant],
        paddings[padding],
        hover &&
          `
            hover:border-[#16f2b3]/40
            hover:shadow-[0_20px_80px_rgba(22,242,179,.08)]
          `,
        className,
      )}
    >
      {children}
    </Component>
  );
}
