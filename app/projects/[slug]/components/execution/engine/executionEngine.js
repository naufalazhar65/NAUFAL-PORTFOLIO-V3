import delay from "./delay";

import { STEP_DELAY } from "../constants";
import createLog from "../utils/createLog";

export default function createExecutionEngine({
  nodes = [],
  run,
  finish,
  nextStep,
  addLog,
}) {
  const engine = {
    cancelled: false,
    paused: false,
    running: false,
  };

  async function waitUntilResume() {
    while (engine.paused && !engine.cancelled) {
      await delay(100);
    }
  }

  async function execute() {
    // Hindari menjalankan workflow dua kali
    if (engine.running) {
      return;
    }

    engine.running = true;
    engine.cancelled = false;
    engine.paused = false;

    run();

    try {
      for (let index = 0; index < nodes.length; index++) {
        if (engine.cancelled) {
          break;
        }

        await waitUntilResume();

        const node = nodes[index];

        nextStep(index);

        const logs = node.data?.logs ?? [];

        for (const message of logs) {
          if (engine.cancelled) {
            break;
          }

          await waitUntilResume();

          addLog(
            createLog({
              step: node.id,
              message,
              type: "info",
            }),
          );

          await delay(300);
        }

        if (engine.cancelled) {
          break;
        }

        await waitUntilResume();

        await delay(node.data?.duration ?? STEP_DELAY);
      }

      if (!engine.cancelled) {
        finish();
      }
    } finally {
      engine.running = false;
      engine.paused = false;
    }
  }

  function pause() {
    if (!engine.running) return;

    engine.paused = true;
  }

  function resume() {
    if (!engine.running) return;

    engine.paused = false;
  }

  function stop() {
    engine.cancelled = true;
    engine.paused = false;
    engine.running = false;
  }

  return {
    execute,
    pause,
    resume,
    stop,
  };
}
