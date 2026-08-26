"use client";

export default function RoadmapItem({
  children,
  completed = false,
  current = false,
}) {
  return (
    <div className="group flex items-start gap-3">
      <span
        className={`
          mt-[7px]
          h-1.5
          w-1.5
          shrink-0
          rounded-full
          transition-all
          duration-200
          ${
            completed
              ? "bg-[#16f2b3] shadow-[0_0_8px_rgba(22,242,179,.25)]"
              : current
                ? "bg-white shadow-[0_0_8px_rgba(255,255,255,.2)]"
                : "bg-gray-700 group-hover:bg-gray-500"
          }
        `}
      />

      <span
        className={`
          text-[12px]
          leading-6
          transition-colors
          duration-200
          ${
            completed
              ? "text-gray-300"
              : current
                ? "text-gray-300"
                : "text-gray-500 group-hover:text-gray-300"
          }
        `}
      >
        {children}
      </span>
    </div>
  );
}