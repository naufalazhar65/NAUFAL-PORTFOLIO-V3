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
    <div className="flex h-full items-center justify-between px-6">
      {/* Device */}

      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            border
            border-[#16f2b3]/15
            bg-[#16f2b3]/[0.08]
            text-[#16f2b3]
          "
        >
          <Smartphone size={17} />
        </div>

        <div>
          <h3 className="text-sm font-medium tracking-[-0.01em] text-white">
            {topbar.device}
          </h3>

          <p className="text-[11px] text-gray-500">
            {topbar.platform}
          </p>
        </div>
      </div>

      {/* Progress */}

      <div className="hidden items-center gap-3 md:flex">
        <div
          className="
            h-1.5
            w-52
            overflow-hidden
            rounded-full
            bg-white/[0.06]
          "
        >
          <div
            className="
              h-full
              rounded-full
              bg-[#16f2b3]
              shadow-[0_0_12px_rgba(22,242,179,.25)]
              transition-all
              duration-700
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <span className="min-w-[34px] text-right text-[11px] font-medium text-gray-500">
          {Math.round(progress)}%
        </span>
      </div>

      {/* Status */}

      <div
        className="
          flex
          items-center
          gap-2
          rounded-full
          border
          border-white/[0.06]
          bg-white/[0.025]
          px-3
          py-1.5
        "
      >
        {running ? (
          <Loader2
            size={13}
            className="animate-spin text-[#16f2b3]"
          />
        ) : completed ? (
          <CheckCircle2
            size={13}
            className="text-[#16f2b3]"
          />
        ) : (
          <Play
            size={12}
            className="text-gray-500"
          />
        )}

        <span
          className={`
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.08em]
            ${
              running || completed
                ? "text-[#16f2b3]"
                : "text-gray-500"
            }
          `}
        >
          {topbar.status}
        </span>
      </div>
    </div>
  );
}