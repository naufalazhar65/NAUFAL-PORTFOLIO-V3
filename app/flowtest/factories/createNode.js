import { nanoid } from "nanoid";

import { nodeConfig } from "../nodes/nodeConfig";

const defaultFields = {
  launch: [
    {
      label: "Platform",
      value: "Android",
    },
  ],

  tap: [
    {
      label: "Locator",
      value: "id=button",
    },
  ],

  input: [
    {
      label: "Text",
      value: "Sample Text",
    },
  ],

  delay: [
    {
      label: "Duration",
      value: "1000 ms",
    },
  ],

  assert: [
    {
      label: "Expected",
      value: "Success",
    },
  ],
};

export function createNode(type, position) {
  const config = nodeConfig[type];

  return {
    id: nanoid(),

    type,

    position,

    data: {
      ...config,

      fields: defaultFields[type] ?? [],
    },
  };
}
