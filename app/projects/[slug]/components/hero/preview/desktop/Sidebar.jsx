"use client";

import {
  FiChevronDown,
  FiFolder,
  FiFileText,
} from "react-icons/fi";

const files = [
  "Login.flow",
  "Register.flow",
  "Checkout.flow",
  "Profile.flow",
];

export default function Sidebar({
  active = "Login.flow",
  compact = false,
}) {
  return (
    <aside
      className={`
        bg-[#111827]

        ${
          compact
            ? "border-b border-white/10"
            : "w-[220px] border-r border-white/10"
        }
      `}
    >
      {/* Header */}

      <div
        className={`
          flex
          items-center
          gap-2
          border-white/10

          ${
            compact
              ? "border-b px-4 py-3"
              : "border-b px-4 py-3"
          }
        `}
      >
        <FiChevronDown className="text-gray-400" />

        <span className="text-sm font-semibold text-white">
          Explorer
        </span>
      </div>

      {/* Content */}

      <div
        className={`
          ${
            compact
              ? "px-4 py-3"
              : "px-3 py-3"
          }
        `}
      >
        {/* Folder */}

        <div className="mb-3 flex items-center gap-2 text-sm text-gray-400">
          <FiFolder className="text-[#16f2b3]" />

          <span>flows</span>
        </div>

        {/* Files */}

        <div
          className={
            compact
              ? "grid grid-cols-2 gap-2"
              : "space-y-1 pl-5"
          }
        >
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
                  px-3
                  py-2
                  text-sm
                  transition-all

                  ${
                    isActive
                      ? "bg-[#16f2b3]/10 text-[#16f2b3]"
                      : "text-gray-400 hover:bg-white/5"
                  }
                `}
              >
                <FiFileText className="shrink-0" />

                <span className="truncate">
                  {file}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}