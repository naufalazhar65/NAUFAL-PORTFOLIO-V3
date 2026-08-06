"use client";

import IOSFrame from "./IOSFrame";
import DeviceScreen from "./DeviceScreen";

export default function IOSPreview() {
  return (
    <IOSFrame>
      <DeviceScreen platform="ios" />
    </IOSFrame>
  );
}