"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Globe,
  Smartphone,
  Server,
  ChevronRight,
  PlayCircle,
} from "lucide-react";

import PhoneCard from "../components/PhoneCard";
import ProgressBar from "../components/ProgressBar";
import StatusChip from "../components/StatusChip";

const environments = [
  {
    icon: Globe,
    name: "Chrome",
    status: "Ready",
  },
  {
    icon: Smartphone,
    name: "Android",
    status: "Connected",
  },
  {
    icon: Smartphone,
    name: "iOS",
    status: "Connected",
  },
];

const executions = [
  "Launch Application",
  "Locate Username Field",
  "Type Username",
  "Type Password",
  "Tap Login Button",
  "Verify Dashboard",
];

export default function DashboardScreen() {
  return (
    <div className="flex h-full flex-col px-5 pt-4 pb-4">
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
        <p className="text-[11px] uppercase tracking-[2px] text-gray-500">
          FlowTest Studio
        </p>

        <h2 className="mt-1 text-xl font-bold text-white">
          Automation Summary
        </h2>

        <div className="mt-4">
          <PhoneCard className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">
                  Workflow Progress
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  24
                </p>

                <p className="text-[11px] text-gray-500">
                  Tests Passed
                </p>
              </div>

              <div className="rounded-2xl bg-[#16f2b3]/10 p-3">
                <PlayCircle
                  size={22}
                  className="text-[#16f2b3]"
                />
              </div>
            </div>

            <div className="mt-4">
              <ProgressBar />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-[11px] text-gray-400">
                Automation Completed
              </span>

              <StatusChip>100%</StatusChip>
            </div>
          </PhoneCard>
        </div>
      </motion.div>

      {/* Environment */}

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
          delay: 0.15,
        }}
        className="mt-5"
      >
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-[11px] font-semibold uppercase tracking-[2px] text-gray-400">
            Environment
          </h3>

          <ChevronRight
            size={16}
            className="text-gray-500"
          />
        </div>

        <div className="space-y-2">
          {environments.map((item) => {
            const Icon = item.icon;

            return (
              <PhoneCard
                key={item.name}
                className="p-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon
                      size={17}
                      className="text-[#16f2b3]"
                    />

                    <span className="text-sm text-white">
                      {item.name}
                    </span>
                  </div>

                  <StatusChip>
                    {item.status}
                  </StatusChip>
                </div>
              </PhoneCard>
            );
          })}
        </div>
      </motion.div>

      {/* Execution Feed */}

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
          delay: 0.3,
        }}
        className="mt-5 flex-1"
      >
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-[11px] font-semibold uppercase tracking-[2px] text-gray-400">
            Execution Feed
          </h3>

          <Server
            size={15}
            className="text-gray-500"
          />
        </div>

        <PhoneCard className="p-3">
          <div className="space-y-3">
            {executions.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: -8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.45 + index * 0.06,
                }}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={15}
                  className="text-[#16f2b3]"
                />

                <span className="text-[11px] text-gray-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </PhoneCard>
      </motion.div>

      {/* Footer */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.8,
        }}
        className="mt-4"
      >
        <PhoneCard className="p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Latest Run
              </p>

              <p className="mt-1 text-[11px] text-gray-500">
                Completed successfully in 14.2s
              </p>
            </div>

            <CheckCircle2
              size={20}
              className="text-[#16f2b3]"
            />
          </div>
        </PhoneCard>
      </motion.div>
    </div>
  );
}