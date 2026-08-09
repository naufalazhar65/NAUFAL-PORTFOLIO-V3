"use client";

import { useEffect, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export default function useHeroParallax() {
  const [isMobile, setIsMobile] = useState(false);

  /*
   * =========================
   * MOUSE VALUES
   * =========================
   */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /*
   * =========================
   * SPRING
   * =========================
   */

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 22,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 22,
    mass: 0.5,
  });

  /*
   * =========================
   * MOBILE DETECTION
   * =========================
   */

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  /*
   * =========================
   * MOUSE MOVE
   * =========================
   */

  const handleMouseMove = (event) => {
    if (isMobile) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = event.clientX - centerX;
    const offsetY = event.clientY - centerY;

    /*
     * Small movement only.
     *
     * Higher divisor = more subtle
     * Lower divisor = stronger movement
     */

    mouseX.set(offsetX / 45);
    mouseY.set(offsetY / 45);
  };

  /*
   * =========================
   * MOUSE LEAVE
   * =========================
   */

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /*
   * =========================
   * RETURN
   * =========================
   */

  return {
    springX,
    springY,
    isMobile,
    handleMouseMove,
    handleMouseLeave,
  };
}