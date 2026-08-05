"use client";

export default function AboutStatus() {
  return (
    <div
      className="
        absolute
        -top-5
        left-1/2
        z-20
        flex
        -translate-x-1/2
        items-center
        gap-2
        rounded-full
        border
        border-[#16f2b3]/30
        bg-[#0d1224]/80
        px-5
        py-2
        text-sm
        text-[#16f2b3]
        backdrop-blur-xl
      "
    >
      <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

      Available for Work
    </div>
  );
}