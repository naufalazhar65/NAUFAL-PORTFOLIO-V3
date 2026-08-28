"use client";

import { useState } from "react";
import { Terminal, ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

import { useHero } from "../../HeroContext";

export default function ExecutionFeed() {
  const { logs } = useHero();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={clsx(
        "flex flex-col border-t border-white/[0.08] bg-[#0f141b] transition-all duration-300",
        collapsed ? "h-10" : "h-[150px]"
      )}
    >
      {/* Header (clickable) */}
      <button
        type="button"
        onClick={() => setCollapsed((prev) => !prev)}
        aria-expanded={!collapsed}
        className="flex h-10 w-full shrink-0 items-center justify-between border-b border-white/[0.07] px-4 text-left transition-colors hover:bg-white/[0.02]"
      >
        <div className="flex items-center gap-3">
          <Terminal size={14} className="text-[#16f2b3]" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-400">
            Execution Console
          </span>
          <span className="rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-gray-500">
            {logs.length} logs
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-gray-600">
            Live
          </span>
          <span className="flex items-center text-gray-400">
            {collapsed ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        </div>
      </button>

      {/* Body (only when expanded) */}
      {!collapsed && (
        <div className="flex-1 overflow-y-auto px-4 py-3 font-mono text-[10px] leading-5 scrollbar-hide">
          {logs.length === 0 ? (
            <div className="flex items-center gap-2 text-gray-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16f2b3] shadow-[0_0_8px_rgba(22,242,179,.25)]" />
              <span>Ready. Waiting for execution...</span>
            </div>
          ) : (
            <div className="space-y-1">
              {logs.map((log) => {
                const type = log.type || "info";
                return (
                  <div
                    key={log.id}
                    className="grid grid-cols-[56px_56px_1fr] items-start gap-3 rounded-md px-2 py-1 transition-colors duration-150 hover:bg-white/[0.02]"
                  >
                    <span className="text-gray-600">{log.time}</span>
                    <span
                      className={clsx(
                        "font-semibold uppercase tracking-[0.06em]",
                        {
                          "text-blue-400": type === "info",
                          "text-[#16f2b3]": type === "success",
                          "text-red-400": type === "error",
                          "text-gray-500": !["info", "success", "error"].includes(type),
                        }
                      )}
                    >
                      {type}
                    </span>
                    <span
                      className={clsx("break-words", {
                        "text-gray-300": type !== "error",
                        "text-red-300": type === "error",
                      })}
                    >
                      {log.message}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}