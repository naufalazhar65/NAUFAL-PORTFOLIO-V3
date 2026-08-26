"use client";

import { FiSearch } from "react-icons/fi";

export default function SearchBox() {
  return (
    <div className="group relative">
      <FiSearch
        size={13}
        className="
          pointer-events-none
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-gray-600
          transition-colors
          duration-200
          group-focus-within:text-gray-400
        "
      />

      <input
        type="search"
        placeholder="Search components..."
        aria-label="Search components"
        className="
          h-8
          w-full
          rounded-lg
          border
          border-white/[0.07]
          bg-[#0b1016]
          px-3
          pl-9
          text-[10px]
          text-gray-200
          outline-none
          transition-all
          duration-200
          placeholder:text-gray-600
          hover:border-white/[0.1]
          hover:bg-white/[0.015]
          focus:border-white/[0.16]
          focus:bg-white/[0.02]
          focus:ring-1
          focus:ring-white/[0.04]
        "
      />
    </div>
  );
}