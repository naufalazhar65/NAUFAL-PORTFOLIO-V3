"use client";

import clsx from "clsx";

function Panel({
  children,
  className,
  hover = false,
}) {
  return (
    <div
      className={clsx(
        `
          overflow-hidden
          rounded-panel
          border
          border-border
          bg-panel
          shadow-panel

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
        className
      )}
    >
      {children}
    </div>
  );
}

function Header({
  children,
  className,
}) {
  return (
    <div
      className={clsx(
        `
          border-b
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

function Body({
  children,
  className,
}) {
  return (
    <div
      className={clsx(
        "p-6",
        className
      )}
    >
      {children}
    </div>
  );
}

function Footer({
  children,
  className,
}) {
  return (
    <div
      className={clsx(
        `
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

Panel.Header = Header;
Panel.Body = Body;
Panel.Footer = Footer;

export default Panel;