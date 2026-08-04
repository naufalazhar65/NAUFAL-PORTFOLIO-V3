"use client";

import { useEffect, useState } from "react";

const nodes = [
  "Launch App",
  "Tap Login",
  "Input Username",
  "Input Password",
  "Assert Dashboard",
];

export default function WorkflowCanvas() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % nodes.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        flex
        flex-1
        items-center
        justify-center
        overflow-hidden
        bg-[#0d1117]

        p-4

        sm:p-6

        lg:p-10
      "
    >
      <div
        className="
          flex
          origin-center
          flex-col
          items-center

          scale-[0.72]

          sm:scale-[0.82]

          lg:scale-100
        "
      >
        {nodes.map((node, index) => {
          const active = index === activeIndex;
          const completed = index < activeIndex;

          return (
            <div
              key={node}
              className="flex flex-col items-center"
            >
              {/* Node */}

              <div
                className={`
                  flex
                  items-center
                  gap-3

                  w-44

                  rounded-xl

                  border

                  px-3
                  py-3

                  transition-all
                  duration-500

                  sm:w-52

                  lg:w-64
                  lg:gap-4
                  lg:rounded-2xl
                  lg:px-5
                  lg:py-4

                  ${
                    active
                      ? "border-[#16f2b3] bg-[#16f2b3]/10 shadow-[0_0_25px_rgba(22,242,179,.20)]"
                      : completed
                      ? "border-green-500/40 bg-green-500/10"
                      : "border-white/10 bg-[#111827]"
                  }
                `}
              >
                {/* Indicator */}

                <div
                  className={`
                    h-3
                    w-3
                    rounded-full
                    transition-all
                    duration-500

                    lg:h-4
                    lg:w-4

                    ${
                      active
                        ? "bg-[#16f2b3]"
                        : completed
                        ? "bg-green-500"
                        : "bg-gray-500"
                    }
                  `}
                />

                {/* Label */}

                <span
                  className={`
                    truncate

                    text-xs
                    font-medium

                    lg:text-sm

                    ${
                      active || completed
                        ? "text-white"
                        : "text-gray-400"
                    }
                  `}
                >
                  {node}
                </span>
              </div>

              {/* Connector */}

              {index !== nodes.length - 1 && (
                <div
                  className={`
                    w-[2px]

                    h-6

                    transition-all
                    duration-500

                    sm:h-8

                    lg:h-10

                    ${
                      completed
                        ? "bg-green-500"
                        : "bg-white/10"
                    }
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}