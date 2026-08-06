"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useHero } from "../HeroContext";

export default function DeviceScreen({ platform = "android" }) {
  const { activeStep } = useHero();

  const accent = platform === "ios" ? "#60a5fa" : "#16f2b3";

  return (
    <div className="flex h-full flex-col bg-[#0b1220]">
      {/* Status */}

      <div className="flex items-center justify-between px-4 pt-4 text-[9px] text-white/70">
        <span>09:41</span>

        <div className="flex items-center gap-1">
          <div
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: accent,
            }}
          />

          <div className="h-1.5 w-1.5 rounded-full bg-white/40" />

          <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center p-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{
              opacity: 0,
              y: 10,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 1.05,
            }}
            transition={{
              duration: 0.35,
            }}
            className="w-full"
          >
            <CurrentScene step={activeStep} accent={accent} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function CurrentScene({ step, accent }) {
  switch (step) {
    case 0:
      return <Splash accent={accent} />;

    case 1:
      return <Login accent={accent} username />;

    case 2:
      return <Login accent={accent} username password />;

    case 3:
      return <Login accent={accent} username password loading />;

    case 4:
      return <Dashboard accent={accent} />;

    default:
      return <Splash accent={accent} />;
  }
}

function Splash({ accent }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl text-2xl font-black text-black"
        style={{
          background: accent,
        }}
      >
        F
      </motion.div>

      <h3 className="text-sm font-bold text-white">FlowTest</h3>

      <p className="mt-2 text-[11px] text-gray-400">Initializing...</p>
    </div>
  );
}

function Login({ accent, username, password, loading }) {
  return (
    <div>
      <h3 className="mb-5 text-center text-sm font-bold text-white">Login</h3>

      <Field
        accent={accent}
        active={!password}
        value={username ? "naufalazhar" : ""}
        placeholder="Username"
      />

      <Field
        accent={accent}
        active={password}
        value={password ? "••••••••••••" : ""}
        placeholder="Password"
      />

      <motion.button
        animate={
          loading
            ? {
                scale: [1, 0.96, 1],
              }
            : {}
        }
        transition={{
          repeat: Infinity,
          duration: 0.7,
        }}
        className="mt-4 w-full rounded-xl py-2 text-[11px] font-semibold text-black"
        style={{
          background: accent,
        }}
      >
        Login
      </motion.button>
    </div>
  );
}

function Dashboard({ accent }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
        Welcome
      </p>

      <h3 className="mt-1 text-lg font-bold text-white">Naufal</h3>

      <div className="mt-5 grid grid-cols-2 gap-2">
        {["Passed", "Duration", "Device", "Success"].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-white/10 bg-white/5 p-3"
          >
            <p className="text-[9px] text-gray-400">{item}</p>

            <p
              className="mt-2 text-sm font-bold"
              style={{
                color: accent,
              }}
            >
              ✓
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({ value, placeholder, active, accent }) {
  return (
    <div
      className={`
        mb-3
        rounded-xl
        border
        px-3
        py-2
        text-[11px]
        ${active ? "bg-white/10" : "border-white/10 bg-white/5"}
      `}
      style={
        active
          ? {
              borderColor: accent,
            }
          : undefined
      }
    >
      {value || placeholder}
    </div>
  );
}
