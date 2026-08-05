"use client";

import clsx from "clsx";

export default function Section({
  id,
  children,
  className,
}) {
  return (
    <section
      id={id}
      className={clsx(
        `
          relative
          py-24
        `,
        className
      )}
    >
      {children}
    </section>
  );
}