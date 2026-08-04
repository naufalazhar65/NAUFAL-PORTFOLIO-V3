"use client";

import { useEffect, useMemo, useRef } from "react";
import { useDemo } from "../shared/DemoProvider";

const levelColor = {
  INFO: "text-sky-400",
  RUN: "text-amber-400",
  PASS: "text-green-400",
  DONE: "text-violet-400",
  FAIL: "text-red-400",
};

export default function MobileConsole() {
  const {
    logs,
    activeStep,
  } = useDemo();

  const bodyRef = useRef(null);

  const visibleLogs = useMemo(() => {
    return logs.slice(0, activeStep + 2);
  }, [logs, activeStep]);

  useEffect(() => {
    const body = bodyRef.current;

    if (!body) return;

    body.scrollTo({
      top: body.scrollHeight,
      behavior: "smooth",
    });
  }, [visibleLogs]);

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

      <div
        className="
          flex
          shrink-0
          items-center
          justify-between
          border-b
          border-white/10
          px-5
          py-3
        "
      >
        <span className="text-[11px] uppercase tracking-[3px] text-gray-500">
          Console
        </span>

        <span className="rounded-full bg-[#16f2b3]/10 px-2 py-1 text-[10px] font-bold text-[#16f2b3]">
          LIVE
        </span>
      </div>

      {/* Body */}

      <div
        ref={bodyRef}
        className="
          flex-1
          overflow-y-auto
          px-5
          py-4
          font-mono
          text-[11px]
          scrollbar-hide
        "
      >
        {visibleLogs.map((log, index) => (
          <ConsoleLine
            key={`${log.message}-${index}`}
            log={log}
            index={index}
          />
        ))}

        {/* Terminal */}

        <div className="mt-3 flex items-center gap-2 text-gray-500">
          <span>$</span>

          <span className="animate-pulse">
            █
          </span>
        </div>
      </div>
    </section>
  );
}

function ConsoleLine({
  log,
  index,
}) {
  const second = String(20 + index).padStart(2, "0");

  return (
    <div className="mb-2 flex items-center gap-3">
      <span className="w-14 shrink-0 text-gray-600">
        09:30:{second}
      </span>

      <span
        className={`w-10 shrink-0 font-bold ${
          levelColor[log.level]
        }`}
      >
        {log.level}
      </span>

      <span className="flex-1 break-words text-gray-300">
        {log.message}
      </span>
    </div>
  );
}