"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";

import { personalData } from "@/utils/data/personal-data";

import ContactForm from "./contact-form";

const socials = [
  {
    label: "GitHub",
    href: personalData.github,
    icon: IoLogoGithub,
  },
  {
    label: "LinkedIn",
    href: personalData.linkedIn,
    icon: BiLogoLinkedin,
  },
  {
    label: "Instagram",
    href: personalData.twitter,
    icon: BsInstagram,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-b
        border-white/[0.08]
        py-20
        sm:py-24
        lg:py-32
      "
    >
      {/* =========================
          AMBIENT BACKGROUND
      ========================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[6%]
          top-[16%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-white/[0.018]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[8%]
          right-[8%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#16f2b3]/[0.012]
          blur-[140px]
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
        {/* =========================
            HEADER
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            grid
            gap-8
            border-b
            border-white/[0.08]
            pb-10
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
                01
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
                Contact
              </span>
            </div>

            <h1
              className="
                mt-8
                max-w-5xl
                text-[clamp(52px,7vw,100px)]
                font-semibold
                leading-[0.92]
                tracking-[-0.075em]
                text-white
              "
            >
              Let&apos;s build
              <br />
              <span className="text-gray-400">
                something useful.
              </span>
            </h1>
          </div>

          <p
            className="
              max-w-md
              text-[15px]
              leading-7
              text-gray-300
            "
          >
            I&apos;m open to Software QA Engineer opportunities,
            freelance work, and collaborations around automation,
            testing, and engineering tools.
          </p>
        </motion.div>

        {/* =========================
            CONTENT
        ========================= */}

        <div
          className="
            grid
            gap-12
            pt-12
            lg:grid-cols-[0.72fr_1.28fr]
            lg:gap-20
            lg:pt-16
          "
        >
          {/* =========================
              CONTACT DETAILS
          ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div
              className="
                border-t
                border-white/[0.08]
              "
            >
              {/* Email */}

              <a
                href={`mailto:${personalData.email}`}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  gap-6
                  border-b
                  border-white/[0.08]
                  py-6
                  transition-colors
                  duration-300
                  hover:bg-white/[0.012]
                "
              >
                <div className="flex items-start gap-4">
                  <FiMail
                    size={16}
                    className="
                      mt-1
                      shrink-0
                      text-gray-400
                      transition-colors
                      duration-200
                      group-hover:text-[#16f2b3]
                    "
                  />

                  <div>
                    <p
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-gray-400
                      "
                    >
                      Email
                    </p>

                    <p
                      className="
                        mt-2
                        break-all
                        text-sm
                        font-medium
                        text-gray-300
                        transition-colors
                        duration-200
                        group-hover:text-white
                      "
                    >
                      {personalData.email}
                    </p>
                  </div>
                </div>

                <FiArrowUpRight
                  size={15}
                  className="
                    shrink-0
                    text-gray-500
                    transition-all
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-white
                  "
                />
              </a>

              {/* Location */}

              <div
                className="
                  flex
                  items-start
                  gap-4
                  border-b
                  border-white/[0.08]
                  py-6
                  transition-colors
                  duration-300
                  hover:bg-white/[0.012]
                "
              >
                <FiMapPin
                  size={16}
                  className="mt-1 shrink-0 text-gray-400"
                />

                <div>
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-gray-400
                    "
                  >
                    Location
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-medium
                      text-gray-300
                    "
                  >
                    {personalData.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}

            <div className="mt-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-gray-400
                "
              >
                Connect
              </p>

              <div className="mt-5 flex flex-wrap gap-5">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        text-[11px]
                        font-medium
                        text-gray-300
                        transition-colors
                        duration-200
                        hover:text-white
                      "
                    >
                      <Icon
                        size={15}
                        className="
                          transition-colors
                          duration-200
                          group-hover:text-[#16f2b3]
                        "
                      />

                      {social.label}

                      <FiArrowUpRight
                        size={11}
                        className="
                          text-gray-600
                          transition-all
                          duration-200
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-gray-400
                        "
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* =========================
              FORM
          ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Form Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -inset-8
                rounded-[32px]
                bg-white/[0.018]
                blur-[70px]
              "
            />

            <div
              className="
                relative
                border
                border-white/[0.08]
                bg-white/[0.008]
                px-6
                py-6
                sm:px-8
                sm:py-8
              "
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-gray-400
                    "
                  >
                    Message
                  </p>

                  <h2
                    className="
                      mt-2
                      text-xl
                      font-medium
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    Start a conversation.
                  </h2>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-[#16f2b3]/20
                    bg-[#16f2b3]/[0.05]
                    px-3
                    py-1
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-[#16f2b3]
                  "
                >
                  Available
                </span>
              </div>

              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}