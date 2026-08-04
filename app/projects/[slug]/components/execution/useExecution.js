"use client";

import { useReducer } from "react";

import executionReducer, {
  initialExecutionState,
} from "./executionReducer";

import {
  EXECUTION_ACTION,
} from "./constants";

export default function useExecution() {
  const [state, dispatch] = useReducer(
    executionReducer,
    initialExecutionState
  );

  const run = () =>
    dispatch({
      type: EXECUTION_ACTION.RUN,
    });

  const pause = () =>
    dispatch({
      type: EXECUTION_ACTION.PAUSE,
    });

  const reset = () =>
    dispatch({
      type: EXECUTION_ACTION.RESET,
    });

  const nextStep = (index) =>
    dispatch({
      type: EXECUTION_ACTION.NEXT_STEP,
      payload: index,
    });

  const addLog = (message) =>
    dispatch({
      type: EXECUTION_ACTION.ADD_LOG,
      payload: {
        id: crypto.randomUUID(),
        time: new Date().toLocaleTimeString(),
        message,
      },
    });

  const finish = () =>
    dispatch({
      type: EXECUTION_ACTION.FINISH,
    });

  return {
    state,

    run,
    pause,
    reset,
    nextStep,
    addLog,
    finish,
  };
}