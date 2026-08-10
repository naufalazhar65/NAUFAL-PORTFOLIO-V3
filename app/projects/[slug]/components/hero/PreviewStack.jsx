"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import AppleFrame from "./AppleFrame";

const heroImages = [
  "/projects/hero-front-01.webp",
  "/projects/hero-front-02.webp",
  "/projects/hero-front-03.webp",
  "/projects/hero-front-04.webp",
];

export default function PreviewStack() {
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
            shadow-[0_30px_80px_rgba(0,0,0,0.55)]
          "
        >
          <div className="relative overflow-hidden">
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
          {/* ========================= */}
          {/* CAROUSEL */}
          {/* ========================= */}

          <div className="relative overflow-hidden">
            {/* Image Layer */}

            <div className="relative">
              {heroImages.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`FlowTest Studio screenshot ${index + 1}`}
                  width={2048}
                  height={1483}
                  priority={index === 0}
                  className={`
                    block
                    h-auto
                    w-full
                    transition-opacity
                    duration-700
                    ease-in-out

                    ${index === 0 ? "relative" : "absolute inset-0"}

                    ${currentIndex === index ? "opacity-100" : "opacity-0"}
                  `}
                />
              ))}
            </div>

            {/* ========================= */}
            {/* CINEMATIC OVERLAY */}
            {/* ========================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-10
                bg-gradient-to-br
                from-white/[0.03]
                via-transparent
                to-black/20
              "
            />

            {/* ========================= */}
            {/* EDGE HIGHLIGHT */}
            {/* ========================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-20
                border
                border-white/[0.06]
              "
            />

            {/* ========================= */}
            {/* CAROUSEL INDICATORS */}
            {/* ========================= */}

            <div
              className="
                absolute
                bottom-4
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
