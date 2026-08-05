"use client";

import { useRef } from "react";
import {
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function useAboutParallax() {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
  });

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
  });

  const handleMouseMove = (event) => {
    if (!cardRef.current) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    mouseX.set((x - centerX) * 0.04);
    mouseY.set((y - centerY) * 0.04);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return {
    cardRef,
    springX,
    springY,
    handleMouseMove,
    handleMouseLeave,
  };
}