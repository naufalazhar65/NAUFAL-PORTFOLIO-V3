"use client";

import WindowHeader from "./WindowHeader";
import Sidebar from "./Sidebar";
import WorkflowCanvas from "./WorkflowCanvas";
import Console from "./Console";
import StatusBar from "./StatusBar";

export default function ProductPreview() {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#0d1117]
        shadow-[0_20px_60px_rgba(0,0,0,.45)]

        lg:rounded-[28px]
        lg:shadow-[0_30px_100px_rgba(0,0,0,.45)]
      "
    >
      <WindowHeader />

      {/* Main Layout */}

      <div
        className="
          grid

          h-[380px]

          grid-cols-[140px_1fr]

          lg:h-[520px]
          lg:grid-cols-[220px_1fr]
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