"use client";

import { FiChevronDown, FiFile, FiFolder } from "react-icons/fi";

const files = ["Login.flow", "Register.flow", "Checkout.flow", "Profile.flow"];

export default function PhoneExplorer({ active = "Login.flow" }) {
  return (
    <div className="border-b border-white/10 px-5 py-4">
      {/* Header */}

      <div className="mb-3 flex items-center gap-2">
        <FiChevronDown size={13} className="text-gray-500" />

        <span className="text-[11px] font-semibold uppercase tracking-[2px] text-gray-500">
          Explorer
        </span>
      </div>

      {/* Folder */}

      <div className="mb-2 flex items-center gap-2 text-xs text-[#16f2b3]">
        <FiFolder size={14} />

        <span>flows</span>
      </div>

      {/* Files */}

      <div className="space-y-1 pl-4">
        {files.map((file) => {
          const isActive = file === active;

          return (
            <div
              key={file}
              className={`
                flex
                items-center
                gap-2
                rounded-lg
                px-2
                py-2
                transition-all

                ${isActive ? "bg-[#16f2b3]/10 text-[#16f2b3]" : "text-gray-400"}
              `}
            >
              <FiFile size={12} className="shrink-0" />

              <span className="truncate text-xs">{file}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
