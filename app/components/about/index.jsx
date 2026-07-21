// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function AboutSection() {
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

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    mouseX.set((x - centerX) * 0.04);
    mouseY.set((y - centerY) * 0.04);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.section
      id="about"
      className="relative my-24 lg:my-36"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Side Label */}

      <div className="absolute top-16 -right-8 hidden lg:flex flex-col items-center">
        <span className="rounded-md bg-[#1a1443] px-5 py-2 text-xl text-white rotate-90">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text */}

        <div className="order-2 lg:order-1">
          <motion.p
            variants={itemVariants}
            className="mb-5 text-xl font-medium uppercase text-[#16f2b3]"
          >
            Who I am?
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm leading-8 text-gray-300 lg:text-lg"
          >
            {personalData.description}
          </motion.p>
        </div>

        {/* Image */}

        <motion.div
          variants={itemVariants}
          className="order-1 flex justify-center lg:order-2"
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              x: springX,
              y: springY,
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              scale: 1.03,
            }}
            className="relative"
          >
            {/* Glow */}

            <div
              className="
                absolute
                -inset-6
                rounded-full
                bg-[#16f2b3]/20
                blur-3xl
                opacity-60
                -z-10
              "
            />

            {/* Border Glass */}

            <div
              className="
                absolute
                inset-0
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-sm
                pointer-events-none
              "
            />

            {/* Image */}

            <Image
              src={personalData.profile}
              width={320}
              height={320}
              alt="Naufal Azhar"
              className="
                relative
                rounded-3xl
                object-cover
                border
                border-white/10
                shadow-2xl
                transition-all
                duration-700
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
