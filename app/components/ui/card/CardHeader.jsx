"use client";

import clsx from "clsx";

export default function CardHeader({
  children,
  className,
}) {
  return (
    <div
      className={clsx(
        "px-6 pt-6",
        className
      )}
    >
      {children}
    </div>
  );
}