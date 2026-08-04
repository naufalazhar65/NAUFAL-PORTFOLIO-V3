"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import Panel from "@/app/components/ui/panel/Panel";

import {
  FiBox,
  FiCpu,
  FiGitBranch,
  FiActivity,
} from "react-icons/fi";

const iconMap = {
  components: FiBox,
  nodes: FiGitBranch,
  engine: FiCpu,
  performance: FiActivity,
};

export default function HeroStats({ stats = [] }) {
  if (!stats.length) return null;

  return (
    <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = iconMap[item.icon] || FiBox;

        return (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
          >
            <Panel
              hover
              variant="glass"
              padding="md"
              className="relative overflow-hidden"
            >
              {/* Glow */}

              <div
                className="
                  absolute
                  -right-8
                  -top-8
                  h-20
                  w-20
                  rounded-full
                  bg-[#16f2b3]/10
                  blur-2xl
                "
              />

              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-[#16f2b3]/10 p-3">
                  <Icon className="text-xl text-[#16f2b3]" />
                </div>

                <h3 className="text-3xl font-black text-white">
                  {typeof item.value === "number" ? (
                    <CountUp
                      end={item.value}
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  ) : (
                    item.value
                  )}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {item.label}
                </p>
              </div>
            </Panel>
          </motion.div>
        );
      })}
    </div>
  );
}