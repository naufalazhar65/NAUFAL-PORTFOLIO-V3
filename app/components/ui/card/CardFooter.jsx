"use client";

import clsx from "clsx";

export default function CardFooter({
  children,
  className,
}) {
  return (
    <div
      className={clsx(
        `
          flex
          items-center
          justify-between

          border-t
          border-border

          px-6
          py-5
        `,
        className
      )}
    >
      {children}
    </div>
  );
}