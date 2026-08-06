"use client";

import { motion } from "framer-motion";

import PhoneButton from "../components/PhoneButton";
import PhoneCard from "../components/PhoneCard";
import PhoneInput from "../components/PhoneInput";
import StatusChip from "../components/StatusChip";

export default function LoginScreen({
  username = "",
  password = "",
  activeField,
  loading = false,
}) {
  return (
    <div
      className="
        flex
        h-full
        flex-col
        justify-center
        px-5
      "
    >
      <PhoneCard className="p-5">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.35,
          }}
          className="mb-6 text-center"
        >
          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-[#16f2b3]/30
              bg-[#16f2b3]/10
              shadow-[0_0_30px_rgba(22,242,179,.15)]
            "
          >
            <span className="text-2xl font-black text-[#16f2b3]">
              F
            </span>
          </div>

          <h2 className="mt-4 text-lg font-bold text-white">
            Welcome Back
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Continue your automation session
          </p>
        </motion.div>

        {/* Username */}

        <PhoneInput
          label="Username"
          value={username}
          placeholder="Enter username"
          active={activeField === "username"}
        />

        {/* Password */}

        <div className="mt-4">
          <PhoneInput
            label="Password"
            value={password}
            password
            placeholder="••••••••"
            active={activeField === "password"}
          />
        </div>

        {/* Button */}

        <div className="mt-6">
          <PhoneButton loading={loading}>
            Login
          </PhoneButton>
        </div>

        {/* Footer */}

        <div className="mt-5 flex justify-center">
          <StatusChip>
            Secure Login Enabled
          </StatusChip>
        </div>
      </PhoneCard>
    </div>
  );
}