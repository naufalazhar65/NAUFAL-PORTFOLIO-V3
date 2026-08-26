"use client";

import Image from "next/image";

export default function PreviewStackMobile() {
  return (
    <div
      className="
        relative
        mx-auto
        w-full
        overflow-hidden
        py-4
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
          top-1/2
          z-0
          h-[220px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#16f2b3]/[0.045]
          blur-[80px]
        "
      />

      {/* ========================================= */}
      {/* SOFT CONTACT SHADOW */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-6
          left-1/2
          z-0
          h-[32px]
          w-[75%]
          -translate-x-1/2
          rounded-full
          bg-black/40
          blur-[28px]
        "
      />

      {/* ========================================= */}
      {/* SCREENSHOT */}
      {/* ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[360px]
          overflow-hidden
          rounded-[16px]
          border
          border-white/[0.08]
          bg-[#0d1117]
          shadow-[0_25px_60px_rgba(0,0,0,0.45)]
        "
      >
        <Image
          src="/projects/hero-front-01.webp"
          alt="FlowTest Studio Workflow Canvas"
          width={2048}
          height={1483}
          priority
          draggable={false}
          sizes="(max-width: 640px) 100vw, 360px"
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
            rounded-[16px]
            border
            border-white/[0.05]
          "
        />
      </div>
    </div>
  );
}
