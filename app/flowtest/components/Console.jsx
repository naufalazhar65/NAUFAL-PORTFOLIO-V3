"use client";

import clsx from "clsx";

import { useConsoleStore } from "../store/consoleStore";

export default function Console() {
  const logs = useConsoleStore((state) => state.logs);

  return (
    <footer
      className="
        flex
        h-40
        flex-shrink-0
        flex-col
        border-t
        border-white/10
        bg-[#161b22]
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <h2 className="text-sm font-semibold uppercase tracking-[3px] text-gray-400">
          Console
        </h2>

        <span className="text-xs text-gray-500">
          {logs.length} Logs
        </span>
      </div>

      {/* Body */}

      <div
        className="
          flex-1
          overflow-y-auto
          p-4
          font-mono
          text-sm
          scrollbar-hide
        "
      >
        {logs.length === 0 ? (
          <p className="text-gray-500">
            Ready.
          </p>
        ) : (
          <div className="space-y-2">
            {logs.map((log) => (
              <div
                key={log.id}
                className="flex gap-3"
              >
                <span className="w-20 shrink-0 text-gray-500">
                  {log.time}
                </span>

                <span
                  className={clsx(
                    "w-20 shrink-0 font-semibold uppercase",
                    {
                      "text-blue-400": log.type === "info",
                      "text-green-400": log.type === "success",
                      "text-red-400": log.type === "error",
                    }
                  )}
                >
                  {log.type}
                </span>

                <span className="flex-1 break-words text-gray-200">
                  {log.message}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}