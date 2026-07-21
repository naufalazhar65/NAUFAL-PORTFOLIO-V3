"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 3600);
    };

    window.addEventListener("scroll", toggleVisible);

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
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: [0, -6, 0],
            scale: 1,
          }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{
            opacity: {
              duration: 0.35,
            },
            scale: {
              duration: 0.35,
            },
            y: {
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
          fixed
          bottom-8
          right-8
          z-[9999]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          text-white
          shadow-[0_8px_32px_rgba(0,0,0,0.35)]
          hover:border-[#16f2b3]/40
          hover:bg-[#16f2b3]/10
          hover:scale-110
hover:-translate-y-1
hover:shadow-[0_0_25px_rgba(22,242,179,0.25)]
          "
        >
          <motion.div
            whileHover={{
              y: -2,
              scale: 1.15,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <FiArrowUp size={22} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
