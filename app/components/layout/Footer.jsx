"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/flowtest") {
    return null;
  }

  return (
    <footer
      className="
        relative
        mt-24
        border-t
        border-white/[0.08]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-6
          py-16
          sm:px-8
          sm:py-20
          lg:px-8
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-600">
            Software QA · Automation · Mobile · Tooling
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">
            Still testing. Still building.
          </h2>
        </motion.div>

        <div className="my-10 h-px bg-white/[0.08]" />

        <div className="flex flex-col items-start justify-between gap-5 text-[12px] md:flex-row md:items-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Naufal Azhar
          </p>

          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            <Link href="/about" className="text-gray-500 transition-colors duration-200 hover:text-white">
              About
            </Link>
            <Link href="/projects" className="text-gray-500 transition-colors duration-200 hover:text-white">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-500 transition-colors duration-200 hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}