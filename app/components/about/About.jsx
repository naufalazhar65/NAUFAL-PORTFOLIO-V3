"use client";

import { motion } from "framer-motion";

import { LayoutContainer, Section } from "../layout";

import { stagger } from "@/app/lib/motion";

import AboutContent from "./components/AboutContent";
import AboutImage from "./components/AboutImage";

export default function About() {
  return (
    <Section id="about">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >
        <LayoutContainer>
          {/* AboutSideLabel nanti dipindahkan */}

          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-14
              lg:grid-cols-2
              xl:gap-24
            "
          >
            <AboutContent />
            <AboutImage />
          </div>
        </LayoutContainer>
      </motion.div>
    </Section>
  );
}