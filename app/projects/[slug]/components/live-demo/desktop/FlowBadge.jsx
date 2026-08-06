"use client";

export default function FlowBadge({
  active,
  completed,
}) {
  return (
    <div
      className={`
        rounded-full
        px-3
        py-1
        text-[10px]
        font-bold
        uppercase

        ${
          active
            ? "bg-[#16f2b3]/20 text-[#16f2b3]"
            : completed
              ? "bg-green-500/20 text-green-400"
              : "bg-white/5 text-gray-500"
        }
      `}
    >
      {active
        ? "Running"
        : completed
          ? "Done"
          : "Queued"}
    </div>
  );
}