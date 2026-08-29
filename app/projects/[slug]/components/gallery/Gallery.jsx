"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery({ project }) {
  if (
    !project ||
    project.slug !== "flowtest-studio"
  ) {
    return null;
  }

  const images = (project.gallery ?? []).filter(
    Boolean,
  );

  if (!images.length) {
    return null;
  }

  return (
    <section
      id="gallery"
      className="
        relative
        border-b
        border-white/[0.08]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-8
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
              See the system,
              <br />
              <span className="text-gray-400">
                not just the idea.
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
            Two views of FlowTest Studio: the workflow
            builder and the evidence left behind after
            execution.
          </p>
        </motion.div>

        {/* =========================
            EVIDENCE
        ========================= */}

        <div
          className={`
            grid
            ${
              images.length > 1
                ? "lg:grid-cols-2"
                : "grid-cols-1"
            }
          `}
        >
          {images.map((image, index) => (
            <motion.figure
              key={`${project.slug}-${index}`}
              initial={{
                opacity: 0,
                y: 18,
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
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                border-b
                border-white/[0.08]
                py-8
                lg:px-8
                lg:py-10
                first:lg:pl-0
                last:lg:pr-0
                lg:first:border-r
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
                  src={image}
                  alt={`FlowTest Studio evidence ${index + 1}`}
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

              <figcaption className="mt-4">
                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-gray-500
                  "
                >
                  {String(index + 1).padStart(
                    2,
                    "0",
                  )}{" "}
                  · FlowTest Studio
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}