import automation from "/public/projects/automation.png";
import mobile from "/public/projects/mobile.png";
import api from "/public/projects/api.png";
import performance from "/public/projects/performance.png";
import documentation from "/public/projects/documentation.png";

export const projectsData = [
  {
    id: 1,
    slug: "automation-testing",

    name: "Automation Testing",
    category: "Automation",
    icon: "🤖",

    color: "#16f2b3",

    year: "2025",
    status: "Completed",

    role: "QA Engineer",

    image: automation,

    gallery: [automation],

    summary:
      "End-to-end automation framework using Selenium, Cypress and WebdriverIO.",

    description:
      "Developed end-to-end automation frameworks using Selenium, Cypress and WebdriverIO with Page Object Model architecture, reducing regression testing time and improving software quality.",

    github: "https://github.com/naufalazhar65/CYPRESS-CUCUMBER-POM",
    live: "",

    githubLabel: "View GitHub",
    liveLabel: "Live Demo",

    highlight:
      "Reduced regression execution time by 70% through automated testing.",

    tools: [
      "Selenium",
      "WebdriverIO",
      "Cypress",
      "Pytest",
      "Java",
      "Python",
      "GitHub Actions",
    ],

    features: [
      "Cross Browser Testing",
      "Page Object Model",
      "Parallel Execution",
      "HTML Report",
      "CI/CD Integration",
    ],

    stats: [
      {
        label: "Coverage",
        value: "96%",
      },
      {
        label: "Execution",
        value: "4 min",
      },
      {
        label: "Test Cases",
        value: "120+",
      },
    ],
  },

  {
    id: 2,
    slug: "mobile-app-testing",

    name: "Mobile App Testing",
    category: "Mobile",
    icon: "📱",

    color: "#3b82f6",

    year: "2025",
    status: "Completed",

    role: "QA Engineer",

    image: mobile,

    gallery: [mobile],

    summary:
      "Cross-platform mobile automation using Appium and WebdriverIO.",

    description:
      "Automated Android and iOS testing using Appium and WebdriverIO, ensuring application quality across multiple devices and operating systems.",

    github: "https://github.com/naufalazhar65/WEBDRIVERIO-MOBILE",
    live: "",

    githubLabel: "View GitHub",
    liveLabel: "Live Demo",

    highlight:
      "Automated testing across Android and iOS devices with a single framework.",

    tools: [
      "Appium",
      "WebdriverIO",
      "JavaScript",
      "Android",
      "iOS",
    ],

    features: [
      "Android Testing",
      "iOS Testing",
      "Cross Platform",
      "BDD Framework",
      "Real Device Support",
    ],

    stats: [
      {
        label: "Coverage",
        value: "95%",
      },
      {
        label: "Execution",
        value: "6 min",
      },
      {
        label: "Test Cases",
        value: "80+",
      },
    ],
  },

  {
    id: 3,
    slug: "api-testing",

    name: "API Testing",
    category: "API",
    icon: "🔗",

    color: "#8b5cf6",

    year: "2025",
    status: "Completed",

    role: "QA Engineer",

    image: api,

    gallery: [api],

    summary:
      "REST API testing using Postman, Newman, REST Assured and Jest.",

    description:
      "Performed REST API testing using Postman, Newman, REST Assured and Jest covering functional, performance and security testing.",

    github: "",
    live: "https://documenter.getpostman.com/view/22824154/2sA3JJ93TP",

    githubLabel: "",
    liveLabel: "View Postman Docs",

    highlight:
      "Achieved 98% API coverage through automated API validation.",

    tools: [
      "Postman",
      "Newman",
      "REST Assured",
      "Jest",
    ],

    features: [
      "Functional Testing",
      "Performance Testing",
      "Security Testing",
      "API Documentation",
    ],

    stats: [
      {
        label: "Coverage",
        value: "98%",
      },
      {
        label: "Execution",
        value: "3 min",
      },
      {
        label: "Test Cases",
        value: "150+",
      },
    ],
  },

  {
    id: 4,
    slug: "performance-testing",

    name: "Performance Testing",
    category: "Performance",
    icon: "⚡",

    color: "#f97316",

    year: "2025",
    status: "Completed",

    role: "QA Engineer",

    image: performance,

    gallery: [performance],

    summary:
      "Performance testing using K6 and Apache JMeter.",

    description:
      "Performed load, stress and endurance testing using K6 and Apache JMeter to evaluate application scalability and system stability.",

    github: "",
    live: "",

    githubLabel: "",
    liveLabel: "",

    highlight:
      "Validated application performance up to 1000 concurrent virtual users.",

    tools: [
      "K6",
      "JMeter",
    ],

    features: [
      "Load Testing",
      "Stress Testing",
      "Spike Testing",
      "Endurance Testing",
    ],

    stats: [
      {
        label: "VUs",
        value: "1000",
      },
      {
        label: "Response",
        value: "<300ms",
      },
      {
        label: "Execution",
        value: "5 min",
      },
    ],
  },

  {
    id: 5,
    slug: "qa-documentation",

    name: "QA Documentation",
    category: "Documentation",
    icon: "📝",

    color: "#ec4899",

    year: "2025",
    status: "Completed",

    role: "QA Engineer",

    image: documentation,

    gallery: [documentation],

    summary:
      "Comprehensive QA documentation including Test Cases and Bug Reports.",

    description:
      "Prepared Test Plans, Test Cases, Boundary Value Analysis and Bug Reports to support software quality assurance activities.",

    github: "",
    live:
      "https://docs.google.com/spreadsheets/d/1AfhnYF8g7SUe6a5VdKIg4pvIrOImEOLm1z5oqOwfZts/edit",

    githubLabel: "",
    liveLabel: "View Documentation",

    highlight:
      "Created more than 250 testing scenarios and comprehensive QA documents.",

    tools: [
      "Google Sheets",
      "Test Case",
      "Bug Report",
      "BVA",
    ],

    features: [
      "Test Plan",
      "Test Case",
      "Boundary Value Analysis",
      "Bug Reporting",
    ],

    stats: [
      {
        label: "Documents",
        value: "70+",
      },
      {
        label: "Scenarios",
        value: "250+",
      },
      {
        label: "Bugs",
        value: "100+",
      },
    ],
  },
];