"use client";

import { BaseEdge, getBezierPath } from "@xyflow/react";

import { useExecutionStore } from "../store/executionStore";

export default function WorkflowEdge(props) {
  const { id, source, target } = props;

  const currentNode = useExecutionStore((state) => state.currentNode);

  const status = useExecutionStore((state) => state.nodeStatus[source]);

  const [path] = getBezierPath(props);

  return (
    <BaseEdge
      path={path}
      style={{
        stroke:
          status === "passed"
            ? "#16f2b3"
            : currentNode === source
              ? "#3b82f6"
              : "#4b5563",

        strokeWidth: 3,

        animation:
          currentNode === source ? "dashdraw .8s linear infinite" : undefined,
      }}
    />
  );
}
