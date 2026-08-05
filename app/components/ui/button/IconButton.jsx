"use client";

import Button from "./Button";

export default function IconButton({
  icon,
  ...props
}) {
  return (
    <Button
      size="icon"
      {...props}
    >
      {icon}
    </Button>
  );
}