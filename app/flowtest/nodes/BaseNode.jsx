"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { Handle, Position } from "@xyflow/react";
import {
  FiCheckCircle,
  FiLoader,
  FiAlertCircle,
  FiCircle,
} from "react-icons/fi";

import { useExecutionStore } from "../store/executionStore";

export default function BaseNode({ id, data }) {
  const status = useExecutionStore((state) => state.nodeStatus[id]);

  const isRunning = status === "running";
  const isPassed = status === "passed";
  const isFailed = status === "failed";

  const StatusIcon = isRunning
    ? FiLoader
    : isPassed
      ? FiCheckCircle
      : isFailed
        ? FiAlertCircle
        : FiCircle;

  return (
    <motion.div
      layout
      animate={{
        scale: isRunning ? [1, 1.03, 1] : 1,

        boxShadow: isRunning
          ? [
              "0 0 0 rgba(59,130,246,0)",
              "0 0 24px rgba(59,130,246,.45)",
              "0 0 0 rgba(59,130,246,0)",
            ]
          : isPassed
            ? "0 0 18px rgba(22,242,179,.30)"
            : isFailed
              ? "0 0 18px rgba(239,68,68,.30)"
              : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{
        duration: 1,
        repeat: isRunning ? Infinity : 0,
      }}
      className={clsx(
        `
          min-w-[240px]
          overflow-hidden
          rounded-2xl
          border
          bg-[#1d2430]
          shadow-lg
          transition-all
          duration-300
        `,
        {
          "border-white/10": !status,
          "border-blue-500": isRunning,
          "border-[#16f2b3]": isPassed,
          "border-red-500": isFailed,
        },
      )}
    >
      {/* Header */}

      <motion.div
        animate={{
          opacity: isRunning ? [1, 0.85, 1] : 1,
        }}
        transition={{
          duration: 0.8,
          repeat: isRunning ? Infinity : 0,
        }}
        className="flex items-center justify-between px-4 py-3"
        style={{
          background: data.color,
        }}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{data.icon}</span>

          <div>
            <h3 className="font-semibold text-white">{data.title}</h3>

            <p className="text-xs text-white/80">{data.type}</p>
          </div>
        </div>

        <span
          className={clsx(
            "flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wider",
            {
              "bg-blue-500/20 text-blue-300": isRunning,
              "bg-[#16f2b3]/20 text-[#16f2b3]": isPassed,
              "bg-red-500/20 text-red-300": isFailed,
              "bg-white/10 text-gray-300": !status,
            },
          )}
        >
          <StatusIcon
            className={clsx({
              "animate-spin": isRunning,
            })}
            size={10}
          />

          {status || "Ready"}
        </span>
      </motion.div>

      {/* Body */}

      <div className="space-y-3 p-4">
        {data.fields?.map((field) => (
          <div key={field.label}>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              {field.label}
            </p>

            <p className="mt-1 font-medium text-white">{field.value || "-"}</p>
          </div>
        ))}
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="!h-3 !w-3 !border-2 !border-white !bg-[#16f2b3]"
      />

      <Handle
        type="source"
        position={Position.Bottom}
        className="!h-3 !w-3 !border-2 !border-white !bg-[#16f2b3]"
      />
    </motion.div>
  );
}
