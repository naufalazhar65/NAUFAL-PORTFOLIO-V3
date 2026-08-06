"use client";

export default function StatusChip({
  children,
}) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-[#16f2b3]/20
        bg-[#16f2b3]/10
        px-3
        py-1
        text-[10px]
        font-semibold
        tracking-wide
        text-[#16f2b3]
      "
    >
      {children}
    </span>
  );
}