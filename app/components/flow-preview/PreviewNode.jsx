"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

const STATUS = {
  idle: {
    indicator: "○",
    color: "text-muted",
  },

  running: {
    indicator: "●",
    color: "text-primary",
  },

  passed: {
    indicator: "✔",
    color: "text-success",
  },
};

export default function PreviewNode({
  label,
  status,
}) {
  const current = STATUS[status];

  return (
    <motion.div
      animate={{
        scale: status === "running" ? 1.03 : 1,
        x: status === "running" ? 4 : 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        "flex items-center gap-3",
        current.color,
      )}
    >
      <span className="w-4 text-center">
        {current.indicator}
      </span>

      <span
        className={clsx(
          "transition-colors",
          status === "idle"
            ? "text-muted"
            : "text-heading",
        )}
      >
        {label}
      </span>
    </motion.div>
  );
}