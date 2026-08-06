"use client";

import PhoneFrame from "./PhoneFrame";
import PhoneHeader from "./PhoneHeader";
import PhoneScreen from "./PhoneScreen";
import PhoneStatus from "./PhoneStatus";

export default function AndroidPhone() {
  return (
    <PhoneFrame variant="android">
      <PhoneHeader />
      <PhoneScreen />
      <PhoneStatus />
    </PhoneFrame>
  );
}
