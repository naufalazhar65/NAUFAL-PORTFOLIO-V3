"use client";

import {
  FiActivity,
  FiCheckCircle,
  FiSmartphone,
  FiServer,
} from "react-icons/fi";

import { useDemo } from "../shared/DemoProvider";

export default function MobileBottomBar() {
  const {
    activeStep,
    workflow,
  } = useDemo();

  const completed =
    activeStep === workflow.length - 1;

  return (
    <footer
      className="
        flex
        h-12
        shrink-0
        items-center
        justify-between
        border-t
        border-white/10
        bg-[#111827]
        px-4
      "
    >
      {/* Status */}

      <div className="flex items-center gap-2">
        {completed ? (
          <FiCheckCircle
            size={14}
            className="text-[#16f2b3]"
          />
        ) : (
          <FiActivity
            size={14}
            className="text-[#16f2b3] animate-pulse"
          />
        )}

        <span className="text-[11px] font-medium text-white">
          {completed ? "Completed" : "Running"}
        </span>
      </div>

      {/* Platform */}

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-gray-400">
          <FiSmartphone size={13} />

          <span className="text-[10px]">
            Android
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-400">
          <FiServer size={13} />

          <span className="text-[10px]">
            Appium
          </span>
        </div>

        <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-gray-300">
          {activeStep + 1}/{workflow.length}
        </span>
      </div>
    </footer>
  );
}