"use client";

import Image from "next/image";

export default function PreviewStackMobile() {
  return (
    <div
      className="
        relative
        mx-auto
        h-[390px]
        w-full
        max-w-[390px]
        overflow-visible
      "
    >
      {/* ========================================= */}
      {/* AMBIENT GLOW */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[45%]
          z-0
          h-[280px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#16f2b3]/[0.045]
          blur-[90px]
        "
      />

      {/* ========================================= */}
      {/* SOFT CONTACT SHADOW */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[45px]
          left-1/2
          z-0
          h-[45px]
          w-[280px]
          -translate-x-1/2
          rotate-[2deg]
          rounded-full
          bg-black/40
          blur-[35px]
        "
      />

      {/* ========================================= */}
      {/* SCREENSHOT */}
      {/* ========================================= */}

      <div
        className="
          absolute
          left-[40px]
          top-[20px]
          z-10
          w-[2040px]
          max-w-[calc(100vw-40px)]
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[18px]
            border
            border-white/[0.08]
            bg-[#0d1117]
            shadow-[0_30px_70px_rgba(0,0,0,0.5)]
          "
        >
          <Image
            src="/projects/hero-front-01.webp"
            alt="FlowTest Studio Workflow Canvas"
            width={2048}
            height={1483}
            priority
            draggable={false}
            className="
              block
              h-auto
              w-full
              select-none
            "
          />

          {/* ===================================== */}
          {/* CINEMATIC OVERLAY */}
          {/* ===================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-white/[0.025]
              via-transparent
              to-black/20
            "
          />

          {/* ===================================== */}
          {/* EDGE HIGHLIGHT */}
          {/* ===================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[18px]
              border
              border-white/[0.05]
            "
          />
        </div>
      </div>

      {/* ========================================= */}
      {/* BOTTOM FADE */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-[70px]
        "
      />
    </div>
  );
}