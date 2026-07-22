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

    challenge:
      "Regression testing was taking too much time due to repetitive manual execution.",

    solution:
      "Built a Page Object Model automation framework integrated with GitHub Actions for faster and consistent regression testing.",

    highlight:
      "Reduced regression execution time by 70% through automated testing.",

    github: "https://github.com/naufalazhar65/CYPRESS-CUCUMBER-POM",
    githubLabel: "View GitHub",

    live: "",
    liveLabel: "Live Demo",

    tools: [
      { name: "Selenium" },
      { name: "WebdriverIO" },
      { name: "Cypress" },
      { name: "Pytest" },
      { name: "Java" },
      { name: "Python" },
      { name: "GitHub Actions" },
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
        featured: true,
      },
      {
        label: "Execution",
        value: "4 min",
        featured: false,
      },
      {
        label: "Test Cases",
        value: "120+",
        featured: true,
      },
    ],

    repository: [
      {
        type: "folder",
        name: "cypress",
        level: 0,
      },
      {
        type: "folder",
        name: "e2e",
        level: 1,
      },
      {
        type: "folder",
        name: "fixtures",
        level: 1,
      },
      {
        type: "folder",
        name: "pages",
        level: 1,
      },
      {
        type: "folder",
        name: "reports",
        level: 1,
      },
      {
        type: "folder",
        name: "support",
        level: 1,
      },
      {
        type: "file",
        name: "package.json",
        level: 0,
      },
      {
        type: "file",
        name: "README.md",
        level: 0,
      },
    ],

    code: `describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login Successfully", () => {
    LoginPage.login(username, password);
    Dashboard.verifyDashboard();
  });
});`,
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
      "Cross-platform mobile automation testing using Selenium and Python.",

    description:
      "Developed an automated testing framework for Android applications using Selenium with Python. The framework follows the Page Object Model design pattern to improve maintainability and scalability.",

    github: "https://github.com/naufalazhar65/SELENIUM-MOBILE-PYTHON",

    githubLabel: "View GitHub",

    challenge:
      "Manual testing on Android devices required repetitive execution and increased regression time.",

    solution:
      "Implemented a reusable Page Object Model framework with automated test execution and reporting.",

    highlight:
      "Improved mobile regression testing efficiency through reusable automation scripts.",

    tools: [
      { name: "Python" },
      { name: "Selenium" },
      { name: "iOS" },
      { name: "Android" },
      { name: "GitHub" },
    ],

    features: [
      "Android Automation",
      "Page Object Model",
      "Reusable Components",
      "Cross Device Testing",
      "Automated Reporting",
    ],

    stats: [
  {
    label: "Test Cases",
    value: "40+",
    featured: true,
  },
  {
    label: "Execution",
    value: "5 min",
    featured: false,
  },
  {
    label: "Platform",
    icons: ["android", "apple"],
    featured: true,
  },
],

    repository: [
      {
        type: "folder",
        name: "pages",
        level: 0,
      },
      {
        type: "folder",
        name: "tests",
        level: 0,
      },
      {
        type: "folder",
        name: "utils",
        level: 0,
      },
      {
        type: "folder",
        name: "reports",
        level: 0,
      },
      {
        type: "file",
        name: "requirements.txt",
        level: 1,
      },
      {
        type: "file",
        name: "README.md",
        level: 1,
      },
    ],

    code: `from pages.login_page import LoginPage

def test_login(driver):
    login = LoginPage(driver)
    login.login("standard_user","secret_sauce")
    assert login.is_dashboard_displayed()`,

    workflow: [
      "Launch Android Emulator",
      "Initialize Selenium Driver",
      "Navigate to Login Screen",
      "Execute Test Scenario",
      "Generate HTML Report",
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

    summary: "REST API testing using Postman, Newman, REST Assured and Jest.",

    description:
      "Performed REST API testing using Postman, Newman, REST Assured and Jest covering functional, performance and security testing.",

    github: "",
    live: "https://documenter.getpostman.com/view/22824154/2sA3JJ93TP",

    githubLabel: "",
    liveLabel: "View Postman Docs",

    highlight: "Achieved 98% API coverage through automated API validation.",

    tools: [
      { name: "Postman" },
      { name: "Newman" },
      { name: "REST Assured" },
      { name: "Jest" },
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
        featured: true,
      },
      {
        label: "Execution",
        value: "3 min",
        featured: false,
      },
      {
        label: "Endpoints",
        value: "45+",
        featured: true,
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

    summary: "Performance testing using K6 and Apache JMeter.",

    description:
      "Performed load, stress and endurance testing using K6 and Apache JMeter to evaluate application scalability and system stability.",

    github: "",
    live: "",

    githubLabel: "",
    liveLabel: "",

    highlight:
      "Validated application performance up to 1000 concurrent virtual users.",

    tools: [{ name: "K6" }, { name: "JMeter" }],

    features: [
      "Load Testing",
      "Stress Testing",
      "Spike Testing",
      "Endurance Testing",
    ],

    stats: [
      {
        label: "Virtual Users",
        value: "1000",
        featured: true,
      },
      {
        label: "Response",
        value: "<300ms",
        featured: true,
      },
      {
        label: "Execution",
        value: "5 min",
        featured: false,
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
    live: "https://docs.google.com/spreadsheets/d/1AfhnYF8g7SUe6a5VdKIg4pvIrOImEOLm1z5oqOwfZts/edit",

    githubLabel: "",
    liveLabel: "View Documentation",

    highlight:
      "Created more than 250 testing scenarios and comprehensive QA documents.",

    tools: [
      { name: "Google Sheets" },
      { name: "Test Case" },
      { name: "Bug Report" },
      { name: "BVA" },
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
        featured: false,
      },
      {
        label: "Scenarios",
        value: "250+",
        featured: true,
      },
      {
        label: "Bugs Found",
        value: "100+",
        featured: true,
      },
    ],
  },
];
