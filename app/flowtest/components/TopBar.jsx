"use client";

import {
  FiFolder,
  FiLoader,
  FiPlay,
  FiSave,
  FiSettings,
  FiSquare,
} from "react-icons/fi";

import { runWorkflow } from "../execution/runWorkflow";
import { useExecutionStore } from "../store/executionStore";

export default function TopBar() {
  const { running, progress } = useExecutionStore((state) => ({
    running: state.running,
    progress: state.progress,
  }));

  const workflowStatus = running
    ? `Running ${progress}%`
    : progress === 100
      ? "Completed"
      : "Ready";

  return (
    <header
      className="
        relative
        flex
        h-16
        items-center
        justify-between
        border-b
        border-white/10
        bg-[#161b22]
        px-6
      "
    >
      {/* Progress Bar */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          bg-[#16f2b3]
          transition-all
          duration-500
        "
        style={{
          width: `${progress}%`,
        }}
      />

      {/* Left */}

      <div className="flex items-center gap-5">
        {/* Logo */}

        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-[#16f2b3]
              to-[#0ea5e9]
              font-bold
              text-black
            "
          >
            F
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              FlowTest Studio
            </h1>

            <p className="text-[11px] uppercase tracking-[3px] text-gray-500">
              Visual Mobile Automation IDE
            </p>
          </div>
        </div>

        <StatusCard
          title="Workflow"
          value="Untitled.flow"
          status={workflowStatus}
          color={
            running
              ? "blue"
              : progress === 100
                ? "green"
                : "yellow"
          }
        />

        <StatusCard
          title="Platform"
          value="Android"
          status="Ready"
          color="green"
        />

        <StatusCard
          title="Server"
          value="Appium"
          status={running ? "Online" : "Offline"}
          color={running ? "green" : "red"}
        />
      </div>

      {/* Right */}

      <div className="flex items-center gap-3">
        <ToolbarButton
          icon={<FiFolder />}
          label="Open"
        />

        <ToolbarButton
          icon={<FiSave />}
          label="Save"
        />

        <ToolbarButton
          icon={
            running ? (
              <FiLoader className="animate-spin" />
            ) : (
              <FiPlay />
            )
          }
          label={running ? "Running..." : "Run"}
          active
          disabled={running}
          onClick={runWorkflow}
        />

        <ToolbarButton
          icon={<FiSquare />}
          label="Stop"
          disabled={!running}
        />

        <ToolbarButton
          icon={<FiSettings />}
        />
      </div>
    </header>
  );
}

function ToolbarButton({
  icon,
  label,
  active = false,
  disabled = false,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex
        items-center
        gap-2
        rounded-xl
        border
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        duration-200

        ${
          active
            ? "border-[#16f2b3] bg-[#16f2b3] text-black hover:bg-[#1af7ba]"
            : "border-white/10 bg-white/5 text-white hover:bg-white/10"
        }

        ${disabled ? "cursor-not-allowed opacity-50" : ""}
      `}
    >
      {icon}

      {label && <span>{label}</span>}
    </button>
  );
}

function StatusCard({
  title,
  value,
  status,
  color,
}) {
  const dotColor = {
    green: "bg-green-400",
    yellow: "bg-yellow-400",
    red: "bg-red-400",
    blue: "bg-blue-400",
  };

  return (
    <div
      className="
        rounded-xl
        border
        border-white/10
        bg-[#0f141d]
        px-4
        py-2
      "
    >
      <p className="text-[10px] uppercase tracking-[2px] text-gray-500">
        {title}
      </p>

      <div className="mt-1 flex items-center gap-2">
        <span className="font-semibold text-white">
          {value}
        </span>

        <span
          className={`h-2 w-2 rounded-full ${dotColor[color]}`}
        />

        <span className="text-xs text-gray-400">
          {status}
        </span>
      </div>
    </div>
  );
}