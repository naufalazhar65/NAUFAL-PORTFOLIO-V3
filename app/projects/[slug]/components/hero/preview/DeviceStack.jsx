"use client";

import { motion } from "framer-motion";

import AndroidPreview from "./devices/AndroidPreview";
import IOSPreview from "./devices/IOSPreview";

export default function DeviceStack() {
  return (
    <section className="relative py-16">
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#16f2b3]/5
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            h-[320px]
            w-[320px]
            rounded-full
            bg-sky-500/5
            blur-[120px]
          "
        />
      </div>

      {/* Devices */}

      <div
        className="
          relative
          z-10
          flex
          items-end
          justify-center
          gap-24
        "
      >
        {/* Android */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
            rotate: -6,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: -6,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: {
              duration: 0.8,
            },
            x: {
              duration: 0.8,
            },
            y: {
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col items-center"
        >
          <AndroidPreview />

          <span
            className="
              mt-6
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-[#16f2b3]
            "
          >
            Android
          </span>
        </motion.div>

        {/* Center Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-24
            h-5
            w-5
            rounded-full
            bg-[#16f2b3]
            blur-[2px]
          "
        />

        {/* iPhone */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            rotate: 6,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 6,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: {
              duration: 0.8,
              delay: 0.15,
            },
            x: {
              duration: 0.8,
              delay: 0.15,
            },
            y: {
              repeat: Infinity,
              duration: 5.5,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col items-center"
        >
          <IOSPreview />

          <span
            className="
              mt-6
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-sky-400
            "
          >
            iOS
          </span>
        </motion.div>
      </div>
    </section>
  );
}
