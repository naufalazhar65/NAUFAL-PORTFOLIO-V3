"use client";

import SearchBox from "./sidebar/SearchBox";
import ComponentGroup from "./sidebar/ComponentGroup";
import { componentLibrary } from "./sidebar/componentLibrary";

export default function Sidebar() {
  return (
    <aside className="flex h-full flex-col border-r border-white/10 bg-[#111827]">
      <div className="border-b border-white/10 p-6">
        <h2 className="text-xl font-bold text-white">Component Library</h2>

        <p className="mt-2 text-sm text-gray-400">
          Drag or click to add automation nodes.
        </p>

        <div className="mt-5">
          <SearchBox />
        </div>
      </div>

      <div className="flex-1 space-y-8 overflow-y-auto p-6">
        {componentLibrary.map((group) => (
          <ComponentGroup key={group.title} group={group} />
        ))}
      </div>
    </aside>
  );
}
