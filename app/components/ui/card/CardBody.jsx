"use client";

import clsx from "clsx";

export default function CardBody({
  children,
  className,
}) {
  return (
    <div
      className={clsx(
        "px-6 py-5",
        className
      )}
    >
      {children}
    </div>
  );
}