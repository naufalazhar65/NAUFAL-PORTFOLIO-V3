"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import FlowTestStudioPreview from "@/app/components/flowtest-preview/FlowTestStudioPreview";

export default function LiveDemo({ project }) {
  if (project.slug !== "flowtest-studio") {
    return null;
  }

  return (
    <section
      id="live-demo"
      className="
        relative
        border-b
        border-white/[0.08]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.015]
          blur-[150px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Header */}
        <div className="border-b border-white/[0.08] pb-8 lg:pb-10">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#16f2b3]">
              02
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-600">
              Live Product
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-[clamp(48px,7vw,96px)] font-semibold leading-[0.93] tracking-[-0.07em] text-white">
                Experience
                <br />
                <span className="text-gray-600">FlowTest Studio.</span>
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-7 text-gray-500">
              Explore the workflow builder, execution engine, and testing
              interface through the interactive product demo.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 py-8">
          <Link
            href="/flowtest"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Launch FlowTest Studio full demo"
            className="inline-flex min-h-11 items-center gap-3 rounded-full bg-white px-5 text-sm font-medium text-black transition hover:bg-gray-200"
          >
            Launch Full Demo
            <FiArrowUpRight size={14} />
          </Link>

          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View FlowTest Studio source code"
            className="inline-flex min-h-11 items-center gap-3 rounded-full border border-white/[0.1] px-5 text-sm font-medium text-white transition hover:border-white/[0.2] hover:bg-white/[0.03]"
          >
            View Source
            <FiArrowUpRight size={14} />
          </Link>
        </div>

        {/* Demo preview konsisten */}
        <div className="mt-2">
          <FlowTestStudioPreview hideFrame={false} maxScale={1.4} />
        </div>
      </div>
    </section>
  );
}
