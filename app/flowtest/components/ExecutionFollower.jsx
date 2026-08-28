"use client";

import { useEffect } from "react";
import { useReactFlow } from "@xyflow/react";

import { useExecutionStore } from "../store/executionStore";
import { useFlowStore } from "../store/flowStore";

export default function ExecutionFollower() {
  const { setCenter, getNode } = useReactFlow();

  const currentNode = useExecutionStore((state) => state.currentNode);
  const nodes = useFlowStore((state) => state.nodes);

  useEffect(() => {
    if (!currentNode) return;

    const node = getNode(currentNode);
    if (!node) return;

    // Gunakan ukuran node yang sudah diukur, jika belum ada fallback ke asumsi
    const width = node.measured?.width ?? node.width ?? 240;
    const height = node.measured?.height ?? node.height ?? 100;

    const centerX = node.position.x + width / 2;
    const centerY = node.position.y + height / 2;

    setCenter(centerX, centerY, {
      zoom: 1.2,
      duration: 600,
    });
  }, [currentNode, getNode, setCenter]);

  return null;
}