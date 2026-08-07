"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useHero } from "../../HeroContext";
import { Loader2 } from "lucide-react";

import PhoneButton from "../components/PhoneButton";
import PhoneInput from "../components/PhoneInput";
import StatusChip from "../components/StatusChip";

export default function LoginScreen({ platform = "android" }) {
  const {
    typingUsername,
    typingPassword,
    activeField,
    showKeyboard,
    submitting,
    setPressedKey,
  } = useHero();

  const accent = platform === "ios" ? "#60a5fa" : "#16f2b3";

  return (
    <motion.div
      animate={{
        y: showKeyboard ? -40 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="
        flex
        h-full
        flex-col
        justify-center
        px-7
        py-1
        pt-1
      "
    >
      {/* Header */}

      <motion.div
        animate={{
          marginBottom: showKeyboard ? 18 : 26,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="text-center"
      >
        <motion.div
  animate={{
    scale: showKeyboard ? 0.97 : 1,
    y: showKeyboard ? -4 : 0,
    opacity: submitting ? 0.98 : 1,
  }}
          transition={{
            duration: 0.3,
          }}
          className="
            mx-auto
            mb-3
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
          "
          style={{
            borderColor: `${accent}55`,
            backgroundColor: `${accent}15`,
          }}
        >
          <span
            className="text-lg font-black"
            style={{
              color: accent,
            }}
          >
            F
          </span>
        </motion.div>

        <motion.h2
          animate={{
            scale: showKeyboard ? 0.92 : 1,
            y: showKeyboard ? -2 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            text-lg
            font-bold
            text-white
          "
        >
          Welcome Back
        </motion.h2>

        <AnimatePresence mode="wait">
          {!showKeyboard && (
            <motion.p
              initial={{
                opacity: 0,
                y: -6,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -6,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                mt-2
                text-xs
                text-gray-400
              "
            >
              Continue your automation session
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Form */}

      <motion.div
        animate={{
          scale: showKeyboard ? 0.97 : 1,
          y: showKeyboard ? -4 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        {/* Username */}

        <PhoneInput
          label="Username"
          value={typingUsername ? "naufalazhar" : ""}
          placeholder="Enter username"
          active={activeField === "username"}
          accent={accent}
          onKeyPress={setPressedKey}
        />

        {/* Password */}

        <div className="mt-3">
          <PhoneInput
            label="Password"
            value={typingPassword ? "••••••••" : ""}
            password
            placeholder="••••••••"
            active={activeField === "password"}
            accent={accent}
            onKeyPress={setPressedKey}
          />
        </div>

        {/* Login */}

        <motion.div
  animate={{
    marginTop: 14,
    y: submitting ? 2 : 0,
    scale: submitting ? 0.985 : 1,
  }}
  transition={{
    duration: 0.18,
  }}
>
  <PhoneButton
    loading={submitting}
    ripple={submitting}
    accent={accent}
  >
    <AnimatePresence mode="wait">
      {submitting ? (
        <motion.div
          key="loading"
          initial={{
            opacity: 0,
            y: 6,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -6,
          }}
          transition={{
            duration: 0.15,
          }}
          className="
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <Loader2
            size={14}
            className="animate-spin"
          />

          <span>Signing In...</span>
        </motion.div>
      ) : (
        <motion.span
          key="login"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          Login
        </motion.span>
      )}
    </AnimatePresence>
  </PhoneButton>
</motion.div>
      </motion.div>

      {/* Automation Status */}

      <motion.div
        animate={{
          opacity: 1,
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: 6,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
    mt-4
    flex
    items-center
    justify-center
    gap-2
    text-[10px]
    text-gray-400
  "
      >
        <motion.div
          animate={{
            scale: submitting ? [1, 1.4, 1] : [1, 1.15, 1],
            opacity: submitting ? [1, 0.5, 1] : [0.8, 1, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
          }}
          className="h-2 w-2 rounded-full"
          style={{
            background: submitting ? accent : "#94a3b8",
          }}
        />

        <motion.span
          key={
            submitting
              ? "submit"
              : typingPassword
                ? "password"
                : typingUsername
                  ? "username"
                  : "idle"
          }
          initial={{
            opacity: 0,
            y: 4,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          {submitting
            ? "Submitting credentials..."
            : typingPassword
              ? "Typing password..."
              : typingUsername
                ? "Typing username..."
                : "Waiting..."}
        </motion.span>
      </motion.div>

      {/* Footer */}

      <AnimatePresence mode="wait">
        {!showKeyboard && (
          <motion.div
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 8,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              mt-5
              flex
              justify-center
            "
          >
            <StatusChip accent={accent}>Secure Login Enabled</StatusChip>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
