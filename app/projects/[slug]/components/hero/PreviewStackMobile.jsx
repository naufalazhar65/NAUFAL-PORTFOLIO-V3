"use client";

import ReportsCard from "./ReportsCard";
import DesktopFrame from "./preview/desktop/DesktopFrame";
import { HeroProvider } from "./preview/HeroContext";

export default function PreviewStackMobile() {
  return (
    <HeroProvider>
      <div
        className="
          relative
          mx-auto

          h-[420px]
          w-[360px]
        "
      >
        {/* Back Layer */}

        <div
          className="
            absolute

            left-0
            top-14

            origin-top-left

            scale-[0.42]

            -rotate-4

            opacity-45

            z-10
          "
        >
          <ReportsCard />
        </div>

        {/* Front Layer */}

        <div
          className="
absolute

left-12
top-0

origin-top-left

scale-[0.37]

z-20
"
        >
          <DesktopFrame />
        </div>
      </div>
    </HeroProvider>
  );
}