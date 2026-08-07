"use client";

import DesktopFrame from "./DesktopFrame";

export default function DesktopPreview({
  variant = "workflow",
  isBackground = false,
}) {
  return (
    <DesktopFrame
      variant={variant}
      isBackground={isBackground}
    />
  );
}