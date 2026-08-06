export const workflow = {
  id: "android-login",

  name: "Android Login Flow",

  description: "Automated login scenario for Android application.",

  platform: "Android",

  version: "1.0.0",

  steps: [
    {
      id: "launch",

      title: "Launch Application",

      action: "launch",

      locator: null,

      timeout: 5000,

      retry: 0,

      duration: 600,

      logs: [
        "Launching Android application...",
        "Application started successfully.",
      ],
    },

    {
      id: "inputUsername",

      title: "Input Username",

      action: "input",

      locator: "id=input-username",

      timeout: 5000,

      retry: 2,

      duration: 700,

      logs: ["Username field focused.", "Typing username..."],
    },

    {
      id: "inputPassword",

      title: "Input Password",

      action: "input",

      locator: "id=input-password",

      timeout: 5000,

      retry: 2,

      duration: 700,

      logs: ["Password field focused.", "Typing password..."],
    },
    {
      id: "tapLogin",

      title: "Tap Login Button",

      action: "tap",

      locator: "id=btn-login",

      timeout: 5000,

      retry: 2,

      duration: 450,

      logs: ["Searching login button...", "Tap action executed."],
    },

    {
      id: "assertDashboard",

      title: "Assert Dashboard",

      action: "assert",

      locator: "id=dashboard",

      timeout: 5000,

      retry: 0,

      duration: 500,

      logs: [
        "Waiting for dashboard...",
        "Dashboard detected.",
        "Assertion passed.",
      ],
    },
  ],
};
