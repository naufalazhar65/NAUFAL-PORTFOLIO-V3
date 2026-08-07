"use client";

import {
  LayoutDashboard,
  Workflow,
  PlaySquare,
  BarChart3,
  Settings,
} from "lucide-react";

const menus = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
  },
  {
    icon: Workflow,
    label: "Workflow",
  },
  {
    icon: PlaySquare,
    label: "Executions",
  },
  {
    icon: BarChart3,
    label: "Reports",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

export default function Sidebar() {
  return (
    <div
      className="
        flex
        h-full
        flex-col
        bg-[#0f141c]
      "
    >
      {/* Logo */}

      <div
        className="
          border-b
          border-white/5
          px-6
          py-5
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl

              bg-[#16f2b3]/10
              text-lg
              font-black
              text-[#16f2b3]
            "
          >
            F
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              FlowTest
            </p>

            <p className="text-[11px] text-gray-500">
              Studio
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}

      <nav
        className="
          mt-5
          flex
          flex-1
          flex-col
          gap-1
          px-3
        "
      >
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`
                flex
                items-center
                gap-3

                rounded-xl

                px-4
                py-3

                text-sm

                transition-all
                duration-200

                ${
                  item.active
                    ? "bg-[#16f2b3]/10 text-[#16f2b3]"
                    : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                }
              `}
            >
              <Icon size={18} />

              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}

      <div
        className="
          border-t
          border-white/5
          p-4
        "
      >
        <div
          className="
            rounded-xl
            border
            border-[#16f2b3]/20

            bg-[#16f2b3]/5

            px-4
            py-3
          "
        >
          <p className="text-xs text-[#16f2b3]">
            Environment Ready
          </p>

          <p className="mt-1 text-[11px] text-gray-500">
            All services operational
          </p>
        </div>
      </div>
    </div>
  );
}