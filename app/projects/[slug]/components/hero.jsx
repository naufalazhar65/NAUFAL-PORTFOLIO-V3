"use client";

import { motion } from "framer-motion";

import { fadeLeft, fadeRight } from "@/lib/motion";

import HeroBadges from "./hero/HeroBadges";
import HeroButtons from "./hero/HeroButtons";
import HeroStats from "./hero/HeroStats";
import HeroImage from "./hero/HeroImage";

export default function Hero({ project }) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-center
          gap-14
          px-6

          lg:grid-cols-2
          lg:gap-20
        "
      >
        {/* LEFT */}

        <motion.div
          {...fadeLeft}
          className="text-center lg:text-left"
        >
          {/* Status */}

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#16f2b3]/30
              bg-[#16f2b3]/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-[#16f2b3]
            "
          >
            {project.status}
          </span>

          {/* Title */}

          <h1
            className="
              mt-6
              text-5xl
              font-black
              leading-[0.95]
              tracking-tight
              text-white

              sm:text-6xl

              lg:max-w-2xl
              lg:text-7xl

              xl:text-8xl
            "
          >
            {project.name}
          </h1>

          {/* Tagline */}

          <p
            className="
              mt-6
              text-lg
              font-semibold
              text-[#16f2b3]

              sm:text-xl

              lg:text-2xl
            "
          >
            {project.hero?.tagline}
          </p>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-8
              max-w-xl
              leading-8
              text-gray-400

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

          <div className="mt-10">
            <HeroButtons
              github={project.github}
              live={project.live}
            />
          </div>

          {/* Stats */}

          <div className="mt-12">
            <HeroStats stats={project.hero?.stats || []} />
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          {...fadeRight}
          className="flex justify-center lg:justify-end"
        >
          <HeroImage
            image={project.image}
            preview={project.slug === "flowtest-studio"}
          />
        </motion.div>
      </div>
    </section>
  );
}