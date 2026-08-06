"use client";

import { motion } from "framer-motion";

export default function PhoneFrame({
  children,
  variant = "ios",
}) {
  const isIOS = variant === "ios";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="flex justify-center"
    >
      <div className="relative">
        {/* Ambient Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -z-20
            h-80
            w-80
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#16f2b3]/20
            blur-[120px]
          "
        />

        {/* Reflection */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            -z-10
            rounded-[46px]
            bg-gradient-to-br
            from-white/10
            via-transparent
            to-transparent
          "
        />

        {/* Phone */}

        <div
          className="
            relative
            h-[720px]
            w-[340px]
            overflow-hidden
            rounded-[42px]
            border
            border-white/10
            bg-[#080b12]
            shadow-[0_40px_120px_rgba(0,0,0,.65)]
          "
        >
          {/* Metal Frame */}

          <div
            className="
              absolute
              inset-[2px]
              rounded-[40px]
              border
              border-white/5
            "
          />

          {/* Inner Highlight */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[42px]
              ring-1
              ring-white/5
            "
          />

          {/* Top Hardware */}

          {isIOS ? (
            <div
              className="
                absolute
                left-1/2
                top-4
                z-30
                h-7
                w-32
                -translate-x-1/2
                rounded-full
                bg-black
                shadow-inner
              "
            />
          ) : (
            <>
              {/* Camera */}

              <div
                className="
                  absolute
                  left-1/2
                  top-5
                  z-30
                  h-4
                  w-4
                  -translate-x-1/2
                  rounded-full
                  bg-black
                  ring-2
                  ring-[#1a1a1a]
                "
              />

              {/* Speaker */}

              <div
                className="
                  absolute
                  left-1/2
                  top-3
                  z-20
                  h-1
                  w-14
                  -translate-x-1/2
                  rounded-full
                  bg-[#232323]
                "
              />
            </>
          )}

          {/* Screen */}

          <div
            className="
              relative
              flex
              h-full
              flex-col
              overflow-hidden
              rounded-[40px]
              bg-[#0d1117]
              pt-12
            "
          >
            {children}
          </div>

          {/* Bottom Reflection */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-24
              bg-gradient-to-t
              from-white/[0.02]
              to-transparent
            "
          />
        </div>
      </div>
    </motion.div>
  );
}