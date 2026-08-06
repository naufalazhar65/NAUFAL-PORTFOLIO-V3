"use client";

import DashboardCard from "./DashboardCard";

const stats = [
  {
    title: "Passed",
    value: 12,
    delay: 0.1,
  },
  {
    title: "Failed",
    value: 0,
    color: "#ef4444",
    delay: 0.2,
  },
  {
    title: "Duration",
    value: "2.3s",
    delay: 0.3,
  },
  {
    title: "Success",
    value: "100%",
    delay: 0.4,
  },
];

export default function DashboardStats() {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-2
      "
    >
      {stats.map((stat) => (
        <DashboardCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          color={stat.color}
          delay={stat.delay}
          compact
        />
      ))}
    </div>
  );
}