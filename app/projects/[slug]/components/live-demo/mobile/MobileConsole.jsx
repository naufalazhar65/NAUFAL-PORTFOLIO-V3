"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

import useDemo from "../shared/useDemo";

const levelColor = {
  INFO: "text-sky-400",
  RUN: "text-amber-400",
  PASS: "text-green-400",
  DONE: "text-violet-400",
  FAIL: "text-red-400",
};

export default function MobileConsole({
  collapsed,
  onToggle,
}) {
  const { state, activeStep } = useDemo();

  const logs = state?.logs ?? [];

  const bodyRef = useRef(null);

  const visibleLogs = useMemo(() => {
    return logs.slice(
      0,
      Math.max(activeStep + 1, 0),
    );
  }, [logs, activeStep]);

  useEffect(() => {
    if (!bodyRef.current || collapsed) {
      return;
    }

    bodyRef.current.scrollTop =
      bodyRef.current.scrollHeight;
  }, [visibleLogs, collapsed]);

  return (
    <section
      className="
        flex
        h-full
        flex-col
        border-t
        border-white/10
        bg-[#0b1018]
      "
    >
      {/* Header */}

      <button
        onClick={() => onToggle(!collapsed)}
        className="
          flex
          h-10
          shrink-0
          items-center
          justify-between
          border-b
          border-white/10
          px-4
          transition
          hover:bg-white/5
        "
      >
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[3px] text-gray-500">
            Console
          </span>

          <span className="rounded-full bg-[#16f2b3]/10 px-2 py-[2px] text-[9px] font-bold text-[#16f2b3]">
            LIVE
          </span>
        </div>

        {collapsed ? (
          <FiChevronUp className="text-gray-500" />
        ) : (
          <FiChevronDown className="text-gray-500" />
        )}
      </button>

      {/* Body */}

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ${
            collapsed
              ? "max-h-0"
              : "max-h-[220px] flex-1"
          }
        `}
      >
        <div
          ref={bodyRef}
          className="
            h-[140px]
            overflow-y-auto
            px-4
            py-3
            font-mono
            text-[10px]
            scrollbar-hide
          "
        >
          {visibleLogs.length === 0 ? (
            <div className="flex items-center gap-2 text-gray-500">
              <span>$</span>

              <span className="animate-pulse">
                █
              </span>
            </div>
          ) : (
            <>
              {visibleLogs.map((log, index) => (
                <ConsoleLine
                  key={
                    log.id ??
                    `${log.message}-${index}`
                  }
                  log={log}
                />
              ))}

              <div className="mt-2 flex items-center gap-2 text-gray-500">
                <span>$</span>

                <span className="animate-pulse">
                  █
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function ConsoleLine({ log }) {
  const level =
    log.type?.toUpperCase() ?? "INFO";

  return (
    <div className="mb-1 flex items-center gap-2">
      <span
        className={`w-10 shrink-0 font-bold ${
          levelColor[level] ??
          "text-gray-400"
        }`}
      >
        {level}
      </span>

      <span className="truncate text-gray-300">
        {log.message}
      </span>
    </div>
  );
}