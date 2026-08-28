"use client";

import {
  BarChart3,
  CheckCircle2,
  Clock3,
  TrendingUp,
  XCircle,
} from "lucide-react";

import { useHero } from "../../HeroContext";

export default function ReportsCanvas() {
  const { reports = [] } = useHero();

  // Data dummy sementara jika reports kosong
  const dummyReports = [
    {
      id: "1",
      status: "passed",
      startedAt: Date.now() - 3600000,
      duration: 12500,
      nodes: [
        { nodeType: "tap", nodeTitle: "Tap Login", status: "passed" },
        { nodeType: "assert", nodeTitle: "Verify Dashboard", status: "passed" },
      ],
      logs: [],
    },
    {
      id: "2",
      status: "failed",
      startedAt: Date.now() - 7200000,
      duration: 18000,
      nodes: [
        { nodeType: "tap", nodeTitle: "Tap Login", status: "passed" },
        { nodeType: "assert", nodeTitle: "Verify Dashboard", status: "failed" },
      ],
      logs: [
        { level: "error", message: "Element not found", details: { reason: "locator timeout" } },
      ],
    },
    {
      id: "3",
      status: "passed",
      startedAt: Date.now() - 10800000,
      duration: 9800,
      nodes: [
        { nodeType: "tap", nodeTitle: "Tap Login", status: "passed" },
        { nodeType: "assert", nodeTitle: "Verify Dashboard", status: "passed" },
      ],
      logs: [],
    },
  ];

  const reportsData = reports.length > 0 ? reports : dummyReports;

  return (
    <div className="h-full overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/[0.08]">
      <ReportAnalytics reports={reportsData} />
    </div>
  );
}

