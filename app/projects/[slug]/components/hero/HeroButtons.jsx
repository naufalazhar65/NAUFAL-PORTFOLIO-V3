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
    <div className="mt-10 flex flex-wrap gap-4">

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
            rounded-2xl
            bg-[#16f2b3]
            px-6
            py-4
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-105
          "
        >
          <FiPlay />

          Live Demo

          <FiArrowUpRight
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
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
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            px-6
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:border-[#16f2b3]/40
            hover:bg-white/[0.05]
          "
        >
          <FiGithub />

          GitHub

          <FiArrowUpRight
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
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
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            px-6
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:border-[#16f2b3]/40
            hover:bg-white/[0.05]
          "
        >
          <FiBookOpen />

          Documentation

          <FiArrowUpRight
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </a>
      )}
    </div>
  );
}