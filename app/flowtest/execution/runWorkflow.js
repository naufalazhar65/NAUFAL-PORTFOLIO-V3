import { runners } from "./runners";

import { useFlowStore } from "../store/flowStore";
import { useExecutionStore } from "../store/executionStore";
import { useConsoleStore } from "../store/consoleStore";

const wait = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function runWorkflow() {
  const flowStore = useFlowStore.getState();
  const { nodes } = flowStore;

  const execution = useExecutionStore.getState();
  const consoleStore = useConsoleStore.getState();

  // Validasi workflow kosong
  if (!nodes.length) {
    consoleStore.push(
      "error",
      "Workflow is empty. Add nodes first."
    );
    return;
  }

  execution.start();
  consoleStore.clear();

  try {
    for (let index = 0; index < nodes.length; index++) {
      const node = nodes[index];
      const runner = runners[node.type] ?? {
        start: `Executing ${node.type}...`,
        finish: `${node.type} completed successfully.`,
        duration: 1200, // default duration in ms
      };

      // Focus node
      execution.setCurrent(node.id);

      // Running state
      execution.setStatus(node.id, "running");

      const startedAt = performance.now();
      execution.setTiming(node.id, { startedAt });

      consoleStore.push("info", runner.start);
      await wait(runner.duration);

      const endedAt = performance.now();
      execution.setTiming(node.id, {
        startedAt,
        endedAt,
        duration: Math.round(endedAt - startedAt),
      });

      execution.setStatus(node.id, "passed");
      consoleStore.push("success", runner.finish);

      // Update progress
      execution.setProgress(
        Math.round(((index + 1) / nodes.length) * 100)
      );

      // Small pause before next node
      await wait(300);
    }

    consoleStore.push(
      "success",
      "Workflow completed successfully."
    );
  } catch (error) {
    console.error(error);
    consoleStore.push(
      "error",
      "Workflow execution failed."
    );
  } finally {
    execution.finish();
  }
}