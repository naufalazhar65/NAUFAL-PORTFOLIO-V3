"use client";

import { FiPlay, FiPause, FiRotateCcw } from "react-icons/fi";

export default function ExecutionControls({
  onRun,
  onPause,
  onReset,
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={onRun}
        className="flex items-center gap-2 rounded-xl bg-[#16f2b3] px-5 py-3 font-semibold text-black transition hover:scale-105"
      >
        <FiPlay />

        Run
      </button>

      <button
        onClick={onPause}
        className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-white transition hover:border-[#16f2b3]"
      >
        <FiPause />

        Pause
      </button>

      <button
        onClick={onReset}
        className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-white transition hover:border-[#16f2b3]"
      >
        <FiRotateCcw />

        Reset
      </button>
    </div>
  );
}