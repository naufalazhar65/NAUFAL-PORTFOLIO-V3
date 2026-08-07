"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function TouchRipple({ active = false }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.span
          initial={{
            scale: 0,
            opacity: 0.45,
          }}
          animate={{
            scale: 3,
            opacity: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-xl
            bg-white
          "
        />
      )}
    </AnimatePresence>
  );
}
