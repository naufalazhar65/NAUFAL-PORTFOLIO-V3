"use client";

import AndroidFrame from "./AndroidFrame";
import AndroidScreen from "./AndroidScreen";

export default function AndroidPreview() {
  return (
    <AndroidFrame>
      <AndroidScreen />
    </AndroidFrame>
  );
}