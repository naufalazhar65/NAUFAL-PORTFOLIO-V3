"use client";

import { useMemo, useReducer } from "react";

import executionReducer, {
  initialExecutionState,
} from "./executionReducer";

import { EXECUTION_ACTION } from "./constants";

import createExecutionEngine from "./engine/executionEngine";
import { workflow } from "./data/workflowData";

export default function useExecution() {
  const [state, dispatch] = useReducer(
    executionReducer,
    initialExecutionState,
  );

  const actions = useMemo(
    () => ({
      run: () =>
        dispatch({
          type: EXECUTION_ACTION.RUN,
        }),

      pause: () =>
        dispatch({
          type: EXECUTION_ACTION.PAUSE,
        }),

      reset: () =>
        dispatch({
          type: EXECUTION_ACTION.RESET,
        }),

      nextStep: (index) =>
        dispatch({
          type: EXECUTION_ACTION.NEXT_STEP,
          payload: index,
        }),

      addLog: (log) =>
        dispatch({
          type: EXECUTION_ACTION.ADD_LOG,
          payload: log,
        }),

      finish: () =>
        dispatch({
          type: EXECUTION_ACTION.FINISH,
        }),
    }),
    [],
  );

  const engine = useMemo(
  () =>
    createExecutionEngine({
      workflow,
      ...actions,
    }),
  [actions],
);

  return {
    state,

    start: engine.execute,

    stop: engine.stop,

    reset: actions.reset,

    pause: actions.pause,
  };
}