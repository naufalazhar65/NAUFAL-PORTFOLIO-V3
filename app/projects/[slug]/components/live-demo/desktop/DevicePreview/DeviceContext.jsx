"use client";

import { createContext, useContext, useMemo, useRef } from "react";

const DeviceContext = createContext(null);

export function DeviceProvider({ children }) {
  const usernameRef = useRef(null);

  const passwordRef = useRef(null);

  const loginButtonRef = useRef(null);

  const screenRef = useRef(null);

  const value = useMemo(
    () => ({
      screenRef,

      usernameRef,

      passwordRef,

      loginButtonRef,
    }),
    [],
  );

  return (
    <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
  );
}

export function useDevice() {
  const context = useContext(DeviceContext);

  if (!context) {
    throw new Error("useDevice must be used inside DeviceProvider");
  }

  return context;
}
