"use client";

import SearchBox from "./sidebar/SearchBox";
import ComponentGroup from "./sidebar/ComponentGroup";
import { componentLibrary } from "./sidebar/componentLibrary";

export default function Sidebar() {
  return (
    <aside
      className="
        flex
        h-full
        flex-col
        border-r
        border-white/[0.08]
        bg-[#0f141b]
      "
    >
      {/* =========================
          HEADER
      ========================= */}

      <div
        className="
          border-b
          border-white/[0.08]
          px-4
          py-4
        "
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2
              className="
                text-[12px]
                font-semibold
                tracking-[-0.01em]
                text-white
              "
            >
              Component Library
            </h2>

            <p
              className="
                mt-1
                text-[10px]
                leading-5
                text-gray-500
              "
            >
              Add nodes to your workflow.
            </p>
          </div>

          <span
            className="
              rounded-md
              border
              border-white/[0.08]
              bg-white/[0.02]
              px-2
              py-1
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-gray-500
            "
          >
            Nodes
          </span>
        </div>

        {/* Search */}

        <div className="mt-4">
          <SearchBox />
        </div>
      </div>

      {/* =========================
          LIBRARY
      ========================= */}

      <div
        className="
          flex-1
          overflow-y-auto
          px-3
          py-4

          scrollbar-thin
          scrollbar-track-transparent
          scrollbar-thumb-white/[0.08]
        "
      >
        <div className="space-y-5">
          {componentLibrary.map((group) => (
            <div
              key={group.title}
              className="
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.005]
                p-2
                transition-colors
                duration-200
                hover:border-white/[0.1]
                hover:bg-white/[0.008]
              "
            >
              <ComponentGroup group={group} />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}