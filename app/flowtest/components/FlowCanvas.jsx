"use client";

import "@xyflow/react/dist/style.css";

import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react";

import { useFlowStore } from "../store/flowStore";
import { nodeTypes } from "../nodes";
import ExecutionFollower from "./ExecutionFollower";
import { edgeTypes } from "../edges";

export default function FlowCanvas() {
  const { nodes, edges, setNodes, setEdges, selectNode } = useFlowStore();

  const onNodesChange = (changes) => {
    setNodes(applyNodeChanges(changes, nodes));
  };

  const onEdgesChange = (changes) => {
    setEdges(applyEdgeChanges(changes, edges));
  };

  return (
    <ReactFlow
      edgeTypes={edgeTypes}
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={(_, node) => selectNode(node)}
      fitView
    >
      <ExecutionFollower />
      <Background gap={24} />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
