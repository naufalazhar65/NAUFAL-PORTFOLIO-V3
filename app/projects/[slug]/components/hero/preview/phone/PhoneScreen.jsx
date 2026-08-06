"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useHero } from "../HeroContext";

import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import LoadingScreen from "./screens/LoadingScreen";

export default function PhoneScreen() {
  const { currentStep } = useHero();

  const screenKey = getScreenKey(currentStep.id);

  return (
    <div className="relative flex-1 overflow-hidden bg-[#0d1117]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={screenKey}
          initial={{
            opacity: 0,
            x: 24,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -24,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="h-full"
        >
          <CurrentScreen step={currentStep.id} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function getScreenKey(step) {
  switch (step) {
    case "username":
    case "password":
      return "login";

    case "tap":
      return "loading";

    case "dashboard":
      return "dashboard";

    case "launch":
    default:
      return "launch";
  }
}

function CurrentScreen({ step }) {
  switch (step) {
    case "launch":
      return <SplashScreen />;

    case "username":
      return <LoginScreen username="naufalazhar" activeField="username" />;

    case "password":
      return (
        <LoginScreen
          username="naufalazhar"
          password="••••••••"
          activeField="password"
        />
      );

    case "tap":
      return <LoadingScreen />;

    case "dashboard":
      return <DashboardScreen />;

    default:
      return <SplashScreen />;
  }
}
