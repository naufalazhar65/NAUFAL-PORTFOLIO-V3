"use client";

import clsx from "clsx";

export default function Container({
  children,
  className = "",
  size = "default",
}) {
  const sizes = {
    sm: "max-w-4xl",
    default: "max-w-6xl",
    lg: "max-w-7xl",
    full: "max-w-[90rem]",
  };

  return (
    <div
      className={clsx(
        "mx-auto w-full px-6 lg:px-8",
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}