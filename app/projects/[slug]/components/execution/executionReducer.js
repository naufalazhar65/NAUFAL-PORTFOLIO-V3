import { EXECUTION_ACTION, EXECUTION_STATUS } from "./constants";

export const initialExecutionState = {
  status: EXECUTION_STATUS.IDLE,

  currentStep: -1,

  completedSteps: [],

  logs: [],

  startedAt: null,

  finishedAt: null,
};

export default function executionReducer(state, action) {
  switch (action.type) {
    case EXECUTION_ACTION.RUN:
      return {
        ...initialExecutionState,

        status: EXECUTION_STATUS.RUNNING,

        startedAt: Date.now(),
      };

    case EXECUTION_ACTION.PAUSE:
      return {
        ...state,

        status: EXECUTION_STATUS.PAUSED,
      };

    case EXECUTION_ACTION.RESUME:
      return {
        ...state,
        status: EXECUTION_STATUS.RUNNING,
      };

    case EXECUTION_ACTION.RESET:
      return {
        ...initialExecutionState,
      };

    case EXECUTION_ACTION.NEXT_STEP:
      return {
        ...state,

        currentStep: action.payload,

        completedSteps: state.completedSteps.includes(action.payload)
          ? state.completedSteps
          : [...state.completedSteps, action.payload],
      };

    case EXECUTION_ACTION.ADD_LOG:
      return {
        ...state,

        logs: [...state.logs, action.payload],
      };

    case EXECUTION_ACTION.FINISH:
      return {
        ...state,

        status: EXECUTION_STATUS.FINISHED,

        currentStep: state.currentStep,

        finishedAt: Date.now(),
      };

    default:
      return state;
  }
}
