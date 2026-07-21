// @flow strict
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skillsImage } from "@/utils/skill-image";

const skillGroups = [
  {
    title: "Programming",
    skills: ["Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Test Automation",
    skills: ["Selenium", "Cypress", "Appium", "WebdriverIO"],
  },
  {
    title: "API Testing",
    skills: ["Postman", "Swagger"],
  },
  {
    title: "Performance Testing",
    skills: ["JMeter", "k6"],
  },
  {
    title: "CI/CD & Tools",
    skills: ["Git", "GitHub", "Jenkins", "Jira", "MySQL", "Linux", "macOS"],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    // opacity: 0,
    // y: 50,
    // filter: "blur(8px)",
    opacity: 0,
    y: 40,
    scale: 0.97,
  },
  visible: {
    // opacity: 1,
    // y: 0,
    // scale: 1,
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative my-28"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      {/* Heading */}
      <motion.div variants={item} className="mb-20 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#16f2b3]">
          TECH STACK
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          Technologies & Tools
        </h2>

        <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
          A collection of programming languages, testing frameworks, automation
          tools, CI/CD platforms, and technologies I use to deliver reliable and
          high-quality software.
        </p>
      </motion.div>

      {/* Categories */}
      <div className="space-y-12">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <h3
              variants={item}
              className="mb-6 text-2xl font-semibold text-white"
            >
              {group.title}
            </h3>

            <motion.div
              className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5"
              variants={container}
            >
              {group.skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={item}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#25213b]
                    bg-[#11152c]/90
                    transition-all
                    duration-500
                    hover:border-[#16f2b3]/40
                    hover:shadow-[0_0_24px_rgba(22,242,179,0.15)]                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-[#16f2b3]/10
                      via-transparent
                      to-violet-500/10
                      opacity-0
                      transition-all
                      duration-700
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative flex flex-col items-center justify-center p-8">
                    <motion.div>
                      <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={50}
                        height={50}
                        loading="lazy"
                        decoding="async"
                        sizes="50px"
                        className="transition-all duration-500 group-hover:scale-110"
                      />
                    </motion.div>

                    <p
                      className="
                        mt-5
                        text-gray-300
                        transition-all
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {skill}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
