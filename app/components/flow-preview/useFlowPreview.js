"use client";

import { useEffect, useMemo, useState } from "react";

const STEP_DURATION = 1200;

export default function useFlowPreview(nodes) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % nodes.length);
    }, STEP_DURATION);

    return () => clearInterval(timer);
  }, [nodes.length]);

  const statuses = useMemo(() => {
    return nodes.reduce((acc, node, index) => {
      if (index < currentStep) {
        acc[node.id] = "passed";
      } else if (index === currentStep) {
        acc[node.id] = "running";
      } else {
        acc[node.id] = "idle";
      }

      return acc;
    }, {});
  }, [currentStep, nodes]);

  return {
    currentStep,
    statuses,

    status:
      currentStep === nodes.length - 1
        ? "Execution Passed"
        : "Executing Workflow",

    duration: `${((currentStep + 1) * 0.58).toFixed(2)}s`,
  };
}
