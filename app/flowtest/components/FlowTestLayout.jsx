"use client";

import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import FlowCanvas from "./FlowCanvas";
import Inspector from "./Inspector";
import Console from "./Console";

export default function FlowTestLayout({ embedded = false }) {
  return (
    <main
      className={`
    flex
    flex-col
    bg-[#0d1117]
    text-white
    ${embedded ? "h-[720px]" : "h-screen"}
  `}
    >
      <TopBar />

      <div className="grid flex-1 grid-cols-[280px_1fr_340px] overflow-hidden">
        <Sidebar />

        <FlowCanvas />

        <Inspector />
      </div>

      <Console />
    </main>
  );
}
