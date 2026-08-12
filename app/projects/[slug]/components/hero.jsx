"use client";

import { motion } from "framer-motion";

import { fadeLeft, fadeRight } from "@/lib/motion";

import HeroBadges from "./hero/HeroBadges";
import HeroButtons from "./hero/HeroButtons";
import HeroStats from "./hero/HeroStats";
import HeroImage from "./hero/HeroImage";

export default function Hero({ project }) {
  return (
    <div
      className="
        mx-auto
        grid
        min-h-0
        max-w-[1550px]
        grid-cols-1
        items-center
        gap-14
        overflow-visible
        px-6
        sm:px-8
        lg:min-h-[760px]
        lg:grid-cols-[0.85fr_1.45fr]
        lg:gap-10
        xl:gap-14
      "
    >
      {/* ========================= */}
      {/* LEFT */}
      {/* ========================= */}

      <motion.div
        {...fadeLeft}
        className="
          text-center
          lg:text-left
        "
      >
        <div
          className="
            pt-8
            sm:pt-10
            lg:pt-0
          "
        >
          {/* Status */}

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.03]
              px-3
              py-1
              text-[11px]
              font-medium
              uppercase
              tracking-[2.5px]
              text-gray-400
              backdrop-blur-xl
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#16f2b3]
                shadow-[0_0_8px_rgba(22,242,179,0.8)]
              "
            />
            {project.status}
          </span>

          {/* Title */}

          <h1
            className="
              mt-6
              text-5xl
              font-semibold
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-6xl
              lg:max-w-xl
              lg:text-[4.25rem]
            "
          >
            {project.name}
          </h1>

          {/* Tagline */}

          <p
            className="
              mt-5
              text-lg
              font-medium
              tracking-tight
              text-[#16f2b3]
              sm:text-xl
            "
          >
            {project.hero?.tagline}
          </p>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-lg
              text-[15px]
              leading-7
              text-gray-500
              lg:mx-0
            "
          >
            {project.hero?.description}
          </p>

          {/* Tech */}

          <div className="mt-8">
            <HeroBadges badges={project.hero?.badges || []} />
          </div>

          {/* Buttons */}

          <div
            className="
              mt-9
              flex
              flex-col
              items-center
              gap-4
              sm:flex-row
              sm:justify-center
              lg:justify-start
            "
          >
            <HeroButtons
              github={project.github}
              live={project.live}
            />

            <span
              className="
                hidden
                items-center
                gap-1.5
                text-xs
                text-gray-600
                sm:flex
              "
            >
              Press
              <kbd
                className="
                  rounded-md
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-1.5
                  py-0.5
                  font-mono
                  text-[11px]
                  text-gray-400
                "
              >
                ⏎
              </kbd>
              to launch
            </span>
          </div>

          {/* Stats */}

          <div
            className="
              mt-12
              border-t
              border-white/[0.06]
              pt-8
            "
          >
            <HeroStats stats={project.hero?.stats || []} />
          </div>
        </div>
      </motion.div>

      {/* ========================= */}
      {/* RIGHT */}
      {/* ========================= */}

      <motion.div
        {...fadeRight}
        className="
          relative
          flex
          w-full
          items-center
          justify-center
          overflow-visible
          lg:mt-1
        "
      >
        <HeroImage
          image={project.image}
          preview={project.slug === "flowtest-studio"}
        />
      </motion.div>
    </div>
  );
}