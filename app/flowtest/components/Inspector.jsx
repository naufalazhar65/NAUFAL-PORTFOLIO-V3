"use client";

import clsx from "clsx";
import {
  FiClock,
  FiCpu,
  FiMousePointer,
} from "react-icons/fi";

import { useFlowStore } from "../store/flowStore";
import { useExecutionStore } from "../store/executionStore";

export default function Inspector() {
  const selectedNode = useFlowStore(
    (state) => state.selectedNode
  );

  const nodeStatus = useExecutionStore((state) =>
    selectedNode
      ? state.nodeStatus[selectedNode.id]
      : null
  );

  const timing = useExecutionStore((state) =>
    selectedNode
      ? state.nodeTiming[selectedNode.id]
      : null
  );

  return (
    <aside
      className="
        flex
        h-full
        min-h-0
        w-full
        flex-col
        overflow-hidden
        border-l
        border-white/10
        bg-[#111827]
      "
    >
      {/* Header */}

      <div className="border-b border-white/10 px-6 py-5">
        <h2 className="text-sm font-semibold uppercase tracking-[3px] text-gray-400">
          Inspector
        </h2>
      </div>

      {/* Scrollable Content */}

      <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
        {!selectedNode ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <FiMousePointer
              size={44}
              className="mb-5 text-gray-600"
            />

            <h3 className="font-semibold text-white">
              No node selected
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              Click a node from the workflow
              <br />
              to inspect its properties.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                  style={{
                    background: `${selectedNode.data.color}20`,
                  }}
                >
                  {selectedNode.data.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedNode.data.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {selectedNode.data.type}
                  </p>
                </div>
              </div>
            </div>

            {/* Execution */}

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-5 flex items-center gap-2">
                <FiCpu className="text-[#16f2b3]" />

                <h3 className="font-semibold text-white">
                  Execution
                </h3>
              </div>

              <div className="space-y-4">
                <Row
                  label="Status"
                  value={
                    <span
                      className={clsx(
                        "rounded-full px-2 py-1 text-xs font-semibold uppercase",
                        {
                          "bg-blue-500/20 text-blue-300":
                            nodeStatus === "running",

                          "bg-[#16f2b3]/20 text-[#16f2b3]":
                            nodeStatus === "passed",

                          "bg-red-500/20 text-red-300":
                            nodeStatus === "failed",

                          "bg-white/10 text-gray-300":
                            !nodeStatus,
                        }
                      )}
                    >
                      {nodeStatus || "Idle"}
                    </span>
                  }
                />

                <Row
                  label="Duration"
                  value={
                    timing?.duration
                      ? `${timing.duration} ms`
                      : "-"
                  }
                />
              </div>
            </div>

            {/* Properties */}

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-5 flex items-center gap-2">
                <FiClock className="text-[#16f2b3]" />

                <h3 className="font-semibold text-white">
                  Properties
                </h3>
              </div>

              <div className="space-y-5">
                {selectedNode.data.fields?.map((field) => (
                  <div key={field.label}>
                    <label className="mb-2 block text-xs uppercase tracking-wider text-gray-500">
                      {field.label}
                    </label>

                    <input
                      readOnly
                      value={field.value}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-white/10
                        bg-[#0d1117]
                        px-4
                        py-3
                        text-white
                      "
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

function Row({
  label,
  value,
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-400">
        {label}
      </span>

      <div className="text-sm font-medium text-white">
        {value}
      </div>
    </div>
  );
}