"use client";

import { useEffect } from "react";
import { useReactFlow } from "@xyflow/react";

import { useExecutionStore } from "../store/executionStore";
import { useFlowStore } from "../store/flowStore";

export default function ExecutionFollower() {
  const { setCenter } = useReactFlow();

  const currentNode = useExecutionStore((state) => state.currentNode);

  const nodes = useFlowStore((state) => state.nodes);

  useEffect(() => {
    if (!currentNode) return;

    const node = nodes.find((n) => n.id === currentNode);

    if (!node) return;

    setCenter(node.position.x + 120, node.position.y + 40, {
      zoom: 1.2,
      duration: 600,
    });
  }, [currentNode, nodes, setCenter]);

  return null;
}
