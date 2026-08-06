"use client";

import {
  FiActivity,
  FiCheckCircle,
  FiSmartphone,
  FiServer,
} from "react-icons/fi";

import useDemo from "../shared/useDemo";

export default function MobileBottomBar() {
  const {
    workflow,
    activeStep,
    state,
  } = useDemo();

  const totalSteps = workflow?.steps?.length ?? 0;

  const currentStep =
    activeStep < 0 ? 0 : activeStep + 1;

  const completed =
    state?.status === "finished";

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
            className="animate-pulse text-[#16f2b3]"
          />
        )}

        <span className="text-[11px] font-medium text-white">
          {completed
            ? "Completed"
            : state?.status === "paused"
              ? "Paused"
              : state?.status === "running"
                ? "Running"
                : "Idle"}
        </span>
      </div>

      {/* Platform */}

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-gray-400">
          <FiSmartphone size={13} />

          <span className="text-[10px]">
            {workflow?.platform ?? "Android"}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-400">
          <FiServer size={13} />

          <span className="text-[10px]">
            Appium
          </span>
        </div>

        <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-gray-300">
          {currentStep}/{totalSteps}
        </span>
      </div>
    </footer>
  );
}