"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import WorkflowCanvas from "./components/WorkflowCanvas";
import ReportsCanvas from "./components/ReportsCanvas";
import ExecutionFeed from "./components/ExecutionFeed";
import DevicesCanvas from "./components/DevicesCanvas";
import TestSuitesCanvas from "./components/TestSuitesCanvas";

export default function DesktopScreen({ variant = "workflow" }) {
  const [activeMenu, setActiveMenu] = useState("Flow Builder");

  return (
    <div className="grid h-full grid-cols-[220px_1fr] grid-rows-[56px_1fr_auto]">
      <aside className="row-span-3 border-r border-white/5 bg-white/[0.02]">
        <Sidebar activeMenu={activeMenu} onMenuChange={setActiveMenu} />
      </aside>

      <header className="border-b border-white/5 bg-[#101722]">
        <Topbar />
      </header>

      <main className="relative overflow-hidden bg-[#0f1623]">
        {/* background & glow */}
        <div className="relative z-10 h-full">
          {activeMenu === "Flow Builder" && <WorkflowCanvas />}
          {activeMenu === "Reports" && <ReportsCanvas />}
          {activeMenu === "Test Suites" && <TestSuitesCanvas />}
          {activeMenu === "Devices" && <DevicesCanvas />}
        </div>
      </main>

      <section className="border-t border-white/5 bg-[#0d141f]">
        <ExecutionFeed />
      </section>
    </div>
  );
}

function Placeholder({ title }) {
  return (
    <div className="flex h-full items-center justify-center text-gray-500">
      <p className="text-sm uppercase tracking-widest">{title} (coming soon)</p>
    </div>
  );
}
