"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function NextPage({
  href,
  number,
  title,
  description,
}) {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.08]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-1/2
          h-[260px]
          w-[420px]
          -translate-y-1/2
          rounded-full
          bg-white/[0.015]
          blur-[110px]
        "
      />

      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href={href}
            aria-label={`Next page: ${title}`}
            className="
              group
              relative
              block
              overflow-hidden
              transition-colors
              duration-300
            "
          >
            {/* Hover Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -inset-12
                rounded-[40%]
                bg-white/[0.02]
                blur-[70px]
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative z-10">
              {/* Meta */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#16f2b3]">
                    {number}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                    Next Page
                  </span>
                </div>

                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-gray-500 transition-colors duration-200 group-hover:text-gray-300">
                  Continue
                </span>
              </div>

              {/* Main */}
              <div className="mt-8 flex items-end justify-between gap-8 border-b border-white/[0.08] pb-8 transition-colors duration-300 group-hover:border-white/[0.14]">
                <div className="min-w-0">
                  <h2 className="max-w-4xl text-[clamp(42px,6vw,76px)] font-semibold leading-[0.94] tracking-[-0.07em] text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:text-gray-100">
                    {title}
                  </h2>
                  <p className="mt-4 max-w-xl text-[13px] leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {description}
                  </p>
                </div>

                <motion.span
                  whileHover={{ x: 5, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.005] text-gray-400 shadow-[0_10px_30px_rgba(0,0,0,.2)] transition-all duration-300 group-hover:border-white/[0.2] group-hover:bg-white/[0.025] group-hover:text-white group-hover:shadow-[0_14px_40px_rgba(255,255,255,.04)] sm:h-14 sm:w-14"
                >
                  <FiArrowUpRight size={20} />
                </motion.span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}