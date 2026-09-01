import { FiHome, FiFolder, FiCpu, FiMail, FiFileText } from "react-icons/fi";

import { personalData } from "@/utils/data/personal-data";

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
    href: "/projects",
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
    href: personalData.resume,
    icon: FiFileText,
  },

  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    icon: FiMail,
  },
];
