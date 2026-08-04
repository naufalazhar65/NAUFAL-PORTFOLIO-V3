"use client";

import { motion } from "framer-motion";
import { FiCheck, FiPlay } from "react-icons/fi";
import { useDemo } from "../shared/DemoProvider";

export default function DemoCanvas() {
  const { workflow, activeStep } = useDemo();

  return (
    <section
      className="
    relative
    flex-1
    min-h-0
    overflow-hidden
    bg-[#0d1117]
  "
    >
      {/* Background */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,.03)_1px,transparent_1px)]
          [background-size:26px_26px]
        "
      />

      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16f2b3]/5 blur-[120px]" />

      <div className="relative flex flex-col items-center">
        {workflow.map((node, index) => {
          const active = index === activeStep;
          const completed = index < activeStep;

          return (
            <div key={node.id} className="flex flex-col items-center">
              {/* Node */}

              <motion.div
                animate={
                  active
                    ? {
                        scale: [1, 1.04, 1],
                      }
                    : {}
                }
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                }}
                className={`
                  relative
                  flex
                  w-[330px]
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  px-6
                  py-5
                  transition-all
                  duration-500

                  ${
                    active
                      ? "border-[#16f2b3] bg-[#16f2b3]/10 shadow-[0_0_35px_rgba(22,242,179,.25)]"
                      : completed
                        ? "border-green-500/30 bg-green-500/10"
                        : "border-white/10 bg-[#161b22]"
                  }
                `}
              >
                {/* Pulse */}

                {active && (
                  <motion.div
                    animate={{
                      scale: [1, 1.8],
                      opacity: [0.4, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                    }}
                    className="
                      absolute
                      left-5
                      h-5
                      w-5
                      rounded-full
                      bg-[#16f2b3]
                    "
                  />
                )}

                {/* Status */}

                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full

                    ${
                      active
                        ? "bg-[#16f2b3]"
                        : completed
                          ? "bg-green-500"
                          : "bg-gray-600"
                    }
                  `}
                >
                  {completed && <FiCheck size={12} className="text-white" />}

                  {active && <FiPlay size={10} className="text-black" />}
                </div>

                {/* Text */}

                <div className="flex-1">
                  <h3 className="font-semibold text-white">{node.title}</h3>

                  <p className="mt-1 text-xs text-gray-400">{node.type}</p>
                </div>

                {/* Badge */}

                <div
                  className={`
                    rounded-full
                    px-3
                    py-1
                    text-[10px]
                    font-bold
                    uppercase

                    ${
                      active
                        ? "bg-[#16f2b3]/20 text-[#16f2b3]"
                        : completed
                          ? "bg-green-500/20 text-green-400"
                          : "bg-white/5 text-gray-500"
                    }
                  `}
                >
                  {active ? "Running" : completed ? "Done" : "Queued"}
                </div>
              </motion.div>

              {/* Connector */}

              {index !== workflow.length - 1 && (
                <div className="relative h-8 w-[2px] overflow-hidden bg-white/10">
                  {completed && (
                    <motion.div
                      animate={{
                        y: [-40, 60],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.9,
                        ease: "linear",
                      }}
                      className="
                        absolute
                        h-10
                        w-full
                        bg-green-400
                      "
                    />
                  )}

                  {active && (
                    <motion.div
                      animate={{
                        y: [-40, 60],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        ease: "linear",
                      }}
                      className="
                        absolute
                        h-10
                        w-full
                        bg-[#16f2b3]
                      "
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
