"use client";

import { useState } from "react";
import {
  FiChevronDown,
  FiSearch,
  FiSmartphone,
  FiMousePointer,
  FiType,
  FiClock,
  FiCheckCircle,
  FiGitBranch,
  FiRepeat,
  FiHash,
  FiCamera,
  FiHome,
  FiArrowLeft,
  FiFileText,
  FiBarChart2,
} from "react-icons/fi";

const workspaceMenus = [
  { label: "Flow Builder", icon: FiGitBranch },
  { label: "Test Suites", icon: FiFileText },
  { label: "Reports", icon: FiBarChart2 },
  { label: "Devices", icon: FiSmartphone },
];

const componentLibrary = [
  {
    title: "Application",
    items: [
      { type: "launchApp", title: "Launch App", subtitle: "Open an application", icon: FiSmartphone, color: "#6366f1" },
      { type: "closeApp", title: "Close App", subtitle: "Close an application", icon: FiSmartphone, color: "#6366f1" },
    ],
  },
  {
    title: "Element Actions",
    items: [
      { type: "tap", title: "Tap", subtitle: "Tap an element", icon: FiMousePointer, color: "#22c55e" },
      { type: "inputText", title: "Input Text", subtitle: "Type text", icon: FiType, color: "#3b82f6" },
      { type: "swipe", title: "Swipe", subtitle: "Swipe gesture", icon: FiMousePointer, color: "#8b5cf6" },
    ],
  },
  {
    title: "Device Actions",
    items: [
      { type: "back", title: "Back", subtitle: "Navigate back", icon: FiArrowLeft, color: "#f97316" },
      { type: "home", title: "Home", subtitle: "Go to home screen", icon: FiHome, color: "#f97316" },
      { type: "screenshot", title: "Screenshot", subtitle: "Capture screen", icon: FiCamera, color: "#f97316" },
    ],
  },
  {
    title: "Logic and Data",
    items: [
      { type: "if", title: "If", subtitle: "Conditional branch", icon: FiGitBranch, color: "#f59e0b" },
      { type: "repeat", title: "Repeat", subtitle: "Loop actions", icon: FiRepeat, color: "#f59e0b" },
      { type: "setVariable", title: "Set Variable", subtitle: "Assign variable", icon: FiHash, color: "#f59e0b" },
    ],
  },
];

export default function Sidebar({ activeMenu = "Flow Builder", onMenuChange }) {
  const [workspaceOpen, setWorkspaceOpen] = useState(true);

  return (
    <aside className="flex h-full flex-col bg-[#0f141b] border-r border-white/[0.08]">
      {/* =========================
          HEADER COMPONENT LIBRARY
      ========================= */}
      <div className="border-b border-white/[0.08] px-4 py-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-[12px] font-semibold tracking-[-0.01em] text-white">
              Component Library
            </h2>
            <p className="mt-1 text-[10px] leading-5 text-gray-500">
              Add nodes to your workflow.
            </p>
          </div>
          <span className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-gray-500">
            Nodes
          </span>
        </div>

        {/* Search Box */}
        <div className="relative mt-4">
          <FiSearch
            size={13}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
          />
          <input
            type="search"
            placeholder="Search components..."
            aria-label="Search components"
            className="h-8 w-full rounded-lg border border-white/[0.07] bg-[#0b1016] px-3 pl-9 text-[10px] text-gray-200 outline-none transition-all duration-200 placeholder:text-gray-600 hover:border-white/[0.1] hover:bg-white/[0.015] focus:border-white/[0.16] focus:bg-white/[0.02] focus:ring-1 focus:ring-white/[0.04]"
          />
        </div>
      </div>

      {/* =========================
          SCROLLABLE CONTENT
      ========================= */}
      <div className="flex-1 overflow-y-auto px-3 py-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/[0.08]">
        {/* Workspace Section (Collapsible) */}
        <div className="mb-5">
          <button
            type="button"
            onClick={() => setWorkspaceOpen((prev) => !prev)}
            aria-expanded={workspaceOpen}
            className="flex w-full items-center justify-between px-3 py-2.5 text-left transition-colors duration-200 hover:bg-white/[0.03] rounded-lg"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400">
              Workspace
            </span>
            <FiChevronDown
              size={14}
              className={`text-gray-500 transition-transform duration-200 ${
                workspaceOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {workspaceOpen && (
            <div className="mt-1 space-y-0.5 px-1">
              {workspaceMenus.map((menu) => {
                const Icon = menu.icon;
                const isActive = activeMenu === menu.label;
                return (
                  <button
                    key={menu.label}
                    type="button"
                    onClick={() => onMenuChange?.(menu.label)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-[#16f2b3]/10 text-[#16f2b3]"
                        : "text-gray-400 hover:bg-white/[0.035] hover:text-white"
                    }`}
                  >
                    <Icon size={16} />
                    <span className="font-medium">{menu.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Component Library (Node Categories) */}
        <div className="space-y-5">
          {componentLibrary.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-white/[0.06] bg-white/[0.005] p-2 transition-colors duration-200 hover:border-white/[0.1] hover:bg-white/[0.008]"
            >
              {/* Group Header */}
              <div className="flex items-center gap-2 px-2 py-1.5">
                <FiChevronDown size={13} className="text-gray-500" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400">
                  {group.title}
                </span>
              </div>

              {/* Items */}
              <div className="mt-1 space-y-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.type}
                      className="group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-all duration-200 cursor-pointer text-gray-400 hover:bg-white/[0.035] hover:text-white"
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/[0.06]"
                        style={{
                          background: `${item.color}16`,
                          color: item.color,
                        }}
                      >
                        <Icon size={14} strokeWidth={2} />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-[11px] font-medium text-gray-300 group-hover:text-white">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block truncate text-[9px] leading-4 text-gray-600 group-hover:text-gray-500">
                          {item.subtitle}
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}