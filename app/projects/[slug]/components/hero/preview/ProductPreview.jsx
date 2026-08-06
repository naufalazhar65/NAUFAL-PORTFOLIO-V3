"use client";

import { motion } from "framer-motion";

import { HeroProvider } from "./HeroContext";

import WorkflowCanvas from "./WorkflowCanvas";
import DeviceStack from "./DeviceStack";
import Console from "./Console";

export default function ProductPreview() {
  return (
    <HeroProvider>
      <PreviewContent />
    </HeroProvider>
  );
}

function PreviewContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-[#0b1220]
        shadow-[0_30px_120px_rgba(0,0,0,.45)]
      "
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        {/* Main Glow */}

        <div
          className="
            absolute
            left-1/2
            top-10
            h-80
            w-80
            -translate-x-1/2
            rounded-full
            bg-[#16f2b3]/10
            blur-[120px]
          "
        />

        {/* Secondary Glow */}

        <div
          className="
            absolute
            -right-20
            bottom-0
            h-72
            w-72
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,.04)_1px,transparent_1px)]
            [background-size:22px_22px]
            opacity-30
          "
        />
      </div>

      {/* Content */}

      <div className="relative z-10">
        {/* Header */}

        <div className="px-10 pt-10 text-center">
          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
          >
            <span
              className="
                inline-flex
                rounded-full
                border
                border-[#16f2b3]/20
                bg-[#16f2b3]/10
                px-4
                py-1
                text-[11px]
                font-semibold
                uppercase
                tracking-[3px]
                text-[#16f2b3]
              "
            >
              Visual Mobile Automation Platform
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                tracking-tight
                text-white
              "
            >
              FlowTest Studio
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-gray-400
              "
            >
              Build, execute and visualize automation workflows across Android
              and iOS using a modern visual editor.
            </p>
          </motion.div>
        </div>

        {/* Workflow */}

        <section className="px-10 pt-12">
          <WorkflowCanvas />
        </section>

        {/* Devices */}

        <section className="px-10 pt-12">
          <DeviceStack />
        </section>

        {/* Console */}

        <section className="px-10 pb-10 pt-12">
          <Console />
        </section>
      </div>
    </motion.div>
  );
}