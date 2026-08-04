"use client";

import { create } from "zustand";

export const useExecutionStore = create((set) => ({
  running: false,

  currentNode: null,

  nodeStatus: {},

  nodeTiming: {},

  progress: 0,

setProgress(progress) {
    set({
        progress,
    });
},

  start() {
    set({
      running: true,
      currentNode: null,
      nodeStatus: {},
      nodeTiming: {},
    });
  },

  finish() {
    set({
      running: false,
      currentNode: null,
    });
  },

  setCurrent(id) {
    set({
      currentNode: id,
    });
  },

  setStatus(id, status) {
    set((state) => ({
      nodeStatus: {
        ...state.nodeStatus,
        [id]: status,
      },
    }));
  },

  setTiming(id, timing) {
    set((state) => ({
      nodeTiming: {
        ...state.nodeTiming,
        [id]: timing,
      },
    }));
  },
}));

