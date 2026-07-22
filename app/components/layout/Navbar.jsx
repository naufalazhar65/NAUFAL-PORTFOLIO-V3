// "use client";

// // @flow strict

// import Link from "next/link";
// import { motion, AnimatePresence, useMotionValue } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
// import { FiDownload } from "react-icons/fi";
// import { usePathname } from "next/navigation";

// import { personalData } from "@/utils/data/personal-data";

// const menus = [
//   {
//     name: "Home",
//     href: "/",
//   },
//   {
//     name: "About",
//     href: "/about",
//   },
//   {
//     name: "Skills",
//     href: "/skills",
//   },
//   {
//     name: "Projects",
//     href: "/projects",
//   },
//   {
//     name: "Contact",
//     href: "/contact",
//   },
// ];

// export default function Navbar() {
//   const pathname = usePathname();

//   const [open, setOpen] = useState(false);

//   const [scrolled, setScrolled] = useState(false);

//   const [visible, setVisible] = useState(true);

//   const lastScroll = useRef(0);

//   const mouseX = useMotionValue(-200);
//   const mouseY = useMotionValue(-200);

//   useEffect(() => {
//     const handleScroll = () => {
//       const current = window.scrollY;

//       setScrolled(current > 30);

//       if (current < 40) {
//         setVisible(true);
//       } else {
//         if (current > lastScroll.current) {
//           setVisible(false);
//         } else {
//           setVisible(true);
//         }
//       }

//       lastScroll.current = current;
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();

//     mouseX.set(e.clientX - rect.left);

//     mouseY.set(e.clientY - rect.top);
//   };

//   const handleMouseLeave = () => {
//     mouseX.set(-200);
//     mouseY.set(-200);
//   };

//   return (
//     <>
//       <AnimatePresence>
//         {visible && (
//           <motion.nav
//             initial={{
//               y: -120,
//               opacity: 0,
//             }}
//             animate={{
//               y: 0,
//               opacity: 1,
//             }}
//             exit={{
//               y: -120,
//               opacity: 0,
//             }}
//             transition={{
//               duration: 0.45,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//             className="fixed inset-x-0 top-5 z-[9999] flex justify-center px-4"
//           >
//             <motion.div
//               onMouseMove={handleMouseMove}
//               onMouseLeave={handleMouseLeave}
//               animate={{
//                 width: scrolled ? "88%" : "96%",
//                 height: scrolled ? 60 : 72,
//               }}
//               transition={{
//                 duration: 0.35,
//               }}
//               className={`
//   relative
//   flex
//   w-full
//   max-w-7xl
//   items-center
//   justify-between
//   overflow-hidden
//   rounded-full
//   border
//   px-7
//   transition-all
//   duration-500

//   ${
//     scrolled
//       ? `
//         border-white/10
//         bg-[#0d1224]/45
//         backdrop-blur-[30px]
//         shadow-[0_20px_60px_rgba(0,0,0,.30)]
//       `
//       : `
//         border-white/10
//         bg-[#0d1224]/20
//         backdrop-blur-[20px]
//       `
//   }
// `}
//             >

//                           {/* Glow Effect */}

//               <motion.div
//                 className="
//                   pointer-events-none
//                   absolute
//                   h-52
//                   w-52
//                   rounded-full
//                   bg-[#16f2b3]/10
//                   blur-3xl
//                 "
//                 style={{
//                   left: mouseX,
//                   top: mouseY,
//                   translateX: "-50%",
//                   translateY: "-50%",
//                 }}
//               />

//               {/* Logo */}

//               <Link
//                 href="/"
//                 className="
//                   relative
//                   z-10
//                   text-2xl
//                   font-bold
//                   tracking-wide
//                   text-white
//                   transition-all
//                   duration-300
//                   hover:scale-105
//                 "
//               >
//                 Naufal
//                 <span className="text-[#16f2b3]">.</span>
//               </Link>

//               {/* Desktop Menu */}

//               <ul className="relative z-10 hidden items-center gap-2 md:flex">
//                 {menus.map((menu) => {
//                   const active = pathname === menu.href;

