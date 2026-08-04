"use client";

import { useEffect, useState } from "react";

const logs = [
  "Session Started",
  "Android Driver Initialized",
  "Application Installed",
  "Launch App",
  "Tap Login Button",
  "Input Username",
  "Input Password",
  "Assert Dashboard",
  "Generate HTML Report",
];

export default function Console() {
  const [visibleLogs, setVisibleLogs] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisibleLogs((prev) => {
        const next = [...prev, logs[index]];

        if (next.length > 5) {
          next.shift();
        }

        return next;
      });

      index++;

      if (index >= logs.length) {
        index = 0;
        setVisibleLogs([]);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-t border-white/10 bg-[#0d1117]">
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between

          border-b
          border-white/10

          px-3
          py-2

          lg:px-4
        "
      >
        <span
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[2px]
            text-gray-400

            lg:text-xs
          "
        >
          Console
        </span>

        <span
          className="
            rounded-full
            bg-[#16f2b3]/10

            px-2
            py-0.5

            text-[9px]
            font-semibold
            text-[#16f2b3]

            lg:px-2
            lg:py-1
            lg:text-[10px]
          "
        >
          Live
        </span>
      </div>

      {/* Body */}

      <div
        className="
          h-24
          overflow-hidden

          px-3
          py-2

          font-mono

          text-[10px]

          lg:h-36
          lg:px-4
          lg:py-3
          lg:text-xs
        "
      >
        {visibleLogs.map((log, index) => (
          <div
            key={`${log}-${index}`}
            className="
              mb-1.5
              flex
              items-center
              gap-2

              text-gray-300

              lg:mb-2
            "
          >
            <span className="text-[#16f2b3]">
              &gt;
            </span>

            <span className="truncate">
              {log}
            </span>
          </div>
        ))}

        {visibleLogs.length === 0 && (
          <div className="text-gray-500">
            Waiting for execution...
          </div>
        )}
      </div>
    </div>
  );
}