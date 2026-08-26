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
    (state) => state.selectedNode,
  );

  const nodeStatus = useExecutionStore((state) =>
    selectedNode
      ? state.nodeStatus[selectedNode.id]
      : null,
  );

  const timing = useExecutionStore((state) =>
    selectedNode
      ? state.nodeTiming[selectedNode.id]
      : null,
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
        border-white/[0.08]
        bg-[#0f141b]
      "
    >
      {/* =========================
          HEADER
      ========================= */}

      <div
        className="
          flex
          h-[52px]
          shrink-0
          items-center
          justify-between
          border-b
          border-white/[0.08]
          px-4
        "
      >
        <div>
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-gray-400
            "
          >
            Inspector
          </p>

          <p
            className="
              mt-0.5
              text-[9px]
              text-gray-600
            "
          >
            Selected node properties
          </p>
        </div>

        <span
          className="
            rounded-md
            border
            border-white/[0.08]
            bg-white/[0.02]
            px-2
            py-1
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.1em]
            text-gray-500
          "
        >
          Panel
        </span>
      </div>

      {/* =========================
          CONTENT
      ========================= */}

      <div
        className="
          flex-1
          overflow-y-auto
          p-3
          scrollbar-hide
        "
      >
        {!selectedNode ? (
          <EmptyState />
        ) : (
          <SelectedNodePanel
            selectedNode={selectedNode}
            nodeStatus={nodeStatus}
            timing={timing}
          />
        )}
      </div>
    </aside>
  );
}

function EmptyState() {
  return (
    <div
      className="
        flex
        h-full
        min-h-[280px]
        flex-col
        items-center
        justify-center
        px-6
        text-center
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-white/[0.08]
          bg-white/[0.02]
          text-gray-500
        "
      >
        <FiMousePointer size={18} />
      </div>

      <h3
        className="
          mt-4
          text-[12px]
          font-medium
          text-gray-300
        "
      >
        No node selected
      </h3>

      <p
        className="
          mt-2
          max-w-[220px]
          text-[10px]
          leading-5
          text-gray-600
        "
      >
        Select a node from the workflow
        canvas to inspect its properties.
      </p>
    </div>
  );
}

function SelectedNodePanel({
  selectedNode,
  nodeStatus,
  timing,
}) {
  return (
    <>
      {/* =========================
          NODE HEADER
      ========================= */}

      <div
        className="
          relative
          overflow-hidden
          rounded-xl
          border
          border-white/[0.08]
          bg-white/[0.015]
          p-3
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-10
            -top-10
            h-20
            w-20
            rounded-full
            bg-white/[0.035]
            blur-2xl
          "
        />

        <div className="relative z-10 flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-white/[0.08]
            "
            style={{
              background: `${selectedNode.data.color}18`,
              color: selectedNode.data.color,
            }}
          >
            <span className="text-lg">
              {selectedNode.data.icon}
            </span>
          </div>

          <div className="min-w-0">
            <h3
              className="
                truncate
                text-[12px]
                font-semibold
                text-white
              "
            >
              {selectedNode.data.title}
            </h3>

            <p
              className="
                mt-0.5
                truncate
                text-[9px]
                uppercase
                tracking-[0.08em]
                text-gray-500
              "
            >
              {selectedNode.data.type}
            </p>
          </div>
        </div>
      </div>

      {/* =========================
          EXECUTION
      ========================= */}

      <PanelSection
        icon={<FiCpu size={13} />}
        title="Execution"
      >
        <div className="space-y-3">
          <Row
            label="Status"
            value={
              <StatusBadge
                status={nodeStatus}
              />
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
      </PanelSection>

      {/* =========================
          PROPERTIES
      ========================= */}

      <PanelSection
        icon={<FiClock size={13} />}
        title="Properties"
      >
        <div className="space-y-4">
          {selectedNode.data.fields?.map(
            (field) => (
              <div key={field.label}>
                <label
                  className="
                    mb-1.5
                    block
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.1em]
                    text-gray-600
                  "
                >
                  {field.label}
                </label>

                <input
                  readOnly
                  value={field.value || ""}
                  className="
                    h-8
                    w-full
                    rounded-lg
                    border
                    border-white/[0.08]
                    bg-[#0b1016]
                    px-3
                    text-[10px]
                    text-gray-300
                    outline-none
                  "
                />
              </div>
            ),
          )}
        </div>
      </PanelSection>
    </>
  );
}

function PanelSection({
  icon,
  title,
  children,
}) {
  return (
    <section
      className="
        mt-3
        rounded-xl
        border
        border-white/[0.07]
        bg-white/[0.008]
        p-3
      "
    >
      <div
        className="
          mb-4
          flex
          items-center
          gap-2
          border-b
          border-white/[0.06]
          pb-3
        "
      >
        <span className="text-[#16f2b3]">
          {icon}
        </span>

        <h3
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.12em]
            text-gray-400
          "
        >
          {title}
        </h3>
      </div>

      {children}
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-4
      "
    >
      <span
        className="
          text-[10px]
          text-gray-500
        "
      >
        {label}
      </span>

      <div
        className="
          text-right
          text-[10px]
          font-medium
          text-gray-300
        "
      >
        {value}
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  return (
    <span
      className={clsx(
        `
          inline-flex
          items-center
          rounded-full
          border
          px-2
          py-1
          text-[8px]
          font-semibold
          uppercase
          tracking-[0.08em]
        `,
        {
          "border-blue-400/20 bg-blue-400/10 text-blue-300":
            status === "running",

          "border-[#16f2b3]/20 bg-[#16f2b3]/10 text-[#16f2b3]":
            status === "passed",

          "border-red-400/20 bg-red-400/10 text-red-300":
            status === "failed",

          "border-white/[0.06] bg-white/[0.03] text-gray-500":
            !status,
        },
      )}
    >
      {status || "Idle"}
    </span>
  );
}