//                   return (
//                     <li key={menu.name}>
//                       <Link
//                         href={menu.href}
//                         className={`
//                           relative
//                           rounded-full
//                           px-5
//                           py-2
//                           text-sm
//                           font-medium
//                           transition-all
//                           duration-300

//                           ${
//                             active
//                               ? "text-[#16f2b3]"
//                               : "text-gray-300 hover:text-white"
//                           }
//                         `}
//                       >
//                         {active && (
//                           <motion.div
//                             layoutId="navbar-pill"
//                             transition={{
//                               type: "spring",
//                               stiffness: 350,
//                               damping: 30,
//                             }}
//                             className="
//                               absolute
//                               inset-0
//                               rounded-full
//                               border
//                               border-[#16f2b3]/20
//                               bg-white/5
//                             "
//                           />
//                         )}

//                         <span className="relative z-10">
//                           {menu.name}
//                         </span>
//                       </Link>
//                     </li>
//                   );
//                 })}
//               </ul>

//               {/* Resume */}

//               <Link
//                 href={personalData.resume}
//                 target="_blank"
//                 className="
//                   relative
//                   z-10
//                   hidden
//                   items-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-[#16f2b3]/30
//                   bg-[#16f2b3]/10
//                   px-5
//                   py-2.5
//                   text-sm
//                   font-semibold
//                   text-[#16f2b3]
//                   transition-all
//                   duration-300
//                   hover:scale-105
//                   hover:border-[#16f2b3]
//                   hover:bg-[#16f2b3]
//                   hover:text-black
//                   hover:shadow-[0_0_30px_rgba(22,242,179,.35)]
//                   lg:flex
//                 "
//               >
//                 <FiDownload size={16} />
//                 Resume
//               </Link>

//               {/* Mobile Button */}

//               <button
//                 onClick={() => setOpen(!open)}
//                 aria-label="Toggle Menu"
//                 className="relative z-10 text-white md:hidden"
//               >
//                 {open ? <HiX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
//               </button>
//             </motion.div>
//           </motion.nav>
//         )}
//       </AnimatePresence>

