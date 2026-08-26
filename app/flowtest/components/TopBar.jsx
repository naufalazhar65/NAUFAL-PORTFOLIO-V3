"use client";

import {
  FiChevronDown,
  FiFileText,
  FiLoader,
  FiPlay,
  FiRefreshCw,
  FiSave,
} from "react-icons/fi";

import { runWorkflow } from "../execution/runWorkflow";
import { useExecutionStore } from "../store/executionStore";

export default function TopBar() {
  const { running, progress } = useExecutionStore(
    (state) => ({
      running: state.running,
      progress: state.progress,
    }),
  );

  const workflowStatus = running
    ? `Running ${progress}%`
    : progress === 100
      ? "Completed"
      : "Ready";

  return (
    <header
      className="
        relative
        z-50
        flex
        h-[62px]
        shrink-0
        items-center
        justify-between
        border-b
        border-white/[0.08]
        bg-[#11161d]
        px-4
        shadow-[0_4px_24px_rgba(0,0,0,.18)]
      "
    >
      {/* Progress */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-px
          bg-white/[0.04]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          bg-[#16f2b3]
          transition-all
          duration-500
        "
        style={{
          width: `${progress}%`,
        }}
      />

      {/* =========================
          LEFT
      ========================= */}

      <div
        className="
          flex
          min-w-0
          items-center
          gap-4
          overflow-hidden
        "
      >
        {/* Product Identity */}

        <div
          className="
            flex
            shrink-0
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              bg-gradient-to-br
              from-[#16f2b3]
              to-[#3b82f6]
              text-sm
              font-bold
              text-black
              shadow-[0_8px_24px_rgba(22,242,179,.12)]
            "
          >
            F
          </div>

          <div className="hidden sm:block">
            <h1
              className="
                text-[15px]
                font-semibold
                tracking-[-0.025em]
                text-white
              "
            >
              FlowTest Studio
            </h1>

            <p
              className="
                mt-0.5
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-gray-500
              "
            >
              Visual Mobile Automation IDE
            </p>
          </div>
        </div>

        {/* Status Cards */}

        <div
          className="
            hidden
            min-w-0
            items-center
            gap-2
            lg:flex
          "
        >
          <StatusCard
            icon={<FiFileText size={13} />}
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
            title="Target Platform"
            value="Android"
            status="Ready"
            color="green"
          />

          <StatusCard
            title="Automation Server"
            value="Appium"
            status={running ? "Online" : "Offline"}
            color={
              running ? "green" : "red"
            }
          />
        </div>
      </div>

      {/* =========================
          RIGHT TOOLBAR
      ========================= */}

      <div className="flex shrink-0 items-center gap-2">
        <ToolbarButton
          icon={<FiSave size={14} />}
          label="Save"
        />

        <ToolbarButton
          icon={<FiRefreshCw size={13} />}
          label="Retry"
        />

        <ToolbarButton
          icon={<FiChevronDown size={13} />}
          label="Dataset: None"
          muted
        />

        <ToolbarButton
          icon={
            running ? (
              <FiLoader
                size={14}
                className="animate-spin"
              />
            ) : (
              <FiPlay size={14} />
            )
          }
          label={
            running
              ? "Running..."
              : "Run"
          }
          active
          disabled={running}
          onClick={runWorkflow}
        />
      </div>
    </header>
  );
}

function ToolbarButton({
  icon,
  label,
  active = false,
  muted = false,
  disabled = false,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        flex
        h-8
        shrink-0
        items-center
        gap-2
        rounded-lg
        border
        px-3
        text-[11px]
        font-medium
        transition-all
        duration-200

        ${
          active
            ? `
              border-[#16f2b3]/30
              bg-[#16f2b3]
              text-black
              shadow-[0_8px_24px_rgba(22,242,179,.12)]
              hover:bg-[#22f6ba]
            `
            : muted
              ? `
                border-white/[0.06]
                bg-white/[0.015]
                text-gray-500
                hover:border-white/[0.1]
                hover:bg-white/[0.03]
                hover:text-gray-300
              `
              : `
                border-white/[0.08]
                bg-white/[0.025]
                text-gray-300
                hover:border-white/[0.14]
                hover:bg-white/[0.05]
                hover:text-white
              `
        }

        ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : ""
        }
      `}
    >
      {icon}

      <span>{label}</span>
    </button>
  );
}

function StatusCard({
  title,
  value,
  status,
  color,
  icon,
}) {
  const dotColor = {
    green: "bg-emerald-400",
    yellow: "bg-amber-400",
    red: "bg-red-400",
    blue: "bg-blue-400",
  };

  return (
    <div
      className="
        flex
        h-10
        min-w-[150px]
        items-center
        gap-3
        rounded-lg
        border
        border-white/[0.07]
        bg-[#0d1218]
        px-3
      "
    >
      {icon && (
        <span className="text-gray-500">
          {icon}
        </span>
      )}

      <div className="min-w-0">
        <p
          className="
            truncate
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.12em]
            text-gray-600
          "
        >
          {title}
        </p>

        <div className="mt-0.5 flex items-center gap-2">
          <span
            className="
              max-w-[92px]
              truncate
              text-[11px]
              font-medium
              text-gray-200
            "
          >
            {value}
          </span>

          <span
            className={`
              h-1.5
              w-1.5
              shrink-0
              rounded-full
              ${dotColor[color]}
            `}
          />

          <span
            className="
              text-[9px]
              text-gray-500
            "
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}