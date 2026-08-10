"use client";

import Image from "next/image";

import AppleFrame from "./AppleFrame";

export default function PreviewStack() {
  return (
    <div
      className="
        relative
        h-[620px]
        w-[820px]
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
          left-[56%]
          top-[48%]
          z-0
          h-[440px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#16f2b3]/5
          blur-[140px]
        "
      />

      {/* ========================= */}
      {/* BACK WINDOW */}
      {/* ========================= */}

      <div
        className="
          absolute
          left-[5px]
          top-[105px]
          z-10
          w-[300px]
          -rotate-[4deg]
          opacity-50
        "
      >
        <AppleFrame
          title="Element Inspector"
          className="
            rounded-[16px]
            shadow-[0_25px_70px_rgba(0,0,0,0.4)]
          "
        >
          <div className="relative">
            <Image
              src="/projects/hero-back.png"
              alt="FlowTest Studio Element Inspector"
              width={850}
              height={1786}
              priority
              className="block h-auto w-full"
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[#080b12]/15
              "
            />
          </div>
        </AppleFrame>
      </div>

      {/* ========================= */}
      {/* FRONT WINDOW */}
      {/* ========================= */}

      <div
        className="
          absolute
          left-[125px]
          top-[20px]
          z-20
          w-[680px]
          rotate-[1deg]
        "
      >
        <AppleFrame
          title="FlowTest Studio"
          className="
            rounded-[20px]
            shadow-[0_35px_90px_rgba(0,0,0,0.5)]
          "
        >
          <Image
            src="/projects/hero-front.png"
            alt="FlowTest Studio Workflow Canvas"
            width={2048}
            height={1483}
            priority
            className="block h-auto w-full"
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