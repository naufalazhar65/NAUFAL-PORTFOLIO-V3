"use client";

import { library } from "./demoData";

export default function DemoSidebar() {
  return (
    <aside className="flex flex-col border-r border-white/10 bg-[#111827]">
      {/* Header */}

      <div className="border-b border-white/10 p-5">
        <h2 className="text-lg font-bold text-white">
          Component Library
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Build your automation workflow
        </p>

        <input
          placeholder="Search..."
          className="
            mt-5
            w-full
            rounded-xl
            border
            border-white/10
            bg-[#161b22]
            px-4
            py-3
            text-sm
            outline-none
            transition
            focus:border-[#16f2b3]
          "
        />
      </div>

      {/* Groups */}

      <div className="flex-1 overflow-y-auto p-5">
        {library.map((group) => (
          <div
            key={group.title}
            className="mb-8"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gray-500">
              {group.title}
            </p>

            <div className="space-y-3">
              {group.items.map((item) => (
                <NodeCard
                  key={item.name}
                  item={item}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function NodeCard({ item }) {
  return (
    <div
      className="
        group
        cursor-pointer
        rounded-2xl
        border
        border-white/10
        bg-[#161b22]
        p-4
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#16f2b3]/40
        hover:bg-[#16f2b3]/5
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl text-lg"
          style={{
            background: `${item.color}20`,
            color: item.color,
          }}
        >
          {item.icon}
        </div>

        <div>
          <p className="font-semibold text-white">
            {item.name}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Drag into workflow
          </p>
        </div>
      </div>
    </div>
  );
}