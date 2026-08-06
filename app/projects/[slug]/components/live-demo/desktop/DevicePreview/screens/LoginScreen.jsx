"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Keyboard from "../components/Keyboard";
import TouchRipple from "../components/TouchRipple";
import InputField from "../components/InputField";

import { useDevice } from "../DeviceContext";

export default function LoginScreen({
  tap = false,
  username = "",
  password = "",
  showKeyboard = false,
  activeField = null,
}) {
  const {
    usernameRef,
    passwordRef,
    loginButtonRef,
  } = useDevice();

  const [displayUsername, setDisplayUsername] =
    useState("");

  const [displayPassword, setDisplayPassword] =
    useState("");

  /* ---------- Username ---------- */

  useEffect(() => {
    if (!username) {
      setDisplayUsername("");
      return;
    }

    // username sudah selesai → tampil penuh
    if (activeField !== "username") {
      setDisplayUsername(username);
      return;
    }

    // sedang mengetik username
    setDisplayUsername("");

    let index = 0;

    const timer = setInterval(() => {
      index++;

      setDisplayUsername(
        username.slice(0, index),
      );

      if (index >= username.length) {
        clearInterval(timer);
      }
    }, 70);

    return () => clearInterval(timer);
  }, [username, activeField]);

  /* ---------- Password ---------- */

  useEffect(() => {
    if (!password) {
      setDisplayPassword("");
      return;
    }

    // password sudah selesai → tampil penuh
    if (activeField !== "password") {
      setDisplayPassword(
        "•".repeat(password.length),
      );

      return;
    }

    // sedang mengetik password
    setDisplayPassword("");

    let index = 0;

    const timer = setInterval(() => {
      index++;

      setDisplayPassword(
        "•".repeat(index),
      );

      if (index >= password.length) {
        clearInterval(timer);
      }
    }, 70);

    return () => clearInterval(timer);
  }, [password, activeField]);

  const usernameActive =
    activeField === "username";

  const passwordActive =
    activeField === "password";

  return (
    <div
      className="
        relative
        flex
        h-full
        flex-col
        overflow-hidden
      "
    >
      {/* FORM */}

      <motion.div
        animate={{
          y: showKeyboard ? -40 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          flex-1
          px-4
          pt-4
        "
      >
        <h3 className="mb-5 text-center font-bold text-white">
          Login
        </h3>

        <InputField
          ref={usernameRef}
          value={displayUsername}
          placeholder="Username"
          active={usernameActive}
        />

        <InputField
          ref={passwordRef}
          value={displayPassword}
          placeholder="Password"
          active={passwordActive}
        />

        <motion.button
          ref={loginButtonRef}
          animate={
            tap
              ? {
                  scale: [1, 0.95, 1],
                }
              : {}
          }
          transition={{
            duration: 0.25,
          }}
          className="
            relative
            mt-4
            w-full
            overflow-hidden
            rounded-lg
            bg-[#16f2b3]
            py-2
            text-xs
            font-bold
            text-black
          "
        >
          {tap && <TouchRipple />}

          <span className="relative z-10">
            Login
          </span>
        </motion.button>
      </motion.div>

      {/* KEYBOARD */}

      <AnimatePresence>
        {showKeyboard && (
          <motion.div
            initial={{
              y: 180,
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: 180,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="shrink-0"
          >
            <Keyboard />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}