"use client";

import { useMemo } from "react";

import DemoContext from "./DemoContext";

import useExecution from "../../execution/useExecution";

import { workflow, nodes, edges } from "../../execution/data/workflowData";

export default function DemoProvider({ children }) {
  const execution = useExecution();

  const currentStep = execution.state.currentStep;

  const activeNode =
  currentStep >= 0
    ? workflow.steps[currentStep]
    : null;

  const value = useMemo(
    () => ({
      workflow,

      nodes,

      edges,

      activeStep: currentStep,

      activeNode,

      progress: {
        current: currentStep < 0 ? 0 : currentStep + 1,

        total: nodes.length,
      },

      ...execution,
    }),
    [execution, currentStep, activeNode],
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}
