"use client";

import { motion } from "framer-motion";

import FlowStatus from "./FlowStatus";
import FlowBadge from "./FlowBadge";
import { getNodeConfig } from "./nodeRegistry";

export default function FlowNode({ node, index, active, completed, children }) {
  const data = node.data ?? node;
  const config = getNodeConfig(data.action);

  const Icon = config.Icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={
        active
          ? {
              opacity: 1,
              y: 0,
              scale: [1, 1.04, 1],
            }
          : {
              opacity: 1,
              y: 0,
            }
      }
      transition={{
        opacity: {
          duration: 0.35,
          delay: index * 0.08,
        },
        y: {
          duration: 0.35,
          delay: index * 0.08,
        },
        scale: {
          repeat: Infinity,
          duration: 1.8,
        },
      }}
      className={`
        relative
        flex
        w-[330px]
        items-center
        gap-4
        rounded-2xl
        border
        px-6
        py-5
        transition-all
        duration-500

        ${
          active
            ? "border-[#16f2b3] bg-[#16f2b3]/10 shadow-[0_0_35px_rgba(22,242,179,.25)]"
            : completed
              ? "border-green-500/30 bg-green-500/10"
              : "border-white/10 bg-[#161b22]"
        }
      `}
    >
      {active && (
        <motion.div
          animate={{
            scale: [1, 1.8],
            opacity: [0.4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="
            absolute
            left-5
            h-5
            w-5
            rounded-full
            bg-[#16f2b3]
          "
        />
      )}

      <FlowStatus active={active} completed={completed} />

      <div className="flex items-center gap-4 flex-1">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{
            backgroundColor: `${config.color}20`,
            color: config.color,
          }}
        >
          <Icon size={18} />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-white">{data.title}</h3>

          <p
            className="mt-1 text-xs uppercase tracking-wide"
            style={{
              color: config.color,
            }}
          >
            {config.label}
          </p>
        </div>
      </div>

      <FlowBadge active={active} completed={completed} />

      {children}
    </motion.div>
  );
}
