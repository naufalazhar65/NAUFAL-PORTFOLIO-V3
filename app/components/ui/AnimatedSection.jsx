"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const AnimatedSection = forwardRef(
  (
    {
      as: Component = motion.section,
      className,
      children,

      initial = {
        opacity: 0,
        y: 40,
      },

      whileInView = {
        opacity: 1,
        y: 0,
      },

      viewport = {
        once: true,
        amount: 0.25,
      },

      transition = {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },

      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
        className={clsx(className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;
