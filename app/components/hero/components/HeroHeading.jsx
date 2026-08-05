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
          rounded-full
          border
          border-[#16F2B3]/20
          bg-[#16F2B3]/10
          px-4
          py-2
          text-sm
          font-medium
          text-primary
        "
      >
        {greeting}
      </motion.p>

      {/* Name */}

      <motion.h1
        variants={fadeUp}
        className="
          text-4xl
          font-black
          leading-tight
          text-heading
          md:text-6xl
          xl:text-7xl
        "
      >
        {personalData.name}
      </motion.h1>

      {/* Typewriter */}

      <motion.div
        variants={fadeUp}
        className="
          mt-6
          text-xl
          font-semibold
          text-primary
          md:text-3xl
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
          mt-8
          max-w-2xl
          text-base
          leading-8
          text-muted
          md:text-lg
        "
      >
        {personalData.description}
      </motion.p>
    </>
  );
}