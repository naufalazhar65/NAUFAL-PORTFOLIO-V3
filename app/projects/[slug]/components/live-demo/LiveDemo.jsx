"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { DemoProvider } from "./shared/DemoProvider";
import DemoLayout from "./desktop/DemoLayout";
import MobileLiveDemo from "./mobile/MobileLiveDemo";
import BrowserFrame from "./BrowserFrame";

export default function LiveDemo({ project }) {
  if (project.slug !== "flowtest-studio") {
    return null;
  }

  return (
    <section id="live-demo" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

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
            duration: 0.7,
          }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-[5px] text-[#16f2b3]">
            Live Interactive Demo
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            Experience FlowTest Studio
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
            Explore a simplified version of FlowTest Studio directly inside the
            browser. Build automation workflows, inspect nodes, and simulate
            execution without leaving this page.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/flowtest"
              target="_blank"
              className="
                rounded-2xl
                bg-[#16f2b3]
                px-6
                py-3
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              Launch Full Demo
            </Link>

            <Link
              href={project.github}
              target="_blank"
              className="
                rounded-2xl
                border
                border-white/10
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-white/5
              "
            >
              View Source Code
            </Link>
          </div>
        </motion.div>

        {/* Demo */}

        <BrowserFrame>
          <DemoProvider>
            {/* Desktop */}
            <div className="hidden lg:block">
              <DemoLayout />
            </div>

            {/* Mobile */}
            <div className="lg:hidden">
              <MobileLiveDemo />
            </div>
          </DemoProvider>
        </BrowserFrame>
      </div>
    </section>
  );
}
