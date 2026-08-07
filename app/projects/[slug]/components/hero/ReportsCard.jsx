"use client";

import {
  Activity,
  CheckCircle2,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  XCircle,
} from "lucide-react";

const chart = [32, 55, 42, 68, 50, 82, 72, 95, 88, 98];

export default function ReportsCard() {
  return (
    <div
      className="
        w-[560px]

        overflow-hidden

        rounded-[34px]

        border
        border-white/10

        bg-[#101722]/70

        backdrop-blur-2xl

        shadow-[0_30px_80px_rgba(0,0,0,.35)]
      "
    >
      {/* Header */}

      <div
        className="
          border-b
          border-white/5

          px-8
          py-6
        "
      >
        <p
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[4px]

            text-[#16f2b3]
          "
        >
          Analytics
        </p>

        <h2
          className="
            mt-3

            text-3xl
            font-bold

            text-white
          "
        >
          Execution Summary
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Latest workflow execution
        </p>
      </div>

      {/* KPI */}

      <div
        className="
          grid
          grid-cols-2
          gap-5

          p-8
        "
      >
        <div
          className="
            rounded-2xl

            border
            border-emerald-500/15

            bg-emerald-500/10

            p-5
          "
        >
          <CheckCircle2
            size={22}
            className="text-emerald-400"
          />

          <h3 className="mt-5 text-4xl font-bold text-white">
            248
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Passed
          </p>
        </div>

        <div
          className="
            rounded-2xl

            border
            border-rose-500/15

            bg-rose-500/10

            p-5
          "
        >
          <XCircle
            size={22}
            className="text-rose-400"
          />

          <h3 className="mt-5 text-4xl font-bold text-white">
            03
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Failed
          </p>
        </div>
      </div>

      {/* Chart */}

      <div className="px-8">
        <div
          className="
            rounded-2xl

            border
            border-white/5

            bg-white/[0.03]

            p-6
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white">
                Success Rate
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Last 10 executions
              </p>
            </div>

            <div className="flex items-center gap-2 text-[#16f2b3]">
              <TrendingUp size={16} />

              <span className="text-sm font-semibold">
                +8.2%
              </span>
            </div>
          </div>

          <div
            className="
              mt-8

              flex
              h-28
              items-end
              gap-2
            "
          >
            {chart.map((h, index) => (
              <div
                key={index}
                className="
                  flex-1

                  rounded-full

                  bg-gradient-to-t
                  from-[#16f2b3]/40
                  to-[#16f2b3]
                "
                style={{
                  height: `${h}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}

      <div
        className="
          mt-8

          border-t
          border-white/5

          p-8
        "
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-xl

                bg-[#16f2b3]/10
              "
            >
              <Smartphone
                className="text-[#16f2b3]"
                size={22}
              />
            </div>

            <div>
              <p className="text-white">
                Pixel 9
              </p>

              <p className="text-xs text-gray-500">
                Android 15
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-xl

                bg-cyan-500/10
              "
            >
              <Activity
                className="text-cyan-400"
                size={22}
              />
            </div>

            <div>
              <p className="text-white">
                98.7%
              </p>

              <p className="text-xs text-gray-500">
                Stability
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            mt-6

            flex
            items-center
            justify-between

            rounded-2xl

            border
            border-[#16f2b3]/15

            bg-[#16f2b3]/8

            px-5
            py-4
          "
        >
          <div>
            <p className="text-white">
              Environment Ready
            </p>

            <p className="mt-1 text-xs text-gray-500">
              All services operational
            </p>
          </div>

          <ShieldCheck
            className="text-[#16f2b3]"
            size={24}
          />
        </div>
      </div>
    </div>
  );
}