"use client";

import { usePathname } from "next/navigation";

import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

export default function SiteChrome({
  position = "top",
}) {
  const pathname = usePathname();

  const isFlowTest =
    pathname === "/flowtest" ||
    pathname.startsWith("/flowtest/");

  if (isFlowTest) {
    return null;
  }

  if (position === "bottom") {
    return (
      <>
        <Footer />
        <BackToTop />
      </>
    );
  }

  return <Navbar />;
}