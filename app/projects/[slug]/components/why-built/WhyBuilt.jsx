"use client";

import { motion } from "framer-motion";

import Section from "@/app/components/ui/section/Section";
import SectionHeader from "@/app/components/ui/section/SectionHeader";

import { FiCode, FiLayers, FiTarget } from "react-icons/fi";

const cards = [
  {
    icon: FiCode,
    title: "Traditional Automation",
    description:
      "Most mobile automation frameworks rely heavily on code, making workflows difficult to visualize, review and maintain for larger teams.",
  },

  {
    icon: FiLayers,
    title: "Visual Thinking",
    description:
      "I wanted to explore a workflow-driven approach where automation steps are represented as reusable visual nodes instead of repetitive scripts.",
  },

  {
    icon: FiTarget,
    title: "Learning Project",
    description:
      "FlowTest Studio is an experimental project that combines React Flow, Zustand and modern UI patterns to simulate how a visual automation platform could work.",
  },
];

export default function WhyBuilt({ project }) {
  if (project.slug !== "flowtest-studio") {
    return null;
  }

  return (
    <Section id="why-built">
      <SectionHeader
        eyebrow="Motivation"
        title="Why I Built FlowTest Studio"
        description="This project started as an exploration of how visual workflows could simplify mobile automation testing."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16f2b3]/10 text-[#16f2b3]">
                <Icon size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {card.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">{card.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.3,
          duration: 0.7,
        }}
        className="
          mt-16
          rounded-[32px]
          border
          border-[#16f2b3]/20
          bg-[#16f2b3]/5
          p-10
        "
      >
        <p className="text-2xl font-light italic leading-10 text-white">
          "FlowTest Studio is not intended to replace existing automation
          frameworks. It is an exploration of how visual workflows can make
          automation easier to understand, collaborate on and maintain."
        </p>
      </motion.div>
    </Section>
  );
}
