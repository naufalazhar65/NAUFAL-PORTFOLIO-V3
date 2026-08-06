"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

import useDemo from "../shared/useDemo";

const levelColors = {
  INFO: "text-sky-400",
  RUN: "text-amber-400",
  PASS: "text-green-400",
  FAIL: "text-red-400",
  DONE: "text-violet-400",
};

export default function DemoConsole() {
  const { state, activeStep } = useDemo();

  const logs = state?.logs ?? [];

  const bodyRef = useRef(null);

  const [collapsed, setCollapsed] =
    useState(false);

  const visibleLogs = useMemo(() => {
    return logs.slice(
      0,
      Math.max(activeStep + 1, 0),
    );
  }, [logs, activeStep]);

useEffect(() => {
  if (!bodyRef.current) return;

  bodyRef.current.scrollTop =
    bodyRef.current.scrollHeight;
}, [visibleLogs]);

  return (
    <section className="border-t border-white/10 bg-[#090d13]">
      {/* Header */}

      <button
        onClick={() =>
          setCollapsed(!collapsed)
        }
        className="
          flex
          w-full
          items-center
          justify-between
          border-b
          border-white/10
          px-6
          py-2.5
          transition
          hover:bg-white/5
        "
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[3px] text-gray-500">
            Execution Console
          </span>

          <div className="rounded-full bg-[#16f2b3]/10 px-3 py-1 text-[10px] font-bold text-[#16f2b3]">
            LIVE
          </div>
        </div>

        {collapsed ? (
          <FiChevronUp
            className="text-gray-400"
          />
        ) : (
          <FiChevronDown
            className="text-gray-400"
          />
        )}
      </button>

      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.div
            key="console"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 140,
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden"
          >
            <div
              ref={bodyRef}
              className="
                h-[140px]
                overflow-y-auto
                px-6
                py-4
                font-mono
                text-xs
                scrollbar-hide
              "
            >
              {visibleLogs.map(
                (log, index) => (
                  <ConsoleLine
                    key={log.id ?? index}
                    log={log}
                    index={index}
                    latest={
                      index ===
                      visibleLogs.length - 1
                    }
                  />
                ),
              )}

              <div className="mt-3 flex items-center gap-2 text-gray-500">
                <span>$</span>

                <span className="animate-pulse">
                  █
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ConsoleLine({
  log,
  latest,
  index,
}) {
  const second = String(
    20 + index,
  ).padStart(2, "0");

  const level =
    log.type?.toUpperCase() ??
    "INFO";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -8,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        mb-2
        flex
        items-center
        gap-4

        ${
          latest
            ? "text-white"
            : "text-gray-400"
        }
      `}
    >
      <span className="w-16 text-gray-600">
        09:30:{second}
      </span>

      <span
        className={`
          w-12
          font-bold
          ${
            levelColors[level] ??
            "text-gray-400"
          }
        `}
      >
        {level}
      </span>

      <span>{log.message}</span>
    </motion.div>
  );
}