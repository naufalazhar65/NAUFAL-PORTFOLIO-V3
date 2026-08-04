"use client";

import { create } from "zustand";

export const useConsoleStore = create((set) => ({
  logs: [],

  clear: () =>
    set({
      logs: [],
    }),

  push: (type, message) =>
    set((state) => ({
      logs: [
        ...state.logs,
        {
          id: crypto.randomUUID(),
          type,
          message,
          time: new Date().toLocaleTimeString(),
        },
      ],
    })),
}));