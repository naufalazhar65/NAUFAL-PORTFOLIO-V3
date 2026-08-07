"use client";

import MobileScreen from "./MobileScreen";

export default function MobileFrame() {
  return (
    <div
      className="
        relative

        h-[620px]
        w-[300px]

        overflow-hidden

        rounded-[42px]

        border
        border-white/10

        bg-[#0d1117]

        shadow-[0_25px_80px_rgba(0,0,0,.45)]
      "
    >
      {/* Dynamic Island */}

      <div
        className="
          absolute
          left-1/2
          top-4
          z-20

          h-7
          w-32

          -translate-x-1/2

          rounded-full

          bg-black
        "
      />

      <MobileScreen />
    </div>
  );
}