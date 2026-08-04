import { FiCheckCircle, FiClock, FiStar } from "react-icons/fi";

export const roadmap = [
  {
    title: "Completed",

    color: "#16f2b3",

    icon: FiCheckCircle,

    items: [
      "Visual Workflow Builder",
      "Execution Engine",
      "Node Inspector",
      "Interactive Console",
      "Workflow Simulation",
      "React Flow Integration",
      "Zustand State Management",
    ],
  },

  {
    title: "In Progress",

    color: "#f59e0b",

    icon: FiClock,

    items: [
      "Drag & Drop Builder",
      "Conditional Workflow",
      "Workflow Variables",
      "Reset Demo",
      "Animated Edges",
    ],
  },

  {
    title: "Future Vision",

    color: "#3b82f6",

    icon: FiStar,

    items: [
      "Device Farm",
      "Cloud Execution",
      "Report Export",
      "Plugin System",
      "AI Test Generator",
    ],
  },
];
