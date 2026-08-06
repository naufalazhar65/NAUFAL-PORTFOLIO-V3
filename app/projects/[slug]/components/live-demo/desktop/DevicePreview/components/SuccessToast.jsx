"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function SuccessToast() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -16,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -16,
        scale: 0.95,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="
        absolute
        left-3
        right-3
        top-10
        z-50
      "
    >
      <div
        className="
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-[#16f2b3]/20
          bg-[#16f2b3]
          px-3
          py-2
          shadow-[0_8px_24px_rgba(22,242,179,.25)]
        "
      >
        <FiCheckCircle
          size={13}
          className="shrink-0 text-black"
        />

        <span
          className="
            truncate
            text-[10px]
            font-semibold
            text-black
          "
        >
          Login Successful
        </span>
      </div>
    </motion.div>
  );
}