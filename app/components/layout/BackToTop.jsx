"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", toggleVisible, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          aria-label="Back to top"
          className="
            fixed
            bottom-6
            right-6
            z-[9999]
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            text-white
            shadow-[0_8px_32px_rgba(0,0,0,0.35)]
            transition-all
            duration-200
            hover:border-[#16f2b3]/40
            hover:bg-[#16f2b3]/10
            hover:scale-110
            hover:-translate-y-1
            hover:shadow-[0_0_25px_rgba(22,242,179,0.25)]
            sm:bottom-8
            sm:right-8
            sm:h-14
            sm:w-14
          "
        >
          <FiArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}