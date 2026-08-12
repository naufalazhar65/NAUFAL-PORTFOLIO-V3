"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const screenshots = [
  {
    src: "/projects/builder.webp",
    title: "Visual Workflow Builder",
    description:
      "Build and visualize mobile automation workflows by connecting reusable testing nodes in an intuitive flow-based editor.",
    label: "Builder",
  },
  {
    src: "/projects/reports.webp",
    title: "Report Analytics",
    description:
      "Review automation execution results through a centralized reporting interface with execution status, progress and test metrics.",
    label: "Report Analytics",
  },
  {
    src: "/projects/deviceManager.webp",
    title: "Device Manager",
    description:
      "Manage connected testing devices and configure the target platform used for mobile automation execution.",
    label: "Device Manager",
  },
  {
    src: "/projects/ReportDetail.webp",
    title: "Execution Results",
    description:
      "Inspect detailed execution results, including individual test steps, execution status, logs, and overall workflow outcomes.",
    label: "Results",
  },
];

const AUTO_PLAY_DURATION = 5000;
const TRANSITION_DURATION = 500;

export default function Gallery({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * =========================================
   * AUTO PLAY
   * =========================================
   */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % screenshots.length);
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const activeScreenshot = screenshots[activeIndex];

  if (project.slug !== "flowtest-studio") {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-28">
      {/* ================================================= */}
      {/* AMBIENT BACKGROUND — dual warm glow, Raycast-style */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[38%]
          z-0
          h-[460px]
          w-[780px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#16f2b3]/[0.07]
          blur-[130px]
        "
      />

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto mb-14 max-w-2xl text-center"
      >
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
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#16f2b3] shadow-[0_0_8px_rgba(22,242,179,0.8)]" />
          Product tour
        </span>

        <h2
          className="
            mt-5
            text-4xl
            font-semibold
            tracking-tight
            text-white
            md:text-5xl
          "
        >
          Explore{" "}
          <span
            className="
              bg-gradient-to-r
              from-[#16f2b3]
              to-[#16f2b3]
              bg-clip-text
              text-transparent
            "
          >
            FlowTest Studio
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-gray-500">
          A closer look at the visual workflow editor, automation inspector and
          execution experience.
        </p>
      </motion.div>

      {/* ================================================= */}
      {/* SHOWCASE */}
      {/* ================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-[980px] px-4"
      >
        {/* ============================================= */}
        {/* WINDOW */}
        {/* ============================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.08]
            bg-[#0A0A0C]
            shadow-[0_30px_90px_rgba(0,0,0,0.6)]
          "
        >
          {/* =========================================== */}
          {/* TITLE BAR — macOS chrome */}
          {/* =========================================== */}

          <div
            className="
              relative
              flex
              h-11
              items-center
              justify-center
              border-b
              border-white/[0.06]
              bg-white/[0.02]
              px-4
            "
          >
            <div className="absolute left-4 flex items-center gap-[7px]">
              <span className="h-[11px] w-[11px] rounded-full bg-[#FF5F57]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#FEBC2E]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#28C840]" />
            </div>

            <span className="text-xs font-medium text-gray-500">
              flowtest-studio
              <span className="text-gray-600"> — {activeScreenshot.label}</span>
            </span>
          </div>

          {/* =========================================== */}
          {/* SCREENSHOT STAGE */}
          {/* =========================================== */}

          <div className="relative aspect-[2048/1483] overflow-hidden bg-[#0A0A0C]">
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
                  sizes="(max-width: 768px) 100vw, 980px"
                  draggable={false}
                  className="select-none object-cover"
                />
              </div>
            ))}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-10
                bg-gradient-to-b
                from-transparent
                via-transparent
                to-black/25
              "
            />
          </div>
        </div>

        {/* ================================================= */}
        {/* SEGMENTED PILL SWITCHER — Raycast signature */}
        {/* ================================================= */}

        <div className="mt-8 flex justify-center">
          <div
            className="
              inline-flex
              items-center
              gap-1
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.03]
              p-1
              backdrop-blur-xl
            "
          >
            {screenshots.map((screenshot, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={screenshot.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${screenshot.title}`}
                  className="
                    relative
                    rounded-full
                    px-4
                    py-2
                    text-[13px]
                    font-medium
                    transition-colors
                    duration-200
                  "
                >
                  {isActive && (
                    <motion.span
                      layoutId="raycast-pill"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-[#16f2b3]
                      "
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      isActive
                        ? "text-white"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {screenshot.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================= */}
        {/* CAPTION */}
        {/* ================================================= */}

        <div className="mx-auto mt-6 max-w-md text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeScreenshot.title}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="text-sm leading-6 text-gray-500"
            >
              {activeScreenshot.description}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
