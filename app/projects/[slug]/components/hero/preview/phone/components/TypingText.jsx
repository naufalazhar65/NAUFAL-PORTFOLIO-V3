"use client";

import { useEffect, useState } from "react";

export default function TypingText({
  text,
  speed = 60,
  cursor = true,
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    let index = 0;

    setValue("");

    const timer = setInterval(() => {
      index++;

      setValue(text.slice(0, index));

      if (index >= text.length) {
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