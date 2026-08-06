"use client";

import {
  animate,
  motion,
  useMotionValue,
} from "framer-motion";
import {
  useEffect,
  useState,
} from "react";

export default function DashboardCard({
  title,
  value,
  color = "#16f2b3",
  delay = 0,
}) {
  const numeric = typeof value === "number";

  const motionValue = useMotionValue(0);

  const [displayValue, setDisplayValue] =
    useState(
      numeric ? 0 : value,
    );

  useEffect(() => {
    if (!numeric) return;

    const controls = animate(
      motionValue,
      value,
      {
        duration: 1.1,
        delay,
        ease: "easeOut",
        onUpdate(latest) {
          setDisplayValue(
            Math.round(latest),
          );
        },
      },
    );

    return () => controls.stop();
  }, [
    delay,
    motionValue,
    numeric,
    value,
  ]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay,
        duration: 0.35,
      }}
      whileHover={{
        scale: 1.03,
      }}
      className="
        rounded-xl
        border
        border-white/10
        bg-white/5
        p-3
      "
    >
      <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
        {title}
      </p>

      <p
        className="mt-2 text-lg font-bold"
        style={{
          color,
        }}
      >
        {displayValue}
      </p>
    </motion.div>
  );
}