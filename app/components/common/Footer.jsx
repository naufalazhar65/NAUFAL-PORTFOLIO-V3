"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const socials = [
  {
    name: "GitHub",
    icon: <BsGithub size={22} />,
    href: "https://github.com/naufalazhar65",
  },
  {
    name: "LinkedIn",
    icon: <BsLinkedin size={22} />,
    href: "https://linkedin.com/in/YOUR_USERNAME",
  },
  {
    name: "Instagram",
    icon: <BsInstagram size={22} />,
    href: "https://instagram.com/YOUR_USERNAME",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-40 border-t border-white/10">
      {/* Glow Background */}
      <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[#16f2b3]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-wide text-white">
            Thanks for stopping by
            <span className="text-[#16f2b3]">.</span>
          </h2>
        </motion.div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Naufal Azhar. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#about" className="hover:text-[#16f2b3] transition">
              About
            </Link>

            <Link href="#projects" className="hover:text-[#16f2b3] transition">
              Projects
            </Link>

            <Link href="#contact" className="hover:text-[#16f2b3] transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
