"use client";

import Panel from "@/app/components/ui/panel/Panel";

export default function ExecutionConsole({ logs }) {
  return (
    <Panel variant="terminal" padding="none" className="overflow-hidden">
      {/* Header */}

      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-3 text-sm text-gray-400">Terminal</span>
      </div>

      {/* Body */}

      <div className="h-80 overflow-y-auto bg-[#0d1117] p-5 font-mono text-sm">
        {logs.length === 0 ? (
          <p className="text-gray-500">Waiting for execution...</p>
        ) : (
          logs.map((log) => (
            <div key={log.id} className="mb-2 flex gap-3">
              <span className="text-gray-500">{log.time}</span>

              <span className="text-[#16f2b3]">$</span>

              <span className="text-gray-200">{log.message}</span>
            </div>
          ))
        )}
      </div>
    </Panel>
  );
}
