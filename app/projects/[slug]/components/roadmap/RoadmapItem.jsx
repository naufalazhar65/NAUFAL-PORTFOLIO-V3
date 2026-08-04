"use client";

export default function RoadmapItem({ children }) {
  return (
    <li
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-4
        py-3
      "
    >
      <span className="h-2 w-2 rounded-full bg-current" />

      <span className="text-gray-300">{children}</span>
    </li>
  );
}
