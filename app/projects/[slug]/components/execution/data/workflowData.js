export const workflow = {
  id: "android-login",

  name: "Android Login Flow",

  description: "Automated login scenario for Android application.",

  platform: "Android",

  version: "1.0.0",
};

/**
 * New Graph Model
 */

export const nodes = [
  {
    id: "launch",

    type: "launch",

    position: {
      x: 0,
      y: 0,
    },

    data: {
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
  },

  {
    id: "inputUsername",

    type: "input",

    position: {
      x: 0,
      y: 180,
    },

    data: {
      title: "Input Username",

      action: "input",

      locator: "id=input-username",

      timeout: 5000,

      retry: 2,

      duration: 700,

      logs: ["Username field focused.", "Typing username..."],
    },
  },

  {
    id: "inputPassword",

    type: "input",

    position: {
      x: 0,
      y: 360,
    },

    data: {
      title: "Input Password",

      action: "input",

      locator: "id=input-password",

      timeout: 5000,

      retry: 2,

      duration: 700,

      logs: ["Password field focused.", "Typing password..."],
    },
  },

  {
    id: "tapLogin",

    type: "tap",

    position: {
      x: 0,
      y: 540,
    },

    data: {
      title: "Tap Login Button",

      action: "tap",

      locator: "id=btn-login",

      timeout: 5000,

      retry: 2,

      duration: 450,

      logs: ["Searching login button...", "Tap action executed."],
    },
  },

  {
    id: "assertDashboard",

    type: "assert",

    position: {
      x: 0,
      y: 720,
    },

    data: {
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
  },
];

/**
 * Graph Connection
 */

export const edges = [
  {
    id: "edge-launch",

    source: "launch",

    target: "inputUsername",
  },

  {
    id: "edge-username",

    source: "inputUsername",

    target: "inputPassword",
  },

  {
    id: "edge-password",

    source: "inputPassword",

    target: "tapLogin",
  },

  {
    id: "edge-login",

    source: "tapLogin",

    target: "assertDashboard",
  },
];

/**
 * Temporary Compatibility Layer
 *
 * Existing components still use workflow.steps.
 * This will be removed after the migration.
 */

workflow.steps = nodes.map((node) => ({
  id: node.id,

  ...node.data,
}));
