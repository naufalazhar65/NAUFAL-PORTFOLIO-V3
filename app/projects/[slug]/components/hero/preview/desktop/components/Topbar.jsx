"use client";

import {
  Smartphone,
  Play,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import { useHero } from "../../HeroContext";

export default function Topbar() {
  const { topbar, progress } = useHero();

  const running = topbar.status === "Running";
  const completed = topbar.status === "Completed";

  return (
    <div
      className="
        flex
        h-full
        items-center
        justify-between

        px-6
      "
    >
      {/* Left */}

      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-xl

            bg-[#16f2b3]/10
            text-[#16f2b3]
          "
        >
          <Smartphone size={18} />
        </div>

        <div>
          <h3
            className="
              text-sm
              font-semibold
              text-white
            "
          >
            {topbar.device}
          </h3>

          <p
            className="
              text-xs
              text-gray-500
            "
          >
            {topbar.platform}
          </p>
        </div>
      </div>

      {/* Center */}

      <div
        className="
          hidden
          md:flex
          items-center
          gap-4
        "
      >
        <div
          className="
            h-2
            w-52

            overflow-hidden

            rounded-full

            bg-white/5
          "
        >
          <div
            className="
              h-full

              rounded-full

              bg-[#16f2b3]

              transition-all
              duration-700
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <span
          className="
            text-xs
            font-semibold

            text-gray-400
          "
        >
          {Math.round(progress)}%
        </span>
      </div>

      {/* Right */}

      <div
        className="
          flex
          items-center
          gap-3

          rounded-full

          border
          border-white/5

          bg-white/[0.03]

          px-4
          py-2
        "
      >
        {running ? (
          <Loader2
            size={15}
            className="
              animate-spin
              text-sky-400
            "
          />
        ) : completed ? (
          <CheckCircle2
            size={15}
            className="text-emerald-400"
          />
        ) : (
          <Play
            size={14}
            className="text-gray-500"
          />
        )}

        <span
          className={`
            text-xs
            font-semibold

            ${
              running
                ? "text-sky-400"
                : completed
                ? "text-emerald-400"
                : "text-gray-400"
            }
          `}
        >
          {topbar.status}
        </span>
      </div>
    </div>
  );
}