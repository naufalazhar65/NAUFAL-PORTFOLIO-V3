import { nodeConfig } from "../nodes/nodeConfig";

export const defaultNodes = [
  {
    id: "1",
    type: "launchApp",
    position: {
      x: 300,
      y: 80,
    },
    data: {
      ...nodeConfig.launchApp,
      fields: [
        {
          label: "Platform",
          value: "Android",
        },
      ],
    },
  },

  {
    id: "2",
    type: "tap",
    position: {
      x: 300,
      y: 270,
    },
    data: {
      ...nodeConfig.tap,
      fields: [
        {
          label: "Locator",
          value: "id=login",
        },
      ],
    },
  },

  {
    id: "3",
    type: "inputText",
    position: {
      x: 300,
      y: 460,
    },
    data: {
      ...nodeConfig.inputText,
      fields: [
        {
          label: "Text",
          value: "admin",
        },
      ],
    },
  },

  {
    id: "4",
    type: "assert",
    position: {
      x: 300,
      y: 650,
    },
    data: {
      ...nodeConfig.assert,
      fields: [
        {
          label: "Expected",
          value: "Dashboard",
        },
      ],
    },
  },
];

export const defaultEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    type: "workflow",
  },
  {
    id: "2-3",
    source: "2",
    target: "3",
    type: "workflow",
  },
  {
    id: "3-4",
    source: "3",
    target: "4",
    type: "workflow",
  },
];