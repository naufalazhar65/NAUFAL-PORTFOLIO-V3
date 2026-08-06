"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function InteractiveCard({
  children,
  className = "",
  glow = true,
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-150, 150], [5, -5]),
    {
      stiffness: 180,
      damping: 22,
    },
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-150, 150], [-5, 5]),
    {
      stiffness: 180,
      damping: 22,
    },
  );

  function handleMouseMove(event) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    mouseX.set(
      event.clientX -
        rect.left -
        rect.width / 2,
    );

    mouseY.set(
      event.clientY -
        rect.top -
        rect.height / 2,
    );
  }

  function resetRotation() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      whileHover={{
        scale: 1.015,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 22,
      }}
      className={`
        group
        relative
        rounded-3xl
        ${className}
      `}
    >
      {glow && (
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-0
              h-40
              w-40
              -translate-x-1/2
              rounded-full
              bg-primary/20
              blur-3xl
            "
          />
        </div>
      )}

      <div
        className="relative"
        style={{
          transform:
            "translateZ(24px)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}