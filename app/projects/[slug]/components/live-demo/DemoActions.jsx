"use client";

import { HiPlay, HiPause, HiArrowPath } from "react-icons/hi2";

import useDemo from "./shared/useDemo";
export default function DemoActions() {
  const {
    start,
    pause,
    reset,
    state,
  } = useDemo();

  const running =
    state.status === "running";

  return (
    <div
      className="
        flex
        items-center
        gap-3
        border-b
        border-white/10
        px-5
        py-4
      "
    >
      <button
        onClick={start}
        disabled={running}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-[#16f2b3]
          px-4
          py-2
          font-medium
          text-black
          transition
          hover:scale-105
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        <HiPlay size={18} />

        Run
      </button>

      <button
        onClick={pause}
        disabled={!running}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-white/10
          px-4
          py-2
          text-white
          transition
          hover:bg-white/5
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        <HiPause size={18} />

        Pause
      </button>

      <button
        onClick={reset}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-white/10
          px-4
          py-2
          text-white
          transition
          hover:bg-white/5
        "
      >
        <HiArrowPath size={18} />

        Reset
      </button>

      <div className="ml-auto">
        <span
          className="
            rounded-full
            bg-white/5
            px-3
            py-1
            text-sm
            text-gray-300
          "
        >
          {state.status}
        </span>
      </div>
    </div>
  );
}