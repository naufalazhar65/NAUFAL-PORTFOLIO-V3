"use client";

import Image from "next/image";

import AppleFrame from "./AppleFrame";

export default function PreviewStackMobile() {
  return (
    <div
      className="
        relative
        mx-auto

        h-[440px]
        w-[360px]

        overflow-visible
      "
    >
      {/* ========================= */}
      {/* AMBIENT GLOW */}
      {/* ========================= */}

      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-1/2

          z-0

          h-[260px]
          w-[300px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#16f2b3]/5

          blur-[90px]
        "
      />

      {/* ========================= */}
      {/* BACK WINDOW */}
      {/* Element Inspector */}
      {/* ========================= */}

      <div
        className="
          absolute

          left-[-5px]
          top-[70px]

          z-10

          w-[155px]

          -rotate-[5deg]

          opacity-55

          transition-all
          duration-700
          ease-out
        "
      >
        <Image
            src="/projects/hero-back.png"
            alt="FlowTest Studio Element Inspector"
            width={850}
            height={1786}
            className="
              block
              h-auto
              w-full
            "
          />
          <div
            className="
              pointer-events-none

              absolute
              inset-0

              bg-[#080b12]/25
            "
          />
          
      </div>

      {/* ========================= */}
      {/* FRONT WINDOW */}
      {/* Workflow */}
      {/* ========================= */}

      <div
        className="
          absolute

          left-[70px]
          top-[20px]

          z-20

          w-[300px]

          rotate-[1deg]

          transition-all
          duration-700
          ease-out
        "
      >
        <AppleFrame
          title="FlowTest Studio"
          className="
            rounded-[12px]

            border-white/[0.12]

            shadow-[0_25px_70px_rgba(0,0,0,.65)]
          "
        >
          <Image
            src="/projects/hero-front.png"
            alt="FlowTest Studio Workflow Canvas"
            width={2048}
            height={1483}
            className="
              block
              h-auto
              w-full
            "
          />
        </AppleFrame>
      </div>

      {/* ========================= */}
      {/* BOTTOM FADE */}
      {/* ========================= */}

      <div
        className="
          pointer-events-none

          absolute
          inset-x-0
          bottom-0

          z-30

          h-[100px]

          
        "
      />
    </div>
  );
}