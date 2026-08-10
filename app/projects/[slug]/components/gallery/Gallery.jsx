"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const screenshots = [
  {
    src: "/projects/hero-front-01.webp",
    title: "Workflow Canvas",
    description: "Visual workflow editor for building mobile automation flows.",
  },
  {
    src: "/projects/hero-front-02.webp",
    title: "Element Inspector",
    description: "Inspect and configure automation node properties.",
  },
  {
    src: "/projects/hero-front-03.webp",
    title: "Execution",
    description: "Monitor workflow execution and individual automation steps.",
  },
  {
    src: "/projects/hero-front-04.webp",
    title: "Execution Report",
    description: "Review execution results and testing information.",
  },
];

export default function Gallery({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (project.slug !== "flowtest-studio") {
    return null;
  }

  const activeScreenshot = screenshots[activeIndex];

  return (
    <section className="relative py-24">
      {/* ========================================= */}
      {/* HEADER */}
      {/* ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mb-12"
      >
        <span
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[6px]
            text-[#16f2b3]
          "
        >
          Gallery
        </span>

        <h2
          className="
            mt-4
            text-4xl
            font-black
            text-white
            md:text-5xl
          "
        >
          Explore FlowTest Studio
        </h2>

        <p
          className="
            mt-5
            max-w-2xl
            text-lg
            leading-8
            text-gray-400
          "
        >
          Explore different parts of the FlowTest Studio interface and see how
          the visual automation workflow comes together.
        </p>
      </motion.div>

      {/* ========================================= */}
      {/* MAIN SCREENSHOT */}
      {/* ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
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
          overflow-hidden
          rounded-[24px]
          border
          border-white/10
          bg-[#0d1117]
          shadow-[0_30px_100px_rgba(0,0,0,0.45)]
        "
      >
        <div className="relative">
          <Image
            src={activeScreenshot.src}
            alt={activeScreenshot.title}
            width={2048}
            height={1483}
            priority
            className="
              block
              h-auto
              w-full
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-white/[0.02]
              via-transparent
              to-black/20
            "
          />
        </div>
      </motion.div>

      {/* ========================================= */}
      {/* INFO */}
      {/* ========================================= */}

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-white">
          {activeScreenshot.title}
        </h3>

        <p className="mt-3 max-w-2xl leading-8 text-gray-400">
          {activeScreenshot.description}
        </p>
      </div>

      {/* ========================================= */}
      {/* THUMBNAILS */}
      {/* ========================================= */}

      <div
        className="
          mt-8
          grid
          grid-cols-2
          gap-4
          md:grid-cols-4
        "
      >
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              text-left
              transition-all
              duration-300

              ${
                activeIndex === index
                  ? "border-[#16f2b3]/70 shadow-[0_0_30px_rgba(22,242,179,0.12)]"
                  : "border-white/10 hover:border-white/30"
              }
            `}
          >
            <Image
              src={screenshot.src}
              alt={screenshot.title}
              width={500}
              height={360}
              className="
                block
                aspect-video
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-transparent
                to-transparent
              "
            />

            <span
              className="
                absolute
                bottom-3
                left-3
                text-xs
                font-semibold
                text-white
                md:text-sm
              "
            >
              {screenshot.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
