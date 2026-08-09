"use client";

import { motion } from "framer-motion";

import { fadeLeft, fadeRight } from "@/lib/motion";

import HeroBadges from "./hero/HeroBadges";
import HeroButtons from "./hero/HeroButtons";
import HeroStats from "./hero/HeroStats";
import HeroImage from "./hero/HeroImage";

export default function Hero({ project }) {
  return (
    <section className="relative overflow-hidden">
      <div
  className="
    mx-auto
    grid
    min-h-[760px]
    max-w-[1550px]

    grid-cols-1
    items-center
    gap-14

    overflow-visible

    px-8

    lg:grid-cols-[0.85fr_1.4fr]
  "
>
        {/* ========================= */}
        {/* LEFT */}
        {/* ========================= */}

        <motion.div {...fadeLeft} className="text-center lg:text-left">
          <div
            className="
            lg:-translate-x-6
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

        lg:max-w-xl
        lg:text-7xl

        xl:text-[5.4rem]
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
              <HeroButtons github={project.github} live={project.live} />
            </div>

            {/* Stats */}

            <div className="mt-12">
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
    mt-0
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
    </section>
  );
}
