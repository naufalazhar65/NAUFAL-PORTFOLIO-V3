"use client";

import { useState } from "react";
import clsx from "clsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { useConsoleStore } from "../store/consoleStore";

export default function Console() {
  const logs = useConsoleStore((state) => state.logs);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <footer
      className={clsx(
        "flex shrink-0 flex-col border-t border-white/[0.08] bg-[#0f141b] transition-all duration-300",
        collapsed ? "h-10" : "h-36"
      )}
    >
      {/* =========================
          HEADER (clickable area)
      ========================= */}
      <button
        type="button"
        onClick={toggleCollapse}
        aria-expanded={!collapsed}
        aria-controls="console-body"
        className="flex h-10 w-full shrink-0 items-center justify-between border-b border-white/[0.07] px-4 text-left transition-colors hover:bg-white/[0.02]"
      >
        <div className="flex items-center gap-3">
          <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-400">
            Execution Console
          </span>

          <span className="rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-gray-500">
            {logs.length} logs
          </span>
        </div>

        <span className="flex items-center text-gray-500">
          {collapsed ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
        </span>
      </button>

      {/* =========================
          BODY (only when expanded)
      ========================= */}
      {!collapsed && (
        <div
          id="console-body"
          className="flex-1 overflow-y-auto px-4 py-3 font-mono text-[10px] leading-5 scrollbar-hide"
        >
          {logs.length === 0 ? (
            <div className="flex items-center gap-2 text-gray-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16f2b3] shadow-[0_0_8px_rgba(22,242,179,.25)]" />
              <span>Ready. Waiting for execution...</span>
            </div>
          ) : (
            <div className="space-y-1">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className="grid grid-cols-[56px_56px_1fr] items-start gap-3 rounded-md px-2 py-1 transition-colors duration-150 hover:bg-white/[0.02]"
                >
                  {/* Time */}
                  <span className="text-gray-600">{log.time}</span>

                  {/* Type */}
                  <span
                    className={clsx(
                      "font-semibold uppercase tracking-[0.06em]",
                      {
                        "text-blue-400": log.type === "info",
                        "text-[#16f2b3]": log.type === "success",
                        "text-red-400": log.type === "error",
                        "text-gray-500": !["info", "success", "error"].includes(log.type),
                      }
                    )}
                  >
                    {log.type}
                  </span>

                  {/* Message */}
                  <span
                    className={clsx("break-words", {
                      "text-gray-300": log.type !== "error",
                      "text-red-300": log.type === "error",
                    })}
                  >
                    {log.message}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </footer>
  );
}