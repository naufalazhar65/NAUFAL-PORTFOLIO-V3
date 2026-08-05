"use client";

import { motion } from "framer-motion";

import { fadeUp } from "@/app/lib/motion";


export default function AboutContent() {
  return (
    <div className="order-2 lg:order-1">
      <motion.span
        variants={fadeUp}
        className="
          inline-block
          text-sm
          font-semibold
          uppercase
          tracking-[6px]
          text-[#16f2b3]
        "
      >
        Who I Am
      </motion.span>

      <motion.h2
        variants={fadeUp}
        className="
          mt-5
          text-4xl
          font-black
          leading-tight
          text-white
          md:text-5xl
          xl:text-6xl
        "
      >
        Software Quality
        <br />
        Assurance Engineer
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="
          mt-8
          max-w-xl
          text-lg
          leading-9
          text-gray-300
        "
      >
        I'm <span className="font-semibold text-white">Naufal Azhar</span>, a
        Software Quality Assurance Engineer specializing in
        <span className="text-[#16f2b3]"> Automation Testing</span>,
        <span className="text-[#16f2b3]"> API Testing</span>,
        <span className="text-[#16f2b3]"> Performance Testing</span>, and
        <span className="text-[#16f2b3]"> CI/CD Integration</span>.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="
          mt-6
          max-w-xl
          text-lg
          leading-9
          text-gray-400
        "
      >
        I enjoy building scalable automation frameworks, improving software
        quality, and creating reliable testing solutions that help teams deliver
        software faster with confidence.
      </motion.p>
    </div>
  );
}
