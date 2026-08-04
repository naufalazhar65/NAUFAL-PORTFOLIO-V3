"use client";

import { FiMousePointer, FiType, FiClock, FiCheckCircle } from "react-icons/fi";

const items = [
  {
    title: "Tap",
    subtitle: "Tap element",
    icon: FiMousePointer,
    color: "#16f2b3",
  },
  {
    title: "Input",
    subtitle: "Enter text",
    icon: FiType,
    color: "#60a5fa",
  },
  {
    title: "Delay",
    subtitle: "Wait",
    icon: FiClock,
    color: "#f59e0b",
  },
  {
    title: "Assert",
    subtitle: "Verify",
    icon: FiCheckCircle,
    color: "#22c55e",
  },
];

export default function PhoneLibrary() {
  return (
    <div className="border-b border-white/10 bg-[#111827]">
      {/* Header */}

      <div className="px-5 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[2px] text-gray-500">
          Component Library
        </p>
      </div>

      {/* Items */}

      <div className="grid grid-cols-2 gap-3 px-5 pb-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-xl
                border
                border-white/10
                bg-[#161b22]
                p-3
              "
            >
              <div
                className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg"
                style={{
                  background: `${item.color}20`,
                  color: item.color,
                }}
              >
                <Icon size={18} />
              </div>

              <p className="text-sm font-semibold text-white">{item.title}</p>

              <p className="mt-1 text-[10px] text-gray-400">{item.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
