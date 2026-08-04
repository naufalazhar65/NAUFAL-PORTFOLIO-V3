"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { workflow, logs } from "../desktop/demoData";

const DemoContext = createContext(null);

export function DemoProvider({ children }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % workflow.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const value = useMemo(
    () => ({
      workflow,
      logs,
      activeStep,
      activeNode: workflow[activeStep],
      progress: `${activeStep + 1} / ${workflow.length}`,
    }),
    [activeStep],
  );

  return (
    <DemoContext.Provider value={value}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  return useContext(DemoContext);
}