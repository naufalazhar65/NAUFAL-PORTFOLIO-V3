"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const nodes = [
  "Launch App",
  "Tap Login",
  "Input Username",
  "Input Password",
  "Assert Dashboard",
];

// Tinggi satu node + connector
const STEP_HEIGHT = 86;

export default function PhoneWorkflow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % nodes.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // Camera mengikuti node aktif
  const translateY = Math.max(0, active - 1) * STEP_HEIGHT;

  return (
    <div
      className="
        h-64
        overflow-hidden
        px-5
        py-5
      "
    >
      {/* Title */}

      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[3px] text-gray-500">
        Automation
      </p>

      {/* Camera */}

      <motion.div
        animate={{
          y: -translateY,
        }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
        className="space-y-3 pt-10 pb-20"
      >
        {nodes.map((node, index) => {
          const isActive = index === active;
          const isCompleted = index < active;

          return (
            <div
              key={node}
              className="flex flex-col items-center"
            >
              {/* Node */}

              <motion.div
                animate={{
                  scale: isActive ? 1.03 : 1,
                }}
                transition={{
                  duration: 0.25,
                }}
                className={`
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  border
                  px-4
                  py-3
                  transition-all
                  duration-500

                  ${
                    isActive
                      ? "border-[#16f2b3] bg-[#16f2b3]/10 shadow-[0_0_20px_rgba(22,242,179,.20)]"
                      : isCompleted
                      ? "border-green-500/30 bg-green-500/10"
                      : "border-white/10 bg-[#161b22]"
                  }
                `}
              >
                {/* Dot */}

                <div
                  className={`
                    h-3
                    w-3
                    rounded-full
                    transition-all
                    duration-500

                    ${
                      isActive
                        ? "bg-[#16f2b3]"
                        : isCompleted
                        ? "bg-green-500"
                        : "bg-gray-500"
                    }
                  `}
                />

                {/* Label */}

                <span
                  className={`
                    text-sm
                    font-medium
                    transition-colors
                    duration-300

                    ${
                      isActive || isCompleted
                        ? "text-white"
                        : "text-gray-400"
                    }
                  `}
                >
                  {node}
                </span>
              </motion.div>

              {/* Connector */}

              {index !== nodes.length - 1 && (
                <div
                  className={`
                    h-5
                    w-[2px]
                    transition-all
                    duration-500

                    ${
                      isCompleted
                        ? "bg-green-500"
                        : "bg-white/10"
                    }
                  `}
                />
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}