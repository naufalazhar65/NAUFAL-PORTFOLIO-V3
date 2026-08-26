"use client";

import { motion } from "framer-motion";

import { useFlowStore } from "../../store/flowStore";

export default function ComponentItem({ item }) {
  const Icon = item.icon;

  const addNode = useFlowStore(
    (state) => state.addNode,
  );

  return (
    <motion.button
      type="button"
      whileHover={{
        x: 2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={() => addNode(item.type)}
      className="
        group
        relative
        flex
        w-full
        cursor-pointer
        items-center
        gap-2.5
        overflow-hidden
        rounded-lg
        border
        border-transparent
        px-2.5
        py-2
        text-left
        transition-all
        duration-200

        hover:border-white/[0.08]
        hover:bg-white/[0.035]
      "
    >
      {/* Hover Glow */}

      <span
        className="
          pointer-events-none
          absolute
          -right-6
          -top-6
          h-12
          w-12
          rounded-full
          bg-white/[0.025]
          blur-xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Icon */}

      <span
        className="
          relative
          z-10
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-md
          border
          border-white/[0.06]
          transition-all
          duration-200
          group-hover:border-white/[0.12]
        "
        style={{
          background: `${item.color}16`,
          color: item.color,
        }}
      >
        <Icon
          size={14}
          strokeWidth={2}
        />
      </span>

      {/* Content */}

      <span className="relative z-10 min-w-0">
        <span
          className="
            block
            truncate
            text-[11px]
            font-medium
            text-gray-300
            transition-colors
            duration-200
            group-hover:text-white
          "
        >
          {item.title}
        </span>

        <span
          className="
            mt-0.5
            block
            truncate
            text-[9px]
            leading-4
            text-gray-600
            transition-colors
            duration-200
            group-hover:text-gray-500
          "
        >
          {item.subtitle}
        </span>
      </span>
    </motion.button>
  );
}