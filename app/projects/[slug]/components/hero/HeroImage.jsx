"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import PreviewStackMobile from "./PreviewStackMobile";

const heroImages = [
  "/projects/hero-front-01.webp",
  "/projects/hero-front-02.webp",
  "/projects/hero-front-03.webp",
  "/projects/hero-front-04.webp",
];

export default function HeroImage({ image, preview = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!preview) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [preview]);

  /* ================================================= */
  /* NORMAL PROJECT IMAGE */
  /* ================================================= */

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
      {/* ================================================= */}
      {/* DESKTOP */}
      {/* ================================================= */}

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
        {/* ============================================= */}
        {/* AMBIENT GLOW */}
        {/* ============================================= */}

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

        {/* ============================================= */}
        {/* SOFT CONTACT SHADOW */}
        {/* ============================================= */}

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

        {/* ============================================= */}
        {/* 3D PERSPECTIVE STAGE */}
        {/* ============================================= */}

        <div
          className="
            absolute
            right-[-55px]
            top-[60px]
            z-10
            w-[740px]
            [perspective:1200px]
          "
        >
          {/* =========================================== */}
          {/* SCREENSHOT */}
          {/* =========================================== */}

          <div
            className="
              relative
              transform-gpu
              overflow-hidden
              rounded-[20px]
              border
              border-white/[0.14]
              bg-[#0d1117]

              drop-shadow-[0_35px_35px_rgba(0,0,0,0.38)]
              drop-shadow-[0_12px_18px_rgba(0,0,0,0.28)]

              [transform:rotateX(5deg)_rotateY(-32deg)_rotateZ(1deg)]
            "
          >
            {/* ========================================= */}
            {/* IMAGE */}
            {/* ========================================= */}

            <Image
              key={heroImages[currentIndex]}
              src={heroImages[currentIndex]}
              alt={`FlowTest Studio screenshot ${currentIndex + 1}`}
              width={2048}
              height={1483}
              priority={currentIndex === 0}
              className="
                block
                h-auto
                w-full
                brightness-[1.08]
  contrast-[1.03]
                transition-opacity
                duration-300
              "
            />

            {/* ========================================= */}
            {/* CINEMATIC OVERLAY */}
            {/* ========================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-white/[0.035]
                via-transparent
                to-black/20
              "
            />

            {/* ========================================= */}
            {/* EDGE HIGHLIGHT */}
            {/* ========================================= */}

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

          {/* =========================================== */}
          {/* CAROUSEL INDICATOR */}
          {/* =========================================== */}

          <div
            className="
              absolute
              bottom-[-35px]
              left-1/2
              z-30
              flex
              -translate-x-1/2
              items-center
              gap-2
            "
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show screenshot ${index + 1}`}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-200
                  
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* MOBILE */}
      {/* ================================================= */}

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
