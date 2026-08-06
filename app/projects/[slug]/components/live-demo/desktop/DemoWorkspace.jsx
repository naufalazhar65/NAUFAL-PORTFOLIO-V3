"use client";

import DemoSidebar from "./DemoSidebar";
import DemoCanvas from "./DemoCanvas";
import DemoInspector from "./DemoInspector";

export default function DemoWorkspace() {
  return (
    <section
      className="
        grid
        min-h-0
        flex-1
        grid-cols-[240px_1fr_300px]
        overflow-hidden
      "
    >
      {/* Sidebar */}

      <div
        className="
          min-h-0
          overflow-hidden
        "
      >
        <DemoSidebar />
      </div>

      {/* Canvas */}

      <div
        className="
          min-h-0
          overflow-hidden
        "
      >
        <DemoCanvas />
      </div>

      {/* Inspector */}

      <div
        className="
          min-h-0
          overflow-hidden
        "
      >
        <DemoInspector />
      </div>
    </section>
  );
}
