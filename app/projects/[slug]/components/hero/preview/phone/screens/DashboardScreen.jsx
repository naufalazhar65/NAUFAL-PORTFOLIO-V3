"use client";

import { motion } from "framer-motion";
import { Activity, CheckCircle2, Clock3, Smartphone } from "lucide-react";

import PhoneCard from "../components/PhoneCard";
import ProgressBar from "../components/ProgressBar";
import StatusChip from "../components/StatusChip";

const stats = [
  {
    icon: CheckCircle2,
    label: "Passed",
    value: "24",
    color: "text-[#16f2b3]",
  },
  {
    icon: Activity,
    label: "Failed",
    value: "0",
    color: "text-emerald-400",
  },
  {
    icon: Clock3,
    label: "Duration",
    value: "14.2s",
    color: "text-sky-400",
  },
  {
    icon: Smartphone,
    label: "Device",
    value: "Pixel 9",
    color: "text-amber-400",
  },
];

const activities = [
  "Login Test Passed",
  "Checkout Flow Passed",
  "Dashboard Assertion Passed",
];

export default function DashboardScreen() {
  return (
    <div className="flex h-full flex-col bg-[#0d1117] px-5 py-6">
      {/* Header */}

      <motion.div
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <p className="text-xs text-gray-400">Welcome back 👋</p>

        <div className="mt-2 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">FlowTest Studio</h2>

          <StatusChip>Ready</StatusChip>
        </div>

        <p className="mt-2 text-xs text-gray-500">
          Automation environment initialized
        </p>

        <div className="mt-4">
          <ProgressBar />
        </div>
      </motion.div>

      {/* Stats */}

      <div className="mt-6 grid grid-cols-2 gap-3">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <PhoneCard className="p-3">
                <Icon className={`mb-3 h-5 w-5 ${item.color}`} />

                <p className="text-lg font-bold text-white">{item.value}</p>

                <p className="mt-1 text-[11px] text-gray-400">{item.label}</p>
              </PhoneCard>
            </motion.div>
          );
        })}
      </div>

      {/* Activity */}

      <motion.div
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.4,
        }}
        className="mt-6"
      >
        <PhoneCard className="p-4">
          <div className="flex items-center justify-between">
            <h3
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[2px]
                text-gray-400
              "
            >
              Recent Activity
            </h3>

            <StatusChip>Live</StatusChip>
          </div>

          <div className="mt-4 space-y-3">
            {activities.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/5
                  bg-white/[0.02]
                  px-3
                  py-2
                "
              >
                <CheckCircle2 size={15} className="text-[#16f2b3]" />

                <span className="text-xs text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </PhoneCard>
      </motion.div>

      {/* Footer */}

      <div className="mt-auto pt-6">
        <PhoneCard className="p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                All Tests Passed
              </p>

              <p className="mt-1 text-[11px] text-gray-500">
                Latest workflow executed successfully
              </p>
            </div>

            <CheckCircle2 size={22} className="text-[#16f2b3]" />
          </div>
        </PhoneCard>
      </div>
    </div>
  );
}
