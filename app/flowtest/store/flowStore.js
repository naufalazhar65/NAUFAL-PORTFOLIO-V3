"use client";

import { create } from "zustand";

import { createNode } from "../factories/createNode";
import {
  defaultNodes,
  defaultEdges,
} from "../data/defaultFlow";

export const useFlowStore = create((set) => ({
  nodes: defaultNodes,
  edges: defaultEdges,
  selectedNode: null,

  setNodes: (nodes) =>
    set({
      nodes,
    }),

  setEdges: (edges) =>
    set({
      edges,
    }),

  selectNode: (node) =>
    set({
      selectedNode: node,
    }),

  clearSelection: () =>
    set({
      selectedNode: null,
    }),

  addNode: (type) =>
    set((state) => {
      const lastNode =
        state.nodes[state.nodes.length - 1];

      const position = lastNode
        ? {
            x: lastNode.position.x,
            y: lastNode.position.y + 180,
          }
        : {
            x: 300,
            y: 100,
          };

      const newNode = createNode(type, position);

      return {
        nodes: [...state.nodes, newNode],
        selectedNode: newNode,
      };
    }),
}));