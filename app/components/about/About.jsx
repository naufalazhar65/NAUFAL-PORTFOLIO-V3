"use client";

import { motion } from "framer-motion";

import { stagger } from "@/app/lib/motion";

import AboutContent from "./components/AboutContent";
import AboutImage from "./components/AboutImage";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        border-b
        border-white/[0.08]
        py-20
        sm:py-24
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-0
        "
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="
            grid
            items-start
            gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
            xl:gap-28
          "
        >
          <AboutContent />

          <AboutImage />
        </motion.div>
      </div>
    </section>
  );
}