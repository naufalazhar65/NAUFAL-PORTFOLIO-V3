"use client";

import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiPlay } from "react-icons/fi";

const SingleProject = ({ project }) => {
  const { name, description, tags = [], code, demo, image } = project;

  return (
    <div
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-[#0d1117]
        shadow-[0_20px_60px_rgba(0,0,0,0.30)]
      "
    >
      {/* Title bar */}

      <div
        className="
          relative
          flex
          h-10
          items-center
          justify-center
          border-b
          border-white/[0.06]
          bg-white/[0.02]
          px-4
        "
      >
        <div className="absolute left-4 flex items-center gap-[6px]">
          <span className="h-[10px] w-[10px] rounded-full bg-[#FF5F57]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#FEBC2E]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#28C840]" />
        </div>

        <span className="truncate text-[11px] font-medium text-gray-500">
          {name}
        </span>
      </div>

      {/* Image + hover actions */}

      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image || "/png/placeholder.png"}
          alt={name}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            flex
            items-center
            justify-center
            gap-3
            bg-black/0
            transition-colors
            duration-300
            group-hover:bg-black/50
          "
        >
          {demo && (
            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${name} live demo`}
              className="
                pointer-events-auto
                flex
                h-10
                w-10
                translate-y-2
                items-center
                justify-center
                rounded-full
                bg-[#16f2b3]
                text-black
                opacity-0
                transition-all
                duration-300
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <FiPlay size={15} />
            </Link>
          )}

          {code && (
            <Link
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${name} source code`}
              className="
                pointer-events-auto
                flex
                h-10
                w-10
                translate-y-2
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-white
                opacity-0
                backdrop-blur-xl
                transition-all
                duration-300
                delay-[60ms]
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <FiGithub size={15} />
            </Link>
          )}
        </div>
      </div>

      {/* Info */}

      <div className="p-5">
        <h3
          className="
            truncate
            text-base
            font-semibold
            tracking-tight
            text-white
          "
        >
          {name}
        </h3>

        <p
          className="
            mt-2
            line-clamp-2
            text-sm
            leading-6
            text-gray-500
          "
        >
          {description}
        </p>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-lg
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  px-2
                  py-0.5
                  font-mono
                  text-[11px]
                  text-gray-400
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
