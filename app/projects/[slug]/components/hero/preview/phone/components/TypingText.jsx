"use client";

import { useEffect, useState } from "react";

export default function TypingText({
  text,
  speed = 60,
  cursor = true,
  onKeyPress,
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    let index = 0;

    setValue("");

    const timer = setInterval(() => {
      index++;

      const current = text[index - 1];

      setValue(text.slice(0, index));

      onKeyPress?.(current.toUpperCase());

      if (index >= text.length) {
        onKeyPress?.("");

        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className="inline-flex items-center">
      {value}

      {cursor && (
        <span
          className="
            ml-0.5
            animate-pulse
            text-[#16f2b3]
          "
        >
          |
        </span>
      )}
    </span>
  );
}
