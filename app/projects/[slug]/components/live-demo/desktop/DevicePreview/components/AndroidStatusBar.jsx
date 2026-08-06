"use client";

import {
  FiBatteryCharging,
  FiWifi,
} from "react-icons/fi";
import { MdSignalCellular4Bar } from "react-icons/md";

export default function AndroidStatusBar() {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        px-3
        py-2
        text-[9px]
        font-medium
        text-white
      "
    >
      <span>09:30</span>

      <div className="flex items-center gap-1">
        <MdSignalCellular4Bar size={11} />

        <FiWifi size={10} />

        <FiBatteryCharging size={11} />
      </div>
    </div>
  );
}