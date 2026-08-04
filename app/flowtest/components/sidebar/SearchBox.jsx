"use client";

import { FiSearch } from "react-icons/fi";

export default function SearchBox() {
  return (
    <div className="relative">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

      <input
        placeholder="Search component..."
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-white/5
          py-3
          pl-11
          pr-4
          text-sm
          text-white
          outline-none
          placeholder:text-gray-500
        "
      />
    </div>
  );
}
