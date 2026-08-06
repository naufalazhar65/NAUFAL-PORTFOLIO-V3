import { Play, Type, Lock, MousePointerClick, BadgeCheck } from "lucide-react";

export const heroWorkflow = [
  {
    id: "launch",
    title: "Launch App",
    subtitle: "Open application",
    log: "Launching application",
    type: "INFO",

    icon: Play,

    row: 1,
    col: 2,

    accent: "#16f2b3",

    device: "both",
  },

  {
    id: "username",
    title: "Input Username",
    subtitle: "Typing username",
    log: "Typing username",
    type: "ACTION",

    icon: Type,

    row: 2,
    col: 1,

    accent: "#16f2b3",

    device: "android",
  },

  {
    id: "password",
    title: "Input Password",
    subtitle: "Typing password",
    log: "Typing password",
    type: "ACTION",

    icon: Lock,

    row: 2,
    col: 3,

    accent: "#60a5fa",

    device: "ios",
  },

  {
    id: "tap",
    title: "Tap Login",
    subtitle: "Submit credentials",
    log: "Tap login button",
    type: "ACTION",

    icon: MousePointerClick,

    row: 3,
    col: 2,

    accent: "#f59e0b",

    device: "both",
  },

  {
    id: "dashboard",
    title: "Assert Dashboard",
    subtitle: "Validation completed",
    log: "Dashboard assertion passed",
    type: "PASS",

    icon: BadgeCheck,

    row: 4,
    col: 2,

    accent: "#22c55e",

    device: "both",
  },
];
