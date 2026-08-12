"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import { personalData } from "@/utils/data/personal-data";

import { TYPEWRITER_WORDS } from "../constants";
import { fadeUp } from "@/app/lib/motion";

export default function HeroHeading({ greeting }) {
  return (
    <>
      {/* Greeting */}

      <motion.p
        variants={fadeUp}
        className="
          mb-5
          inline-flex
          w-fit
          items-center
          gap-2
          rounded-full
          border
          border-white/[0.08]
          bg-white/[0.03]
          px-3.5
          py-1.5
          text-[13px]
          font-medium
          text-muted
          backdrop-blur-xl
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            shrink-0
            rounded-full
            bg-primary
            shadow-[0_0_8px_rgba(22,242,179,0.8)]
          "
        />

        {greeting}
      </motion.p>

      {/* Name */}

      <motion.h1
        variants={fadeUp}
        className="
          text-4xl
          font-semibold
          leading-tight
          tracking-tight
          text-heading
          md:text-6xl
          xl:text-6xl
        "
      >
        {personalData.name}
      </motion.h1>

      {/* Typewriter */}

      <motion.div
        variants={fadeUp}
        className="
          mt-5
          text-xl
          font-medium
          tracking-tight
          text-primary
          md:text-2xl
        "
      >
        <Typewriter
          words={TYPEWRITER_WORDS}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </motion.div>

      {/* Description */}

      <motion.p
        variants={fadeUp}
        className="
          mt-7
          max-w-2xl
          text-[15px]
          leading-7
          text-muted
          md:text-base
        "
      >
        {personalData.description}
      </motion.p>
    </>
  );
}