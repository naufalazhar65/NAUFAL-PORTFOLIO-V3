"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export default function useHeroParallax() {
  const cardRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 140,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 140,
    damping: 20,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (event) => {
    if (!cardRef.current || isMobile) return;

    const rect = cardRef.current.getBoundingClientRect();

    const offsetX = event.clientX - rect.left - rect.width / 2;

    const offsetY = event.clientY - rect.top - rect.height / 2;

    mouseX.set(offsetX / 25);

    mouseY.set(-(offsetY / 25));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return {
    cardRef,

    springX,
    springY,

    isMobile,

    handleMouseMove,
    handleMouseLeave,
  };
}
