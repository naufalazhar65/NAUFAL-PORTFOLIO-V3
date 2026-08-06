"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Glow({
  size = 280,
  color = "rgba(22,242,179,.18)",
}) {
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  const x = useSpring(mouseX, {
    stiffness: 250,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 250,
    damping: 30,
  });

  function handleMouseMove(event) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);

    mouseY.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(-9999);
    mouseY.set(-9999);
  }

  return {
    glow: (
      <motion.div
        style={{
          x,
          y,
        }}
        className="pointer-events-none absolute"
      >
        <div
          style={{
            width: size,
            height: size,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            transform:
              "translate(-50%, -50%)",
          }}
        />
      </motion.div>
    ),

    bind: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
}