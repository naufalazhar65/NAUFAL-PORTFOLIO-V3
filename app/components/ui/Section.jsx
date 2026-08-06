"use client";

import clsx from "clsx";

export default function Section({
  id,
  children,
  className = "",
  spacing = "lg",
}) {
  const spacingMap = {
    sm: "py-16",
    md: "py-20",
    lg: "py-24",
    xl: "py-32",
  };

  return (
    <section
      id={id}
      className={clsx(
        "relative overflow-hidden",
        spacingMap[spacing],
        className,
      )}
    >
      {children}
    </section>
  );
}