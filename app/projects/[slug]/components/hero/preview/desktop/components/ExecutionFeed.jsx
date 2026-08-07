"use client";

import { Terminal } from "lucide-react";

import { useHero } from "../../HeroContext";

export default function ExecutionFeed() {
  const { logs } = useHero();

  return (
    <div className="flex h-full flex-col">
      {/* Header */}

      <div className="mb-5 flex items-center gap-2">
        <Terminal
          size={16}
          className="text-[#16f2b3]"
        />

        <h3
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[3px]
            text-gray-400
          "
        >
          Execution Feed
        </h3>
      </div>

      {/* Feed */}

      <div
        className="
          flex-1
          space-y-3
          overflow-hidden
        "
      >
        {logs.map((log) => (
          <div
            key={log.id}
            className="
              flex
              gap-3

              rounded-xl

              border
              border-white/5

              bg-white/[0.02]

              p-3
            "
          >
            {/* Dot */}

            <div
              className="
                mt-1

                h-2
                w-2

                rounded-full

                bg-[#16f2b3]
              "
            />

            {/* Content */}

            <div className="flex-1">
              <p
                className="
                  text-[11px]
                  text-gray-500
                "
              >
                {log.time}
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-gray-200
                "
              >
                {log.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}