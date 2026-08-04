"use client";

import { FiCheckCircle } from "react-icons/fi";

export default function WindowHeader({
  title = "FlowTest Studio",
  status = "Ready",
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between

        border-b
        border-white/10

        bg-[#111827]

        px-3
        py-2

        sm:px-4
        sm:py-2.5

        lg:px-5
        lg:py-3
      "
    >
      {/* Left */}

      <div className="flex min-w-0 items-center gap-2">
        {/* macOS Buttons */}

        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] lg:h-3 lg:w-3" />

          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] lg:h-3 lg:w-3" />

          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] lg:h-3 lg:w-3" />
        </div>

        {/* Title */}

        <span
          className="
            ml-2

            truncate

            text-xs
            font-medium
            text-gray-300

            sm:text-sm
          "
        >
          {title}
        </span>
      </div>

      {/* Right */}

      <div className="ml-3 flex shrink-0 items-center gap-1.5">
        <FiCheckCircle className="text-sm text-[#16f2b3]" />

        <span
          className="
            hidden
            text-xs
            text-[#16f2b3]

            sm:block
            sm:text-sm
          "
        >
          {status}
        </span>
      </div>
    </div>
  );
}