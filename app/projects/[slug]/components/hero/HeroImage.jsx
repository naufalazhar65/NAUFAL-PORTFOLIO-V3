"use client";

import Image from "next/image";

import PreviewStackMobile from "./PreviewStackMobile";

export default function HeroImage({ image, preview = false }) {
  /*
   * =========================================
   * NORMAL PROJECT IMAGE
   * =========================================
   */

  if (!preview) {
    return (
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.08]
          bg-[#0d1117]
          shadow-[0_20px_60px_rgba(0,0,0,.45)]

          lg:shadow-[0_30px_100px_rgba(0,0,0,.45)]
        "
      >
        <Image
          src={image}
          alt="Project Preview"
          priority
          width={1200}
          height={800}
          className="h-auto w-full"
        />
      </div>
    );
  }

  return (
    <>
      {/* ========================================= */}
      {/* DESKTOP */}
      {/* ========================================= */}

      <div
        className="
          relative
          hidden
          h-[620px]
          w-full
          overflow-visible
          lg:flex
        "
      >
        {/* ===================================== */}
        {/* AMBIENT GLOW */}
        {/* ===================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-30px]
            top-[150px]
            z-0
            h-[420px]
            w-[560px]
            rounded-full
            bg-[#16f2b3]/[0.045]
            blur-[130px]
          "
        />

        {/* ===================================== */}
        {/* CONTACT SHADOW */}
        {/* ===================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[105px]
            right-[35px]
            z-0
            h-[80px]
            w-[500px]
            rotate-[3deg]
            rounded-full
            bg-black/35
            blur-[55px]
          "
        />

        {/* ===================================== */}
        {/* FRONT SCREENSHOT — window chrome */}
        {/* ===================================== */}

        <div
          className="
            absolute
            left-[95px]
            top-[20px]
            z-20
            w-[880px]
          "
        >
          <div
            className="
              overflow-hidden
              rounded-[18px]
              border
              border-white/[0.08]
              bg-[#0d1117]
              shadow-[0_35px_90px_rgba(0,0,0,0.5)]
            "
          >
            {/* Title bar */}

            <div
              className="
                relative
                flex
                h-10
                items-center
                justify-center
                border-b
                border-white/[0.06]
                bg-white/[0.02]
                px-4
              "
            >
              <div className="absolute left-4 flex items-center gap-[6px]">
                <span className="h-[10px] w-[10px] rounded-full bg-[#FF5F57]" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#FEBC2E]" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#28C840]" />
              </div>

              <span className="text-[11px] font-medium text-gray-500">
                flowtest-studio
              </span>
            </div>

            {/* Screenshot */}

            <div className="relative">
              <Image
                src="/projects/hero.webp"
                alt="FlowTest Studio Workflow Canvas"
                width={3420}
                height={1870}
                loading="lazy"
                sizes="880px"
                className="block h-auto w-full"
              />

              {/* Cinematic overlay */}

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
            </div>
          </div>
        </div>

        {/* ===================================== */}
        {/* BOTTOM FADE */}
        {/* ===================================== */}

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

      {/* ========================================= */}
      {/* MOBILE */}
      {/* ========================================= */}

      <div
        className="
          flex
          w-full
          justify-center
          lg:hidden
        "
      >
        <PreviewStackMobile />
      </div>
    </>
  );
}