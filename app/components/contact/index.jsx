"use client";

// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import ContactForm from "./contact-form";

import { motion } from "framer-motion";

import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

function ContactSection() {
  return (
    <section id="contact" className="relative my-24 border-t border-[#25213b]">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-44 w-44 -translate-x-1/2 rounded-full bg-pink-500/20 blur-[120px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="uppercase tracking-[0.4em] text-[#16f2b3] text-sm">
          Contact
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
          Let's Build Something Together
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-8">
          I'm currently open to Software QA Engineer opportunities, freelance
          work, and collaboration on interesting projects. If you have something
          in mind, let's connect.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <div className="flex items-center gap-5">
              <div className="bg-[#1a1f3a] p-4 rounded-xl">
                <MdAlternateEmail className="text-[#16f2b3]" size={28} />
              </div>

              <div>
                <p className="text-gray-400 text-sm">Email</p>

                <p className="text-white text-lg">{personalData.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-[#1a1f3a] p-4 rounded-xl">
                <CiLocationOn className="text-[#16f2b3]" size={28} />
              </div>

              <div>
                <p className="text-gray-400 text-sm">Location</p>

                <p className="text-white text-lg">{personalData.address}</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-5 mt-12">
            <Link href={personalData.github} target="_blank" className="group">
              <div
                className="p-4 rounded-xl bg-[#161b33] border border-[#2d355d]
                  transition-all duration-300
                  hover:border-[#16f2b3]
                  hover:-translate-y-2"
              >
                <IoLogoGithub
                  size={28}
                  className="text-white group-hover:text-[#16f2b3]"
                />
              </div>
            </Link>

            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="group"
            >
              <div
                className="p-4 rounded-xl bg-[#161b33] border border-[#2d355d]
                  transition-all duration-300
                  hover:border-[#16f2b3]
                  hover:-translate-y-2"
              >
                <BiLogoLinkedin
                  size={28}
                  className="text-white group-hover:text-[#16f2b3]"
                />
              </div>
            </Link>

            <Link href={personalData.twitter} target="_blank" className="group">
              <div
                className="p-4 rounded-xl bg-[#161b33] border border-[#2d355d]
                  transition-all duration-300
                  hover:border-[#16f2b3]
                  hover:-translate-y-2"
              >
                <BsInstagram
                  size={28}
                  className="text-white group-hover:text-[#16f2b3]"
                />
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#2d355d]
          bg-[#11152c]/80 backdrop-blur-xl p-8"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
