"use client";

import { FiCheckCircle, FiWifi } from "react-icons/fi";
import { IoBatteryFull } from "react-icons/io5";

export default function PhoneHeader() {
  return (
    <>
      {/* Status Bar */}

      <div
        className="
          flex
          items-center
          justify-between

          px-5
          py-2

          text-[11px]
          font-semibold
          text-white
        "
      >
        <span>9:41</span>

        <div className="flex items-center gap-2">
          <FiWifi size={12} />

          <IoBatteryFull size={16} />
        </div>
      </div>

      {/* App Header */}

      <div
        className="
          border-b
          border-white/10

          px-5
          pb-4
          pt-2
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[2px] text-gray-500">
              Visual Automation
            </p>

            <h3 className="mt-1 text-lg font-bold text-white">
              FlowTest Studio
            </h3>
          </div>

          <div
            className="
              flex
              items-center
              gap-1

              rounded-full

              bg-[#16f2b3]/10

              px-2.5
              py-1
            "
          >
            <FiCheckCircle size={12} className="text-[#16f2b3]" />

            <span
              className="
                text-[10px]
                font-semibold
                text-[#16f2b3]
              "
            >
              READY
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
