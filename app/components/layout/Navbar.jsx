"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiDownload,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { personalData } from "@/utils/data/personal-data";

const menus = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* =========================
          DESKTOP / MAIN NAVBAR
      ========================= */}

      <motion.header
        initial={{
          opacity: 0,
          y: -14,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          fixed
          inset-x-0
          top-0
          z-[9999]
          px-4
          sm:px-6
        "
      >
        <div
          className={`
            group
            relative
            mx-auto
            mt-3
            flex
            h-14
            max-w-[1240px]
            items-center
            justify-between
            overflow-hidden
            rounded-full
            border
            transition-all
            duration-500

            ${
              scrolled
                ? `
                  border-white/[0.13]
                  bg-white/[0.035]
                  backdrop-blur-[24px]
                  backdrop-saturate-[180%]
                  shadow-[0_10px_50px_rgba(0,0,0,.22),0_0_40px_rgba(255,255,255,.018)]
                `
                : `
                  border-white/[0.07]
                  bg-white/[0.015]
                  backdrop-blur-[14px]
                  backdrop-saturate-[130%]
                `
            }
          `}
        >
          {/* Top Highlight */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/25
              to-transparent
              opacity-70
            "
          />

          {/* Inner Glow */}

          <div
            className={`
              pointer-events-none
              absolute
              inset-0
              rounded-full
              bg-gradient-to-b
              from-white/[0.055]
              via-transparent
              to-transparent
              transition-opacity
              duration-500
              ${
                scrolled
                  ? "opacity-100"
                  : "opacity-50"
              }
            `}
          />

          {/* Center Glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-20
              w-72
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.02]
              blur-2xl
            "
          />

          {/* Content */}

          <div
            className="
              relative
              z-10
              flex
              w-full
              items-center
              justify-between
              px-4
              sm:px-5
            "
          >
            {/* =========================
                LOGO
            ========================= */}

            <Link
              href="/"
              className="
                group/logo
                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[11px]
                  font-bold
                  text-black
                  shadow-[0_6px_20px_rgba(255,255,255,.08)]
                  transition-all
                  duration-300
                  group-hover/logo:rotate-6
                  group-hover/logo:scale-105
                "
              >
                N
              </span>

              <span
                className="
                  text-sm
                  font-semibold
                  tracking-[-0.03em]
                  text-white
                "
              >
                Naufal
                <span className="text-[#16f2b3]">
                  .
                </span>
              </span>
            </Link>

            {/* =========================
                DESKTOP MENU
            ========================= */}

            <nav className="hidden items-center gap-1 md:flex">
              {menus.map((menu) => {
                const active =
                  pathname === menu.href ||
                  (menu.href !== "/" &&
                    pathname.startsWith(
                      `${menu.href}/`,
                    ));

                return (
                  <Link
                    key={menu.name}
                    href={menu.href}
                    className="
                      group/menu
                      relative
                      px-3.5
                      py-2
                      text-[12px]
                      font-medium
                    "
                  >
                    {/* Active */}

                    {active && (
                      <motion.span
                        layoutId="navbar-active"
                        className="
                          absolute
                          inset-0
                          rounded-full
                          border
                          border-white/[0.08]
                          bg-white/[0.05]
                          shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_0_20px_rgba(255,255,255,.015)]
                        "
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                      />
                    )}

                    {/* Hover Surface */}

                    {!active && (
                      <span
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          rounded-full
                          bg-white/[0.02]
                          opacity-0
                          transition-opacity
                          duration-200
                          group-hover/menu:opacity-100
                        "
                      />
                    )}

                    <span
                      className={`
                        relative
                        z-10
                        transition-colors
                        duration-200
                        ${
                          active
                            ? "text-white"
                            : "text-gray-400 group-hover/menu:text-gray-100"
                        }
                      `}
                    >
                      {menu.name}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* =========================
                RIGHT
            ========================= */}

            <div className="flex items-center gap-3">
              <Link
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group/resume
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  px-2.5
                  py-1.5
                  text-[11px]
                  font-medium
                  text-gray-400
                  transition-all
                  duration-200
                  hover:bg-white/[0.03]
                  hover:text-white
                  lg:flex
                "
              >
                <FiDownload
                  size={13}
                  className="transition-transform duration-200 group-hover/resume:-translate-y-0.5"
                />

                Resume

                <FiArrowUpRight
                  size={11}
                  className="
                    text-gray-500
                    transition-all
                    duration-200
                    group-hover/resume:-translate-y-0.5
                    group-hover/resume:translate-x-0.5
                    group-hover/resume:text-gray-300
                  "
                />
              </Link>

              {/* Mobile Menu Button */}

              <button
                type="button"
                onClick={() =>
                  setOpen((value) => !value)
                }
                aria-label={
                  open
                    ? "Close navigation"
                    : "Open navigation"
                }
                aria-expanded={open}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  text-gray-400
                  transition-all
                  duration-200
                  hover:bg-white/[0.05]
                  hover:text-white
                  md:hidden
                "
              >
                {open ? (
                  <FiX size={19} />
                ) : (
                  <FiMenu size={19} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* =========================
          MOBILE MENU
      ========================= */}

      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[9997]
              bg-black/40
              backdrop-blur-md
              md:hidden
            "
            onClick={() => setOpen(false)}
          />

          {/* Menu */}

          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed
              left-4
              right-4
              top-[74px]
              z-[9998]
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.1]
              bg-[#060606]/80
              backdrop-blur-[24px]
              backdrop-saturate-[180%]
              shadow-[0_25px_80px_rgba(0,0,0,.4),0_0_50px_rgba(255,255,255,.025)]
              md:hidden
            "
          >
            {/* Mobile Glow */}

            <div
              className="
                pointer-events-none
                absolute
                right-[-60px]
                top-[-60px]
                h-40
                w-40
                rounded-full
                bg-white/[0.035]
                blur-3xl
              "
            />

            <nav className="relative z-10 p-3">
              {menus.map((menu) => {
                const active =
                  pathname === menu.href ||
                  (menu.href !== "/" &&
                    pathname.startsWith(
                      `${menu.href}/`,
                    ));

                return (
                  <Link
                    key={menu.name}
                    href={menu.href}
                    onClick={() =>
                      setOpen(false)
                    }
                    className={`
                      group/mobile
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      px-4
                      py-4
                      text-sm
                      transition-all
                      duration-200

                      ${
                        active
                          ? "bg-white/[0.07] text-white"
                          : "text-gray-400 hover:bg-white/[0.035] hover:text-white"
                      }
                    `}
                  >
                    <span>
                      {menu.name}
                    </span>

                    {active ? (
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#16f2b3]
                          shadow-[0_0_10px_rgba(22,242,179,.25)]
                        "
                      />
                    ) : (
                      <FiArrowUpRight
                        size={13}
                        className="
                          text-gray-600
                          opacity-0
                          transition-all
                          duration-200
                          group-hover/mobile:translate-x-0.5
                          group-hover/mobile:-translate-y-0.5
                          group-hover/mobile:text-gray-300
                          group-hover/mobile:opacity-100
                        "
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-white/[0.08] px-3 pb-3 pt-3">
  <Link
    href={personalData.resume}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => setOpen(false)}
    className="
      flex
      items-center
      justify-between
      rounded-2xl
      border
      border-[#16f2b3]/20
      bg-[#16f2b3]/[0.05]
      px-4
      py-3.5
      text-sm
      font-medium
      text-white
      transition-all
      duration-200
      hover:border-[#16f2b3]/30
      hover:bg-[#16f2b3]/[0.08]
    "
  >
    <span className="flex items-center gap-3">
      <FiDownload
        size={15}
        className="text-[#16f2b3]"
      />

      Download Resume
    </span>

    <FiArrowUpRight
      size={13}
      className="text-gray-500"
    />
  </Link>
</div>
          </motion.div>
        </>
      )}
    </>
  );
}