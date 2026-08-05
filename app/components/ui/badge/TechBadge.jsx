"use client";

import Badge from "./Badge";

export default function TechBadge({
  children,
}) {
  return (
    <Badge variant="primary" size="sm">
      {children}
    </Badge>
  );
}