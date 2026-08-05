"use client";

import clsx from "clsx";

export default function Card({
  children,
  className,
  hover = true,
  clickable = false,
}) {
  return (
    <article
      className={clsx(
        `
          group
          overflow-hidden

          rounded-card

          border
          border-border

          bg-card

          shadow-card

          transition-all
          duration-250
          ease-smooth
        `,

        hover &&
          `
            hover:-translate-y-1
            hover:border-primary/20
            hover:shadow-float
          `,

        clickable &&
          `
            cursor-pointer
            active:scale-[0.99]
          `,

        className,
      )}
    >
      {children}
    </article>
  );
}
