"use client";

import { useEffect, useRef } from "react";
import {
  FiCheckCircle,
  FiPlay,
} from "react-icons/fi";

import useDemo from "../shared/useDemo";

export default function MobileWorkflow() {
  const {
    workflow,
    activeStep,
  } = useDemo();

  const steps = workflow?.steps ?? [];

  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (activeStep < 0) return;

    const container = containerRef.current;
    const activeItem = itemRefs.current[activeStep];

    if (!container || !activeItem) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    const offset =
      itemRect.top -
      containerRect.top +
      container.scrollTop -
      container.clientHeight / 2 +
      itemRect.height / 2;

    container.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }, [activeStep]);

  return (
    <section
      className="
        flex
        h-full
        flex-col
        border-b
        border-white/10
      "
    >
      {/* Header */}

      <div className="px-5 py-3">
        <p className="text-[11px] uppercase tracking-[3px] text-gray-500">
          Current Workflow
        </p>
      </div>

      {/* List */}

      <div
        ref={containerRef}
        className="
          flex-1
          overflow-y-auto
          scrollbar-hide
          px-5
          pb-4
        "
      >
        <div className="space-y-3">
          {steps.map((node, index) => {
            const active = index === activeStep;
            const completed = index < activeStep;

            return (
              <div
                key={node.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="flex items-start gap-3"
              >
                {/* Icon */}

                <div className="mt-1">
                  {completed ? (
                    <FiCheckCircle
                      size={16}
                      className="text-green-400"
                    />
                  ) : active ? (
                    <FiPlay
                      size={15}
                      className="text-[#16f2b3]"
                    />
                  ) : (
                    <div className="h-3 w-3 rounded-full bg-gray-600" />
                  )}
                </div>

                {/* Text */}

                <div className="flex-1">
                  <p
                    className={`
                      text-sm
                      font-medium
                      ${
                        active
                          ? "text-[#16f2b3]"
                          : completed
                            ? "text-white"
                            : "text-gray-500"
                      }
                    `}
                  >
                    {node.title}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                    {node.action}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}