//       {/* Mobile Menu */}

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: -20,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             exit={{
//               opacity: 0,
//               y: -20,
//             }}
//             transition={{
//               duration: 0.3,
//             }}
//             className="
//               fixed
//               top-24
//               left-4
//               right-4
//               z-[9998]
//               rounded-3xl
//               border
//               border-white/10
//               bg-[#0d1224]/95
//               shadow-2xl
//               backdrop-blur-2xl
//               md:hidden
//             "
//           >
//             <div className="flex flex-col gap-2 p-4">
//               {menus.map((menu) => (
//                 <Link
//                   key={menu.name}
//                   href={menu.href}
//                   onClick={() => setOpen(false)}
//                   className={`
//                     rounded-xl
//                     px-4
//                     py-4
//                     transition-all

//                     ${
//                       pathname === menu.href
//                         ? "bg-white/10 text-[#16f2b3]"
//                         : "text-white hover:bg-white/5"
//                     }
//                   `}
//                 >
//                   {menu.name}
//                 </Link>
//               ))}

//               <Link
//                 href={personalData.resume}
//                 target="_blank"
//                 onClick={() => setOpen(false)}
//                 className="
//                   mt-2
//                   flex
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-xl
//                   bg-[#16f2b3]
//                   py-4
//                   font-semibold
//                   text-black
//                 "
//               >
//                 <FiDownload size={18} />
//                 Resume
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

// @flow strict

import Link from "next/link";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
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
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);

  // Mouse position for glow
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 30);

      if (current <= 20) {
        setVisible(true);
      } else {
        if (current > lastScrollY.current) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }

      lastScrollY.current = current;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-300);
    mouseY.set(-300);
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{
              y: -120,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -120,
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-x-0 top-5 z-[9999] flex justify-center px-4"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                width: scrolled ? "88%" : "95%",
                height: scrolled ? 60 : 72,
              }}
              transition={{
                duration: 0.35,
              }}
              className={`
                relative
                flex
                w-full
                max-w-7xl
                items-center
                justify-between
                overflow-hidden
                rounded-full
                border
                border-white/10
                px-7
                transition-all
                duration-500

                ${
                  scrolled
                    ? `
                      bg-[#0d1224]/35
                      backdrop-blur-[28px]
                      shadow-[0_15px_60px_rgba(0,0,0,.28)]
                    `
                    : `
                      bg-[#0d1224]/15
                      backdrop-blur-[18px]
                    `
                }
              `}
            >
              {/* Glass Highlight */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-b
                  from-white/10
                  via-white/[0.03]
                  to-transparent
                "
              />

              {/* Glass Border */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  ring-1
                  ring-white/10
                "
              />

              {/* Mouse Glow */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  h-72
                  w-72
                  rounded-full
                  bg-white/10
                  blur-[90px]
                "
                style={{
                  left: mouseX,
                  top: mouseY,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              />

              {/* Logo */}

              <Link
                href="/"
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-2
                  text-2xl
                  font-bold
                  tracking-wide
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <motion.div
                  whileHover={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-[#16f2b3]
                    to-cyan-500
                    font-bold
                    text-black
                  "
                >
                  N
                </motion.div>

                <span>
                  Portfolio
                  <span className="text-[#16f2b3]">.</span>
                </span>
              </Link>

              {/* Desktop Menu */}

              <ul className="relative z-10 hidden items-center gap-2 md:flex">
                {menus.map((menu) => {
                  const active = pathname === menu.href;

                  return (
                    <li key={menu.name}>
                      <Link
                        href={menu.href}
                        className="
                          relative
                          px-5
                          py-2
                          text-sm
                          font-medium
                          transition-all
                          duration-300
                        "
                      >
                        {active && (
                          <motion.div
                            layoutId="active-navbar"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 28,
                            }}
                            className="
                              absolute
                              inset-0
                              rounded-full
                              border
                              border-white/10
                              bg-white/10
                            "
                          />
                        )}

                        <span
                          className={`
                            relative
                            z-10
                            transition-all
                            duration-300

                            ${
                              active
                                ? "text-[#16f2b3]"
                                : "text-gray-300 hover:text-white"
                            }
                          `}
                        >
                          {menu.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Resume */}

              <Link
                href={personalData.resume}
                target="_blank"
                className="
                  relative
                  z-10
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#16f2b3]/30
                  bg-[#16f2b3]/10
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-[#16f2b3]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:border-[#16f2b3]
                  hover:bg-[#16f2b3]
                  hover:text-black
                  hover:shadow-[0_0_35px_rgba(22,242,179,.35)]
                  lg:flex
                "
              >
                <FiDownload size={17} />
                Resume
              </Link>

              {/* Mobile Button */}

              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu"
                className="
                  relative
                  z-10
                  flex
                  items-center
                  justify-center
                  text-white
                  md:hidden
                "
              >
                {open ? <HiX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
              </button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <>
            {/* Background Blur */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="
                fixed
                inset-0
                z-[9997]
                bg-black/30
                backdrop-blur-sm
                md:hidden
              "
            />

            {/* Floating Menu */}

            <motion.div
              initial={{
                opacity: 0,
                y: -25,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.95,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                fixed
                top-24
                left-4
                right-4
                z-[9998]
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#0d1224]/70
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(0,0,0,.45)]
                md:hidden
              "
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
                  pointer-events-none
                "
              />

              <div className="relative flex flex-col p-4">
                {menus.map((menu) => (
                  <Link
                    key={menu.name}
                    href={menu.href}
                    onClick={() => setOpen(false)}
                    className={`
                      rounded-2xl
                      px-5
                      py-4
                      transition-all
                      duration-300

                      ${
                        pathname === menu.href
                          ? "bg-white/10 text-[#16f2b3]"
                          : "text-white hover:bg-white/5"
                      }
                    `}
                  >
                    {menu.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
