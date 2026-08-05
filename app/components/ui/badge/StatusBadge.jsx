"use client";

import Badge from "./Badge";

const statusMap = {
  running: "info",

  passed: "success",

  failed: "danger",

  queued: "secondary",

  idle: "secondary",

  completed: "success",
};

export default function StatusBadge({ status }) {
  return <Badge variant={statusMap[status] || "secondary"}>{status}</Badge>;
}
