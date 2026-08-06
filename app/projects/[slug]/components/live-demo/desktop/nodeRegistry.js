import {
  FiPlay,
  FiMousePointer,
  FiType,
  FiCheckCircle,
  FiClock,
  FiCamera,
} from "react-icons/fi";

export const NODE_REGISTRY = {
  launch: {
    label: "Launch",
    color: "#3b82f6",
    Icon: FiPlay,
  },

  tap: {
    label: "Tap",
    color: "#16f2b3",
    Icon: FiMousePointer,
  },

  input: {
    label: "Input",
    color: "#60a5fa",
    Icon: FiType,
  },

  assert: {
    label: "Assert",
    color: "#8b5cf6",
    Icon: FiCheckCircle,
  },

  delay: {
    label: "Delay",
    color: "#f59e0b",
    Icon: FiClock,
  },

  screenshot: {
    label: "Screenshot",
    color: "#ec4899",
    Icon: FiCamera,
  },
};

export function getNodeConfig(action) {
  return (
    NODE_REGISTRY[action] ?? {
      label: action,
      color: "#6b7280",
      Icon: FiPlay,
    }
  );
}
