"use client";

import { motion } from "framer-motion";

import { fadeUp } from "@/app/lib/motion";

export default function SkillsHeader() {
  return (
    <motion.div
      variants={fadeUp}
      className="
        grid
        gap-8
        border-b
        border-white/[0.08]
        pb-8
        lg:grid-cols-[1fr_0.55fr]
        lg:items-end
      "
    >
      <div>
        <div className="flex items-center gap-4">
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
              text-gray-600
            "
          >
            Skills
          </span>
        </div>

        <h1
          className="
            mt-7
            max-w-4xl
            text-[clamp(48px,6.5vw,88px)]
            font-semibold
            leading-[0.94]
            tracking-[-0.07em]
            text-white
          "
        >
          Tools I use
          <br />
          <span className="text-gray-600">
            to test software.
          </span>
        </h1>
      </div>

      <p
        className="
          max-w-md
          text-[14px]
          leading-7
          text-gray-500
        "
      >
        A working toolset for automation, mobile testing,
        API validation, performance checks, and the
        infrastructure around them.
      </p>
    </motion.div>
  );
}