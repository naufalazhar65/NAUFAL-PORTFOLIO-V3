import { nanoid } from "nanoid";
import { nodeConfig } from "../nodes/nodeConfig";

const defaultFields = {
  launchApp: [{ label: "Platform", value: "Android" }],
  closeApp: [{ label: "Platform", value: "Android" }],
  tap: [{ label: "Locator", value: "id=button" }],
  inputText: [{ label: "Text", value: "Sample Text" }],
  swipe: [{ label: "Direction", value: "up" }],
  scroll: [{ label: "Direction", value: "down" }],
  wait: [{ label: "Timeout", value: "5s" }],
  longPress: [{ label: "Locator", value: "id=button" }],
  doubleTap: [{ label: "Locator", value: "id=button" }],
  drag: [
    { label: "From", value: "source" },
    { label: "To", value: "target" },
  ],
  pinch: [{ label: "Scale", value: "0.5" }],
  zoom: [{ label: "Scale", value: "1.5" }],
  fling: [{ label: "Direction", value: "up" }],
  hideKeyboard: [],
  pressReturn: [],
  back: [],
  home: [],
  delay: [{ label: "Duration", value: "1000 ms" }],
  screenshot: [{ label: "Filename", value: "screenshot.png" }],
  getText: [{ label: "Locator", value: "id=label" }],
  elementExists: [{ label: "Locator", value: "id=element" }],
  getAttribute: [
    { label: "Locator", value: "id=element" },
    { label: "Attribute", value: "text" },
  ],
  getDisplayed: [{ label: "Locator", value: "id=element" }],
  getEnabled: [{ label: "Locator", value: "id=element" }],
  getSelected: [{ label: "Locator", value: "id=element" }],
  getCurrentActivity: [],
  getCurrentPackage: [],
  getOrientation: [],
  getPlatformVersion: [],
  getDeviceName: [],
  getDeviceTime: [],
  getLocation: [],
  getSize: [],
  getRect: [],
  if: [{ label: "Condition", value: "true" }],
  repeat: [{ label: "Count", value: "1" }],
  assert: [{ label: "Expected", value: "Success" }],
  setVariable: [
    { label: "Name", value: "var" },
    { label: "Value", value: "value" },
  ],
};

export function createNode(type, position) {
  const config = nodeConfig[type] ?? {
    color: "#64748b",
    icon: "❔",
    title: type,
    type: "Custom",
  };

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
