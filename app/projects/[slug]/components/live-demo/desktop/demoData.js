export const workflow = [
  {
    id: 1,
    title: "Launch App",
    type: "Launch",
    locator: "-",
    timeout: 0,
    screen: "Splash",
  },
  {
    id: 2,
    title: "Tap Login",
    type: "Tap",
    locator: "id=login_button",
    timeout: 5000,
    screen: "Login",
  },
  {
    id: 3,
    title: "Input Username",
    type: "Input",
    locator: "id=username",
    timeout: 5000,
    screen: "Login",
  },
  {
    id: 4,
    title: "Input Password",
    type: "Input",
    locator: "id=password",
    timeout: 5000,
    screen: "Login",
  },
  {
    id: 5,
    title: "Assert Dashboard",
    type: "Assert",
    locator: "text=Dashboard",
    timeout: 5000,
    screen: "Dashboard",
  },
];

export const logs = [
  {
    level: "INFO",
    message: "Session Started",
  },
  {
    level: "INFO",
    message: "Android Driver Initialized",
  },
  {
    level: "RUN",
    message: "Launch App",
  },
  {
    level: "PASS",
    message: "Tap Login Button",
  },
  {
    level: "PASS",
    message: "Input Username",
  },
  {
    level: "PASS",
    message: "Input Password",
  },
  {
    level: "PASS",
    message: "Assert Dashboard",
  },
  {
    level: "DONE",
    message: "Execution Completed",
  },
];

export const library = [
  {
    title: "Actions",
    items: [
      {
        name: "Tap",
        icon: "👆",
        color: "#16f2b3",
      },
      {
        name: "Input",
        icon: "⌨️",
        color: "#60a5fa",
      },
      {
        name: "Swipe",
        icon: "↕",
        color: "#f59e0b",
      },
    ],
  },
  {
    title: "Assertions",
    items: [
      {
        name: "Assert Text",
        icon: "✔",
        color: "#22c55e",
      },
      {
        name: "Assert Visible",
        icon: "👁",
        color: "#8b5cf6",
      },
    ],
  },
  {
    title: "Utilities",
    items: [
      {
        name: "Delay",
        icon: "⏱",
        color: "#f97316",
      },
      {
        name: "Screenshot",
        icon: "📷",
        color: "#ec4899",
      },
    ],
  },
];


