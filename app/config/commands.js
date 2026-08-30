import {
  FiCpu,
  FiDownload,
  FiFolder,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTerminal,
  FiUser,
} from "react-icons/fi";

import { personalData } from "@/utils/data/personal-data";

const baseCommands = [
  {
    id: "flowtest",
    label: "Open FlowTest Studio",
    hint: "Live demo · visual mobile automation",
    keywords: ["flowtest", "studio", "demo", "mobile", "appium", "ide"],
    href: "/flowtest",
    icon: FiCpu,
    tag: "DEMO",
  },
  {
    id: "projects",
    label: "View projects",
    hint: "Automation frameworks and QA tooling",
    keywords: ["project", "work", "automation", "portfolio"],
    href: "/projects",
    icon: FiFolder,
  },
  {
    id: "skills",
    label: "Tools I use",
    hint: "Languages, frameworks, CI/CD",
    keywords: ["skill", "tools", "tech", "stack", "languages"],
    href: "/skills",
    icon: FiTerminal,
  },
  {
    id: "about",
    label: "About Naufal",
    hint: "Software Quality Assurance Engineer",
    keywords: ["about", "bio", "profile", "me", "qa"],
    href: "/about",
    icon: FiUser,
  },
  {
    id: "contact",
    label: "Start a conversation",
    hint: "Open to opportunities and collaborations",
    keywords: ["contact", "mail", "talk", "hire", "email", "freelance"],
    href: "/contact",
    icon: FiMail,
  },
  // {
  //   id: "copy-email",
  //   label: "Copy email address",
  //   hint: personalData.email || "naufalazhar65@gmail.com",
  //   keywords: ["copy", "email", "address", "contact"],
  //   icon: FiMail,
  //   action: () => {
  //     navigator.clipboard?.writeText(personalData.email || "");
  //   },
  // },
  {
    id: "github",
    label: "Open GitHub profile",
    hint: "naufalazhar65",
    keywords: ["github", "git", "gt", "code"],
    external: true,
    href: personalData.github,
    icon: FiGithub,
  },
  {
    id: "linkedin",
    label: "Open LinkedIn",
    hint: "in/naufal-azhar",
    keywords: ["linkedin", "in", "hire", "network"],
    external: true,
    href: personalData.linkedIn,
    icon: FiLinkedin,
  },
];

const resumeCommand = personalData.resume
  ? [
      {
        id: "resume",
        label: "Download resume",
        hint: "PDF · opens in Google Drive",
        keywords: ["resume", "cv", "pdf", "download", "file"],
        external: true,
        href: personalData.resume,
        icon: FiDownload,
      },
    ]
  : [];

export const siteCommands = [...baseCommands, ...resumeCommand];

export function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function highlight(text, query) {
  const q = query.trim();
  if (!q) return text;
  const parts = text.split(new RegExp(`(${escapeRegExp(q)})`, "gi"));
  if (parts.length === 1) return text;
  const lowerQ = q.toLowerCase();
  return parts.map((part, i) =>
    part.toLowerCase() === lowerQ ? (
      <span key={i} className="palette-hit">
        {part}
      </span>
    ) : (
      part
    ),
  );
}