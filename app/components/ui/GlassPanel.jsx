"use client";

import { forwardRef } from "react";
import clsx from "clsx";

const GlassPanel = forwardRef(
  ({ as: Component = "div", className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={clsx(
          `
            rounded-panel
            border
            border-border
            bg-glass
            backdrop-blur-sm
            shadow-card
          `,
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

GlassPanel.displayName = "GlassPanel";

export default GlassPanel;
