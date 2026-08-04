"use client";

import {
  FiActivity,
  FiClock,
  FiSmartphone,
  FiTarget,
} from "react-icons/fi";

import { useDemo } from "../shared/DemoProvider";

export default function MobileProperties() {
  const { activeNode } = useDemo();

  if (!activeNode) return null;

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

      {/* Scroll Area */}

      <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          scrollbar-hide
          px-5
          pb-5
        "
      >
        <div className="space-y-4">
          <Property
            icon={<FiActivity />}
            label="Action"
            value={activeNode.type}
          />

          <Property
            icon={<FiTarget />}
            label="Locator"
            value={activeNode.locator}
          />

          <Property
            icon={<FiSmartphone />}
            label="Screen"
            value={activeNode.screen}
          />

          <Property
            icon={<FiClock />}
            label="Timeout"
            value={`${activeNode.timeout} ms`}
          />

          <Property
            icon={<FiActivity />}
            label="Status"
            value="Running"
            highlight
          />
        </div>
      </div>
    </section>
  );
}

function Property({
  icon,
  label,
  value,
  highlight = false,
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
      <div className="mb-3 flex items-center gap-2 text-gray-500">
        {icon}

        <span className="text-[11px] uppercase tracking-[3px]">
          {label}
        </span>
      </div>

      <p
        className={`
          break-all
          text-lg
          font-semibold

          ${
            highlight
              ? "text-[#16f2b3]"
              : "text-white"
          }
        `}
      >
        {value}
      </p>
    </div>
  );
}