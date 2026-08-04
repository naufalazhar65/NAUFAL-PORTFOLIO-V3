"use client";

import PhoneFrame from "./phone/PhoneFrame";
import PhoneHeader from "./phone/PhoneHeader";
import PhoneExplorer from "./phone/PhoneExplorer";
import PhoneWorkflow from "./phone/PhoneWorkflow";
import PhoneConsole from "./phone/PhoneConsole";
import PhoneStatus from "./phone/PhoneStatus";

export default function PhonePreview() {
  return (
    <PhoneFrame>
      <PhoneHeader />

      <PhoneExplorer />

      <PhoneWorkflow />

      <PhoneConsole />

      <PhoneStatus />
    </PhoneFrame>
  );
}