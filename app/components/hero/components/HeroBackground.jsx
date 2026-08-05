"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.08,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 0.35,
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="absolute -top-[98px] -z-10"
    >
      <Image
        src="/hero.svg"
        alt="Hero"
        priority
        quality={90}
        width={1572}
        height={795}
        className="h-auto w-full"
      />
    </motion.div>
  );
}