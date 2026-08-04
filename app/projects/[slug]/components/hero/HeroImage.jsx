"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ProductPreview from "./preview/ProductPreview";
import PhonePreview from "./preview/PhonePreview";

export default function HeroImage({
  image,
  preview = false,
}) {
  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-sm

        sm:max-w-md

        lg:max-w-none
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -z-10

          h-72
          w-72

          -translate-x-1/2
          -translate-y-1/2

          rounded-full
          bg-[#16f2b3]/20
          blur-[90px]

          sm:h-80
          sm:w-80

          lg:h-[450px]
          lg:w-[450px]
          lg:blur-[120px]
        "
      />

      {/* Background Grid */}

      <div
        className="
          absolute
          inset-0
          -z-10

          rounded-[28px]
          border
          border-white/5

          bg-[radial-gradient(circle_at_center,rgba(255,255,255,.03)_1px,transparent_1px)]
          [background-size:18px_18px]

          lg:rounded-[40px]
          lg:[background-size:22px_22px]
        "
      />

      {/* Preview */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {preview ? (
          <>
            {/* Desktop */}

            <div className="hidden lg:block">
              <div
                className="
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-[#0d1117]
                  shadow-[0_30px_100px_rgba(0,0,0,.45)]
                "
              >
                <ProductPreview />
              </div>
            </div>

            {/* Mobile */}

            <div className="block lg:hidden">
              <PhonePreview />
            </div>
          </>
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
      </motion.div>

      {/* Reflection */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          hidden
          lg:block

          rounded-[32px]

          bg-gradient-to-tr
          from-transparent
          via-white/5
          to-transparent
        "
      />
    </div>
  );
} 