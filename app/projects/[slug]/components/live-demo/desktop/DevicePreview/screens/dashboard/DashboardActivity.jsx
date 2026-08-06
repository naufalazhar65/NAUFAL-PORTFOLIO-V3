"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const items = [
  "Launch App",
  "Input Username",
  "Input Password",
  "Tap Login",
  "Dashboard",
];

export default function DashboardActivity() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.6,
      }}
      className="mt-4"
    >
      <p className="mb-2 text-[10px] uppercase tracking-[2px] text-gray-400">
        Recent Activity
      </p>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-lg bg-white/5 px-2 py-2"
          >
            <FiCheckCircle size={12} className="text-[#16f2b3]" />

            <span className="text-[10px] text-white">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
