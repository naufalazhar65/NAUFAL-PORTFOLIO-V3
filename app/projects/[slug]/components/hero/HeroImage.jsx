"use client";

import Image from "next/image";

import PreviewStack from "./PreviewStack";

export default function HeroImage({ image, preview = false }) {
  return (
    <div className="relative">
      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -z-10
          hidden
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#16f2b3]10
          blur-[120px]
          lg:block
        "
      />

      {/* Preview */}

      {preview ? (
        <div className="hidden lg:block">
          <PreviewStack />
        </div>
      ) : (
        <div
          className="
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
            className="h-auto w-full"
          />
        </div>
      )}
    </div>
  );
}
