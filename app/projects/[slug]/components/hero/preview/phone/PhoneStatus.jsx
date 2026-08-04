"use client";

import { FiActivity, FiCheckCircle, FiSmartphone } from "react-icons/fi";

export default function PhoneStatus() {
  return (
    <div
      className="
        mt-auto

        flex
        items-center
        justify-between

        border-t
        border-white/10

        bg-[#111827]

        px-5
        py-3
      "
    >
      {/* Left */}

      <div className="flex items-center gap-2">
        <FiCheckCircle size={14} className="text-[#16f2b3]" />

        <span className="text-[11px] font-medium text-[#16f2b3]">Ready</span>
      </div>

      {/* Center */}

      <div className="flex items-center gap-2">
        <FiSmartphone size={14} className="text-gray-400" />

        <span className="text-[11px] text-gray-400">Android</span>
      </div>

      {/* Right */}

      <div className="flex items-center gap-2">
        <FiActivity size={14} className="text-gray-400" />

        <span className="text-[11px] text-gray-400">5 Nodes</span>
      </div>
    </div>
  );
}
