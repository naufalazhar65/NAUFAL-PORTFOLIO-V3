"use client";

import {
  FiActivity,
  FiCheckCircle,
  FiSmartphone,
  FiCode,
} from "react-icons/fi";

export default function StatusBar() {
  return (
    <div
      className="
        flex
        items-center
        justify-between

        border-t
        border-white/10

        bg-[#111827]

        px-3
        py-1.5

        text-[10px]

        lg:px-4
        lg:py-2
        lg:text-xs
      "
    >
      {/* Left */}

      <div
        className="
          flex
          min-w-0
          items-center

          gap-3

          lg:gap-5
        "
      >
        {/* Ready */}

        <div className="flex items-center gap-1 text-[#16f2b3]">
          <FiCheckCircle
            className="
              text-[11px]

              lg:text-sm
            "
          />

          <span>Ready</span>
        </div>

        {/* Python */}

        <div
          className="
            hidden

            items-center
            gap-1

            text-gray-400

            sm:flex
          "
        >
          <FiCode
            className="
              text-[11px]

              lg:text-sm
            "
          />

          <span>Python 3.13</span>
        </div>

        {/* Platform */}

        <div className="flex items-center gap-1 text-gray-400">
          <FiSmartphone
            className="
              text-[11px]

              lg:text-sm
            "
          />

          <span>Android</span>
        </div>
      </div>

      {/* Right */}

      <div
        className="
          flex
          shrink-0
          items-center
          gap-1

          text-gray-400
        "
      >
        <FiActivity
          className="
            text-[11px]

            lg:text-sm
          "
        />

        <span>5 Nodes</span>
      </div>
    </div>
  );
}