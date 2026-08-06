"use client";

import { motion } from "framer-motion";

import { LayoutContainer, Section } from "../layout";

import { stagger } from "@/app/lib/motion";

import AboutContent from "./components/AboutContent";
import AboutImage from "./components/AboutImage";

export default function About() {
  return (
    <Section id="about">
      <LayoutContainer>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-[minmax(0,1fr)_420px]
            lg:gap-16
            xl:grid-cols-[minmax(0,1fr)_460px]
            xl:gap-24
          "
        >
          {/* Left */}
          <AboutContent />

          {/* Right */}
          <AboutImage />
        </motion.div>
      </LayoutContainer>
    </Section>
  );
}