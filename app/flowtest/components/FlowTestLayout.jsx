"use client";

import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import FlowCanvas from "./FlowCanvas";
import Inspector from "./Inspector";
import Console from "./Console";

export default function FlowTestLayout({
  embedded = false,
}) {
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
  <div className="w-[300px] shrink-0">
    <Sidebar />
  </div>

  <div className="min-w-0 min-h-0 flex-1">
    <FlowCanvas />
  </div>

  <div className="w-[360px] shrink-0">
    <Inspector />
  </div>
</div>

      <Console />
    </main>
  );
}