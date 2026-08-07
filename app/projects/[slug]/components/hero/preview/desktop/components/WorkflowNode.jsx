"use client";

import { motion } from "framer-motion";

export default function WorkflowNode({
  icon: Icon,
  title,
  subtitle,
  status = "waiting",
}) {
  const styles = {
    done: {
      border: "border-emerald-400/30",
      bg: "bg-emerald-400/10",
      icon: "text-emerald-400",
      badge: "DONE",
      badgeColor: "bg-emerald-400/10 text-emerald-400",
    },

    running: {
      border: "border-sky-400/30",
      bg: "bg-sky-400/10",
      icon: "text-sky-400",
      badge: "RUNNING",
      badgeColor: "bg-sky-400/10 text-sky-400",
    },

    waiting: {
      border: "border-white/10",
      bg: "bg-white/[0.02]",
      icon: "text-gray-500",
      badge: "WAITING",
      badgeColor: "bg-white/5 text-gray-500",
    },
  };

  const s = styles[status];

  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      className={`
        flex
        items-center
        gap-4

        rounded-2xl
        border

        px-5
        py-4

        ${s.border}
        ${s.bg}
      `}
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-black/20
        "
      >
        <Icon
          size={20}
          className={s.icon}
        />
      </div>

      <div className="flex-1">
        <p className="font-semibold text-white">
          {title}
        </p>

        <p className="text-xs text-gray-500">
          {subtitle}
        </p>
      </div>

      <span
        className={`
          rounded-full
          px-3
          py-1
          text-[10px]
          font-semibold

          ${s.badgeColor}
        `}
      >
        {s.badge}
      </span>
    </motion.div>
  );
}