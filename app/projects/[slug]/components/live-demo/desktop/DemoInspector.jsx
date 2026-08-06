"use client";

import {
  FiActivity,
  FiCheckCircle,
  FiClock,
  FiSmartphone,
  FiTarget,
} from "react-icons/fi";

import useDemo from "../shared/useDemo";

import DevicePreview from "./DevicePreview/DevicePreview";
import InspectorProperty from "./InspectorProperty";
import ExecutionProgress from "./ExecutionProgress";

export default function DemoInspector() {
  const { workflow, activeNode, activeStep, state } = useDemo();
  const node = activeNode?.data ?? activeNode;

  if (!activeNode) {
    return (
      <aside
        className="
          flex
          h-full
          min-h-0
          flex-col
          overflow-hidden
          border-l
          border-white/10
          bg-[#111827]
        "
      >
        <div className="flex flex-1 items-center justify-center px-8 text-center">
          <div>
            <FiActivity size={32} className="mx-auto mb-4 text-gray-600" />

            <h3 className="text-lg font-semibold text-white">
              Ready to Execute
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Press <span className="text-[#16f2b3]">Run</span> to start the
              automation workflow.
            </p>
          </div>
        </div>
      </aside>
    );
  }

  const totalSteps = workflow?.steps?.length ?? 0;

  const currentStep = activeStep < 0 ? 0 : activeStep + 1;

  const progress = totalSteps === 0 ? 0 : (currentStep / totalSteps) * 100;

  const statusMap = {
    idle: "Idle",
    running: "Running",
    paused: "Paused",
    finished: "Completed",
  };

  const status = statusMap[state?.status] ?? "Idle";

  return (
    <aside
      className="
        flex
        h-full
        min-h-0
        flex-col
        overflow-hidden
        border-l
        border-white/10
        bg-[#111827]
      "
    >
      {/* Header */}

      <div className="shrink-0 border-b border-white/10 px-6 py-5">
        <h2 className="text-lg font-bold text-white">Inspector</h2>

        <p className="mt-1 text-sm text-gray-400">Selected automation node</p>
      </div>

      {/* Scroll Viewport */}

      <div
        className="
          flex-1
          min-h-0
          overflow-y-auto
          overscroll-contain
          scrollbar-hide
        "
      >
        <div className="space-y-6 p-6">
          {/* Device */}

          <DevicePreview workflow={workflow} activeNode={activeNode} />

          {/* Status */}

          <div className="rounded-2xl border border-[#16f2b3]/20 bg-[#16f2b3]/5 p-5">
            <div className="flex items-center gap-3">
              <FiActivity size={18} className="text-[#16f2b3]" />

              <div>
                <p className="text-xs uppercase tracking-[2px] text-gray-500">
                  {status}
                </p>

                <h3 className="mt-1 text-lg font-bold text-white">
                  {node.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Properties */}

          <div className="space-y-4">
            <InspectorProperty
              icon={<FiCheckCircle />}
              label="Action"
              value={node.action}
            />

            <InspectorProperty
              icon={<FiTarget />}
              label="Locator"
              value={node.locator ?? "-"}
            />

            <InspectorProperty
              icon={<FiClock />}
              label="Timeout"
              value={`${node.timeout ?? 0} ms`}
            />

            <InspectorProperty
              icon={<FiActivity />}
              label="Duration"
              value={`${node.duration ?? 0} ms`}
            />

            <InspectorProperty
              icon={<FiCheckCircle />}
              label="Retry"
              value={String(node.retry ?? 0)}
            />
          </div>

          {/* Progress */}

          <ExecutionProgress progress={progress} state={state} />
        </div>
      </div>
    </aside>
  );
}
