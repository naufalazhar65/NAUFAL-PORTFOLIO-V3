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
      className="order-1 flex justify-center lg:order-2"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.03,
        }}
        className="relative"
      >
        {/* Glow */}

        <div
          className="
            absolute
            -inset-6
            -z-10
            rounded-full
            bg-[#16f2b3]/20
            blur-3xl
            opacity-60
          "
        />

        {/* Glass Border */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-3xl
            border
            border-white/10
            bg-white/[0.02]
            backdrop-blur-sm
          "
        />

        <AboutStatus />

        <Image
          src={personalData.profile}
          alt="Naufal Azhar"
          width={320}
          height={320}
          className="
            relative
            rounded-3xl
            border
            border-white/10
            object-cover
            shadow-2xl
            transition-all
            duration-700
          "
        />

        <FloatingTechStack />
      </motion.div>
    </motion.div>
  );
}