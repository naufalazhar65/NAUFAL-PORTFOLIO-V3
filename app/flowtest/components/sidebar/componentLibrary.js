import { FiMousePointer, FiType, FiClock, FiCheckCircle } from "react-icons/fi";

export const componentLibrary = [
  {
    title: "Interaction",

    items: [
      {
        type: "tap",
        title: "Tap",
        subtitle: "Tap an element",
        icon: FiMousePointer,
        color: "#22c55e",
      },

      {
        type: "textInput",
        title: "Input",
        subtitle: "Input text",
        icon: FiType,
        color: "#3b82f6",
      },

      {
        type: "delay",
        title: "Delay",
        subtitle: "Wait before next action",
        icon: FiClock,
        color: "#eab308",
      },
    ],
  },

  {
    title: "Validation",

    items: [
      {
        type: "assert",
        title: "Assert",
        subtitle: "Verify value",
        icon: FiCheckCircle,
        color: "#f97316",
      },
    ],
  },
];
