"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function DevicePreview({ activeNode }) {
  const node = activeNode?.data ?? activeNode;

  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-gray-500">
        Device Preview
      </p>

      <div className="rounded-3xl border border-white/10 bg-[#161b22] p-5">
        <div className="mx-auto flex h-[250px] w-[145px] flex-col rounded-[30px] border-4 border-[#30363d] bg-black p-2 shadow-xl">
          <div className="mx-auto mb-2 h-2 w-10 rounded-full bg-[#30363d]" />

          <div className="flex-1 overflow-hidden rounded-2xl bg-[#0d1117]">
            <AnimatePresence mode="wait">
              <motion.div
                key={node?.id}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="h-full"
              >
                <DeviceScreen node={node} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeviceScreen({ node }) {
  if (!node) {
    return <SplashScreen />;
  }

  switch (node.id) {
    case "launch":
      return <SplashScreen />;

    case "inputUsername":
      return (
        <LoginScreen
          username="naufalazhar"
        />
      );

    case "inputPassword":
      return (
        <LoginScreen
          username="naufalazhar"
          password="••••••••"
        />
      );

    case "tapLogin":
      return (
        <LoginScreen
          username="naufalazhar"
          password="••••••••"
          tap
        />
      );

    case "assertDashboard":
      return <DashboardScreen />;

    default:
      return <SplashScreen />;
  }
}

function SplashScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.4,
        }}
        className="mb-5 text-5xl"
      >
        🚀
      </motion.div>

      <h3 className="font-bold text-white">
        FlowTest
      </h3>

      <p className="mt-2 text-xs text-gray-500">
        Loading...
      </p>
    </div>
  );
}

function LoginScreen({
  tap = false,
  username = "",
  password = "",
}) {
  return (
    <div className="p-4">
      <h3 className="mb-5 text-center font-bold text-white">
        Login
      </h3>

      <div className="mb-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white">
        {username || "Username"}
      </div>

      <div className="mb-4 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white">
        {password || "Password"}
      </div>

      <motion.button
        animate={
          tap
            ? {
                scale: [1, 0.92, 1],
              }
            : {}
        }
        transition={{
          duration: 0.35,
        }}
        className="w-full rounded-lg bg-[#16f2b3] py-2 text-xs font-bold text-black"
      >
        Login
      </motion.button>
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="p-4">
      <h3 className="mb-4 text-center font-bold text-white">
        Dashboard
      </h3>

      <motion.div
        initial={{
          y: 15,
        }}
        animate={{
          y: 0,
        }}
        className="space-y-2"
      >
        <div className="rounded-lg bg-[#16f2b3]/20 p-3">
          <p className="text-xs text-[#16f2b3]">
            Automation
          </p>

          <p className="mt-1 text-lg font-bold text-white">
            Passed
          </p>
        </div>

        <div className="rounded-lg bg-white/5 p-3">
          <p className="text-xs text-gray-400">
            Total Tests
          </p>

          <p className="mt-1 text-lg font-bold text-white">
            12
          </p>
        </div>
      </motion.div>
    </div>
  );
}