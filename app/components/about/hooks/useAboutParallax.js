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
    damping: 20,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
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

    const offsetX = x - centerX;
    const offsetY = y - centerY;

    /*
     * Very subtle movement.
     *
     * The avatar should feel interactive,
     * not like a 3D card.
     */

    mouseX.set(offsetX * 0.025);
    mouseY.set(offsetY * 0.025);
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