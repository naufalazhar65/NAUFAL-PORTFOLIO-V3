"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useHero } from "../HeroContext";

import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashboardScreen";
import Keyboard from "./components/Keyboard";

export default function PhoneScreen({ platform = "android" }) {
  const { showSplash, showLogin, showLoading, showDashboard, showKeyboard } =
    useHero();

  const screenKey = getScreenKey({
    showSplash,
    showLogin,
    showLoading,
    showDashboard,
  });

  return (
    <div
      className="
    relative
    flex
    h-full
    flex-col
    overflow-hidden
    bg-[#0d1117]
  "
    >
      <motion.div
        animate={{
          paddingBottom: showKeyboard ? 158 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="flex-1 overflow-hidden"
      >
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
            <CurrentScreen
              showSplash={showSplash}
              showLogin={showLogin}
              showLoading={showLoading}
              showDashboard={showDashboard}
              platform={platform}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <Keyboard
        visible={showKeyboard}
        accent={platform === "ios" ? "#60a5fa" : "#16f2b3"}
      />
    </div>
  );
}

function getScreenKey({ showSplash, showLogin, showLoading, showDashboard }) {
  if (showSplash) {
    return "launch";
  }

  if (showLogin) {
    return "login";
  }

  if (showLoading) {
    return "loading";
  }

  if (showDashboard) {
    return "dashboard";
  }

  return "launch";
}

function CurrentScreen({
  showSplash,
  showLogin,
  showLoading,
  showDashboard,
  platform,
}) {
  if (showSplash) {
    return <SplashScreen platform={platform} />;
  }

  if (showLogin) {
    return <LoginScreen platform={platform} />;
  }

  if (showLoading) {
    return <LoadingScreen platform={platform} />;
  }

  if (showDashboard) {
    return <DashboardScreen platform={platform} />;
  }

  return <SplashScreen platform={platform} />;
}
