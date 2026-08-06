"use client";

import { motion } from "framer-motion";

import DashboardHeader from "./dashboard/DashboardHeader";
import DashboardStats from "./dashboard/DashboardStats";
import DashboardActivity from "./dashboard/DashboardActivity";

export default function DashboardScreen() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.35,
      }}
      className="h-full overflow-y-auto px-3 py-2 scrollbar-hide"
    >
      <DashboardHeader />

      <DashboardStats />

      <DashboardActivity />
    </motion.div>
  );
}
