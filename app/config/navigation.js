import { FiHome, FiFolder, FiCpu, FiMail, FiFileText } from "react-icons/fi";

export const navigationConfig = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: FiHome,
  },

  {
    id: "projects",
    label: "Projects",
    href: "/#projects",
    icon: FiFolder,
  },

  {
    id: "flowtest",
    label: "FlowTest",
    href: "/flowtest",
    icon: FiCpu,
  },

  {
    id: "resume",
    label: "Resume",
    href: "/resume",
    icon: FiFileText,
  },

  {
    id: "contact",
    label: "Contact",
    href: "/#contact",
    icon: FiMail,
  },
];
