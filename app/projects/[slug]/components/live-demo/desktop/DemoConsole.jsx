"use client";

import { useEffect, useRef, useState } from "react";
import { useDemo } from "../shared/DemoProvider";

const levelColors = {
  INFO: "text-sky-400",
  RUN: "text-amber-400",
  PASS: "text-green-400",
  FAIL: "text-red-400",
  DONE: "text-violet-400",
};

export default function DemoConsole() {
  const { logs, activeStep } = useDemo();

  const [visibleLogs, setVisibleLogs] = useState([]);

  const bodyRef = useRef(null);

  useEffect(() => {
    setVisibleLogs(logs.slice(0, activeStep + 3));
  }, [activeStep, logs]);

  useEffect(() => {
    if (!bodyRef.current) return;

    bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [visibleLogs]);

  return (
    <section className="h-52 border-t border-white/10 bg-[#090d13]">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 px-6 py-3">
        <span className="text-xs font-semibold uppercase tracking-[3px] text-gray-500">
          Execution Console
        </span>

        <div className="rounded-full bg-[#16f2b3]/10 px-3 py-1 text-[10px] font-bold text-[#16f2b3]">
          LIVE
        </div>
      </div>

      {/* Body */}

      <div
        ref={bodyRef}
        className="h-[156px] overflow-y-auto px-6 py-4 font-mono text-xs scrollbar-hide"
      >
        {visibleLogs.map((log, index) => (
          <ConsoleLine
            key={index}
            index={index}
            log={log}
            latest={index === visibleLogs.length - 1}
          />
        ))}

        <div className="mt-3 flex items-center gap-2 text-gray-500">
          <span>$</span>

          <span className="animate-pulse">█</span>
        </div>
      </div>
    </section>
  );
}

function ConsoleLine({
  log,
  latest,
  index,
}) {
  const second = String(20 + index).padStart(2, "0");

  return (
    <div
      className={`
        mb-2
        flex
        items-center
        gap-4
        transition-all
        duration-500

        ${latest ? "text-white" : "text-gray-400"}
      `}
    >
      <span className="w-16 text-gray-600">
        09:30:{second}
      </span>

      <span
        className={`
          w-12
          font-bold

          ${levelColors[log.level]}
        `}
      >
        {log.level}
      </span>

      <span>{log.message}</span>
    </div>
  );
}