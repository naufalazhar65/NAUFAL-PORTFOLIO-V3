"use client";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import WorkflowCanvas from "./components/WorkflowCanvas";
import ReportsCanvas from "./components/ReportsCanvas";

import ExecutionFeed from "./components/ExecutionFeed";
import MetricsPanel from "./components/MetricsPanel";

export default function DesktopScreen({ variant = "workflow" }) {
  return (
    <div
      className="
        grid
        h-full
        grid-cols-[220px_1fr]
        grid-rows-[56px_1fr_220px]

        [mask-image:linear-gradient(to_right,black_0%,black_78%,transparent_100%)]
        [-webkit-mask-image:linear-gradient(to_right,black_0%,black_78%,transparent_100%)]
      "
    >
      {/* Sidebar */}

      <aside
        className="
          row-span-3
          border-r
          border-white/5
          bg-white/[0.02]
        "
      >
        <Sidebar />
      </aside>

      {/* Topbar */}

      <header
        className="
          border-b
          border-white/5
          bg-[#101722]
        "
      >
        <Topbar />
      </header>

      {/* Workspace */}

      <main
        className="
          relative
          overflow-hidden
          bg-[#0f1623]
        "
      >
        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-25

            bg-[radial-gradient(circle_at_center,rgba(255,255,255,.04)_1px,transparent_1px)]
            [background-size:24px_24px]
          "
        />

        {/* Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-[340px]
            w-[340px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full
            bg-[#16f2b3]/5
            blur-[140px]
          "
        />

        {/* Workflow */}

        <div className="relative z-10 h-full">
          {variant === "workflow" ? <WorkflowCanvas /> : <ReportsCanvas />}
        </div>
      </main>

      {/* Bottom */}

      <section
        className="
          grid
          grid-cols-[1fr_300px]

          border-t
          border-white/5

          bg-[#0d141f]
        "
      >
        {/* Execution Feed */}

        <div
          className="
            border-r
            border-white/5
            p-6
          "
        >
          <ExecutionFeed />
        </div>

        {/* Metrics */}

        <div className="p-6">
          <MetricsPanel />
        </div>
      </section>
    </div>
  );
}
