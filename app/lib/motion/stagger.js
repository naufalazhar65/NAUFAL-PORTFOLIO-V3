import { defaultTransition } from "./presets";

export const stagger = {
  hidden: {},

  visible: {
    transition: {
      ...defaultTransition,
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};