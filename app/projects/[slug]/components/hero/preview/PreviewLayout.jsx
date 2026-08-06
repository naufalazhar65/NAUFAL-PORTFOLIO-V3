"use client";

import WorkflowCanvas from "./WorkflowCanvas";
import DeviceStack from "./DeviceStack";
import Console from "./Console";

export default function PreviewLayout() {
  return (
    <div
      className="
        flex
        flex-col
        bg-[#0b1017]
      "
    >
      {/* Workflow */}

      <section className="px-10 pt-10">
        <WorkflowCanvas />
      </section>

      {/* Divider */}

      <div
        className="
          mx-10
          my-8
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

      {/* Devices */}

      <section className="px-10">
        <DeviceStack />
      </section>

      {/* Divider */}

      <div
        className="
          mx-10
          my-8
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

      {/* Console */}

      <section className="px-10 pb-10">
        <Console />
      </section>
    </div>
  );
}
