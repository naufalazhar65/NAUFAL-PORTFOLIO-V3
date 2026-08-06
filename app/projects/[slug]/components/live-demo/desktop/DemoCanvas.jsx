"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

import useDemo from "../shared/useDemo";
import FlowConnector from "./FlowConnector";
import FlowNode from "./FlowNode";

export default function DemoCanvas() {
  const { workflow, activeStep, state } = useDemo();

  const steps = workflow?.steps ?? workflow?.nodes ?? [];

  const finished = state?.status === "finished";

  const canvasRef = useRef(null);

  const nodeRefs = useRef({});

  const cameraY = useMotionValue(0);

  useEffect(() => {
    if (activeStep < 0) return;

    const viewport = canvasRef.current;

    if (!viewport) return;

    const node = steps[activeStep];

    if (!node) return;

    const element = nodeRefs.current[node.id];

    if (!element) return;

    const target =
      element.offsetTop - viewport.clientHeight / 2 + element.clientHeight / 2;

    const controls = animate(cameraY, target, {
      duration: 0.7,
      ease: "easeInOut",
      onUpdate(value) {
        viewport.scrollTop = value;
      },
    });

    return () => controls.stop();
  }, [activeStep, steps, cameraY]);

  return (
    <section
      className="
        relative
        flex
        h-full
        min-h-0
        flex-col
        overflow-hidden
        bg-[#0d1117]
      "
    >
      {/* Background */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,.03)_1px,transparent_1px)]
          [background-size:26px_26px]
        "
      />

      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#16f2b3]/5
          blur-[120px]
        "
      />

      {/* Viewport */}

      <div
        ref={canvasRef}
        className="
    relative
    flex-1
    overflow-auto
    scrollbar-hide
  "
      >
        {/* Virtual Canvas */}

        <motion.div
          animate={{
            scale: finished ? 1 : activeStep >= 0 ? 1.03 : 1,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="
    flex
    min-h-full
    justify-center
    p-10
  "
        >
          <div
            className="
      flex
      w-full
      flex-col
      items-center
    "
          >
            {steps.map((node, index) => {
              const active = !finished && index === activeStep;

              const completed = finished || index < activeStep;

              return (
                <div
                  key={node.id}
                  ref={(el) => {
                    if (el) {
                      nodeRefs.current[node.id] = el;
                    }
                  }}
                  className="flex flex-col items-center"
                >
                  <FlowNode
                    node={node}
                    index={index}
                    active={active}
                    completed={completed}
                  />

                  {index !== steps.length - 1 && (
                    <FlowConnector active={active} completed={completed} />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
