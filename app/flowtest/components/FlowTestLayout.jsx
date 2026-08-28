"use client";

import { useState } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import FlowCanvas from "./FlowCanvas";
import Inspector from "./Inspector";
import Console from "./Console";

export default function FlowTestLayout({ embedded = false }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
        {/* Sidebar - desktop selalu tampil, mobile sebagai drawer */}
        <div
          className={`
            ${embedded ? "hidden md:block" : ""}
            ${sidebarOpen ? "absolute z-50 h-full w-[300px]" : "hidden md:block"}
            md:w-[300px] shrink-0
          `}
        >
          <Sidebar />
        </div>

        {/* Overlay untuk sidebar mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Canvas */}
        <div className="min-w-0 min-h-0 flex-1">
          <FlowCanvas />
        </div>

        {/* Inspector - hanya desktop */}
        <div className="hidden lg:block w-[360px] shrink-0">
          <Inspector />
        </div>
      </div>

      <Console />
    </main>
  );
}