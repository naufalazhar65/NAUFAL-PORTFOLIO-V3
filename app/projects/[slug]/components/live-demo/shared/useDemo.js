"use client";

import { useContext } from "react";

import DemoContext from "./DemoContext";

export default function useDemo() {
  const context = useContext(DemoContext);

  if (!context) {
    throw new Error(
      "useDemo must be used inside <DemoProvider>",
    );
  }

  return context;
}