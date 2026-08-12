"use client";

export default function HeroBadges({ badges }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
      {badges.map((badge) => (
        <span
          key={badge}
          className="
            rounded-lg
            border
            border-white/[0.08]
            bg-white/[0.03]
            px-2.5
            py-1
            font-mono
            text-xs
            text-gray-400
            transition-colors
            duration-200
            hover:border-[#16f2b3]/30
            hover:text-[#16f2b3]
          "
        >
          {badge}
        </span>
      ))}
    </div>
  );
}