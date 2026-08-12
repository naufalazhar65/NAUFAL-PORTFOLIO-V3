"use client";

import {
  FiArrowUpRight,
  FiBookOpen,
  FiGithub,
  FiPlay,
} from "react-icons/fi";

export default function HeroButtons({
  github,
  demo,
  documentation,
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">

      {/* Live Demo */}

      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[#16f2b3]
            px-5
            py-2.5
            text-sm
            font-medium
            text-black
            transition-transform
            duration-200
            hover:scale-[1.03]
          "
        >
          <FiPlay className="text-[13px]" />

          Live Demo

          <FiArrowUpRight
            className="
              text-[13px]
              transition-transform
              duration-200
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </a>
      )}

      {/* GitHub */}

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/[0.08]
            bg-white/[0.03]
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            backdrop-blur-xl
            transition-colors
            duration-200
            hover:border-[#16f2b3]/30
            hover:bg-white/[0.05]
          "
        >
          <FiGithub className="text-[13px]" />

          GitHub

          <FiArrowUpRight
            className="
              text-[13px]
              transition-transform
              duration-200
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </a>
      )}

      {/* Documentation */}

      {documentation && (
        <a
          href={documentation}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/[0.08]
            bg-white/[0.03]
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            backdrop-blur-xl
            transition-colors
            duration-200
            hover:border-[#16f2b3]/30
            hover:bg-white/[0.05]
          "
        >
          <FiBookOpen className="text-[13px]" />

          Documentation

          <FiArrowUpRight
            className="
              text-[13px]
              transition-transform
              duration-200
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </a>
      )}
    </div>
  );
}