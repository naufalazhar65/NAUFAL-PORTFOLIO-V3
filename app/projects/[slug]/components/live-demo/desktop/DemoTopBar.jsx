"use client";

import {
  FiPlay,
  FiSmartphone,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

import { useDemo } from "../shared/DemoProvider";

export default function DemoTopBar() {
  const {
    activeNode,
    activeStep,
    workflow,
  } = useDemo();

  const progress =
    ((activeStep + 1) / workflow.length) * 100;

  return (
    <header className="border-b border-white/10 bg-[#111827]">
      {/* Top */}

      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h2 className="text-xl font-bold text-white">
            FlowTest Studio
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Interactive Automation Preview
          </p>
        </div>

        <div className="flex items-center gap-8">
          {/* Device */}

          <div className="flex items-center gap-2 text-gray-400">
            <FiSmartphone />

            <span>Android Emulator</span>
          </div>

          {/* Runtime */}

          <div className="flex items-center gap-2 text-gray-400">
            <FiClock />

            <span>
              {String(activeStep + 2).padStart(2, "0")}s
            </span>
          </div>

          {/* Status */}

          <div className="flex items-center gap-2 rounded-full bg-[#16f2b3]/10 px-4 py-2 text-[#16f2b3]">
            <FiPlay />

            <span className="font-semibold">
              Running
            </span>
          </div>
        </div>
      </div>

      {/* Progress */}

      <div className="border-t border-white/10 px-6 py-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[2px] text-gray-500">
              Current Step
            </p>

            <p className="mt-1 font-semibold text-white">
              {activeNode.title}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs uppercase tracking-[2px] text-gray-500">
              Progress
            </p>

            <p className="mt-1 font-bold text-[#16f2b3]">
              {activeStep + 1} / {workflow.length}
            </p>
          </div>
        </div>

        {/* Progress Bar */}

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#16f2b3] transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </header>
  );
}