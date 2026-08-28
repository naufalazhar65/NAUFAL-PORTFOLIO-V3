// "use client";

// import { useHero } from "../../HeroContext";

// export default function MetricsPanel() {
//   const { metrics = {} } = useHero();

//   return (
//     <div>
//       <h3 className="mb-5 text-xs font-semibold uppercase tracking-[3px] text-gray-400">
//         Summary
//       </h3>

//       <div className="grid grid-cols-2 gap-3">
//         <Metric
//           value={String(metrics.passed ?? 0).padStart(2, "0")}
//           label="Passed"
//         />
//         <Metric
//           value={String(metrics.running ?? 0).padStart(2, "0")}
//           label="Running"
//         />
//         <Metric
//           value={metrics.duration ?? "0s"}
//           label="Duration"
//         />
//         <Metric
//           value={metrics.successRate ?? "0%"}
//           label="Success"
//         />
//       </div>
//     </div>
//   );
// }

// function Metric({ value, label }) {
//   return (
//     <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
//       <div className="text-2xl font-bold text-white">{value}</div>
//       <p className="mt-1 text-[11px] uppercase tracking-[2px] text-gray-500">
//         {label}
//       </p>
//     </div>
//   );
// }