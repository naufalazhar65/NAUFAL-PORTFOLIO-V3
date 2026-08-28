"use client";

import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import FlowCanvas from "./FlowCanvas";
import Inspector from "./Inspector";
import Console from "./Console";

export default function FlowTestLayout({ embedded = false }) {
  const [isPortraitMobile, setIsPortraitMobile] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 768;
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      setIsPortraitMobile(isMobile && isPortrait);
    };

    checkOrientation();

    window.addEventListener("resize", checkOrientation);
    // Untuk perangkat yang mendukung perubahan orientasi
    window.addEventListener("orientationchange", checkOrientation);

    // Opsional: coba kunci orientasi landscape
    const lockLandscape = async () => {
      try {
        if (screen.orientation?.lock) {
          await screen.orientation.lock("landscape");
        }
      } catch {
        // Kunci orientasi tidak didukung atau ditolak
      }
    };

    lockLandscape();

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  return (
    <main
      className={`
        flex
        flex-col
        overflow-hidden
        bg-[#0d1117]
        text-white
        ${embedded ? "h-[720px]" : "h-screen"}
      `}
    >
      <TopBar />

      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="hidden md:block w-[300px] shrink-0">
          <Sidebar />
        </div>

        <div className="min-w-0 min-h-0 flex-1">
          <FlowCanvas />
        </div>

        <div className="hidden lg:block w-[360px] shrink-0">
          <Inspector />
        </div>
      </div>

      <Console />

      {/* Overlay peringatan orientasi portrait */}
      {isPortraitMobile && !embedded && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0d1117] px-6 text-center">
          <div>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <span className="text-3xl">📱</span>
            </div>
            <h2 className="text-xl font-semibold text-white">
              Please rotate your device
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              FlowTest Studio works best in landscape mode on mobile devices.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}