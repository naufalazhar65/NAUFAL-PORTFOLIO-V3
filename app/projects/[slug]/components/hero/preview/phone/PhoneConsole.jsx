"use client";

import { useEffect, useRef, useState } from "react";

const logs = [
  "Launch App",
  "Tap Login",
  "Input Username",
  "Input Password",
  "Assert Dashboard",
];

export default function PhoneConsole() {
  const [visibleLogs, setVisibleLogs] = useState([]);

  const containerRef = useRef(null);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisibleLogs((prev) => {
        const next = [...prev, logs[index]];

        if (next.length > 20) {
          next.shift();
        }

        return next;
      });

      index++;

      if (index >= logs.length) {
        index = 0;

        setTimeout(() => {
          setVisibleLogs([]);
        }, 1000);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // Auto scroll hanya di dalam console
  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [visibleLogs]);

  return (
    <div className="border-t border-white/10">
      {/* Header */}

      <div className="flex items-center justify-between px-5 py-3">
        <span className="text-[11px] font-semibold uppercase tracking-[2px] text-gray-500">
          Console
        </span>

        <span className="rounded-full bg-[#16f2b3]/10 px-2 py-1 text-[9px] font-semibold text-[#16f2b3]">
          LIVE
        </span>
      </div>

      {/* Console Body */}

      <div
        ref={containerRef}
        className="
          h-24
          overflow-y-auto
          scroll-smooth
          scrollbar-hide

          px-5
          pb-4

          font-mono
          text-[11px]
        "
      >
        {visibleLogs.length === 0 ? (
          <p className="text-gray-500">
            Waiting for execution...
          </p>
        ) : (
          visibleLogs.map((log, index) => (
            <div
              key={`${log}-${index}`}
              className="mb-2 flex items-center gap-2"
            >
              <span className="text-[#16f2b3]">&gt;</span>

              <span className="text-gray-300">
                {log}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}