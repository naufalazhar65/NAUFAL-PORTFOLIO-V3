"use client";

import { FiActivity } from "react-icons/fi";
import { useDemo } from "../shared/DemoProvider";

export default function MobileHeader() {
  const {
    activeStep,
    workflow,
  } = useDemo();

  const progress = Math.round(
    ((activeStep + 1) / workflow.length) * 100
  );

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
      {/* Title */}

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
            Running
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
    </header>
  );
}