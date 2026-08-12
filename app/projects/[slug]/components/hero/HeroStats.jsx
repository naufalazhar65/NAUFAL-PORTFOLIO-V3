"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

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
    <div
      className="
        flex
        flex-wrap
        justify-center
        divide-x
        divide-white/[0.06]
        lg:justify-start
      "
    >
      {stats.map((item, index) => {
        const Icon = iconMap[item.icon] || FiBox;

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="
              flex
              flex-col
              gap-1.5
              px-5
              first:pl-0
            "
          >
            <div className="flex items-center gap-1.5 text-gray-600">
              <Icon className="text-[13px]" />

              <span
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[1.5px]
                "
              >
                {item.label}
              </span>
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-white">
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
          </motion.div>
        );
      })}
    </div>
  );
}