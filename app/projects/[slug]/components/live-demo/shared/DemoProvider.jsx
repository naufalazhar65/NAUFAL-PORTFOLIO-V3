"use client";

import { useMemo } from "react";

import DemoContext from "./DemoContext";

import useExecution from "../../execution/useExecution";
import { workflow } from "../../execution/data/workflowData";

export default function DemoProvider({ children }) {
  const execution = useExecution();

  const currentStep = execution.state.currentStep;

  const value = useMemo(
    () => ({
      workflow,

      activeStep: currentStep,

      activeNode:
        currentStep >= 0
          ? workflow.steps[currentStep]
          : null,

      progress: {
        current: currentStep < 0 ? 0 : currentStep + 1,
        total: workflow.steps.length,
      },

      ...execution,
    }),
    [execution, currentStep],
  );

  return (
    <DemoContext.Provider value={value}>
      {children}
    </DemoContext.Provider>
  );
}