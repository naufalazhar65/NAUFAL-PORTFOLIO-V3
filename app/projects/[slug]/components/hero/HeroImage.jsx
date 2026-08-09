"use client";

import Image from "next/image";

import PreviewStack from "./PreviewStack";
import PreviewStackMobile from "./PreviewStackMobile";

export default function HeroImage({ image, preview = false }) {
  return (
    <div
      className="
        relative
        flex
        w-full
        items-center
        justify-center
      "
    >
      {preview ? (
        <>
          {/* Desktop */}

          <div
            className="
            lg:translate-x-12
            
              hidden
              w-full
              justify-center
              lg:flex
            "
          >
            <PreviewStack />
          </div>

          {/* Mobile */}

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
      ) : (
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
      )}
    </div>
  );
}