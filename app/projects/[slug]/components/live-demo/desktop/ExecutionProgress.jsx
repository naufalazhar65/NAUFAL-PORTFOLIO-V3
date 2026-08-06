"use client";

export default function ExecutionProgress({ progress, state }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#161b22] p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[2px] text-gray-500">
          Execution
        </p>

        <span className="text-xs font-semibold text-[#16f2b3]">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[#16f2b3] transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-4 text-sm text-gray-400">
        {state?.status === "finished"
          ? "Workflow execution completed successfully."
          : state?.status === "paused"
            ? "Workflow execution paused."
            : state?.status === "running"
              ? "Executing automation workflow..."
              : "Waiting to start execution."}
      </p>
    </div>
  );
}
