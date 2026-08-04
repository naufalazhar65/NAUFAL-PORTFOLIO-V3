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
}) {
  return (
    <aside
      className="
        w-[140px]

        border-r
        border-white/10

        bg-[#111827]

        lg:w-[220px]
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          gap-2

          border-b
          border-white/10

          px-3
          py-2

          lg:px-4
          lg:py-3
        "
      >
        <FiChevronDown
          className="
            text-xs
            text-gray-400

            lg:text-base
          "
        />

        <span
          className="
            text-xs
            font-semibold
            text-white

            lg:text-sm
          "
        >
          Explorer
        </span>
      </div>

      {/* Folder */}

      <div
        className="
          px-2
          py-2

          lg:px-3
          lg:py-3
        "
      >
        <div
          className="
            mb-2
            flex
            items-center
            gap-2

            text-xs
            text-gray-400

            lg:text-sm
          "
        >
          <FiFolder className="text-[#16f2b3]" />

          <span>flows</span>
        </div>

        <div
          className="
            space-y-1

            pl-2

            lg:pl-5
          "
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

                  px-2
                  py-1.5

                  text-[11px]

                  transition-all

                  ${
                    isActive
                      ? "bg-[#16f2b3]/10 text-[#16f2b3]"
                      : "text-gray-400 hover:bg-white/5"
                  }

                  lg:px-3
                  lg:py-2
                  lg:text-sm
                `}
              >
                <FiFileText
                  className="
                    shrink-0
                    text-xs

                    lg:text-sm
                  "
                />

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