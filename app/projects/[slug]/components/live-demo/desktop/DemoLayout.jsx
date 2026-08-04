"use client";

import DemoTopBar from "./DemoTopBar";
import DemoSidebar from "./DemoSidebar";
import DemoCanvas from "./DemoCanvas";
import DemoInspector from "./DemoInspector";
import DemoConsole from "./DemoConsole";

export default function DemoLayout() {
  return (
    <main className="flex h-[720px] flex-col bg-[#0d1117] text-white">
      <DemoTopBar />

      <div className="grid flex-1 grid-cols-[240px_1fr_300px] overflow-hidden">
        <DemoSidebar />

        <DemoCanvas />

        <DemoInspector />
      </div>

      <DemoConsole />
    </main>
  );
}