"use client";

import { useEffect, useMemo, useState } from "react";

import { heroWorkflow } from "../hero-data";

export default function useHeroEngine() {
  const [activeStep, setActiveStep] = useState(0);

  const [logs, setLogs] = useState([]);

  const [elapsed, setElapsed] = useState(0);

  /*
  -------------------------------------
  Timeline
  -------------------------------------
  */

  useEffect(() => {
    let timeout;

    const play = (index) => {
      const duration = heroWorkflow[index]?.duration ?? 1200;

      timeout = setTimeout(() => {
        setActiveStep((current) =>
          current >= heroWorkflow.length - 1
            ? 0
            : current + 1
        );

        play(
          index >= heroWorkflow.length - 1
            ? 0
            : index + 1
        );
      }, duration);
    };

    play(0);

    return () => clearTimeout(timeout);
  }, []);

  /*
  -------------------------------------
  Timer
  -------------------------------------
  */

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((value) => value + 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  /*
  -------------------------------------
  Reset
  -------------------------------------
  */

  useEffect(() => {
    if (activeStep === 0) {
      setLogs([]);
      setElapsed(0);
    }
  }, [activeStep]);

  /*
  -------------------------------------
  Current Step
  -------------------------------------
  */

  const currentStep = heroWorkflow[activeStep];

  /*
  -------------------------------------
  Workflow Nodes
  -------------------------------------
  */

  const workflowNodes = useMemo(() => {
    return heroWorkflow.map((step) => ({
      title: step.title,
      subtitle: step.subtitle,
    }));
  }, []);

  /*
  -------------------------------------
  Node Status
  -------------------------------------
  */

  const nodeStatuses = useMemo(() => {
    return heroWorkflow.map((_, index) => {
      if (index < activeStep) return "done";

      if (index === activeStep) return "running";

      return "waiting";
    });
  }, [activeStep]);

  /*
  -------------------------------------
  Logs
  -------------------------------------
  */

  useEffect(() => {
    if (!currentStep) return;

    const now = new Date();

    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    setLogs((previous) => [
      ...previous,
      {
        id: crypto.randomUUID(),
        time,
        message: currentStep.log,
        type: "info",
      },
    ]);
  }, [currentStep]);

  /*
  -------------------------------------
  Metrics
  -------------------------------------
  */

  const metrics = useMemo(() => {
    return {
      passed: activeStep,

      running: activeStep < heroWorkflow.length ? 1 : 0,

      duration: `${elapsed.toFixed(1)} s`,

      successRate: "100%",
    };
  }, [activeStep, elapsed]);

  /*
  -------------------------------------
  Topbar
  -------------------------------------
  */

  const topbar = useMemo(() => {
    let status = "Idle";

    if (activeStep > 0) status = "Running";

    if (activeStep === heroWorkflow.length - 1)
      status = "Completed";

    return {
      device: "Pixel 9",

      platform: "Android 15",

      status,
    };
  }, [activeStep]);

  /*
  -------------------------------------
  Device
  -------------------------------------
  */

  const device = useMemo(() => {
    return {
      screen: currentStep?.screen,
    };
  }, [currentStep]);

  /*
  -------------------------------------
  Progress
  -------------------------------------
  */

  const progress = useMemo(() => {
    return (
      ((activeStep + 1) / heroWorkflow.length) * 100
    );
  }, [activeStep]);

  return {
    activeStep,

    currentStep,

    workflowNodes,

    nodeStatuses,

    logs,

    metrics,

    topbar,

    device,

    progress,
  };
}