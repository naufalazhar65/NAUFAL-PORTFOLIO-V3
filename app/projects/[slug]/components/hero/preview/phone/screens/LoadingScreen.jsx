"use client";

import { motion } from "framer-motion";

import PhoneCard from "../components/PhoneCard";
import ProgressBar from "../components/ProgressBar";

const tasks = [
  "Authenticating account",
  "Connecting Android device",
  "Preparing automation session",
  "Launching workflow",
];

export default function LoadingScreen() {
  return (
    <div
      className="
        flex
        h-full
        flex-col
        justify-center
        px-5
      "
    >
      <PhoneCard className="p-6">
        {/* Spinner */}

        <div className="flex justify-center">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
            className="
              h-14
              w-14
              rounded-full
              border-[3px]
              border-[#16f2b3]/20
              border-t-[#16f2b3]
            "
          />
        </div>

        {/* Title */}

        <h2 className="mt-6 text-center text-lg font-bold text-white">
          Signing In...
        </h2>

        <p className="mt-2 text-center text-xs text-gray-400">
          Preparing automation environment
        </p>

        {/* Progress */}

        <div className="mt-6">
          <ProgressBar />
        </div>

        {/* Tasks */}

        <div className="mt-6 space-y-3">
          {tasks.map((task, index) => (
            <motion.div
              key={task}
              initial={{
                opacity: 0,
                x: -10,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.15,
              }}
              className="flex items-center gap-3"
            >
              <div className="h-2 w-2 rounded-full bg-[#16f2b3]" />

              <span className="text-xs text-gray-300">
                {task}
              </span>
            </motion.div>
          ))}
        </div>
      </PhoneCard>
    </div>
  );
}