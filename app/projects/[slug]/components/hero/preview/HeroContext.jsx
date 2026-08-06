"use client";

import { createContext, useContext } from "react";

import useHeroEngine from "./hooks/useHeroEngine";

const HeroContext = createContext(null);

export function HeroProvider({ children }) {
  const hero = useHeroEngine();

  return <HeroContext.Provider value={hero}>{children}</HeroContext.Provider>;
}

export function useHero() {
  const context = useContext(HeroContext);

  if (!context) {
    throw new Error("useHero must be used inside HeroProvider");
  }

  return context;
}
