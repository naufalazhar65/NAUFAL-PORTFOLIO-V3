"use client";

// @flow strict

import Link from "next/link";
import { motion } from "framer-motion";

import { personalData } from "@/utils/data/personal-data";

import ContactForm from "./contact-form";

import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative
        my-24
        overflow-visible

        lg:my-28
      "
    >
      {/* ========================= */}
      {/* BACKGROUND GLOW */}
      {/* ========================= */}

      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-0

          h-80
          w-80

          -translate-x-1/2

          rounded-full

          bg-[#16f2b3]/8

          blur-[140px]
        "
      />

      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          mb-14
          text-center
        "
      >
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[5px]
            text-[#16f2b3]
          "
        >
          Contact
        </p>

        <h2
          className="
            mt-5

            text-4xl
            font-black
            leading-tight
            tracking-tight

            text-white

            md:text-5xl
          "
        >
          Let's Build Something Together
        </h2>

        <p
          className="
            mx-auto
            mt-5

            max-w-2xl

            text-base
            leading-8

            text-gray-400

            md:text-lg
          "
        >
          I'm currently open to Software QA Engineer opportunities, freelance
          work, and collaboration on interesting projects. If you have
          something in mind, let's connect.
        </p>
      </motion.div>

      {/* ========================= */}
      {/* CONTENT */}
      {/* ========================= */}

      <div
        className="
          relative

          grid
          items-center
          gap-12

          lg:grid-cols-2
          lg:gap-16
        "
      >
        {/* ========================= */}
        {/* LEFT */}
        {/* ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Contact Information */}

          <div className="space-y-6">
            {/* Email */}

            <div
              className="
                flex
                items-center
                gap-5

                rounded-2xl

                border
                border-white/[0.08]

                bg-white/[0.03]

                p-5

                transition-colors
                duration-300

                hover:border-[#16f2b3]/20
                hover:bg-white/[0.04]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center

                  rounded-xl

                  bg-[#16f2b3]/10

                  text-[#16f2b3]
                "
              >
                <MdAlternateEmail size={25} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="mt-1 text-base font-medium text-white">
                  {personalData.email}
                </p>
              </div>
            </div>

            {/* Location */}

            <div
              className="
                flex
                items-center
                gap-5

                rounded-2xl

                border
                border-white/[0.08]

                bg-white/[0.03]

                p-5

                transition-colors
                duration-300

                hover:border-[#16f2b3]/20
                hover:bg-white/[0.04]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center

                  rounded-xl

                  bg-[#16f2b3]/10

                  text-[#16f2b3]
                "
              >
                <CiLocationOn size={26} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="mt-1 text-base font-medium text-white">
                  {personalData.address}
                </p>
              </div>
            </div>
          </div>

          {/* Social */}

          <div className="mt-10">
            <p
              className="
                mb-4

                text-xs
                font-semibold
                uppercase
                tracking-[3px]

                text-gray-500
              "
            >
              Connect With Me
            </p>

            <div className="flex gap-3">
              {/* GitHub */}

              <Link
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group"
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-white/[0.08]

                    bg-white/[0.03]

                    transition-all
                    duration-300

                    group-hover:-translate-y-1
                    group-hover:border-[#16f2b3]/30
                    group-hover:bg-[#16f2b3]/10
                  "
                >
                  <IoLogoGithub
                    size={23}
                    className="
                      text-white

                      transition-colors
                      duration-300

                      group-hover:text-[#16f2b3]
                    "
                  />
                </div>
              </Link>

              {/* LinkedIn */}

              <Link
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group"
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-white/[0.08]

                    bg-white/[0.03]

                    transition-all
                    duration-300

                    group-hover:-translate-y-1
                    group-hover:border-[#16f2b3]/30
                    group-hover:bg-[#16f2b3]/10
                  "
                >
                  <BiLogoLinkedin
                    size={23}
                    className="
                      text-white

                      transition-colors
                      duration-300

                      group-hover:text-[#16f2b3]
                    "
                  />
                </div>
              </Link>

              {/* Instagram */}

              <Link
                href={personalData.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group"
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-white/[0.08]

                    bg-white/[0.03]

                    transition-all
                    duration-300

                    group-hover:-translate-y-1
                    group-hover:border-[#16f2b3]/30
                    group-hover:bg-[#16f2b3]/10
                  "
                >
                  <BsInstagram
                    size={21}
                    className="
                      text-white

                      transition-colors
                      duration-300

                      group-hover:text-[#16f2b3]
                    "
                  />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ========================= */}
        {/* RIGHT — CONTACT FORM */}
        {/* ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative

            rounded-3xl

            border
            border-white/[0.08]

            bg-white/[0.03]

            p-6

            backdrop-blur-xl

            md:p-8
          "
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;