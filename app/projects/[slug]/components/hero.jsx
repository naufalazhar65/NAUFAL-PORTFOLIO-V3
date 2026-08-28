"use client";

import { motion } from "framer-motion";

import { fadeLeft, fadeRight } from "@/app/lib/motion";

import HeroBadges from "./hero/HeroBadges";
import HeroButtons from "./hero/HeroButtons";
import HeroStats from "./hero/HeroStats";
import HeroImage from "./hero/HeroImage";

export default function Hero({ project }) {
  const role = project.role || "QA Engineer";
  const year = project.year || "";
  const hero = project.hero || {};

  return (
    <section className="relative overflow-hidden border-b border-white/[0.08]">
      {/* ... background dekoratif ... */}
      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:min-h-[760px] lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8 lg:pt-36 lg:pb-24">
        {/* LEFT */}
        <motion.div {...fadeLeft} className="relative z-10 text-center lg:text-left">
          {/* identity */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#16f2b3]">01</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">Case Study</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-gray-600">{role}</span>
            {year && (
              <>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-gray-600">{year}</span>
              </>
            )}
          </div>

          {/* Status */}
          <div className="mb-6 inline-flex items-center gap-2 border-b border-white/[0.08] pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16f2b3] shadow-[0_0_12px_rgba(22,242,179,.3)]" />
            {project.status || "Status Available"}
          </div>

          {/* Title */}
          <h1 className="max-w-[720px] text-[clamp(56px,7vw,104px)] font-semibold leading-[0.9] tracking-[-0.075em] text-white">
            {project.name}
          </h1>

          {/* Tagline */}
          {hero.tagline && (
            <p className="mt-7 text-xl font-medium leading-tight tracking-[-0.025em] text-gray-200 sm:text-2xl">
              {hero.tagline}
            </p>
          )}

          {/* Description */}
          {hero.description && (
            <p className="mx-auto mt-6 max-w-[560px] text-[15px] leading-7 text-gray-500 lg:mx-0">
              {hero.description}
            </p>
          )}

          {/* Badges */}
          {hero.badges?.length > 0 && (
            <div className="mt-8">
              <HeroBadges badges={hero.badges} />
            </div>
          )}

          {/* Actions */}
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <HeroButtons github={project.github} live={project.live} />
          </div>

          {/* Stats */}
          {hero.stats?.length > 0 && (
            <div className="mt-12 border-t border-white/[0.08] pt-7">
              <HeroStats stats={hero.stats} />
            </div>
          )}
        </motion.div>

        {/* RIGHT */}
        <motion.div {...fadeRight} className="relative z-10 flex w-full items-center justify-center lg:justify-end">
          <div className="w-full max-w-[720px]">
            <HeroImage image={project.image} preview={project.slug === "flowtest-studio"} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}