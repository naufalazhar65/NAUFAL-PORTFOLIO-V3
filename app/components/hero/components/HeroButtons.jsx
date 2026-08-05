"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

import { fadeUp } from "@/app/lib/motion";

import Button from "@/app/components/ui/Button";

export default function HeroButtons() {
  return (
    <motion.div
      variants={fadeUp}
      className="mt-10 flex flex-wrap items-center gap-4"
    >
      {/* Download CV */}

      <Button href="/Naufal_Azhar_CV.pdf" target="_blank">
        <MdDownload />
        Download CV
      </Button>

      <Button href="#contact" variant="secondary">
        <RiContactsFill />
        Contact Me
      </Button>
    </motion.div>
  );
}
