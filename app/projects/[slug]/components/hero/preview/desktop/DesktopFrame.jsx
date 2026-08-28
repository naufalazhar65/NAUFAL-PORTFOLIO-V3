"use client";

import { Circle, Minus, Square } from "lucide-react";

import DesktopScreen from "./DesktopScreen";

export default function DesktopFrame({
  variant = "workflow",
  shadow = true,
  hideFrame = false,
}) {
  const content = (
    <DesktopScreen variant={variant} />
  );

  if (hideFrame) {
    return (
      <div className="h-[560px] w-[900px] overflow-hidden">
        {content}
      </div>
    );
  }

  return (
    <div
      className={`
        relative
        h-[560px]
        w-[900px]

        rounded-[28px]

        border
        border-white/10

        bg-[#0d1117]

        ${
          shadow
            ? "shadow-[0_35px_120px_rgba(0,0,0,.45)]"
            : "shadow-none"
        }
      `}
    >
      {/* Background Glow */}

      {shadow && (
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[28px]
            bg-[radial-gradient(circle_at_top,#16f2b320,transparent_70%)]
          "
        />
      )}

      {/* Browser */}

      <div
        className="
          h-full
          overflow-hidden
          rounded-[28px]
        "
      >
        {/* Browser Header */}

        <header
          className="
            flex
            h-12
            items-center
            justify-between
            border-b
            border-white/5
            bg-white/[0.03]
            px-5
          "
        >
          {/* Traffic Lights */}

          <div className="flex items-center gap-2">
            <Circle size={11} fill="#ff5f57" color="#ff5f57" />
            <Circle size={11} fill="#febc2e" color="#febc2e" />
            <Circle size={11} fill="#28c840" color="#28c840" />
          </div>

          {/* Address */}

          <div
            className="
              flex
              h-8
              w-[340px]
              items-center
              justify-center
              rounded-full
              border
              border-white/5
              bg-[#111821]
              text-[11px]
              text-gray-500
            "
          >
            http://localhost:5173/
          </div>

          {/* Actions */}

          <div className="flex items-center gap-3 text-gray-500">
            <Minus size={15} />
            <Square size={12} />
          </div>
        </header>

        {/* Desktop */}

        <div className="h-[calc(100%-48px)]">
          {content}
        </div>
      </div>
    </div>
  );
}