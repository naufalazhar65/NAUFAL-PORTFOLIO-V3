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
          rounded-[24px]
          border
          border-white/10
          bg-[#0d1117]
          shadow-[0_20px_60px_rgba(0,0,0,.45)]

          lg:rounded-[32px]
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
        {/* BACK SCREENSHOT */}
        {/* ===================================== */}

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
        </div> */}

        {/* ===================================== */}
        {/* FRONT SCREENSHOT */}
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
              className="
                block
                h-auto
                w-full
              "
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

            {/* Edge */}

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