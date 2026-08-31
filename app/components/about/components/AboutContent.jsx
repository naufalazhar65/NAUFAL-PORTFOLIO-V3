"use client";

import { motion } from "framer-motion";

import { fadeUp } from "@/app/lib/motion";

const focus = [
  {
    title: "Automation",
    text:
      "Building reusable test flows instead of one-off scripts.",
  },
  {
    title: "Failure investigation",
    text:
      "Tracing selectors, device sessions, test data, and execution state.",
  },
  {
    title: "QA tooling",
    text:
      "Turning repetitive QA workflows into tools that are easier to inspect and maintain.",
  },
];

export default function AboutContent() {
  return (
    <div className="max-w-3xl">
      {/* =========================
          META
      ========================= */}

      <motion.div
        variants={fadeUp}
        className="flex items-center gap-4"
      >
        <span
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.14em]
            text-[#16f2b3]
          "
        >
          01
        </span>

        <span
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.14em]
            text-gray-400
          "
        >
          About
        </span>
      </motion.div>

      {/* =========================
          TITLE
      ========================= */}

      <motion.h1
  variants={fadeUp}
  className="
    mt-8
    max-w-3xl
    text-[clamp(52px,7vw,96px)]
    font-semibold
    leading-[0.98]
    tracking-[-0.075em]
    text-white
  "
>
        I like finding out
        <br />
        <span className="text-gray-400">
          why tests fail.
        </span>
      </motion.h1>

      {/* =========================
          INTRO
      ========================= */}

      <motion.p
        variants={fadeUp}
        className="
          mt-10
          max-w-2xl
          text-[18px]
          leading-8
          tracking-[-0.02em]
          text-gray-300
          sm:text-[19px]
        "
      >
        I&apos;m{" "}
        <span className="font-medium text-white">
          Naufal Azhar
        </span>
        . I break software for a living — and I mean that
        as a compliment. Most of my work involves automation
        frameworks, mobile device testing, API contracts,
        and performance analysis.
      </motion.p>

      {/* =========================
          PERSONAL APPROACH
      ========================= */}

      <motion.p
        variants={fadeUp}
        className="
          mt-6
          max-w-2xl
          text-[14px]
          leading-7
          text-gray-300
        "
      >
        Most of my work starts with a practical question:
        when something breaks, can I reproduce it, inspect it,
        and explain what happened? That mindset has taken me
        from writing test automation to building the tools
        around execution, device sessions, failure evidence,
        and reporting.
      </motion.p>

      {/* =========================
          FOCUS
      ========================= */}

      <motion.div
        variants={fadeUp}
        className="
          mt-12
          border-t
          border-white/[0.08]
        "
      >
        <div
          className="
            grid
            gap-0
            border-b
            border-white/[0.08]
            sm:grid-cols-3
          "
        >
          {focus.map((item, index) => (
            <div
              key={item.title}
              className={`
                py-6
                ${
                  index !== focus.length - 1
                    ? "border-b border-white/[0.08] sm:border-b-0 sm:border-r"
                    : ""
                }
                ${
                  index === 0
                    ? "sm:pr-7"
                    : index === 1
                      ? "sm:px-7"
                      : "sm:pl-7"
                }
              `}
            >
              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-gray-400
                "
              >
                {item.title}
              </span>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-gray-300
                "
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}