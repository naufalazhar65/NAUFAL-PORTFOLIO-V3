"use client";

import Image from "next/image";

import AppleFrame from "./AppleFrame";

export default function PreviewStack() {
  return (
    <div
      className="
        relative

        h-[650px]
        w-[850px]

        max-w-none

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
          left-[55%]
          top-[48%]

          z-0

          h-[460px]
          w-[640px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full


          blur-[140px]
        "
      />

      {/* ========================= */}
      {/* BACK WINDOW */}
      {/* ========================= */}

      <div
        className="
          absolute

          left-[-20px]
          top-[90px]

          z-10

          w-[310px]

          -rotate-[3deg]

          opacity-45

          transition-all
          duration-700
          ease-out
        "
      >
        <AppleFrame
          title="Element Inspector"
          className="
            rounded-[16px]

            shadow-[0_30px_90px_rgba(0,0,0,0.55)]
          "
        >
          <Image
            src="/projects/hero-back.png"
            alt="FlowTest Studio Element Inspector"
            width={850}
            height={1786}
            priority
            className="
              block
              h-auto
              w-full
            "
          />

          {/* Dark Overlay */}

          <div
            className="
              pointer-events-none

              absolute
              inset-0

              bg-[#080b12]/25
            "
          />
        </AppleFrame>
      </div>

      {/* ========================= */}
      {/* FRONT WINDOW */}
      {/* ========================= */}

      <div
        className="
          absolute

          left-[150px]
          top-[20px]

          z-20

          w-[680px]

          rotate-[1deg]

          transition-all
          duration-700
          ease-out
        "
      >
        <AppleFrame
          title="FlowTest Studio"
          className="
            rounded-[20px]

            shadow-[0_45px_130px_rgba(0,0,0,0.7)]
          "
        >
          <Image
            src="/projects/hero-front.png"
            alt="FlowTest Studio Workflow Canvas"
            width={2048}
            height={1483}
            priority
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

          h-[160px]

          
        "
      />
    </div>
  );
}
