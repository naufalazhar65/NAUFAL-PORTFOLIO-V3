"use client";

export default function HeroBadges({ badges }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {badges.map((badge) => (
        <span
          key={badge}
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            text-sm
            text-gray-300
            transition
            hover:border-[#16f2b3]/40
            hover:bg-[#16f2b3]/10
            hover:text-white
          "
        >
          {badge}
        </span>
      ))}
    </div>
  );
}
