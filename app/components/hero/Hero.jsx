"use client";

import { motion } from "framer-motion";

import HeroHeading from "./components/HeroHeading";
import HeroSocial from "./components/HeroSocial";
import HeroButtons from "./components/HeroButtons";
import FlowPreview from "@/app/components/flow-preview";

import useGreeting from "./hooks/useGreeting";

import { fadeUp, stagger } from "@/app/lib/motion";

function HeroSection() {
  const greeting = useGreeting();

  return (
    <motion.section
      initial={{
        opacity: 0,
        scale: 0.985,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        flex
        min-h-[calc(100vh-84px)]
        flex-col
        justify-center

        py-12

        sm:py-16
        lg:py-20
        xl:py-24
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1250px]

          grid-cols-1
          items-center

          gap-12

          lg:grid-cols-[minmax(0,1fr)_430px]
          lg:gap-14

          xl:grid-cols-[minmax(0,1fr)_460px]
          xl:gap-16
        "
      >
        {/* ========================= */}
        {/* LEFT */}
        {/* ========================= */}

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

            lg:translate-y-[-4px]
          "
        >
          <HeroHeading greeting={greeting} />

          <HeroSocial />

          <HeroButtons />
        </motion.div>

        {/* ========================= */}
        {/* RIGHT */}
        {/* ========================= */}

        <motion.div
          {...fadeUp}
          className="
            relative
            flex
            w-full
            items-center
            justify-center

            lg:justify-end
          "
        >
          <div
            className="
              w-full
              max-w-[430px]

              xl:max-w-[460px]
            "
          >
            <FlowPreview />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroSection;