"use client";

import { BaseEdge, getBezierPath } from "@xyflow/react";

import { useExecutionStore } from "../store/executionStore";

export default function WorkflowEdge(props) {
  const { source } = props;

  const currentNode = useExecutionStore(
    (state) => state.currentNode,
  );

  const status = useExecutionStore(
    (state) => state.nodeStatus[source],
  );

  const [path] = getBezierPath(props);

  const isActive = currentNode === source;
  const isPassed = status === "passed";
  const isFailed = status === "failed";

  let stroke = "#334155";

  if (isPassed) {
    stroke = "#16f2b3";
  } else if (isFailed) {
    stroke = "#ef4444";
  } else if (isActive) {
    stroke = "#60a5fa";
  }

  return (
    <BaseEdge
      path={path}
      style={{
        stroke,
        strokeWidth: isActive || isPassed ? 2 : 1.5,
        strokeLinecap: "round",

        animation: isActive
          ? "dashdraw .8s linear infinite"
          : undefined,

        filter:
          isActive || isPassed
            ? "drop-shadow(0 0 4px rgba(96,165,250,.18))"
            : undefined,
      }}
    />
  );
}