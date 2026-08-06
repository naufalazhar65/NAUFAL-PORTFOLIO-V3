"use client";

import {
  FiActivity,
  FiClock,
  FiSmartphone,
  FiTarget,
} from "react-icons/fi";

import useDemo from "../shared/useDemo";


export default function MobileProperties() {
  const demo = useDemo();

  const activeNode = demo.activeNode;

  const status =
    demo.state?.status ?? "idle";

  if (!activeNode) {
    return (
      <section className="flex flex-1 items-center justify-center border-t border-white/10">
        <p className="text-sm text-gray-500">
          Press <span className="text-[#16f2b3]">Run</span> to start
          execution.
        </p>
      </section>
    );
  }

  const statusColor = {
    idle: "text-gray-400 bg-gray-500/10",
    running: "text-[#16f2b3] bg-[#16f2b3]/10",
    paused: "text-yellow-300 bg-yellow-500/10",
    finished: "text-blue-300 bg-blue-500/10",
  };

  return (
    <section
      className="
        flex
        min-h-0
        flex-1
        flex-col
        border-t
        border-white/10
      "
    >
      {/* Header */}

      <div className="shrink-0 px-5 py-3">
        <p className="text-[11px] uppercase tracking-[3px] text-gray-500">
          Properties
        </p>
      </div>

      {/* Body */}

      <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          px-5
          pb-5
          scrollbar-hide
        "
      >
        <div className="space-y-3">
          <Property
            icon={<FiActivity />}
            label="Action"
            value={activeNode.action}
          />

          <Property
            icon={<FiTarget />}
            label="Locator"
            value={activeNode.locator ?? "-"}
            small
          />

          <Property
            icon={<FiSmartphone />}
            label="Platform"
            value="Android"
          />

          <Property
            icon={<FiClock />}
            label="Timeout"
            value={`${activeNode.timeout} ms`}
          />

          {/* Status */}

          <div className="rounded-2xl border border-white/10 bg-[#161b22] p-4">
            <div className="mb-3 flex items-center gap-2 text-gray-500">
              <FiActivity />

              <span className="text-[11px] uppercase tracking-[3px]">
                Status
              </span>
            </div>

            <span
              className={`
                rounded-full
                px-3
                py-2
                text-sm
                font-semibold
                capitalize

                ${
                  statusColor[status] ??
                  statusColor.idle
                }
              `}
            >
              {status}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Property({
  icon,
  label,
  value,
  small = false,
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-[#161b22]
        p-4
      "
    >
      <div className="mb-2 flex items-center gap-2 text-gray-500">
        {icon}

        <span className="text-[11px] uppercase tracking-[3px]">
          {label}
        </span>
      </div>

      <p
        className={`
          break-all
          font-semibold
          text-white

          ${
            small
              ? "text-sm"
              : "text-base"
          }
        `}
      >
        {value}
      </p>
    </div>
  );
}