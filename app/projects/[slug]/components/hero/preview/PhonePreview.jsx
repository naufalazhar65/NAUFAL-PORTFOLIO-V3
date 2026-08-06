"use client";

import { HeroProvider } from "./HeroContext";

import AndroidPreview from "./devices/AndroidPreview";
import IOSPreview from "./devices/IOSPreview";

export default function PhonePreview() {
  return (
    <HeroProvider>
      {/* ========================= */}
      {/* Mobile */}
      {/* ========================= */}

      <div
        className="
          relative
          flex
          justify-center
          md:hidden
        "
      >
        {/* Glow */}

        <div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-[46%]
    -z-10
    h-56
    w-56
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-[#16f2b3]/8
    blur-[100px]
  "
/>

        {/* Phone */}

        <div className="relative">
          <AndroidPreview />
        </div>

        {/* Bottom Fade */}

        <div
  className="
    pointer-events-none
    absolute
    inset-x-0
    -bottom-8
    h-32

    bg-gradient-to-t
    via-[#0b1220]/20
    to-transparent
  "
/>
      </div>

      {/* ========================= */}
      {/* Tablet */}
      {/* ========================= */}

      <div
        className="
          relative
          hidden
          md:flex
          lg:hidden
          items-end
          justify-center
          gap-10
          py-8
        "
      >
        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            -z-10
            h-80
            w-80
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#16f2b3]/15
            blur-[120px]
          "
        />

        {/* Android */}

        <div className="-rotate-6">
          <AndroidPreview />
        </div>

        {/* iPhone */}

        <div className="rotate-6">
          <IOSPreview />
        </div>
      </div>
    </HeroProvider>
  );
}