"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function NextPage({
  href,
  number,
  title,
  description,
}) {
  return (
    <section className="mt-32 mb-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Link
            href={href}
            className="
              group
              flex
              items-center
              justify-between
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
              px-8
              py-8
              transition-all
              duration-500
              hover:border-[#16f2b3]/40
              hover:bg-white/[0.04]
            "
          >
            {/* Left */}

            <div>
              <p className="text-sm tracking-[0.35em] text-[#16f2b3] uppercase">
                Next Page
              </p>

              <div className="mt-3 flex items-end gap-4">
                <span className="text-5xl font-black text-white/15">
                  {number}
                </span>

                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {title}
                  </h2>

                  <p className="mt-2 text-gray-400">
                    {description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}

            <motion.div
              whileHover={{
                x: 8,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-[#16f2b3]/30
                text-[#16f2b3]
              "
            >
              <FiArrowRight size={28} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}