"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import Link from "next/link";
import { FaAndroid, FaApple } from "react-icons/fa";

export default function ProjectItem({ project, reverse = false }) {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 180,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 180,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    mouseX.set((x - centerX) * 0.05);
    mouseY.set((y - centerY) * 0.05);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className={`grid items-center gap-14 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* LEFT */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3">
          <span
            className="rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              background: `${project.color}20`,
              color: project.color,
            }}
          >
            {project.category}
          </span>

          <span className="text-gray-500">{project.status}</span>
        </div>

        <h2 className="mt-5 text-5xl font-bold text-white">{project.name}</h2>

        <p className="mt-5 text-xl text-[#16f2b3]">{project.highlight}</p>

        <p className="mt-8 leading-8 text-gray-400">{project.description}</p>

        {/* TOOLS */}

        {/* <div className="mt-8 flex max-h-24 flex-wrap gap-2 overflow-hidden">
          {project.tools.slice(0, 5).map((tool) => (
            <span
              key={tool.name}
              className="
                rounded-full
                border
                border-[#2b325a]
                px-4
                py-2
                text-sm
                text-gray-300
              "
            >
              {tool.name}
            </span>
          ))}

          {project.tools.length > 5 && (
            <span
              className="
                rounded-full
                border
                border-[#16f2b3]/30
                bg-[#16f2b3]/10
                px-4
                py-2
                text-sm
                text-[#16f2b3]
              "
            >
              +{project.tools.length - 5}
            </span>
          )}
        </div> */}

        
        <div className="mt-10">
          <Link
  href={`/projects/${project.slug}`}
  className="
    group
    inline-flex
    items-center
    gap-2
    text-[#16f2b3]
    font-semibold
    mt-10
"
>
  View Case Study

  <FiArrowUpRight
    className="
      transition-transform
      duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-1
    "
  />
</Link>
        </div>
      </motion.div>

      {/* RIGHT */}

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        style={{
          x: springX,
          y: springY,
        }}
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.35,
        }}
        className="group relative"
      >
        {/* Glow */}

        <div
          className="
            absolute
            -inset-12
            opacity-0
            blur-[120px]
            transition-all
            duration-700
            group-hover:opacity-100
            bg-[radial-gradient(circle,#16f2b355_0%,transparent_70%)]
          "
        />

        {/* Screenshot */}

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-[#11152c]
            shadow-2xl
          "
        >
          <Image
            src={project.image}
            alt={project.name}
            sizes="(max-width:768px)100vw,50vw"
            className="
              w-full
              h-auto
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#0d1224]
              via-[#0d122455]
              to-transparent
            "
          />

          <div
            className="
    absolute
    inset-0
    flex
    items-center
    justify-center
    bg-black/0
    transition-all
    duration-500
    group-hover:bg-black/40
  "
          >
            <Link
              href={`/projects/${project.slug}`}
              className="
      opacity-0
      translate-y-4
      group-hover:opacity-100
      group-hover:translate-y-0
      transition-all
      duration-300

      rounded-full
      bg-white
      px-6
      py-3
      font-semibold
      text-black
    "
            >
              View Details
            </Link>
          </div>

          {/* Shine */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-700
              group-hover:opacity-100
            "
          >
            <div
              className="
                absolute
                -left-1/2
                top-0
                h-full
                w-1/3
                -skew-x-12
                bg-white/10
                blur-xl
                transition-all
                duration-1000
                group-hover:left-[140%]
              "
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
