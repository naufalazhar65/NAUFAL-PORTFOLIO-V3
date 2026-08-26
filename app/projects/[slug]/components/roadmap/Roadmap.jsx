"use client";

import { motion } from "framer-motion";

import { roadmap, completedRoadmap } from "./roadmapData";

export default function Roadmap({ project }) {
  if (project.slug !== "flowtest-studio") {
    return null;
  }

  return (
    <section
      id="roadmap"
      className="
        relative
        overflow-hidden
        border-b
        border-white/[0.08]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[18%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-white/[0.02]
          blur-[150px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-0
        "
      >
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            grid
            gap-8
            border-b
            border-white/[0.08]
            pb-8
            lg:grid-cols-[1fr_0.55fr]
            lg:items-end
          "
        >
          <div>
            <div className="flex items-center gap-4">
              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#16f2b3]
                "
              >
                09
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-gray-400
                "
              >
                Next Steps
              </span>
            </div>

            <h2
              className="
                mt-7
                max-w-4xl
                text-[clamp(44px,6vw,76px)]
                font-semibold
                leading-[0.94]
                tracking-[-0.07em]
                text-white
              "
            >
              What comes
              <br />
              <span className="text-gray-400">
                after the current build.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-[14px]
              leading-7
              text-gray-300
            "
          >
            The detailed milestone list lives with the project
            documentation. The case study only shows the direction
            that matters now.
          </p>
        </motion.div>

        {/* Completed */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            flex
            flex-wrap
            items-center
            gap-x-8
            gap-y-3
            border-b
            border-white/[0.08]
            py-6
          "
        >
          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-gray-500
            "
          >
            Completed
          </span>

          {completedRoadmap.map((item) => (
            <div
              key={item.number}
              className="
                flex
                items-center
                gap-2
              "
            >
              <item.icon
                size={13}
                style={{
                  color: item.color,
                }}
              />

              <span className="text-[11px] text-gray-300">
                {item.number} · {item.title}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Horizon */}

        <div className="grid lg:grid-cols-3">
          {roadmap.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  border-b
                  border-white/[0.08]
                  py-10
                  lg:border-r
                  lg:px-8
                  lg:py-12
                  first:lg:pl-0
                  last:lg:border-r-0
                  last:lg:pr-0
                "
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      ${
                        item.status === "In Progress"
                          ? "text-[#16f2b3]"
                          : "text-gray-500"
                      }
                    `}
                  >
                    {item.number}
                  </span>

                  <Icon
                    size={15}
                    style={{
                      color: item.color,
                    }}
                  />
                </div>

                <h3
                  className="
                    mt-12
                    max-w-xs
                    text-[26px]
                    font-medium
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  {item.title}
                </h3>

                <span
                  className={`
                    mt-4
                    block
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    ${
                      item.status === "In Progress"
                        ? "text-[#16f2b3]"
                        : "text-gray-500"
                    }
                  `}
                >
                  {item.status}
                </span>

                <p
                  className="
                    mt-5
                    max-w-sm
                    text-[13px]
                    leading-7
                    text-gray-400
                  "
                >
                  {item.description}
                </p>

                <div className="mt-6 space-y-2">
                  {item.milestones.map((milestone) => (
                    <div
                      key={milestone}
                      className="
                        flex
                        items-start
                        gap-3
                        text-[11px]
                        leading-6
                        text-gray-500
                      "
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-600" />

                      <span>{milestone}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}