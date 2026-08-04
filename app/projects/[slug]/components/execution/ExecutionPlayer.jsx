"use client";

import { useEffect, useRef } from "react";

import ExecutionControls from "./ExecutionControls";
import useExecution from "./useExecution";

import { EXECUTION_STATUS, STEP_DELAY } from "./constants";
import ExecutionConsole from "./ExecutionConsole";

export default function ExecutionSimulator({ workflow }) {
  const { state, run, pause, reset, nextStep, addLog, finish } = useExecution();

  const timerRef = useRef(null);

  useEffect(() => {
    if (state.status !== EXECUTION_STATUS.RUNNING) return;

    // semua step selesai
    if (state.currentStep >= workflow.length - 1) {
      finish();
      addLog("Execution finished.");
      return;
    }

    timerRef.current = setTimeout(() => {
      const index = state.currentStep + 1;

      nextStep(index);

      addLog(`Executing ${workflow[index].title}...`);
    }, STEP_DELAY);

    return () => clearTimeout(timerRef.current);
  }, [state.currentStep, state.status, workflow, nextStep, addLog, finish]);

  const handleRun = () => {
    if (state.status === EXECUTION_STATUS.IDLE) {
      addLog("Execution started.");
    }

    run();
  };

  const handlePause = () => {
    clearTimeout(timerRef.current);

    addLog("Execution paused.");

    pause();
  };

  const handleReset = () => {
    clearTimeout(timerRef.current);

    reset();
  };

  return (
    <div className="space-y-8">
      <ExecutionControls
        onRun={handleRun}
        onPause={handlePause}
        onReset={handleReset}
      />
      <ExecutionConsole logs={state.logs} />

      <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
        <p className="mb-3 text-sm uppercase tracking-[4px] text-gray-500">
          Status
        </p>

        <p className="text-2xl font-bold text-[#16f2b3]">{state.status}</p>

        <p className="mt-6 text-sm text-gray-500">Current Step</p>

        <p className="text-lg text-white">
          {state.currentStep + 1} / {workflow.length}
        </p>
      </div>
    </div>
  );
}
