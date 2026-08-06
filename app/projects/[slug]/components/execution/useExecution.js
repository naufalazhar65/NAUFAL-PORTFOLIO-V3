"use client";

import { useMemo, useReducer } from "react";

import executionReducer, { initialExecutionState } from "./executionReducer";

import { EXECUTION_ACTION } from "./constants";

import createExecutionEngine from "./engine/executionEngine";
import { workflow, nodes, edges } from "./data/workflowData";

export default function useExecution() {
  const [state, dispatch] = useReducer(executionReducer, initialExecutionState);

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

      resume: () =>
        dispatch({
          type: EXECUTION_ACTION.RESUME,
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
        nodes,
        edges,
        ...actions,
      }),
    [actions],
  );

  return {
    state,

    start: () => {
      if (state.status === "paused") {
        actions.resume();
        engine.resume();
        return;
      }

      engine.execute();
    },

    stop: engine.stop,

    reset: actions.reset,

    pause: () => {
      actions.pause();
      engine.pause();
    },

    resume: () => {
      actions.resume();
      engine.resume();
    },
  };
}
