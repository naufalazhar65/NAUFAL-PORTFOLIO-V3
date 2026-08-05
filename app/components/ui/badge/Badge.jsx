"use client";

import clsx from "clsx";

const variants = {
  primary: `
    border-primary/20
    bg-primary/10
    text-primary
  `,

  secondary: `
    border-border
    bg-surface
    text-text
  `,

  success: `
    border-green-500/20
    bg-green-500/10
    text-green-400
  `,

  warning: `
    border-yellow-500/20
    bg-yellow-500/10
    text-yellow-400
  `,

  danger: `
    border-red-500/20
    bg-red-500/10
    text-red-400
  `,

  info: `
    border-sky-500/20
    bg-sky-500/10
    text-sky-400
  `,
};

const sizes = {
  sm: "px-2 py-1 text-[11px]",

  md: "px-3 py-1.5 text-xs",

  lg: "px-4 py-2 text-sm",
};

export default function Badge({
  children,
  variant = "secondary",
  size = "md",
  className,
}) {
  return (
    <span
      className={clsx(
        `
          inline-flex
          items-center
          gap-2

          rounded-full
          border

          font-medium
          tracking-wide

          transition-all
          duration-250
          ease-smooth
        `,
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
