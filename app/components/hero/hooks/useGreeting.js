"use client";

import { useEffect, useState } from "react";

export default function useGreeting() {
  const [greeting, setGreeting] =
    useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning ☀️");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good Afternoon 🌤️");
    } else if (hour >= 18 && hour < 22) {
      setGreeting("Good Evening 🌙");
    } else {
      setGreeting("Good Night 🌌");
    }
  }, []);

  return greeting;
}