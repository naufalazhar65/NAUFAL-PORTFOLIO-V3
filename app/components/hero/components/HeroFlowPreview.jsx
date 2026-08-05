"use client";

import { motion } from "framer-motion";

import GlassPanel from "@/app/components/ui/GlassPanel";

const skills = [
  "Automation Testing",
  "Performance Testing",
  "API Testing",
];

const traits = [
  "hardWorker",
  "quickLearner",
  "problemSolver",
];

export default function HeroCodeWindow({
  cardRef,
  springX,
  springY,
  isMobile,
  handleMouseMove,
  handleMouseLeave,
}) {
  return (
    <GlassPanel
      as={motion.div}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{
        opacity: 0,
        x: 60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        x: isMobile ? 0 : springX,
        y: isMobile ? 0 : springY,
      }}
      className="
        relative
        order-1
        overflow-hidden
        bg-gradient-to-r
        from-background
        to-surface
        lg:order-2
      "
    >
      {/* Top Border */}

      <div className="flex">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
        <div className="h-px w-full bg-gradient-to-r from-violet-600 to-transparent" />
      </div>

      {/* Window Controls */}

      <div className="px-6 py-5 lg:px-8">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-[#EF4D4D]" />
          <div className="h-3 w-3 rounded-full bg-[#E0B534]" />
          <div className="h-3 w-3 rounded-full bg-[#3ABC0B]" />
        </div>
      </div>

      {/* Code */}

      <div className="overflow-hidden border-t-2 border-indigo-900 px-4 py-4 lg:px-8 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-heading">coder</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-muted">{"{"}</span>
          </div>

          <div>
            <span className="ml-4 mr-2 text-heading lg:ml-8">
              name:
            </span>
            <span className="text-muted">'</span>
            <span className="text-amber-300">
              Naufal Azhar
            </span>
            <span className="text-muted">',</span>
          </div>

          <div className="ml-4 mr-2 lg:ml-8">
            <span className="text-heading">
              skills:
            </span>

            <span className="text-muted">[</span>

            {skills.map((skill, index) => (
              <span key={skill}>
                <span className="text-amber-300">
                  "{skill}"
                </span>

                {index !== skills.length - 1 && (
                  <span className="text-muted">, </span>
                )}
              </span>
            ))}

            <span className="text-muted">]</span>
          </div>

          {traits.map((trait) => (
            <div key={trait}>
              <span className="ml-4 mr-2 text-heading lg:ml-8">
                {trait}:
              </span>

              <span className="text-orange-400">
                true
              </span>

              <span className="text-muted">,</span>
            </div>
          ))}

          <div>
            <span className="ml-4 mr-2 text-green-400 lg:ml-8">
              hireable:
            </span>

            <span className="text-orange-400">
              function
            </span>

            <span className="text-muted">
              {"() {"}
            </span>
          </div>

          <div>
            <span className="ml-8 mr-2 text-orange-400 lg:ml-16">
              return
            </span>

            <span className="text-muted">
              (
            </span>
          </div>

          <div>
            <span className="ml-12 text-cyan-400 lg:ml-24">
              this.
            </span>

            <span className="mr-2 text-heading">
              hardWorker
            </span>

            <span className="text-amber-300">
              &&
            </span>
          </div>

          <div>
            <span className="ml-12 text-cyan-400 lg:ml-24">
              this.
            </span>

            <span className="mr-2 text-heading">
              problemSolver
            </span>

            <span className="text-amber-300">
              &&
            </span>
          </div>

          <div>
            <span className="ml-12 text-cyan-400 lg:ml-24">
              this.
            </span>

            <span className="mr-2 text-heading">
              skills.length
            </span>

            <span className="mr-2 text-amber-300">
              &gt;=
            </span>

            <span className="text-orange-400">
              3
            </span>
          </div>

          <div>
            <span className="ml-8 mr-2 text-muted lg:ml-16">
              );
            </span>
          </div>

          <div>
            <span className="ml-4 text-muted lg:ml-8">
              {"}"}
            </span>
          </div>

          <div>
            <span className="text-muted">
              {"};"}
            </span>
          </div>
        </code>
      </div>
    </GlassPanel>
  );
}