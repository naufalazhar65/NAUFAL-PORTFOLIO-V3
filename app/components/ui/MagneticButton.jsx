"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  strength = 0.25,
  ...props
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 18,
  });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    const offsetX =
      event.clientX - rect.left - rect.width / 2;

    const offsetY =
      event.clientY - rect.top - rect.height / 2;

    x.set(offsetX * strength);

    y.set(offsetY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex"
    >
      <motion.div
        whileTap={{
          scale: 0.96,
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}