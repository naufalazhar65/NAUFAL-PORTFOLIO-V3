"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  "/projects/hero-front-01.webp",
  "/projects/hero-front-02.webp",
  "/projects/hero-front-03.webp",
  "/projects/hero-front-04.webp",
];

export default function PreviewStackMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        relative
        mx-auto
        h-[430px]
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
          w-[340px]
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
          bottom-[55px]
          left-1/2
          z-0
          h-[45px]
          w-[270px]
          -translate-x-1/2
          rotate-[3deg]
          rounded-full
          bg-black/35
          blur-[35px]
        "
      />

      {/* ========================================= */}
      {/* 3D PERSPECTIVE STAGE */}
      {/* ========================================= */}

      <div
        className="
          absolute
          left-1/2
          top-[18px]
          z-10
          w-[740px]
          max-w-[90vw]
          -translate-x-1/2
          [perspective:900px]
        "
      >
        {/* ======================================= */}
        {/* SCREENSHOT */}
        {/* ======================================= */}

        <div
          className="
            relative
            transform-gpu
            overflow-hidden
            rounded-[16px]
            border
            border-white/[0.14]
            bg-[#0d1117]

            drop-shadow-[0_30px_30px_rgba(0,0,0,0.38)]
            drop-shadow-[0_10px_16px_rgba(0,0,0,0.25)]

          "
        >
          {/* ===================================== */}
          {/* CAROUSEL IMAGE */}
          {/* ===================================== */}

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
              to-black/15
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

          {/* ===================================== */}
          {/* CAROUSEL INDICATORS */}
          {/* ===================================== */}

          <div
            className="
              absolute
              bottom-3
              left-1/2
              z-30
              flex
              -translate-x-1/2
              items-center
              gap-1.5
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
                  duration-300
                 
                `}
              />
            ))}
          </div>
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
          h-[80px]
          bg-gradient-to-t
          from-[#0b1020]
          to-transparent
        "
      />
    </div>
  );
}
