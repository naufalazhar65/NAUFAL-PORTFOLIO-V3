"use client";

import PhoneFrame from "./PhoneFrame";
import PhoneHeader from "./PhoneHeader";
import PhoneLibrary from "./PhoneLibrary";
import PhoneWorkflow from "./PhoneWorkflow";
import PhoneConsole from "./PhoneConsole";
import PhoneStatus from "./PhoneStatus";

export default function ProductPreviewPhone() {
  return (
    <PhoneFrame>
      <PhoneHeader />

      <PhoneLibrary />

      <PhoneWorkflow />

      <PhoneConsole />

      <PhoneStatus />
    </PhoneFrame>
  );
}