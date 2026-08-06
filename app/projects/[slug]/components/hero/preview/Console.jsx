"use client";

import { useEffect, useState } from "react";

const logs = [
  { type: "INFO", message: "Session Started" },
  { type: "INFO", message: "Android Driver Initialized" },
  { type: "INFO", message: "Application Installed" },
  { type: "ACTION", message: "Launch App" },
  { type: "ACTION", message: "Tap Login Button" },
  { type: "ACTION", message: "Input Username" },
  { type: "ACTION", message: "Input Password" },
  { type: "PASS", message: "Assert Dashboard" },
  { type: "PASS", message: "Generate HTML Report" },
];

export default function Console() {
  const [visibleLogs, setVisibleLogs] = useState([]);

  useEffect(() => {
  let index = 0;

  setVisibleLogs([]);

  const interval = setInterval(() => {
    setVisibleLogs((prev) => {
      const next = [...prev, logs[index]];

      if (next.length > 5) {
        next.shift();
      }

      index++;

      if (index >= logs.length) {
        index = 0;

        // restart
        return [logs[0]];
      }

      return next;
    });
  }, 1200);

  return () => clearInterval(interval);
}, []);
  const getColor = (type) => {
    switch (type) {
      case "PASS":
        return "text-[#16f2b3]";
      case "ACTION":
        return "text-amber-400";
      default:
        return "text-sky-400";
    }
  };

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
          Execution Feed
        </span>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#16f2b3]" />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              text-[#16f2b3]
              lg:text-[10px]
            "
          >
            LIVE
          </span>
        </div>
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
        {visibleLogs.length === 0 && (
          <div className="text-gray-500">
            Waiting for execution...
          </div>
        )}

        {visibleLogs.map((log, index) => {
          const active = index === visibleLogs.length - 1;

          return (
            <div
              key={`${log.message}-${index}`}
              className={`
                mb-1.5
                flex
                items-center
                gap-2
                rounded-md
                px-1.5
                py-0.5
                transition-all
                duration-300

                ${
                  active
                    ? "bg-[#16f2b3]/10"
                    : ""
                }
              `}
            >
              {/* Prompt */}

              <span
                className={`
                  w-3
                  text-center

                  ${
                    active
                      ? "text-[#16f2b3]"
                      : "text-gray-600"
                  }
                `}
              >
                {active ? "▶" : "•"}
              </span>

              {/* Type */}

              <span
                className={`
                  w-14
                  font-semibold
                  ${getColor(log.type)}
                `}
              >
                {log.type}
              </span>

              {/* Message */}

              <span
                className={`
                  flex-1
                  truncate

                  ${
                    active
                      ? "font-medium text-white"
                      : "text-gray-400"
                  }
                `}
              >
                {log.message}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}