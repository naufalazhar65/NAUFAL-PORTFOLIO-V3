"use client";

import { motion } from "framer-motion";

import { useFlowStore } from "../../store/flowStore";

export default function ComponentItem({ item }) {
  const Icon = item.icon;

  const addNode = useFlowStore(
    (state) => state.addNode
  );

  return (
    <motion.button
      whileHover={{
        y: -2,
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={() => addNode(item.type)}
      className="
        group
        flex
        w-full
        cursor-pointer
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-4
        text-left
        transition-all
        duration-300
        hover:border-white/20
        hover:bg-white/10
        active:scale-95
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          transition-transform
          duration-300
          group-hover:scale-110
        "
        style={{
          background: `${item.color}20`,
          color: item.color,
        }}
      >
        <Icon size={20} />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-white">
          {item.title}
        </h3>

        <p className="text-sm text-gray-400">
          {item.subtitle}
        </p>
      </div>
    </motion.button>
  );
}