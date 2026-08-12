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

  if (!project) return null;

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={onClose}
          className="fixed inset-0 z-[99999]"
        >
          {/* Overlay */}

          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Container */}

          <div className="fixed inset-0 flex items-center justify-center p-5">
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
                relative
                w-full
                max-w-2xl
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0d1117]
                shadow-[0_30px_90px_rgba(0,0,0,0.55)]
              "
            >
              {/* Title bar */}

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

                <span className="text-[11px] font-medium text-gray-500">
                  {project.slug || project.name}
                </span>

                <button
                  onClick={onClose}
                  className="
                    absolute
                    right-3
                    rounded-md
                    p-1.5
                    text-gray-500
                    transition-colors
                    duration-200
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  <FiX size={15} />
                </button>
              </div>

              {/* Content */}

              <div className="p-8">
                <Dialog.Title
                  className="
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  {project.name}
                </Dialog.Title>

                <p
                  className="
                    mt-4
                    text-[15px]
                    leading-7
                    text-gray-500
                  "
                >
                  {project.description}
                </p>

                {project.slug && (
                  <div className="mt-7">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#16f2b3]
                        px-5
                        py-2.5
                        text-sm
                        font-medium
                        text-black
                        transition-transform
                        duration-200
                        hover:scale-[1.03]
                      "
                    >
                      View Case Study

                      <FiArrowUpRight
                        className="
                          text-[13px]
                          transition-transform
                          duration-200
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </Link>
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