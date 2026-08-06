// @flow strict
"use client";

import { motion } from "framer-motion";

import HeroBackground from "./components/HeroBackground";
import HeroHeading from "./components/HeroHeading";
import HeroSocial from "./components/HeroSocial";
import HeroButtons from "./components/HeroButtons";
import FlowPreview from "@/app/components/flow-preview";

import useGreeting from "./hooks/useGreeting";
import useHeroParallax from "./hooks/useHeroParallax";

import { fadeUp, stagger } from "@/app/lib/motion";

function HeroSection() {
  const greeting = useGreeting();

  const { handleMouseMove, handleMouseLeave } = useHeroParallax();

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{
        opacity: 0,
        scale: 0.98,
        filter: "blur(12px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        flex
        flex-col
        items-center
        justify-between
        pt-8
        pb-10
        sm:pt-12
        md:pt-16
        lg:pt-24
        lg:pb-16
        xl:pt-28
      "
    >
      <HeroBackground />

      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-10
          lg:grid-cols-[minmax(0,1fr)_430px]
          lg:items-center
          xl:grid-cols-[minmax(0,1fr)_460px]
        "
      >
        {/* Left */}

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="
            flex
            flex-col
            items-start
            justify-center
            p-2
            pb-10
            lg:pt-10
          "
        >
          <HeroHeading greeting={greeting} />

          <HeroSocial />

          <HeroButtons />
        </motion.div>

        {/* Right */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="
            flex
            justify-center
            lg:justify-end
            lg:items-start
          "
        >
          <FlowPreview />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
