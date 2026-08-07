"use client";

import {
  Activity,
  BarChart3,
  CheckCircle2,
  Clock3,
  FileDown,
  ShieldCheck,
} from "lucide-react";

export default function ReportsCanvas() {
  const recent = [
    "Login Automation",
    "Checkout Flow",
    "Search Product",
    "Profile Validation",
  ];

  return (
    <div className="relative h-full overflow-hidden">
      {/* Background */}

      <div
        className="
          absolute
          inset-0
          opacity-20
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,.05)_1px,transparent_1px)]
          [background-size:22px_22px]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[340px]
          w-[340px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/5
          blur-[120px]
        "
      />

      <div className="relative flex h-full flex-col p-8">
        {/* Header */}

        <div>
          <p className="text-[11px] uppercase tracking-[4px] text-cyan-400">
            Analytics
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Execution Reports
          </h2>
        </div>

        {/* Chart */}

        <div
          className="
            mt-8
            rounded-2xl
            border
            border-white/10
            bg-[#141d29]
            p-6
          "
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm font-semibold text-white">
              Success Rate
            </span>

            <BarChart3
              size={18}
              className="text-cyan-400"
            />
          </div>

          <div className="flex h-28 items-end gap-3">
            {[35, 48, 40, 62, 55, 78, 70].map((h) => (
              <div
                key={h}
                className="flex-1 rounded-t-xl bg-cyan-400/80"
                style={{
                  height: `${h}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Metrics */}

        <div className="mt-6 grid grid-cols-3 gap-4">
          <Metric
            icon={CheckCircle2}
            value="98.7%"
            label="Passed"
          />

          <Metric
            icon={Clock3}
            value="18.2s"
            label="Average"
          />

          <Metric
            icon={ShieldCheck}
            value="0"
            label="Critical"
          />
        </div>

        {/* Recent */}

        <div
          className="
            mt-6
            flex-1
            rounded-2xl
            border
            border-white/10
            bg-[#141d29]
            p-5
          "
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">
              Recent Executions
            </h3>

            <Activity
              size={18}
              className="text-cyan-400"
            />
          </div>

          <div className="space-y-3">
            {recent.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  bg-white/5
                  px-4
                  py-3
                "
              >
                <span className="text-sm text-white">
                  {item}
                </span>

                <span className="text-xs text-emerald-400">
                  Passed
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}

        <button
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-2

            rounded-xl

            border
            border-cyan-400/20

            bg-cyan-400/10

            py-3

            text-sm
            font-semibold

            text-cyan-400
          "
        >
          <FileDown size={16} />
          Export Report
        </button>
      </div>
    </div>
  );
}

function Metric({
  icon: Icon,
  value,
  label,
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-white/10
        bg-[#141d29]
        p-4
      "
    >
      <Icon
        size={18}
        className="text-cyan-400"
      />

      <h4 className="mt-3 text-xl font-bold text-white">
        {value}
      </h4>

      <p className="mt-1 text-xs uppercase tracking-[2px] text-gray-500">
        {label}
      </p>
    </div>
  );
}