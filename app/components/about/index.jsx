// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { FiFolder, FiCheckCircle, FiCode, FiAward } from "react-icons/fi";
import TechBadge from "../ui/TechBadge";

const stats = [
  {
    value: "4+",
    label: "Years Learning",
    icon: FiAward,
  },
  {
    value: "20+",
    label: "Projects",
    icon: FiFolder,
  },
  {
    value: "120+",
    label: "Automation Tests",
    icon: FiCheckCircle,
  },
  {
    value: "25+",
    label: "Technologies",
    icon: FiCode,
  },
];

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-24 items-center">
        {/* Text */}

        <div className="order-2 lg:order-1">
          <motion.span
            variants={itemVariants}
            className="
    inline-block
    uppercase
    tracking-[6px]
    text-[#16f2b3]
    text-sm
    font-semibold
  "
          >
            Who I Am
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="
    mt-5
    text-4xl
    md:text-5xl
    xl:text-6xl
    font-black
    leading-tight
    text-white
  "
          >
            Software Quality
            <br />
            Assurance Engineer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="
    mt-8
    max-w-xl
    text-lg
    leading-9
    text-gray-300
  "
          >
            I'm <span className="text-white font-semibold">Naufal Azhar</span>,
            a Software Quality Assurance Engineer specializing in
            <span className="text-[#16f2b3]"> Automation Testing</span>,
            <span className="text-[#16f2b3]"> API Testing</span>,
            <span className="text-[#16f2b3]"> Performance Testing</span>, and
            <span className="text-[#16f2b3]"> CI/CD Integration</span>.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="
    mt-6
    max-w-xl
    text-lg
    leading-9
    text-gray-400
  "
          >
            I enjoy building scalable automation frameworks, improving software
            quality, and creating reliable testing solutions that help teams
            deliver software faster with confidence.
          </motion.p>

          {/* <motion.div
  variants={itemVariants}
  className="mt-12 grid grid-cols-2 gap-5"
>
  {stats.map((item) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={item.label}
        whileHover={{
          y: -6,
          scale: 1.03,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          group
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-6
          transition-all
          duration-300
          hover:border-[#16f2b3]/40
          hover:bg-[#16f2b3]/5
        "
      >
        <div className="flex items-center justify-between">
          <Icon className="text-2xl text-[#16f2b3]" />

          <span className="text-4xl font-black text-white">
            {item.value}
          </span>
        </div>

        <p className="mt-6 text-sm tracking-wide text-gray-400">
          {item.label}
        </p>
      </motion.div>
    );
  })}
</motion.div> */}
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

            {/* Status */}

            <div
              className="
  absolute
  -top-5
  left-1/2
  -translate-x-1/2
  rounded-full
  border
  border-[#16f2b3]/30
  bg-[#0d1224]/80
  backdrop-blur-xl
  px-5
  py-2
  text-sm
  text-[#16f2b3]
  flex
  items-center
  gap-2
  z-20
"
            >
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Available
            </div>

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
            {/* TOP */}
            <TechBadge
              skill="cucumber"
              className="left-1/2 -top-14 -translate-x-1/2"
              duration={5.2}
              delay={0.2}
            />

            {/* TOP LEFT */}
            <TechBadge
              skill="Selenium"
              className="-left-16 top-12"
              duration={4.6}
              delay={0.1}
            />

            {/* TOP RIGHT */}
            <TechBadge
              skill="Cypress"
              className="-right-16 top-12"
              duration={5}
              delay={0.3}
            />

            {/* MIDDLE LEFT */}
            <TechBadge
              skill="Android"
              className="-left-24 top-1/2 -translate-y-1/2"
              duration={5.5}
              delay={0.5}
            />

            {/* MIDDLE RIGHT */}
            <TechBadge
              skill="apple"
              className="-right-24 top-1/2 -translate-y-1/2"
              duration={5.8}
              delay={0.4}
            />

            {/* BOTTOM LEFT */}
            <TechBadge
              skill="Appium"
              className="-left-16 bottom-12"
              duration={5.1}
              delay={0.6}
            />

            {/* BOTTOM RIGHT */}
            <TechBadge
              skill="Postman"
              className="-right-16 bottom-12"
              duration={4.8}
              delay={0.7}
            />

            {/* BOTTOM */}
            <TechBadge
              skill="GitHub"
              className="left-[35%] -bottom-14 -translate-x-1/2"
              duration={6}
              delay={0.4}
            />

            <TechBadge
              skill="Code"
              className="left-[65%] -bottom-14 -translate-x-1/2"
              duration={5.4}
              delay={0.8}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
