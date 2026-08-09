"use client";

export default function AppleFrame({
  children,
  title = "FlowTest Studio",
  className = "",
  showEdgeFade = false,
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[18px]

        border
        border-white/[0.06]

        bg-[#0b0e14]/95

        shadow-[0_24px_70px_rgba(0,0,0,0.38)]

        ${className}
      `}
    >
      {/* Window Header */}

      <div
        className="
          relative
          flex
          h-[42px]
          items-center

          border-b
          border-white/[0.05]

          bg-[#11151d]/90

          px-4
        "
      >
        {/* Traffic Lights */}

        <div className="flex items-center gap-[7px]">
          <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
        </div>

        {/* Title */}

        <span
          className="
            absolute
            left-1/2
            -translate-x-1/2

            whitespace-nowrap

            text-[11px]
            font-medium
            tracking-wide
            text-white/40
          "
        >
          {title}
        </span>

        {/* Right Control */}

        <div className="ml-auto">
          <div
            className="
              h-[18px]
              w-[64px]

              rounded-full

              border
              border-white/[0.05]

              bg-white/[0.02]
            "
          />
        </div>
      </div>

      {/* Content */}

      <div className="relative">
        {children}

        {showEdgeFade && (
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              bottom-0

              w-[24px]

              bg-gradient-to-l
              from-[#0b0f1f]/70
              to-transparent
            "
          />
        )}
      </div>
    </div>
  );
}
