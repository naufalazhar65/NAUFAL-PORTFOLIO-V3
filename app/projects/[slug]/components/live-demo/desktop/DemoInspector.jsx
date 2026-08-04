"use client";

import {
  FiSmartphone,
  FiActivity,
  FiClock,
  FiTarget,
  FiCheckCircle,
} from "react-icons/fi";

import { useDemo } from "../shared/DemoProvider";

export default function DemoInspector() {
  const { activeNode, activeStep, workflow } = useDemo();

  if (!activeNode) return null;

  const progress = ((activeStep + 1) / workflow.length) * 100;

  return (
    <aside className="flex flex-col border-l border-white/10 bg-[#111827]">
      {/* Header */}

      <div className="border-b border-white/10 px-6 py-5">
        <h2 className="text-lg font-bold text-white">
          Inspector
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Selected automation node
        </p>
      </div>

      {/* Scrollable Body */}

      <div className="flex-1 space-y-6 overflow-y-auto p-6 scrollbar-hide">
        {/* Device Preview */}

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-gray-500">
            Device Preview
          </p>

          <div className="rounded-3xl border border-white/10 bg-[#161b22] p-5">
            <div className="mx-auto flex h-[220px] w-[120px] flex-col rounded-[28px] border-4 border-[#30363d] bg-black p-2">
              {/* Camera */}

              <div className="mx-auto mb-3 h-2 w-12 rounded-full bg-[#30363d]" />

              {/* Screen */}

              <div
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#16f2b3]/20
                  via-[#2563eb]/20
                  to-[#8b5cf6]/20
                  transition-all
                  duration-700
                "
              >
                <div className="text-center">
                  <FiSmartphone
                    className="mx-auto mb-3 text-[#16f2b3]"
                    size={26}
                  />

                  <p className="font-semibold text-white">
                    {activeNode.screen}
                  </p>

                  <p className="mt-1 text-[11px] text-gray-400">
                    Current Screen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Running Status */}

        <div className="rounded-2xl border border-[#16f2b3]/20 bg-[#16f2b3]/5 p-5">
          <div className="flex items-center gap-3">
            <FiActivity
              className="text-[#16f2b3]"
              size={18}
            />

            <div>
              <p className="text-xs uppercase tracking-[2px] text-gray-500">
                Running
              </p>

              <h3 className="mt-1 text-lg font-bold text-white">
                {activeNode.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Properties */}

        <div className="space-y-4">
          <Property
            icon={<FiCheckCircle />}
            label="Action"
            value={activeNode.type}
          />

          <Property
            icon={<FiSmartphone />}
            label="Current Screen"
            value={activeNode.screen}
          />

          <Property
            icon={<FiTarget />}
            label="Locator"
            value={activeNode.locator}
          />

          <Property
            icon={<FiClock />}
            label="Timeout"
            value={`${activeNode.timeout} ms`}
          />

          <Property
            icon={<FiActivity />}
            label="Progress"
            value={`${activeStep + 1} / ${workflow.length}`}
          />
        </div>

        {/* Execution */}

        <div className="rounded-2xl border border-white/10 bg-[#161b22] p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[2px] text-gray-500">
              Execution
            </p>

            <span className="text-xs font-semibold text-[#16f2b3]">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#16f2b3] transition-all duration-700"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <p className="mt-4 text-sm text-gray-400">
            Executing automation workflow...
          </p>
        </div>
      </div>
    </aside>
  );
}

function Property({
  icon,
  label,
  value,
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#161b22] p-4">
      <div className="mb-2 flex items-center gap-2 text-gray-400">
        {icon}

        <span className="text-xs uppercase tracking-[2px]">
          {label}
        </span>
      </div>

      <p className="break-all font-semibold text-white">
        {value}
      </p>
    </div>
  );
}