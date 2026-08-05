"use client";

import clsx from "clsx";
import { buttonSizes, buttonVariants } from "./buttonVariants";

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  ...props
}) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        `
          inline-flex
          items-center
          justify-center
          gap-2

          rounded-button
          border

          font-medium

          transition-all
          duration-250
          ease-smooth

          disabled:pointer-events-none
          disabled:opacity-50

          active:scale-[0.98]
        `,
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {leftIcon}

      {loading ? "Loading..." : children}

      {rightIcon}
    </button>
  );
}