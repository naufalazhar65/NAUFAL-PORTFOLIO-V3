"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";

import { personalData } from "@/utils/data/personal-data";

import { fadeUp } from "@/app/lib/motion";

export default function AboutImage() {
  return (
    <motion.div
      variants={fadeUp}
      className="
        order-1
        lg:order-2
      "
    >
      <div
        className="
          relative
          max-w-[520px]
          lg:ml-auto
        "
      >
        {/* =========================
            IMAGE
        ========================= */}

        <div
          className="
            relative
            overflow-hidden
            border
            border-white/[0.08]
            bg-[#050505]
          "
        >
          <Image
            src={personalData.profile}
            alt="Naufal Azhar"
            width={640}
            height={640}
            priority
            className="
              block
              aspect-square
              w-full
              object-cover
              grayscale-[10%]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/20
              via-transparent
              to-transparent
            "
          />
        </div>

        {/* =========================
            STATUS
        ========================= */}

        <div
          className="
            grid
            border-b
            border-white/[0.08]
            sm:grid-cols-2
          "
        >
          <div
            className="
              border-b
              border-white/[0.08]
              py-5
              sm:border-b-0
              sm:border-r
              sm:pr-6
            "
          >
            <div className="flex items-center gap-2">
              <FiCheckCircle
                size={14}
                className="text-[#16f2b3]"
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-gray-400
                "
              >
                Current Status
              </span>
            </div>

            <p className="mt-3 text-sm font-medium text-white">
              Open to opportunities
            </p>
          </div>

          <div className="py-5 sm:pl-6">
            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-gray-400
              "
            >
              Based In
            </span>

            <p
              className="
                mt-3
                text-sm
                font-medium
                text-gray-300
              "
            >
              {personalData.address}
            </p>
          </div>
        </div>

        {/* =========================
            PERSONAL NOTE
        ========================= */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-6
            border-b
            border-white/[0.08]
            py-5
          "
        >
          <p
            className="
              max-w-sm
              text-[11px]
              leading-6
              text-gray-300
            "
          >
            Currently building FlowTest Studio — a visual mobile test IDE
            that brings device execution, logs, and screenshots into one view.
          </p>

          <span
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              border
              border-white/[0.1]
              text-gray-500
            "
            aria-hidden="true"
          >
            <FiArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}