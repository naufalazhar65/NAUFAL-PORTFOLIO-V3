"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const screenshots = [
  {
    src: "/projects/hero-front-01.webp",
    title: "Visual Workflow Builder",
    description:
      "Build mobile automation workflows visually using connected nodes.",
  },
  {
    src: "/projects/hero-front-02.webp",
    title: "Element Inspector",
    description:
      "Inspect application elements and configure automation properties.",
  },
  {
    src: "/projects/hero-front-03.webp",
    title: "Workflow Execution",
    description:
      "Monitor automation execution directly from the workflow interface.",
  },
  {
    src: "/projects/hero-front-04.webp",
    title: "Execution Results",
    description: "Review execution progress, node states and testing results.",
  },
];

const AUTO_PLAY_DURATION = 5000;
const TRANSITION_DURATION = 700;

export default function Gallery({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * =========================================
   * AUTO PLAY
   * =========================================
   */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        return (current + 1) % screenshots.length;
      });
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(interval);
  }, []);

  const activeScreenshot = screenshots[activeIndex];

  if (project.slug !== "flowtest-studio") {
    return null;
  }

  return (
    <section className="relative py-28">
      {/* ================================================= */}
      {/* AMBIENT BACKGROUND */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[45%]
          z-0
          h-[520px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#16f2b3]/[0.025]
          blur-[140px]
        "
      />

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          z-10
          mx-auto
          mb-16
          max-w-3xl
          text-center
        "
      >
        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[5px]
            text-[#16f2b3]
          "
        >
          Product Showcase
        </span>

        <h2
          className="
            mt-5
            text-4xl
            font-black
            tracking-tight
            text-white
            md:text-5xl
            lg:text-6xl
          "
        >
          Explore FlowTest Studio
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-gray-400
          "
        >
          A closer look at the visual workflow editor, automation inspector and
          execution experience.
        </p>
      </motion.div>

      {/* ================================================= */}
      {/* SHOWCASE */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-[1180px]
        "
      >
        {/* ============================================= */}
        {/* OUTER GLOW */}
        {/* ============================================= */}

        <div
          className="
            pointer-events-none
            absolute
            -inset-10
            rounded-[50px]
            bg-black/30
            blur-[80px]
          "
        />

        {/* ============================================= */}
        {/* SCREENSHOT CONTAINER */}
        {/* ============================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-white/[0.10]
            bg-[#080b12]
            shadow-[0_45px_120px_rgba(0,0,0,0.55)]
          "
        >
          {/* =========================================== */}
          {/* TOP LIGHT */}
          {/* =========================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              z-30
              h-px
              bg-white/[0.12]
            "
          />

          {/* =========================================== */}
          {/* SCREENSHOT STAGE */}
          {/* =========================================== */}

          <div
            className="
              relative
              aspect-[2048/1483]
              overflow-hidden
              bg-[#080b12]
            "
          >
            {/* ========================================= */}
            {/* SCREENSHOT LAYERS */}
            {/* ========================================= */}

            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.src}
                className={`
                  absolute
                  inset-0
                  ${
                    activeIndex === index
                      ? "z-[2] opacity-100"
                      : "z-[1] opacity-0"
                  }
                `}
                style={{
                  transitionProperty: "opacity",
                  transitionDuration: `${TRANSITION_DURATION}ms`,
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.title}
                  fill
                  priority={index === 0}
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 1180px"
                  draggable={false}
                  className="
                    select-none
                    object-cover
                  "
                />
              </div>
            ))}

            {/* ========================================= */}
            {/* CINEMATIC GRADIENT */}
            {/* ========================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-10
                bg-gradient-to-b
                from-transparent
                via-transparent
                to-black/20
              "
            />

            {/* ========================================= */}
            {/* SOFT EDGE */}
            {/* ========================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-20
                rounded-[30px]
                border
                border-white/[0.04]
              "
            />

            {/* ========================================= */}
            {/* FLOATING CONTROLS */}
            {/* ========================================= */}

            {/* <div
              className="
                absolute
                bottom-7
                left-1/2
                z-40
                flex
                -translate-x-1/2
                items-center
                gap-1.5
                rounded-full
                border
                border-white/[0.10]
                bg-[#11151f]/90
                p-1.5
                shadow-[0_15px_40px_rgba(0,0,0,0.45)]
                backdrop-blur-xl
              "
            >
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${screenshot.title}`}
                  className={`
                    relative
                    flex
                    h-9
                    items-center
                    justify-center
                    rounded-full
                    px-4
                    text-xs
                    font-medium
                    transition-all
                    duration-300

                    ${
                      activeIndex === index
                        ? "bg-white/[0.10] text-white"
                        : "text-gray-500 hover:bg-white/[0.05] hover:text-gray-300"
                    }
                  `}
                >
                  <span
                    className={`
                      mr-2
                      h-1.5
                      w-1.5
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        activeIndex === index
                          ? "bg-[#16f2b3] shadow-[0_0_8px_rgba(22,242,179,0.8)]"
                          : "bg-white/20"
                      }
                    `}
                  />

                  <span className="hidden sm:block">{index + 1}</span>
                </button>
              ))}
            </div> */}
          </div>
        </div>

        {/* ================================================= */}
        {/* CAPTION */}
        {/* ================================================= */}

        <div className="mt-8 text-center">
          <motion.div
            key={activeScreenshot.title}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <h3
              className="
                text-2xl
                font-bold
                tracking-tight
                text-white
                md:text-3xl
              "
            >
              {activeScreenshot.title}
            </h3>

            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-sm
                leading-7
                text-gray-500
                md:text-base
              "
            >
              {activeScreenshot.description}
            </p>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* PROGRESS */}
        {/* ================================================= */}

        <div
          className="
            mx-auto
            mt-7
            h-px
            max-w-[260px]
            overflow-hidden
            rounded-full
            bg-white/[0.06]
          "
        >
          <div
            className="
              h-full
              rounded-full
              bg-[#16f2b3]/70
              transition-all
              duration-500
            "
            style={{
              width: `${((activeIndex + 1) / screenshots.length) * 100}%`,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
