import {
  FiCheckCircle,
  FiClock,
  FiArrowUpRight,
} from "react-icons/fi";

export const roadmap = [
  {
    number: "NOW",
    title: "Test data & execution resilience",
    status: "In Progress",
    icon: FiClock,
    color: "#16f2b3",
    description:
      "The current work is making existing flows safer to reuse across environments and data sets while improving recovery from transient execution failures.",
    milestones: [
      "Named environments",
      "JSON / CSV test data",
      "Parameterized suite runs",
      "Retry policies",
      "Transient-failure classification",
      "Secret and PII redaction",
    ],
  },

  {
    number: "NEXT",
    title: "Faster regression at scale",
    status: "Next",
    icon: FiArrowUpRight,
    color: "#666",
    description:
      "The next step is reducing regression time without losing execution evidence, deterministic results, or isolated mobile sessions.",
    milestones: [
      "Parallel suite execution",
      "Resource-aware scheduling",
      "Concurrency controls",
      "Session isolation",
      "Queue visibility",
    ],
  },

  {
    number: "LATER",
    title: "Trustworthy AI and collaboration",
    status: "Later",
    icon: FiArrowUpRight,
    color: "#666",
    description:
      "Longer-term work is focused on reviewable AI assistance and project collaboration, with explicit approval and traceability around automated changes.",
    milestones: [
      "AI change review",
      "Confidence and rationale tracking",
      "Rollback references",
      "Flow revision history",
      "Git-friendly project assets",
    ],
  },
];

export const completedRoadmap = [
  {
    number: "M1",
    title: "Real-device reliability",
    status: "Complete",
    icon: FiCheckCircle,
    color: "#16f2b3",
  },
  {
    number: "M2",
    title: "CI-ready suite runner",
    status: "Complete",
    icon: FiCheckCircle,
    color: "#16f2b3",
  },
];