"use client";

import ReportsCard from "./ReportsCard";
import DesktopFrame from "./preview/desktop/DesktopFrame";
import { HeroProvider } from "./preview/HeroContext";

export default function PreviewStack() {
  return (
    <HeroProvider>
      <div
        className="
          relative
          h-[620px]
          w-[1100px]
        "
      >
        {/* Back Layer */}

        <div
          className="
            absolute

            left-[-60px]
            top-3

            z-10

            -rotate-4
            scale-[0.72]

            opacity-40
            blur-[1px]
          "
        >
          <ReportsCard />
        </div>

        {/* Front Layer */}

        <div
          className="
            absolute

            left-[180px]
            top-0

            z-20
          "
        >
          <DesktopFrame variant="workflow" shadow />
        </div>
      </div>
    </HeroProvider>
  );
}
