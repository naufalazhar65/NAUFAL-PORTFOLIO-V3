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
  const {
    nodes,
    edges,
    setNodes,
    setEdges,
    selectNode,
  } = useFlowStore();

  const onNodesChange = (changes) => {
    setNodes(
      applyNodeChanges(changes, nodes),
    );
  };

  const onEdgesChange = (changes) => {
    setEdges(
      applyEdgeChanges(changes, edges),
    );
  };

  return (
    <div
      className="
        relative
        h-full
        min-h-0
        overflow-hidden
        bg-[#0b1016]
      "
    >
      {/* Ambient Canvas Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[480px]
          w-[480px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#16f2b3]/[0.018]
          blur-[150px]
        "
      />

      <ReactFlow
        edgeTypes={edgeTypes}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={(_, node) =>
          selectNode(node)
        }
        fitView
        fitViewOptions={{
          padding: 0.18,
        }}
        minZoom={0.35}
        maxZoom={1.5}
        defaultEdgeOptions={{
          animated: false,
        }}
      >
        <ExecutionFollower />

        <Background
          gap={24}
          size={1}
          color="rgba(255,255,255,0.045)"
        />

        <MiniMap
          pannable
          zoomable
          nodeColor={(node) =>
            node.data?.color || "#64748b"
          }
          maskColor="rgba(5,8,12,0.78)"
          className="
            !border
            !border-white/[0.08]
            !bg-[#0d1218]
            !shadow-[0_12px_40px_rgba(0,0,0,.3)]
          "
        />

        <Controls
          showInteractive={false}
          className="
            !overflow-hidden
            !rounded-lg
            !border
            !border-white/[0.08]
            !bg-[#0d1218]
            !shadow-[0_12px_40px_rgba(0,0,0,.3)]

            [&>button]:!border-white/[0.06]
            [&>button]:!bg-transparent
            [&>button]:!text-gray-500
            [&>button:hover]:!bg-white/[0.05]
            [&>button:hover]:!text-white
          "
        />
      </ReactFlow>
    </div>
  );
}