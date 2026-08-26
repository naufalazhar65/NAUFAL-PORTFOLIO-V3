"use client";

import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import Link from "next/link";

export default function ProjectModal({
  open,
  onClose,
  project,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) {
    return null;
  }

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={onClose}
          className="fixed inset-0 z-[99999]"
        >
          {/* =========================
              OVERLAY
          ========================= */}

          <motion.div
            className="
              fixed
              inset-0
              bg-black/70
              backdrop-blur-md
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          />

          {/* =========================
              AMBIENT GLOW
          ========================= */}

          <div
            className="
              pointer-events-none
              fixed
              left-1/2
              top-1/2
              h-[420px]
              w-[620px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.025]
              blur-[120px]
            "
          />

          {/* =========================
              CONTAINER
          ========================= */}

          <div
            className="
              fixed
              inset-0
              flex
              items-center
              justify-center
              p-5
              sm:p-6
            "
          >
            <Dialog.Panel
              as={motion.div}
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 24,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 16,
              }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                group
                relative
                w-full
                max-w-2xl
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.09]
                bg-[#0d1117]
                shadow-[0_30px_90px_rgba(0,0,0,.55),0_0_70px_rgba(255,255,255,.025)]
              "
            >
              {/* Card Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-48
                  w-48
                  rounded-full
                  bg-white/[0.035]
                  blur-3xl
                "
              />

              {/* =========================
                  TITLE BAR
              ========================= */}

              <div
                className="
                  relative
                  flex
                  h-11
                  items-center
                  justify-center
                  border-b
                  border-white/[0.06]
                  bg-white/[0.02]
                  px-4
                "
              >
                <div className="absolute left-4 flex items-center gap-[6px]">
                  <span className="h-[10px] w-[10px] rounded-full bg-[#FF5F57]" />
                  <span className="h-[10px] w-[10px] rounded-full bg-[#FEBC2E]" />
                  <span className="h-[10px] w-[10px] rounded-full bg-[#28C840]" />
                </div>

                <span className="max-w-[220px] truncate text-[11px] font-medium text-gray-400">
                  {project.slug || project.name}
                </span>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close project modal"
                  className="
                    absolute
                    right-3
                    rounded-md
                    p-1.5
                    text-gray-400
                    transition-all
                    duration-200
                    hover:bg-white/[0.06]
                    hover:text-white
                    hover:rotate-90
                  "
                >
                  <FiX size={15} />
                </button>
              </div>

              {/* =========================
                  CONTENT
              ========================= */}

              <div className="relative z-10 p-8 sm:p-10">
                <Dialog.Title
                  className="
                    text-2xl
                    font-semibold
                    tracking-[-0.035em]
                    text-white
                    sm:text-3xl
                  "
                >
                  {project.name}
                </Dialog.Title>

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-[15px]
                    leading-7
                    text-gray-300
                  "
                >
                  {project.description}
                </p>

                {/* Divider */}

                <div className="mt-8 h-px bg-white/[0.08]" />

                {/* Action */}

                {project.slug && (
                  <div className="mt-8">
                    <motion.div
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <Link
                        href={`/projects/${project.slug}`}
                        className="
                          group
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          bg-white
                          px-5
                          py-2.5
                          text-sm
                          font-medium
                          text-black
                          shadow-[0_12px_35px_rgba(0,0,0,.25)]
                          transition-all
                          duration-300
                          hover:bg-gray-200
                          hover:shadow-[0_15px_40px_rgba(255,255,255,.08)]
                        "
                      >
                        View Case Study

                        <FiArrowUpRight
                          size={13}
                          className="
                            transition-transform
                            duration-200
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                          "
                        />
                      </Link>
                    </motion.div>
                  </div>
                )}
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}