"use client";

import { HeroProvider } from "../HeroContext";

import PhoneFrame from "./PhoneFrame";
import PhoneHeader from "./PhoneHeader";
import PhoneScreen from "./PhoneScreen";
import PhoneStatus from "./PhoneStatus";

export default function ProductPreviewPhone() {
  return (
    <HeroProvider>
      <PhoneFrame>
        <PhoneHeader />
        <PhoneScreen />
        <PhoneStatus />
      </PhoneFrame>
    </HeroProvider>
  );
}