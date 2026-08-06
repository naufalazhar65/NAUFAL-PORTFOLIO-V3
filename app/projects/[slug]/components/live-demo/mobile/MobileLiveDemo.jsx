"use client";
import { useState } from "react";

import MobileHeader from "./MobileHeader";
import MobileWorkflow from "./MobileWorkflow";
import MobileProperties from "./MobileProperties";
import MobileConsole from "./MobileConsole";
import MobileBottomBar from "./MobileBottomBar";

export default function MobileLiveDemo() {
  const [consoleCollapsed, setConsoleCollapsed] = useState(true);

  return (
    <main
      className="
        flex
        h-[720px]
        flex-col
        overflow-hidden
        bg-[#0d1117]
        text-white
      "
    >
      {/* Header */}

      <MobileHeader />

      {/* Body */}

      <div
        className="
          flex
          min-h-0
          flex-1
          flex-col
        "
      >
        {/* Workflow */}

        <div className="h-[170px] shrink-0">
          <MobileWorkflow />
        </div>

        <div className="min-h-0 flex-1">
          <MobileProperties />
        </div>

        <div className="shrink-0">
          <MobileConsole
            collapsed={consoleCollapsed}
            onToggle={setConsoleCollapsed}
          />
        </div>
      </div>

      {/* Bottom */}

      {consoleCollapsed && <MobileBottomBar />}
      
    </main>
  );
}
