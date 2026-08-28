"use client";

import { create } from "zustand";

const generateId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
};

export const useConsoleStore = create((set) => ({
  logs: [],

  clear: () => set({ logs: [] }),

  push: (type, message) =>
    set((state) => ({
      logs: [
        ...state.logs,
        {
          id: generateId(),
          type,
          message,
          time: new Date().toLocaleTimeString(),
        },
      ],
    })),
}));