function ReportAnalytics({ reports }) {
  const totalRuns = reports.length;
  const passedRuns = reports.filter((r) => r.status === "passed").length;
  const failedRuns = reports.filter((r) => r.status === "failed").length;
  const stoppedRuns = reports.filter((r) => r.status === "stopped").length;

  const totalDuration = reports.reduce((sum, r) => sum + r.duration, 0);
  const averageDuration = totalRuns > 0 ? totalDuration / totalRuns : 0;
  const passRate = totalRuns > 0 ? (passedRuns / totalRuns) * 100 : 0;
  const failureRate = totalRuns > 0 ? (failedRuns / totalRuns) * 100 : 0;

  const trendReports = [...reports].sort((a, b) => a.startedAt - b.startedAt);
  const failedNodes = getFailedNodes(reports);
  const failureReasons = getFailureReasons(reports);
  const maxFailedNodes = failedNodes.length > 0 ? failedNodes[0].count : 1;
  const maxFailureReason = failureReasons.length > 0 ? failureReasons[0].count : 1;

  if (totalRuns === 0) return null;

  return (
    <div className="space-y-3">
      {/* Summary cards */}
      <div className="grid grid-cols-4 gap-3">
        <AnalyticsCard
          label="Pass Rate"
          value={`${passRate.toFixed(1)}%`}
          icon={<TrendingUp size={17} />}
          accent="#3FB950"
          subtitle={`${passedRuns} of ${totalRuns} runs passed`}
        />
        <AnalyticsCard
          label="Failure Rate"
          value={`${failureRate.toFixed(1)}%`}
          icon={<XCircle size={17} />}
          accent="#F85149"
          subtitle={`${failedRuns} failed runs`}
        />
        <AnalyticsCard
          label="Average Duration"
          value={formatDuration(averageDuration)}
          icon={<Clock3 size={17} />}
          accent="#58A6FF"
          subtitle={`${totalRuns} total executions`}
        />
        <AnalyticsCard
          label="Stopped Runs"
          value={stoppedRuns}
          icon={<BarChart3 size={17} />}
          accent="#D29922"
          subtitle={stoppedRuns === 0 ? "No stopped executions" : "Execution stopped manually"}
        />
      </div>

      {/* Trend + Distribution */}
      <div className="grid grid-cols-[2fr_1fr] gap-3">
        <AnalyticsPanel title="Execution Trend">
          <div className="w-full overflow-x-auto pb-1" style={{ overscrollBehaviorX: "contain" }}>
            <div
              className="flex items-end gap-2.5"
              style={{
                minWidth: Math.max(360, trendReports.length * 52),
                width: "max-content",
                height: 150,
                padding: "12px 4px 4px",
              }}
            >
              {trendReports.map((report, index) => {
                const maxDuration = Math.max(...trendReports.map((r) => r.duration));
                const barHeight = Math.max(22, Math.min(108, maxDuration > 0 ? (report.duration / maxDuration) * 108 : 22));
                const color =
                  report.status === "passed" ? "#3FB950" : report.status === "failed" ? "#F85149" : "#D29922";

                return (
                  <div
                    key={report.id}
                    style={{ flex: "0 0 42px", width: 42, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: 6 }}
                  >
                    <div
                      title={`${report.status.toUpperCase()} · ${formatDuration(report.duration)}`}
                      style={{ width: "100%", height: barHeight, borderRadius: "6px 6px 3px 3px", background: color, opacity: 0.85 }}
                    />
                    <span style={{ color: "#6E7681", fontSize: 9 }}>{index + 1}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-1 flex items-center gap-3 text-[10px] text-gray-500">
            <Legend color="#3FB950" label="Passed" />
            <Legend color="#F85149" label="Failed" />
            <Legend color="#D29922" label="Stopped" />
            <span className="ml-auto">{trendReports.length === 1 ? "1 run" : `${trendReports.length} runs`}</span>
          </div>
        </AnalyticsPanel>

        <AnalyticsPanel title="Run Distribution">
          <div className="flex flex-col gap-3 pt-1">
            <DistributionRow label="Passed" value={passedRuns} total={totalRuns} color="#3FB950" />
            <DistributionRow label="Failed" value={failedRuns} total={totalRuns} color="#F85149" />
            <DistributionRow label="Stopped" value={stoppedRuns} total={totalRuns} color="#D29922" />
          </div>
        </AnalyticsPanel>
      </div>

      {/* Failure Analysis */}
      <div className="grid grid-cols-2 gap-3">
        <AnalyticsPanel title="Most Failed Nodes">
          {failedNodes.length === 0 ? (
            <AnalyticsEmpty icon={<CheckCircle2 size={18} />} message="No failed nodes yet." />
          ) : (
            <div className="flex flex-col gap-3">
              {failedNodes.slice(0, 5).map((item) => (
                <ProgressRow
                  key={item.key}
                  label={item.title}
                  meta={`${item.nodeType} · ${item.count} failure${item.count === 1 ? "" : "s"}`}
                  value={item.count}
                  max={maxFailedNodes}
                  color="#F85149"
                />
              ))}
            </div>
          )}
        </AnalyticsPanel>

        <AnalyticsPanel title="Failure Analysis">
          {failureReasons.length === 0 ? (
            <AnalyticsEmpty icon={<CheckCircle2 size={18} />} message="No failure reasons recorded." />
          ) : (
            <div className="flex flex-col gap-3">
              {failureReasons.slice(0, 5).map((item) => (
                <ProgressRow
                  key={item.reason}
                  label={item.reason}
                  value={item.count}
                  max={maxFailureReason}
                  color="#D29922"
                />
              ))}
            </div>
          )}
        </AnalyticsPanel>
      </div>
    </div>
  );
}

// Helper components (sesuaikan gaya dengan Tailwind)
function AnalyticsCard({ label, value, icon, accent, subtitle }) {
  return (
    <div className="min-w-0 rounded-xl border border-white/10 bg-[#161B22] p-4">
      <div className="flex items-center gap-2 text-[11px] text-gray-500">
        <span style={{ color: accent }}>{icon}</span>
        <span>{label}</span>
      </div>
      <div className="mt-2 text-[22px] font-bold text-white">{value}</div>
      <div className="mt-1 text-[9px] text-gray-600">{subtitle}</div>
    </div>
  );
}

function AnalyticsPanel({ title, children }) {
  return (
    <div className="min-w-0 rounded-xl border border-white/10 bg-[#161B22] p-4">
      <div className="mb-2 text-xs font-semibold text-white">{title}</div>
      {children}
    </div>
  );
}

function DistributionRow({ label, value, total, color }) {
  const percentage = total > 0 ? (value / total) * 100 : 0;
  return (
    <div>
      <div className="flex justify-between text-[10px] text-gray-500 mb-1">
        <span>{label}</span>
        <span>{value} · {percentage.toFixed(1)}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div style={{ width: `${percentage}%`, height: "100%", background: color }} />
      </div>
    </div>
  );
}

function ProgressRow({ label, meta, value, max, color }) {
  const percentage = max > 0 ? (value / max) * 100 : 0;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 mb-1">
        <span className="truncate text-[10px] font-semibold text-gray-300">{label}</span>
        <span className="shrink-0 text-[10px] font-bold" style={{ color }}>{value}</span>
      </div>
      {meta && <div className="text-[9px] text-gray-600 mb-1">{meta}</div>}
      <div className="h-1 rounded-full bg-white/10 overflow-hidden">
        <div style={{ width: `${percentage}%`, height: "100%", background: color }} />
      </div>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}

function AnalyticsEmpty({ icon, message }) {
  return (
    <div className="min-h-[96px] flex items-center justify-center gap-2 text-gray-600 text-[10px]">
      {icon}
      {message}
    </div>
  );
}

// Helper functions
function getFailedNodes(reports) {
  const counts = new Map();
  for (const report of reports) {
    for (const node of report.nodes || []) {
      if (node.status !== "failed") continue;
      const key = `${node.nodeType}:${node.nodeTitle}`;
      const current = counts.get(key);
      if (current) {
        current.count += 1;
      } else {
        counts.set(key, {
          key,
          title: node.nodeTitle,
          nodeType: node.nodeType,
          count: 1,
        });
      }
    }
  }
  return [...counts.values()].sort((a, b) => b.count - a.count);
}

function getFailureReasons(reports) {
  const counts = new Map();
  for (const report of reports) {
    for (const log of report.logs || []) {
      if (log.level !== "error") continue;
      const reason = typeof log.details?.reason === "string" ? log.details.reason : log.message;
      if (!reason) continue;
      counts.set(reason, (counts.get(reason) ?? 0) + 1);
    }
  }
  return [...counts.entries()].map(([reason, count]) => ({ reason, count })).sort((a, b) => b.count - a.count);
}

function formatDuration(duration) {
  if (duration < 1000) return `${Math.round(duration)}ms`;
  return `${(duration / 1000).toFixed(2)}s`;
}