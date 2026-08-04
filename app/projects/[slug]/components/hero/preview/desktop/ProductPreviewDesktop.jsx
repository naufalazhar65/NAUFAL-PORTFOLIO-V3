"use client";

import WindowHeader from "./WindowHeader";
import Sidebar from "./Sidebar";
import WorkflowCanvas from "./WorkflowCanvas";
import Console from "./Console";
import StatusBar from "./StatusBar";

export default function ProductPreviewDesktop() {
  return (
    <div
      className="
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-[#0d1117]
        shadow-[0_30px_100px_rgba(0,0,0,.45)]
      "
    >
      <WindowHeader />

      <div
        className="
          grid
          h-[520px]
          grid-cols-[220px_1fr]
        "
      >
        <Sidebar />

        <WorkflowCanvas />
      </div>

      <Console />

      <StatusBar />
    </div>
  );
}
