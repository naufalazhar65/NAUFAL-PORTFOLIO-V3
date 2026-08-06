"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import AndroidStatusBar from "./components/AndroidStatusBar";
import LoadingOverlay from "./components/LoadingOverlay";
import PhoneFrame from "./components/PhoneFrame";
import SuccessToast from "./components/SuccessToast";
import TouchFinger from "./components/TouchFinger";

import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";

import { DeviceProvider, useDevice } from "./DeviceContext";

export default function DevicePreview({ activeNode }) {
  return (
    <DeviceProvider>
      <PreviewContent activeNode={activeNode} />
    </DeviceProvider>
  );
}

function PreviewContent({ activeNode }) {
  const { usernameRef, passwordRef, loginButtonRef } = useDevice();

  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState(false);

  const [target, setTarget] = useState(null);

  useEffect(() => {
    if (!activeNode) {
      setLoading(false);
      setToast(false);
      setTarget(null);
      return;
    }

    let ref = null;

    switch (activeNode.id) {
      case "inputUsername":
        ref = usernameRef;
        break;

      case "inputPassword":
        ref = passwordRef;
        break;

      case "tapLogin":
        ref = loginButtonRef;
        break;

      default:
        ref = null;
    }

    if (!ref) {
      setTarget(null);
    } else if (ref.current) {
      const rect = ref.current.getBoundingClientRect();

      const parent = ref.current.offsetParent?.getBoundingClientRect();

      if (parent) {
        setTarget({
          x: rect.left - parent.left + rect.width * 0.7,

          y: rect.top - parent.top + rect.height / 2 - 16,

          tap: activeNode.id === "tapLogin",
        });
      }
    }

    if (activeNode.id === "tapLogin") {
      setLoading(true);
      setToast(false);
      return;
    }

    if (activeNode.id === "assertDashboard") {
      setLoading(false);

      setToast(true);

      const timer = setTimeout(() => {
        setToast(false);
      }, 2000);

      return () => clearTimeout(timer);
    }

    setLoading(false);
  }, [activeNode, usernameRef, passwordRef, loginButtonRef]);

  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-gray-500">
        Device Preview
      </p>

      <PhoneFrame>
        <AndroidStatusBar />

        <div
          className="
            relative
            flex-1
            overflow-hidden
            rounded-2xl
            bg-[#0d1117]
          "
        >
          <AnimatePresence>
            {target && <TouchFinger target={target} tap={target.tap} />}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode?.id}
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.03,
              }}
              transition={{
                duration: 0.25,
              }}
              className="h-full"
            >
              <CurrentScreen activeNode={activeNode} />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>{loading && <LoadingOverlay />}</AnimatePresence>

          <AnimatePresence>{toast && <SuccessToast />}</AnimatePresence>
        </div>
      </PhoneFrame>
    </div>
  );
}

function CurrentScreen({ activeNode }) {
  if (!activeNode) {
    return <SplashScreen />;
  }

  switch (activeNode.id) {
    case "launch":
      return <SplashScreen />;

    case "inputUsername":
      return (
        <LoginScreen
          username="naufalazhar"
          showKeyboard
          activeField="username"
        />
      );

    case "inputPassword":
      return (
        <LoginScreen
          username="naufalazhar"
          password="password123"
          showKeyboard
          activeField="password"
        />
      );

    case "tapLogin":
      return (
        <LoginScreen
          tap
          username="naufalazhar"
          password="password123"
          activeField={null}
        />
      );

    case "assertDashboard":
      return <DashboardScreen />;

    default:
      return <SplashScreen />;
  }
}
