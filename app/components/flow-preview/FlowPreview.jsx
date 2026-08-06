"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HiCheckCircle, HiDevicePhoneMobile } from "react-icons/hi2";

import GlassPanel from "@/app/components/ui/GlassPanel";
import { fadeUp } from "@/app/lib/motion";

import PreviewNode from "./PreviewNode";
import useFlowPreview from "./useFlowPreview";
import { previewNodes, consoleLogs } from "./constants";

export default function FlowPreview() {
  const consoleRef = useRef(null);

  const [displayLogs, setDisplayLogs] = useState([consoleLogs[0]]);

  const [isResetting, setIsResetting] = useState(false);

  const { currentStep, statuses, status, duration } =
    useFlowPreview(previewNodes);

  /**
   * Sync console with workflow
   */
  useEffect(() => {
    // Workflow restarted
    if (currentStep === 0) {
      setIsResetting(true);

      const timeout = setTimeout(() => {
        setDisplayLogs([consoleLogs[0]]);

        setIsResetting(false);
      }, 180);

      return () => clearTimeout(timeout);
    }

    setDisplayLogs(
      consoleLogs.slice(0, Math.min(currentStep + 1, consoleLogs.length)),
    );
  }, [currentStep]);

  /**
   * Auto scroll console
   */
  useEffect(() => {
    const el = consoleRef.current;

    if (!el) return;

    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
  }, [displayLogs]);

  return (
    <motion.div variants={fadeUp} className="w-full max-w-md">
      <GlassPanel className="overflow-hidden p-0">
        {/* ========================= */}
        {/* Title Bar */}
        {/* ========================= */}

        <div className="flex items-center justify-between border-b border-border bg-panel px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <h3 className="font-semibold text-heading">FlowTest Studio</h3>
          </div>

          <div className="flex items-center gap-2 text-primary">
            <HiCheckCircle size={18} />

            <span className="text-sm font-medium">Ready</span>
          </div>
        </div>

        {/* ========================= */}
        {/* Workflow */}
        {/* ========================= */}

        <div className="bg-background px-6 py-6">
          <div className="space-y-2">
            {previewNodes.map((node, index) => (
              <div key={node.id} className="flex flex-col">
                <PreviewNode label={node.label} status={statuses[node.id]} />

                {index !== previewNodes.length - 1 && (
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: 28,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
    ml-5
    border-l-2
  "
                    style={{
                      borderColor:
                        statuses[node.id] === "passed" ? "#16F2B3" : "#2a2a2a",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ========================= */}
        {/* Console */}
        {/* ========================= */}

        <div className="border-t border-border bg-panel">
          {/* Header */}

          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <span className="text-xs font-bold tracking-[0.3em] text-muted">
              CONSOLE
            </span>

            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Live
            </span>
          </div>

          {/* Body */}

          <div
            ref={consoleRef}
            className="
      h-28
      overflow-y-auto
      px-5
      py-4
      font-mono
      text-sm
      scrollbar-thin
      scrollbar-track-transparent
      scrollbar-thumb-border
    "
          >
            <AnimatePresence initial={false}>
              {!isResetting &&
                displayLogs.map((log, index) => (
                  <motion.div
                    key={log}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="
              mb-2
              flex
              items-center
              gap-3
              last:mb-0
            "
                  >
                    <span className="select-none text-primary">&gt;</span>

                    <span className="truncate text-heading">
                      {log}

                      {index === displayLogs.length - 1 && (
                        <motion.span
                          animate={{
                            opacity: [1, 0, 1],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                          }}
                          className="ml-1 text-primary"
                        >
                          ▋
                        </motion.span>
                      )}
                    </span>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
        {/* ========================= */}
        {/* Status Bar */}
        {/* ========================= */}

        <div className="border-t border-border bg-panel px-5 py-3 text-sm">
          <div
            className="
      flex
      flex-col
      gap-3
      sm:flex-row
      sm:items-center
      sm:justify-between
    "
          >
            {/* Left */}

            <div className="flex items-center gap-2 text-primary">
              <HiCheckCircle size={16} className="shrink-0" />

              <AnimatePresence mode="wait">
                <motion.span
                  key={status}
                  initial={{
                    opacity: 0,
                    y: 4,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -4,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
            font-medium
            leading-tight
          "
                >
                  {status}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Right */}

            <div
              className="
        flex
        items-center
        justify-between
        gap-3
        text-muted
        text-xs
        sm:justify-end
        sm:gap-4
        sm:text-sm
      "
            >
              <div className="flex items-center gap-1.5">
                <HiDevicePhoneMobile size={15} className="shrink-0" />

                <span>Android</span>
              </div>

              <span>{previewNodes.length} Nodes</span>

              <AnimatePresence mode="wait">
                <motion.span
                  key={duration}
                  initial={{
                    opacity: 0,
                    y: 4,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -4,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  {duration}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </GlassPanel>

      <Link
        href="/projects/flowtest-studio"
        className="
          mt-5
          inline-flex
          items-center
          gap-2
          font-medium
          text-primary
          transition-all
          duration-300
          hover:translate-x-1
          hover:text-primary-hover
        "
      >
        Open FlowTest Studio →
      </Link>
    </motion.div>
  );
}
