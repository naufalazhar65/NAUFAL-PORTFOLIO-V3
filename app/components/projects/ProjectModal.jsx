"use client";

import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";

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
        scale: 0.92,
        y: 50,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.92,
        y: 30,
      }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        w-full
        max-w-4xl
        rounded-3xl
        border
        border-white/10
        bg-[#11152c]
        p-8
        shadow-2xl
      "
    >
      {/* Close Button */}

      <button
        onClick={onClose}
        className="
          absolute
          right-5
          top-5
          rounded-full
          p-2
          text-gray-400
          transition
          hover:bg-white/10
          hover:text-white
        "
      >
        <FiX size={22} />
      </button>

      <Dialog.Title className="text-3xl font-bold text-white">
        {project.name}
      </Dialog.Title>

      <p className="mt-6 leading-8 text-gray-400">
        {project.description}
      </p>
    </Dialog.Panel>

  </div>
</Dialog>
      )}
    </AnimatePresence>
  );
}