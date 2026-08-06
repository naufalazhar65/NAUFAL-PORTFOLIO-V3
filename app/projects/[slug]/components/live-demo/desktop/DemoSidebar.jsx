"use client";

import { library } from "./demoData";

export default function DemoSidebar() {
  return (
    <aside
      className="
        flex
        h-full
        min-h-0
        flex-col
        overflow-hidden
        border-r
        border-white/10
        bg-[#111827]
      "
    >
      {/* Header */}

      <div className="shrink-0 border-b border-white/10 p-5">
        <h2 className="text-lg font-bold text-white">Component Library</h2>

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
            text-white
            placeholder:text-gray-500
            outline-none
            transition
            focus:border-[#16f2b3]
          "
        />
      </div>

      {/* Scroll Area */}

      <div
        className="
          flex-1
          min-h-0
          overflow-y-auto
          overscroll-contain
          px-5
          py-5
          scrollbar-hide
        "
      >
        {library.map((group) => (
          <section key={group.title} className="mb-8">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gray-500">
              {group.title}
            </h3>

            <div className="space-y-3">
              {group.items.map((item) => (
                <NodeCard key={item.name} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
}

function NodeCard({ item }) {
  return (
    <button
      type="button"
      className="
        group
        w-full
        rounded-2xl
        border
        border-white/10
        bg-[#161b22]
        p-4
        text-left
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#16f2b3]/40
        hover:bg-[#16f2b3]/5
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg"
          style={{
            background: `${item.color}20`,
            color: item.color,
          }}
        >
          {item.icon}
        </div>

        <div className="min-w-0">
          <p className="font-semibold text-white">{item.name}</p>

          <p className="mt-1 text-xs text-gray-500">Drag into workflow</p>
        </div>
      </div>
    </button>
  );
}
