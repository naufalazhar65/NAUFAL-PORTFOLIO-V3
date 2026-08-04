"use client";

import clsx from "clsx";

const widths = {
  sm: "max-w-5xl",
  md: "max-w-6xl",
  lg: "max-w-7xl",
  full: "max-w-full",
};

const paddings = {
  none: "",
  sm: "px-4",
  md: "px-4 sm:px-6",
  lg: "px-4 sm:px-6 lg:px-8",
};

export default function Section({
  id,
  as = "section",
  children,
  className = "",
  width = "lg",
  padding = "md",
  spacing = "py-24",
}) {
  const Component = as;

  return (
    <Component id={id} className={clsx("relative", spacing, className)}>
      <div className={clsx("mx-auto w-full", widths[width], paddings[padding])}>
        {children}
      </div>
    </Component>
  );
}
