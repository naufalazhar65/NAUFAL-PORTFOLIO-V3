"use client";

import { useEffect, useRef } from "react";
import {
  BadgeCheck,
  Lock,
  MousePointerClick,
  Play,
  Search,
  Type,
} from "lucide-react";
import { motion } from "framer-motion";
import { useHero } from "../../HeroContext";

const icons = [
  Play,
  Search,
  Type,
  Lock,
  MousePointerClick,
  BadgeCheck,
];

export default function WorkflowCanvas() {
  const { workflowNodes = [], nodeStatuses = [], hero } = useHero();
  const scrollContainerRef = useRef(null);
  const nodeRefs = useRef({});

  useEffect(() => {
    const runningIndex = nodeStatuses.findIndex(
      (status) => status === "running"
    );

    const container = scrollContainerRef.current;
    const activeNodeEl = nodeRefs.current[runningIndex];

    if (runningIndex !== -1 && container && activeNodeEl) {
      // Gunakan setTimeout untuk memastikan layout sudah stabil
      const timeout = setTimeout(() => {
        const containerRect = container.getBoundingClientRect();
        const nodeRect = activeNodeEl.getBoundingClientRect();

        const targetScrollTop =
          container.scrollTop +
          (nodeRect.top - containerRect.top) -
          container.clientHeight / 2 +
          nodeRect.height / 2;

        container.scrollTo({
          top: Math.max(0, targetScrollTop),
          behavior: "smooth",
        });
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [nodeStatuses]);

  return (
    <div
      ref={scrollContainerRef}
      className="relative h-full overflow-y-auto overflow-x-hidden scroll-smooth"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:22px_22px]" />
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16f2b3]/6 blur-[140px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center px-4 py-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="rounded-full border border-[#16f2b3]/20 bg-[#16f2b3]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[3px] text-[#16f2b3]">
            Workspace
          </span>
          <h3 className="mt-4 text-2xl font-bold text-white">
            {hero?.flowTitle || "Login Automation"}
          </h3>
          <p className="mt-2 text-xs text-gray-500">
            {hero?.deviceInfo || "Android • Pixel 9"}
          </p>
        </div>

        {/* Workflow Nodes */}
        {workflowNodes.map((node, index) => {
          const status = nodeStatuses[index] || "idle";
          const active = status === "running";
          const completed = status === "done";
          const Icon = icons[index] || Play;

          return (
            <div
              key={node.title}
              ref={(el) => {
                if (el) nodeRefs.current[index] = el;
              }}
              className="flex w-full flex-col items-center"
            >
              <motion.div
                animate={{ scale: active ? 1.03 : 1 }}
                transition={{ duration: 0.35 }}
                className={`
                  flex w-full items-center gap-4 rounded-2xl border px-5 py-4
                  ${
                    active
                      ? "border-[#16f2b3]/50 bg-[#16f2b3]/10 shadow-[0_0_35px_rgba(22,242,179,.18)]"
                      : completed
                        ? "border-emerald-400/30 bg-emerald-400/10"
                        : "border-white/10 bg-[#111827]"
                  }
                `}
              >
                {/* Step */}
                <div className="w-8 text-center text-[11px] font-bold tracking-[2px] text-gray-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className={`
                    flex h-11 w-11 items-center justify-center rounded-xl
                    ${
                      active
                        ? "bg-[#16f2b3] text-[#08120f]"
                        : completed
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-white/5 text-gray-500"
                    }
                  `}
                >
                  <Icon size={18} strokeWidth={2.5} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className={`text-sm font-semibold ${active || completed ? "text-white" : "text-gray-400"}`}>
                    {node.title}
                  </h4>
                  <p className="mt-1 text-[10px] uppercase tracking-[3px] text-gray-500">
                    {node.subtitle}
                  </p>
                </div>

                {/* Status */}
                <div className={`text-[11px] font-medium ${
                  active ? "text-sky-400" : completed ? "text-emerald-400" : "text-gray-500"
                }`}>
                  {active ? "● Running" : completed ? "✓ Done" : "○ Waiting"}
                </div>
              </motion.div>

              {/* Connector */}
              {index !== workflowNodes.length - 1 && (
                <div className="relative flex h-10 justify-center">
                  <div
                    className={`w-px ${
                      completed ? "bg-emerald-400" : active ? "bg-[#16f2b3]" : "bg-white/10"
                    }`}
                  />
                  {active && (
                    <motion.div
                      layoutId="workflow-dot"
                      className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#16f2b3] shadow-[0_0_12px_#16f2b3]"
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}