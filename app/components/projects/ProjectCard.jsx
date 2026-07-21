"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";

export default function ProjectItem({ project, reverse = false, onOpen }) {
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
      className={`grid lg:grid-cols-2 gap-14 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* LEFT */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="px-4 py-2 rounded-full text-sm font-semibold"
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

        <div className="mt-8 flex flex-wrap gap-2 max-h-24 overflow-hidden">
          {project.tools.slice(0, 5).map((tool) => (
            <span
              key={tool}
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
              {tool}
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
        </div>

        {/* STATS */}

        <div className="mt-10 grid grid-cols-3 gap-5">
          {project.stats.map((item) => (
            <div
              key={item.label}
              className="
              rounded-xl
              border
              border-white/5
              bg-white/[0.02]
              p-4
              "
            >
              <h3 className="text-2xl font-bold text-white">{item.value}</h3>

              <p className="text-gray-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* BUTTONS */}

        <div className="mt-10 flex gap-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-[#16f2b3]
              px-6
              py-3
              text-white
              hover:bg-[#16f2b3]
              hover:text-black
              transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3 tracking-wider
              "
            >
              <FaGithub />
              {/* className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3"> */}
              {project.githubLabel}
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="
              flex
              items-center
              gap-2
              rounded-full
              bg-[#16f2b3]
              px-6
              py-3
              font-semibold
              text-black
              transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3
              "
            >
              {project.liveLabel}
              <FiArrowUpRight />
            </a>
          )}
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
        
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 0.35,
          },
        }}
        whileHover={{
          scale: 1.02,
          y: 8
        }}
        onClick={() => onOpen(project)}
        className="group relative cursor-pointer"
      >
        {/* Glow */}

        <div
          className="
  absolute
  -inset-12
  opacity-0
  group-hover:opacity-100
  transition-all
  duration-700
  bg-[radial-gradient(circle,#16f2b355_0%,transparent_70%)]
  blur-[120px]
"
        />

        {/* Card */}

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
            sizes="(max-width:768px) 100vw, 50vw"
            className="
    transition-all
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

          <div className="absolute bottom-6 left-6">
            <p className="text-3xl">{project.icon}</p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              {project.name}
            </h3>

            <p className="text-gray-300">{project.summary}</p>
          </div>
          <div
            className="
  pointer-events-none
  absolute
  inset-0
  opacity-0
  group-hover:opacity-100
  transition-opacity
  duration-700
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
    group-hover:left-[140%]
    transition-all
    duration-1000
  "
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
