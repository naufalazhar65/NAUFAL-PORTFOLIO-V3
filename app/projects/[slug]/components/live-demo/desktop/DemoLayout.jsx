"use client";

import DemoTopBar from "./DemoTopBar";
import DemoWorkspace from "./DemoWorkspace";
import DemoConsole from "./DemoConsole";

export default function DemoLayout() {
  return (
    <main
      className="
        flex
        h-[720px]
        flex-col
        overflow-hidden
        rounded-b-3xl
        bg-[#0d1117]
        text-white
      "
    >
      <DemoTopBar />

      <DemoWorkspace />

      <DemoConsole />
    </main>
  );
}
