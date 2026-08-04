"use client";

import { motion } from "framer-motion";

export default function ArchitectureCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
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
      whileHover={{
        y: -6,
      }}
      className="
        relative
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-7
        text-center
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
        "
        style={{
          background: `${item.color}20`,
          color: item.color,
        }}
      >
        <Icon size={30} />
      </div>

      <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>

      <p className="mt-2 text-gray-400">{item.subtitle}</p>
    </motion.div>
  );
}
