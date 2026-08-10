"use client";

import Image from "next/image";

export default function PreviewStack() {
  return (
    <div
      className="
        relative
        h-[620px]
        w-[850px]
        max-w-none
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
          left-[55%]
          top-[48%]
          z-0
          h-[460px]
          w-[640px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#16f2b3]/5
          blur-[140px]
        "
      />

      {/* ========================================= */}
      {/* SOFT CONTACT SHADOW */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[85px]
          left-[30%]
          z-0
          h-[80px]
          w-[560px]
          -rotate-[2deg]
          rounded-full
          bg-black/40
          blur-[55px]
        "
      />

      {/* ========================================= */}
      {/* BACK SCREENSHOT */}
      {/* ========================================= */}

      {/* <div
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
        <div
          className="
            overflow-hidden
            rounded-[16px]
            shadow-[0_30px_80px_rgba(0,0,0,0.55)]
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

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[#080b12]/15
            "
          />
        </div>
      </div> */}

      {/* ========================================= */}
      {/* FRONT SCREENSHOT */}
      {/* ========================================= */}

      <div
        className="
          absolute
          left-[125px]
          top-[20px]
          z-20
          w-[680px]
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[20px]
            border
            border-white/[0.08]
            bg-[#0d1117]
            shadow-[0_35px_90px_rgba(0,0,0,0.5)]
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
              rounded-[20px]
              border
              border-white/[0.06]
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
          z-30
          h-[100px]
        "
      />
    </div>
  );
}