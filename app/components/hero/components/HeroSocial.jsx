"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

import { personalData } from "@/utils/data/personal-data";
import { fadeUp } from "@/app/lib/motion";



export default function HeroSocial() {
  return (
    <motion.div
      variants={fadeUp}
      className="my-12 flex items-center gap-5"
    >
      <Link
        href={personalData.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="
          text-heading
          transition-all
          duration-300
          ease-smooth
          hover:-translate-y-1
          hover:scale-105
        "
      >
        <BsGithub size={30} />
      </Link>

      <Link
        href={personalData.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="
          text-[#0A66C2]
          transition-all
          duration-300
          ease-smooth
          hover:-translate-y-1
          hover:scale-110
        "
      >
        <BsLinkedin size={30} />
      </Link>

      <Link
        href={personalData.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="
          text-[#C13584]
          transition-all
          duration-300
          ease-smooth
          hover:-translate-y-1
          hover:scale-110
        "
      >
        <BsInstagram size={30} />
      </Link>
    </motion.div>
  );
}