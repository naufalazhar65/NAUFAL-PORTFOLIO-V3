import delay from "./delay";

import { STEP_DELAY } from "../constants";

import createLog from "../utils/createLog";

export default function createExecutionEngine({
  workflow = { steps: [] },
  run,
  finish,
  nextStep,
  addLog,
}) {
  const engine = {
    cancelled: false,
  };

  async function execute() {
    engine.cancelled = false;

    run();

    const steps = workflow.steps ?? [];

    for (let index = 0; index < steps.length; index++) {
      if (engine.cancelled) {
        break;
      }

      const step = steps[index];

      nextStep(index);

      for (const message of step.logs ?? []) {
        if (engine.cancelled) {
          break;
        }

        addLog(
          createLog({
            step: step.id,
            message,
            type: "info",
          }),
        );

        await delay(300);
      }

      if (engine.cancelled) {
        break;
      }

      await delay(step.duration ?? STEP_DELAY);
    }

    if (!engine.cancelled) {
      finish();
    }
  }

  function stop() {
    engine.cancelled = true;
  }

  return {
    execute,
    stop,
  };
}