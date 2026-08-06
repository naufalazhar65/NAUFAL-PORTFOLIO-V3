"use client";

import { motion } from "framer-motion";

export default function DashboardHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="mb-4"
    >
      <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
        Welcome Back
      </p>

      <h2 className="mt-1 text-lg font-bold text-white">Naufal</h2>
    </motion.div>
  );
}
