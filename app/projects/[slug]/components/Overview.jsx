"use client";

import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiGitBranch,
  FiLayers,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";

const flowtestFacts = [
  {
    icon: FiSmartphone,
    label: "Target",
    value: "Android + iOS",
  },
  {
    icon: FiLayers,
    label: "Editor",
    value: "React Flow",
  },
  {
    icon: FiCpu,
    label: "Runtime",
    value: "Appium",
  },
  {
    icon: FiCheckCircle,
    label: "State",
    value: "Active build",
  },
  {
    icon: FiCode,
    label: "Language",
    value: "TypeScript",
  },
  {
    icon: FiGitBranch,
    label: "CI",
    value: "Headless + JUnit",
  },
];

function getProjectFacts(project) {
  switch (project.slug) {
    case "automation-testing":
      return [
        {
          icon: FiCode,
          label: "Stack",
          value: "Selenium · Cypress · WebdriverIO",
        },
        {
          icon: FiLayers,
          label: "Architecture",
          value: "Page Object Model",
        },
        {
          icon: FiSmartphone,
          label: "Automation",
          value: "Browser / E2E",
        },
        {
          icon: FiGitBranch,
          label: "CI",
          value: "GitHub Actions",
        },
        {
          icon: FiCheckCircle,
          label: "Test Cases",
          value: "120+",
        },
        {
          icon: FiZap,
          label: "Execution",
          value: "4 min",
        },
      ];

    case "mobile-app-testing":
      return [
        {
          icon: FiSmartphone,
          label: "Platforms",
          value: "Android + iOS",
        },
        {
          icon: FiCpu,
          label: "Runtime",
          value: "Appium",
        },
        {
          icon: FiCode,
          label: "Language",
          value: "Python",
        },
        {
          icon: FiLayers,
          label: "Framework",
          value: "Pytest",
        },
        {
          icon: FiGitBranch,
          label: "CI",
          value: "GitHub Actions",
        },
        {
          icon: FiCheckCircle,
          label: "Test Cases",
          value: "32+",
        },
      ];

    case "api-testing":
      return [
        {
          icon: FiCode,
          label: "Tools",
          value: "Postman · Newman",
        },
        {
          icon: FiLayers,
          label: "Validation",
          value: "REST · Functional",
        },
        {
          icon: FiGitBranch,
          label: "Automation",
          value: "Jest · REST Assured",
        },
        {
          icon: FiCheckCircle,
          label: "Endpoints",
          value: "45+",
        },
        {
          icon: FiZap,
          label: "Execution",
          value: "3 min",
        },
        {
          icon: FiCode,
          label: "Docs",
          value: "Postman",
        },
      ];

    case "performance-testing":
      return [
        {
          icon: FiZap,
          label: "Tools",
          value: "k6 · JMeter",
        },
        {
          icon: FiLayers,
          label: "Scenarios",
          value: "Load · Stress",
        },
        {
          icon: FiCpu,
          label: "Coverage",
          value: "Spike · Endurance",
        },
        {
          icon: FiCheckCircle,
          label: "Virtual Users",
          value: "1000",
        },
        {
          icon: FiZap,
          label: "Response",
          value: "<300ms",
        },
        {
          icon: FiGitBranch,
          label: "Execution",
          value: "5 min",
        },
      ];

    case "qa-documentation":
      return [
        {
          icon: FiLayers,
          label: "Documents",
          value: "70+",
        },
        {
          icon: FiCheckCircle,
          label: "Scenarios",
          value: "250+",
        },
        {
          icon: FiCode,
          label: "Artifacts",
          value: "Test Cases",
        },
        {
          icon: FiGitBranch,
          label: "Analysis",
          value: "BVA",
        },
        {
          icon: FiCpu,
          label: "Defects",
          value: "100+",
        },
        {
          icon: FiLayers,
          label: "Output",
          value: "Bug Reports",
        },
      ];

    default:
      return [];
  }
}

export default function Overview({ project }) {
  if (!project) return null;

  const facts =
    project.slug === "flowtest-studio"
      ? flowtestFacts
      : getProjectFacts(project);

  return (
    <section
      id="overview"
      className="relative border-b border-white/[0.08] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-8 border-b border-white/[0.08] pb-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"
        >
          <div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#16f2b3]">
                {project.slug === "flowtest-studio" ? "03" : "02"}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                Project Snapshot
              </span>
            </div>
          </div>

          <div>
            <p className="max-w-3xl text-[clamp(24px,3vw,40px)] font-medium leading-[1.2] tracking-[-0.04em] text-white">
              {project.highlight}
            </p>
            <p className="mt-6 max-w-3xl text-[14px] leading-7 text-gray-400">
              {project.description}
            </p>
          </div>
        </motion.div>

        {/* Facts */}
        {facts.length > 0 && (
          <div className="mt-8 grid border-l border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.03,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="min-h-[130px] border-b border-r border-white/[0.08] px-5 py-5 sm:min-h-[140px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tabular-nums text-gray-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {Icon && <Icon size={14} className="text-gray-500" />}
                  </div>

                  <div className="mt-8">
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                      {item.label}
                    </span>
                    <strong className="mt-2 block text-base font-medium leading-6 tracking-[-0.025em] text-white">
                      {item.value}
                    </strong>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
