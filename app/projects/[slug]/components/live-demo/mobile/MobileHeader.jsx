"use client";

import {
  FiActivity,
  FiPlay,
  FiPause,
  FiRotateCcw,
} from "react-icons/fi";

import useDemo from "../shared/useDemo";

export default function MobileHeader() {
  const demo = useDemo();

  const workflow = demo.workflow;

  const state = demo.state ?? {
    status: "idle",
  };

  const activeStep = demo.activeStep ?? -1;

  const start = demo.start ?? (() => {});
  const pause = demo.pause ?? (() => {});
  const reset = demo.reset ?? (() => {});

  const totalSteps =
    workflow?.steps?.length ?? 0;

  const currentStep =
    activeStep < 0 ? 0 : activeStep + 1;

  const progress =
    totalSteps === 0
      ? 0
      : Math.round(
          (currentStep / totalSteps) * 100,
        );

  const running =
    state.status === "running";

  return (
    <header
      className="
        border-b
        border-white/10
        bg-[#111827]
        px-5
        py-5
      "
    >
      <h1 className="text-lg font-bold text-white">
        FlowTest Studio
      </h1>

      <p className="mt-1 text-xs uppercase tracking-[2px] text-gray-500">
        Visual Mobile Automation
      </p>

      {/* Status */}

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiActivity className="text-[#16f2b3]" />

          <span className="text-sm font-medium text-[#16f2b3]">
            {state.status.charAt(0).toUpperCase() +
              state.status.slice(1)}
          </span>
        </div>

        <span className="text-sm font-semibold text-white">
          {progress}%
        </span>
      </div>

      {/* Progress */}

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
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

      <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
        <span>
          Step {currentStep} / {totalSteps}
        </span>

        <span>
          {workflow?.platform ?? "Android"}
        </span>
      </div>

      {/* Actions */}

      <div className="mt-5 grid grid-cols-3 gap-2">
        <button
          onClick={start}
          disabled={running}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#16f2b3]
            py-3
            text-sm
            font-semibold
            text-black
            transition
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <FiPlay />

          Run
        </button>

        <button
          onClick={pause}
          disabled={!running}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-white/10
            py-3
            text-sm
            text-white
            transition
            hover:bg-white/5
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <FiPause />

          Pause
        </button>

        <button
          onClick={reset}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-white/10
            py-3
            text-sm
            text-white
            transition
            hover:bg-white/5
          "
        >
          <FiRotateCcw />

          Reset
        </button>
      </div>
    </header>
  );
}