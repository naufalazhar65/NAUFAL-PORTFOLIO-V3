"use client";

import {
  FiPlay,
  FiPause,
  FiRotateCcw,
  FiSmartphone,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

import useDemo from "../shared/useDemo";

export default function DemoTopBar() {
  const demo = useDemo();

  const workflow = demo.workflow;
  const activeNode = demo.activeNode;
  const activeStep = demo.activeStep ?? -1;

  const state = demo.state ?? {
    status: "idle",
  };
  const paused = state.status === "paused";
  const finished = state.status === "finished";

  const start = demo.start ?? (() => {});
  const pause = demo.pause ?? (() => {});
  const reset = demo.reset ?? (() => {});

  const totalSteps = workflow?.steps?.length ?? 0;

  const currentStep = activeStep < 0 ? 0 : activeStep + 1;

  const progress = totalSteps === 0 ? 0 : (currentStep / totalSteps) * 100;

  const STATUS = {
    idle: {
      label: "Idle",
      icon: FiPlay,
      className: "bg-gray-500/10 text-gray-300",
    },

    running: {
      label: "Running",
      icon: FiPlay,
      className: "bg-[#16f2b3]/10 text-[#16f2b3]",
    },

    paused: {
      label: "Paused",
      icon: FiPause,
      className: "bg-yellow-500/10 text-yellow-300",
    },

    finished: {
      label: "Passed",
      icon: FiCheckCircle,
      className: "bg-blue-500/10 text-blue-300",
    },
  };

  const currentStatus = STATUS[state.status] ?? STATUS.idle;

  const StatusIcon = currentStatus.icon;

  const running = state.status === "running";

  return (
    <header className="border-b border-white/10 bg-[#111827]">
      {/* Top */}

      <div className="flex items-center justify-between px-6 py-5">
        {/* Left */}

        <div>
          <h2 className="text-xl font-bold text-white">FlowTest Studio</h2>

          <p className="mt-1 text-sm text-gray-400">
            Interactive Automation Preview
          </p>
        </div>

        {/* Center */}

        <div className="flex items-center gap-3">
          <button
            onClick={start}
            disabled={running}
            className="
    flex
    items-center
    gap-2
    rounded-xl
    bg-[#16f2b3]
    px-5
    py-2.5
    font-medium
    text-black
    transition
    hover:scale-105
    disabled:cursor-not-allowed
    disabled:opacity-40
  "
          >
            <FiPlay size={15} />

            {paused ? "Resume" : finished ? "Run Again" : "Run"}
          </button>

          <button
            onClick={pause}
            disabled={!running || finished}
            className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      px-5
                      py-2.5
                      text-white
                      transition
                      hover:bg-white/5
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    "
          >
            <FiPause size={15} />
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
              px-5
              py-2.5
              text-white
              transition
              hover:bg-white/5
            "
          >
            <FiRotateCcw size={15} />
            Reset
          </button>
        </div>

        {/* Right */}

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-400">
            <FiSmartphone />

            <span>{workflow?.platform ?? "Android"}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <FiClock />

            <span>{currentStep}s</span>
          </div>

          <div
            className={`
              flex
              items-center
              gap-2
              rounded-full
              px-4
              py-2
              font-medium

              ${currentStatus.className}
            `}
          >
            <StatusIcon size={14} />

            <span>{currentStatus.label}</span>
          </div>
        </div>
      </div>

      {/* Progress */}

      <div className="border-t border-white/10 px-6 py-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[2px] text-gray-500">
              Current Step
            </p>

            <p className="mt-1 text-lg font-semibold text-white">
              {activeNode?.title ?? "Waiting to start..."}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs uppercase tracking-[2px] text-gray-500">
              Progress
            </p>

            <p className="mt-1 text-lg font-bold text-[#16f2b3]">
              {currentStep} / {totalSteps}
            </p>
          </div>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#16f2b3] transition-all duration-700 ease-out"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </header>
  );
}
