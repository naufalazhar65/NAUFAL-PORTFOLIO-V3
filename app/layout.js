import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";

import "react-toastify/dist/ReactToastify.css";
import "./css/card.scss";
import "./css/globals.scss";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import PageTransition from "./components/layout/PageTransition";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://portnaufal.netlify.app/"),

  title: {
    default: "Naufal Azhar | Portfolio",
    template: "Naufal | %s",
  },

  description:
    "Portfolio of Naufal Azhar, Software Quality Assurance Engineer specializing in Manual Testing, Automation Testing, API Testing, Performance Testing, and Mobile Testing.",

  keywords: [
    "Software QA",
    "Software Quality Assurance",
    "Automation Testing",
    "Manual Testing",
    "API Testing",
    "Performance Testing",
    "Cypress",
    "Selenium",
    "Playwright",
    "WebdriverIO",
    "Appium",
    "Naufal Azhar",
  ],

  authors: [
    {
      name: "Naufal Azhar",
    },
  ],

  creator: "Naufal Azhar",

  openGraph: {
    title: "Naufal Azhar | Software Quality Assurance Engineer",
    description:
      "Software QA Engineer specialized in automation, API, performance, and mobile testing.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Naufal Azhar",
    description: "Software Quality Assurance Engineer Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ToastContainer /> */}

        {/* <AnimatedGrid /> */}

        <Navbar />

        <main
          className="
    relative
    mx-auto
    w-full
    max-w-[1400px]
    px-5
    pt-24
    sm:px-8
    lg:px-10
  "
        >
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />

        <BackToTop />
      </body>

      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
