"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const evidence = [
  {
    src: "/projects/builder.webp",
    title: "Visual Workflow Builder",
    label: "01 · Builder",
    description:
      "The flow stays visible as connected nodes, making the test sequence easier to inspect and change before execution.",
  },
  {
    src: "/projects/ReportDetail.webp",
    title: "Execution Evidence",
    label: "02 · Evidence",
    description:
      "A run keeps its execution state, logs, errors, screenshots, and page-source evidence together so failures can be investigated.",
  },
];

export default function Gallery({ project }) {
  if (project.slug !== "flowtest-studio") {
    return null;
  }

  return (
    <section
      id="gallery"
      className="
        relative
        border-b
        border-white/[0.08]
        py-20
        sm:py-24
        lg:py-28
      "
    >
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
        {/* =========================
            HEADER
        ========================= */}

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
            duration: 0.6,
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
                05
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
                Visual Evidence
              </span>
            </div>

            <h2
              className="
                mt-7
                max-w-4xl
                text-[clamp(42px,6vw,72px)]
                font-semibold
                leading-[0.94]
                tracking-[-0.07em]
                text-white
              "
            >
              Two views of
              <br />
              <span className="text-gray-400">
                the same system.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-[14px]
              leading-7
              text-gray-400
            "
          >
            The builder shows how a test is authored. The second
            view shows what remains after that test actually runs.
          </p>
        </motion.div>

        {/* =========================
            EVIDENCE
        ========================= */}

        <div className="grid lg:grid-cols-2">
          {evidence.map((item, index) => (
            <motion.figure
              key={item.src}
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
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                border-b
                border-white/[0.08]
                py-8
                lg:px-8
                lg:py-10
                first:lg:border-r
                first:lg:pl-0
                last:lg:pr-0
              "
            >
              <div
                className="
                  overflow-hidden
                  border
                  border-white/[0.08]
                  bg-[#050505]
                "
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={2048}
                  height={1483}
                  sizes="
                    (max-width: 768px) 100vw,
                    50vw
                  "
                  className="
                    block
                    h-auto
                    w-full
                    object-cover
                  "
                />
              </div>

              <figcaption className="mt-5">
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-[#16f2b3]
                    "
                  >
                    {item.label}
                  </span>

                  <span
                    className="
                      font-mono
                      text-[9px]
                      text-gray-600
                    "
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3
                  className="
                    mt-3
                    text-xl
                    font-medium
                    tracking-[-0.03em]
                    text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-lg
                    text-[13px]
                    leading-7
                    text-gray-400
                  "
                >
                  {item.description}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}