"use client";

import {
  Play,
  CheckCircle2,
  Loader2,
  Save,
} from "lucide-react";

import { useHero } from "../../HeroContext";

export default function Topbar() {
  const { topbar, progress } = useHero();

  const running = topbar.status === "Running";
  const completed = topbar.status === "Completed";

  return (
    <header className="relative z-50 flex h-[56px] shrink-0 items-center justify-between border-b border-white/[0.08] bg-[#11161d] px-3 sm:px-4 overflow-hidden">
      {/* Progress bar bawah */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/[0.04]" />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-px bg-[#16f2b3] transition-all duration-500"
        style={{ width: `${progress}%` }}
      />

      {/* LEFT - hanya logo dan judul */}
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#16f2b3] to-[#3b82f6] text-sm font-bold text-black shadow-[0_8px_24px_rgba(22,242,179,.12)]">
          F
        </div>
        <div className="hidden md:block">
          <h1 className="text-sm font-semibold tracking-[-0.025em] text-white">
            FlowTest Studio
          </h1>
          <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-gray-500">
            Visual Mobile Automation IDE
          </p>
        </div>
      </div>

      {/* RIGHT - hanya tombol penting */}
      <div className="flex shrink-0 items-center gap-2">
        {/* Status singkat */}
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-medium text-gray-400">
          {running ? (
            <Loader2 size={12} className="animate-spin text-[#16f2b3]" />
          ) : completed ? (
            <CheckCircle2 size={12} className="text-[#16f2b3]" />
          ) : (
            <Play size={12} className="text-gray-500" />
          )}
          <span className={running || completed ? "text-[#16f2b3]" : ""}>
            {running ? "Running" : completed ? "Done" : "Ready"}
          </span>
        </div>

        <button
          type="button"
          className="hidden sm:flex h-8 items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.025] px-2.5 text-[11px] font-medium text-gray-300 hover:bg-white/[0.05]"
        >
          <Save size={13} />
          <span className="hidden lg:inline">Save</span>
        </button>

        <button
          type="button"
          disabled={running}
          className={`flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-[11px] font-semibold transition-all ${
            running
              ? "border-[#16f2b3]/30 bg-[#16f2b3]/70 text-black cursor-not-allowed"
              : "border-[#16f2b3]/30 bg-[#16f2b3] text-black hover:bg-[#22f6ba]"
          }`}
        >
          {running ? (
            <Loader2 size={13} className="animate-spin" />
          ) : (
            <Play size={13} />
          )}
          <span>{running ? "Running..." : "Run"}</span>
        </button>
      </div>
    </header>
  );
}