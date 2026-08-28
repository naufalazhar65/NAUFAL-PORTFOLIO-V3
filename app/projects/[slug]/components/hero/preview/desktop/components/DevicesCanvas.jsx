"use client";

import { useState } from "react";
import {
  RefreshCw,
  Unplug,
  Circle,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

const dummyDevices = [
  {
    id: "1",
    name: "Pixel 9",
    platform: "Android",
    version: "14",
    status: "available",
    automation: "UiAutomator2",
  },
  {
    id: "2",
    name: "iPhone 15 Pro",
    platform: "iOS",
    version: "17.4",
    status: "available",
    automation: "XCUITest",
  },
  {
    id: "3",
    name: "Samsung Galaxy S24",
    platform: "Android",
    version: "14",
    status: "offline",
    automation: "UiAutomator2",
  },
];

export default function DevicesCanvas() {
  const [devices, setDevices] = useState(dummyDevices);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [connected, setConnected] = useState(false); // appium server connection (simulasi)
  const [hasSession, setHasSession] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [sessionInfo, setSessionInfo] = useState({
    platform: null,
    device: null,
    version: null,
    automation: null,
    sessionId: null,
  });

  const refreshDevices = async () => {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    // Simulasi penambahan perangkat baru
    setDevices((prev) => {
      const newDevice = {
        id: String(prev.length + 1),
        name: `Emulator-${prev.length + 1}`,
        platform: "Android",
        version: "13",
        status: "available",
        automation: "UiAutomator2",
      };
      return [...prev, newDevice];
    });
    setIsRefreshing(false);
  };

  const handleConnect = async (device) => {
    setConnecting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSessionInfo({
      platform: device.platform,
      device: device.name,
      version: device.version,
      automation: device.automation,
      sessionId: `session-${Math.floor(Math.random() * 1000)}`,
    });
    setHasSession(true);
    setConnected(true);
    setConnecting(false);
  };

  const handleDisconnect = async () => {
    setConnecting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setHasSession(false);
    setSessionInfo({
      platform: null,
      device: null,
      version: null,
      automation: null,
      sessionId: null,
    });
    setConnecting(false);
  };

  return (
    <div className="h-full overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/[0.08]">
      {/* Appium Server Status */}
      <div className="mb-4 rounded-xl border border-white/[0.08] bg-[#0f141b] p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-semibold text-white">Appium Server</h3>
            <p className="mt-1 text-[11px] text-gray-500">http://localhost:4723</p>
          </div>
          <div
            className={`flex items-center gap-2 text-xs font-semibold ${
              connected ? "text-[#16f2b3]" : "text-gray-500"
            }`}
          >
            <Circle size={8} fill="currentColor" strokeWidth={0} />
            {connected ? "Connected" : "Offline"}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-[1fr_320px] gap-4">
        {/* Left Column */}
        <div className="min-w-0 space-y-4">
          {/* Available Devices */}
          <section className="rounded-xl border border-white/[0.08] bg-[#0f141b] p-3">
            <div className="mb-3 flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-white">Available Devices</h3>
                <button
                  type="button"
                  onClick={refreshDevices}
                  disabled={isRefreshing}
                  className="flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1.5 text-[10px] font-semibold text-gray-400 transition hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <RefreshCw
                    size={13}
                    className={isRefreshing ? "animate-spin" : ""}
                  />
                  {isRefreshing ? "Refreshing..." : "Refresh"}
                </button>
              </div>
              <span className="text-[10px] text-gray-500">Android · iOS</span>
            </div>

            {/* Device List */}
            <div className="space-y-2">
              {devices.map((device) => (
                <div
                  key={device.id}
                  className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.015] px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.03]">
                      <Smartphone size={15} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{device.name}</p>
                      <p className="text-[10px] text-gray-500">
                        {device.platform} · {device.version}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        device.status === "available" ? "bg-[#16f2b3]" : "bg-gray-600"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => handleConnect(device)}
                      disabled={connecting || device.status !== "available"}
                      className="rounded-md border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium text-gray-300 transition hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {connecting && sessionInfo.device === device.name
                        ? "Connecting..."
                        : "Connect"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Device Configuration (static placeholder) */}
          <section className="rounded-xl border border-white/[0.08] bg-[#0f141b] p-4">
            <h3 className="mb-3 text-sm font-semibold text-white">Device Configuration</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-500">Platform</p>
                <p className="mt-1 text-sm text-gray-300">Android</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-500">Automation</p>
                <p className="mt-1 text-sm text-gray-300">UiAutomator2</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-500">Version</p>
                <p className="mt-1 text-sm text-gray-300">14</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-500">UDID</p>
                <p className="mt-1 text-sm text-gray-300">emulator-5554</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <aside className="space-y-4">
          {/* Connect/Disconnect Button */}
          <button
            type="button"
            onClick={hasSession ? handleDisconnect : undefined}
            disabled={connecting || (!hasSession && !connected)}
            className={`w-full min-h-[46px] flex items-center justify-center gap-2 rounded-xl border text-sm font-semibold transition ${
              hasSession
                ? "border-red-400/40 bg-red-400/10 text-red-400 hover:bg-red-400/20"
                : "bg-[#16f2b3] text-black hover:bg-[#22f6ba]"
            } disabled:cursor-not-allowed disabled:opacity-50`}
          >
            <Unplug size={16} />
            {connecting
              ? hasSession
                ? "Disconnecting..."
                : "Connecting..."
              : hasSession
                ? "Disconnect Device"
                : "Connect Device"}
          </button>

          {/* Active Session */}
          <section className="rounded-xl border border-white/[0.08] bg-[#0f141b] p-4">
            <div className="mb-3 flex items-center justify-between border-b border-white/[0.08] pb-3">
              <h3 className="text-sm font-semibold text-white">Active Session</h3>
              <span
                className={`px-2 py-1 rounded-md text-[10px] font-semibold ${
                  hasSession
                    ? "bg-emerald-400/10 text-emerald-400"
                    : "bg-white/[0.05] text-gray-500"
                }`}
              >
                {hasSession ? "Active" : "Inactive"}
              </span>
            </div>

            <SessionRow label="Platform" value={sessionInfo.platform ?? "-"} />
            <SessionRow label="Device" value={sessionInfo.device ?? "-"} />
            <SessionRow label="Version" value={sessionInfo.version ?? "-"} />
            <SessionRow label="Automation" value={sessionInfo.automation ?? "-"} accent />
            <SessionRow
              label="Session ID"
              value={sessionInfo.sessionId ?? "-"}
              mono
              last
            />
          </section>

          {/* Session Actions */}
          <section className="rounded-xl border border-white/[0.08] bg-[#0f141b] p-4">
            <h3 className="mb-3 text-sm font-semibold text-white">Session Actions</h3>
            {hasSession ? (
              <button
                type="button"
                onClick={() => setConnecting(true)}
                className="w-full min-h-[40px] flex items-center justify-center gap-2 rounded-md border border-white/[0.08] bg-white/[0.03] text-xs font-semibold text-gray-300 transition hover:bg-white/[0.06]"
              >
                <RefreshCw size={14} />
                Refresh Session Info
              </button>
            ) : (
              <div className="rounded-md border border-white/[0.08] px-3 py-2 text-xs leading-6 text-gray-500">
                Connect a device to create an Appium session.
              </div>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
}

function SessionRow({ label, value, accent = false, mono = false, last = false }) {
  return (
    <div
      className={`grid grid-cols-[96px_1fr] items-center gap-3 min-h-[44px] text-xs ${
        last ? "" : "border-b border-white/[0.08]"
      }`}
    >
      <span className="text-gray-500">{label}</span>
      <span
        className={`truncate ${
          accent ? "text-[#BC8CFF]" : "text-gray-200"
        } ${mono ? "font-mono" : ""}`}
      >
        {value}
      </span>
    </div>
  );
}