"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { personalData } from "@/utils/data/personal-data";

import { fadeUp } from "@/app/lib/motion";
import useAboutParallax from "../hooks/useAboutParallax";

import AboutStatus from "./AboutStatus";
import FloatingTechStack from "./FloatingTechStack";

export default function AboutImage() {
  const {
    cardRef,
    springX,
    springY,
    handleMouseMove,
    handleMouseLeave,
  } = useAboutParallax();

  return (
    <motion.div
      variants={fadeUp}
      className="
        order-1
        flex
        justify-center

        lg:order-2
      "
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          x: springX,
          y: springY,
        }}
        whileHover={{
          scale: 1.02,
        }}
        className="
          group
          relative
        "
      >
        {/* ========================= */}
        {/* GLOW */}
        {/* ========================= */}

        <div
          className="
            pointer-events-none

            absolute
            -inset-8
            -z-10

            rounded-full

            bg-[#16f2b3]/10

            blur-3xl

            opacity-70

            transition-opacity
            duration-500

            group-hover:opacity-90
          "
        />

        {/* ========================= */}
        {/* GLASS BORDER */}
        {/* ========================= */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0
            z-10

            rounded-3xl

            border
            border-white/10

            bg-white/[0.02]

          "
        />

        {/* ========================= */}
        {/* STATUS */}
        {/* ========================= */}

        <AboutStatus />

        {/* ========================= */}
        {/* PROFILE IMAGE */}
        {/* ========================= */}

        <Image
          src={personalData.profile}
          alt="Naufal Azhar"
          width={320}
          height={320}
          priority
          className="
            relative

            rounded-3xl

            border
            border-white/10

            object-cover

            shadow-[0_25px_70px_rgba(0,0,0,0.35)]

            transition-all
            duration-500
          "
        />

        {/* ========================= */}
        {/* FLOATING TECH */}
        {/* ========================= */}

        <FloatingTechStack />
      </motion.div>
    </motion.div>
  );
}