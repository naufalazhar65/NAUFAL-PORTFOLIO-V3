"use client";

import Link from "next/link";
import clsx from "clsx";

const variants = {
  primary: `
    bg-primary
    text-background
    hover:bg-primary-hover
    hover:shadow-glow
  `,

  secondary: `
    bg-card
    text-heading
    border
    border-border
    hover:border-primary
    hover:text-primary
  `,

  outline: `
    bg-transparent
    border
    border-primary
    text-primary
    hover:bg-primary
    hover:text-background
  `,

  ghost: `
    bg-transparent
    text-heading
    hover:text-primary
  `,
};

const sizes = {
  sm: "px-3.5 py-2 text-xs",

  md: "px-5 py-2.5 text-sm",

  lg: "px-6 py-3 text-base",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const classes = clsx(
    `
      inline-flex
      items-center
      justify-center
      gap-2
      rounded-full
      font-medium
      transition-all
      duration-200
      ease-smooth
      hover:scale-[1.02]
      disabled:pointer-events-none
      disabled:opacity-50
    `,
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}