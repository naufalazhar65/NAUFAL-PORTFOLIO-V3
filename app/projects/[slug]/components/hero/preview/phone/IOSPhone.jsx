"use client";

import PhoneFrame from "./PhoneFrame";
import PhoneHeader from "./PhoneHeader";
import PhoneScreen from "./PhoneScreen";
import PhoneStatus from "./PhoneStatus";

export default function IOSPhone() {
  return (
    <PhoneFrame variant="ios">
      <PhoneHeader />

      <PhoneScreen />

      <PhoneStatus />
    </PhoneFrame>
  );
}