import automation from "@/public/projects/automation.png";
import mobile from "@/public/projects/mobile.png";
import api from "@/public/projects/api.png";
import performance from "@/public/projects/performance.png";
import documentation from "@/public/projects/documentation.png";
import flowtest from "@/public/projects/hero-front.png";

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
      "A browser automation setup built around Selenium, Cypress, and WebdriverIO.",

    description:
      "Built end-to-end browser automation with Selenium, Cypress, and WebdriverIO using Page Object Model structure to make repeated regression checks faster and easier to maintain.",

    challenge:
      "Repeated manual regression checks were taking too much time and were difficult to scale as coverage grew.",

    solution:
      "Built a Page Object Model automation framework with GitHub Actions so the same regression suite could be run consistently in CI.",

    highlight:
      "Reduced regression execution time by 70% by moving repetitive checks into automated test flows.",

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

    repository: {
      root: "CYPRESS-CUCUMBER-POM",
      branch: "main",

      folders: [
        {
          type: "folder",
          name: "cypress",
          description: "Cypress Workspace",
          children: [
            {
              type: "folder",
              name: "e2e",
              description: "Test Scenarios",
            },
            {
              type: "folder",
              name: "fixtures",
              description: "Test Data",
            },
            {
              type: "folder",
              name: "pages",
              description: "Page Object Model",
            },
            {
              type: "folder",
              name: "reports",
              description: "Execution Reports",
            },
            {
              type: "folder",
              name: "support",
              description: "Custom Commands",
            },
          ],
        },
      ],

      files: [
        {
          type: "file",
          name: "package.json",
          content: `{
  "name": "cypress-cucumber-pom",
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run"
  }
}`,
        },
        {
          type: "file",
          name: "cypress.config.js",
          content: `const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
  },
});`,
        },
        {
          type: "file",
          name: "README.md",
          content: `# Cypress Cucumber POM

Automation testing framework using:

- Cypress
- Cucumber
- Page Object Model
- Mochawesome Report

Execute:

npm install
npm run cy:run`,
        },
      ],
    },

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

    name: "Mobile Automation Framework",
    category: "Mobile",
    icon: "📱",
    color: "#3b82f6",

    year: "2025",
    status: "Completed",
    role: "QA Engineer",

    image: mobile,
    gallery: [mobile],

    summary:
      "A cross-platform mobile automation framework built with Appium, Python, and Pytest for Android and iOS.",

    description:
      "Built an Appium-based mobile automation framework with Python and Pytest, using Page Object Model, shared driver setup, HTML reports, screenshots, GitHub Actions, and Telegram notifications.",

    github: "https://github.com/naufalazhar65/SELENIUM-MOBILE-PYTHON",

    githubLabel: "View GitHub",

    challenge:
      "Repeated Android regression checks required too much manual execution, while keeping Android and iOS coverage organized added more maintenance.",

    solution:
      "Implemented reusable Page Objects, centralized driver creation, automated reporting, and CI execution for Android and iOS suites.",

    highlight:
      "Built one mobile automation setup for Android and iOS with reusable page objects, reporting, and CI execution.",

    tools: [
      { name: "Python" },
      { name: "Appium" },
      { name: "Pytest" },
      { name: "Android" },
      { name: "iOS" },
      { name: "GitHub Actions" },
      { name: "Telegram Bot" },
      { name: "JSON" },
    ],

    features: [
      "Cross Platform Testing",
      "Android & iOS Support",
      "Page Object Model",
      "Reusable Driver Factory",
      "Pytest Fixtures",
      "HTML Report",
      "Automatic Screenshots",
      "Telegram Notification",
      "GitHub Actions CI",
    ],

    stats: [
  {
    icon: "tests",
    value: 32,
    suffix: "+",
    label: "Test Cases",
    description: "Automated end-to-end scenarios",
  },
  {
    icon: "platform",
    value: 2,
    label: "Platforms",
    description: "Android & iOS execution",
  },
  {
    icon: "performance",
    value: 3,
    suffix: " min",
    label: "Execution Time",
    description: "Average test suite duration",
  },
],

    repository: {
      root: "MOBILE-AUTOMATION-PYTHON",
      branch: "main",

      folders: [
        {
          type: "folder",
          name: "config",
          description: "Platform Configuration",
          children: [
            {
              type: "file",
              name: "android_config.py",
              content: `from appium.options.android import UiAutomator2Options

ANDROID_OPTIONS = UiAutomator2Options().load_capabilities({
    "platformName": "Android",
    "deviceName": "Android Emulator",
    "automationName": "UiAutomator2",
    "app": "apps/MyDemoAppRN.apk"
})`,
            },
            {
              type: "file",
              name: "ios_config.py",
              content: `from appium.options.ios import XCUITestOptions

IOS_OPTIONS = XCUITestOptions().load_capabilities({
    "platformName": "iOS",
    "deviceName": "iPhone 15",
    "automationName": "XCUITest"
})`,
            },
          ],
        },

        {
          type: "folder",
          name: "drivers",
          description: "Driver Factory",
          children: [
            {
              type: "file",
              name: "driver_factory.py",
              content: `from appium import webdriver

from config.android_config import AndroidConfig
from config.ios_config import IOSConfig

class DriverFactory:

    @staticmethod
    def create(platform):
        if platform == "android":
            return webdriver.Remote(
                AndroidConfig.SERVER_URL,
                AndroidConfig.CAPABILITIES
            )

        if platform == "ios":
            return webdriver.Remote(
                IOSConfig.SERVER_URL,
                IOSConfig.CAPABILITIES
            )

        raise Exception("Unsupported platform")
`,
            },
          ],
        },

        {
          type: "folder",
          name: "pages",
          description: "Page Object Model",
          children: [
            {
              type: "folder",
              name: "ios",
              children: [
                {
                  type: "file",
                  name: "base_page.py",
                  content: `class BasePage:
    def __init__(self, driver):
        self.driver = driver`,
                },

                {
                  type: "file",
                  name: "login_page.py",
                  content: `from pages.base_page import BasePage

class LoginPage(BasePage):

    def login(self, username, password):
        self.username.send_keys(username)
        self.password.send_keys(password)
        self.login_button.click()
`,
                },

                {
                  type: "file",
                  name: "products_page.py",
                  content: `class ProductsPage(BasePage):

    def sort_price(self):
        self.sort_button.click()`,
                },

                {
                  type: "file",
                  name: "settings_page.py",
                  content: `class SettingsPage(BasePage):

    def logout(self):
        self.logout_button.click()`,
                },
              ],
            },
          ],
        },

        {
          type: "folder",
          name: "tests",
          description: "Android & iOS Test Suites",
          children: [
            {
              type: "folder",
              name: "ios",
              children: [
                {
                  type: "file",
                  name: "test_ios_login.py",
                  content: `def test_login(driver):

    page = LoginPage(driver)

    page.login(
        "standard_user",
        "secret_sauce"
    )

    assert page.is_dashboard_displayed()
`,
                },

                {
                  type: "file",
                  name: "test_ios_products.py",
                  content: `def test_sort(driver):

    ProductsPage(driver).sort_price()`,
                },
              ],
            },
          ],
        },

        {
          type: "folder",
          name: "utils",
          description: "Helper Utilities",
          children: [
            {
              type: "file",
              name: "telegram_notifier.py",
              content: `import requests

class TelegramNotifier:

    def send(self, message):

        requests.post(
            self.url,
            json={
                "chat_id": self.chat_id,
                "text": message
            }
        )
`,
            },

            {
              type: "file",
              name: "report_sender.py",
              content: `from utils.telegram_notifier import send_message

send_message(report)`,
            },

            {
              type: "file",
              name: "wait.py",
              content: `from selenium.webdriver.support.ui import WebDriverWait`,
            },
          ],
        },
      ],

      files: [
        {
          type: "file",
          name: "README.md",
          content: `# Mobile Automation Framework

Cross-platform mobile automation framework built using:

• Python
• Appium
• Pytest
• Page Object Model
• GitHub Actions
• Telegram Notification

Supported Platforms:
- Android
- iOS
`,
        },

        {
          type: "file",
          name: "requirements.txt",
          content: `appium-python-client
pytest
pytest-html
pytest-json-report
selenium
requests
`,
        },

        {
          type: "file",
          name: "pytest.ini",
          content: `[pytest]

addopts =
    --html=reports/html/pytest_html_report.html
    --json-report
    --json-report-file=reports/json/output.json

testpaths = tests
`,
        },

        {
          type: "file",
          name: "conftest.py",
          content: `import pytest

from drivers.driver_factory import DriverFactory

@pytest.fixture
def driver():

    driver = DriverFactory.create("ios")

    yield driver

    driver.quit()
`,
        },
      ],
    },

    workflow: [
      {
        title: "Test Case",
        icon: "test",
        subtitle: "tests/ios/test_ios_login.py",

        description:
          "Pytest discovers the iOS login test case and prepares it for execution.",

        command: "pytest tests/ios/test_ios_login.py -v",

        output: [
          "Collected 1 test",
          "Loaded login test",
          "Ready for execution",
        ],
      },

      {
        title: "Pytest",
        icon: "pytest",
        subtitle: "Execute Test",

        description:
          "Pytest starts the execution process, loads fixtures, and prepares the testing environment.",

        command:
          "pytest -v --html=reports/html/report.html --self-contained-html",

        output: [
          "Pytest Session Started",
          "Fixture Loaded",
          "Test Execution Started",
        ],
      },

      {
        title: "Page Object",
        icon: "page",
        subtitle: "login_page.py",

        description:
          "The test interacts with reusable Page Object classes that encapsulate application behavior and UI elements.",

        command: "LoginPage(driver).login(username, password)",

        output: [
          "Username entered",
          "Password entered",
          "Login button clicked",
        ],
      },

      {
        title: "Driver Factory",
        icon: "driver",
        subtitle: "driver_factory.py",

        description:
          "Driver Factory creates the appropriate Appium driver based on the selected platform.",

        command: "DriverFactory.create(platform='ios')",

        output: [
          "Platform detected",
          "Capabilities loaded",
          "Driver initialized",
        ],
      },

      {
        title: "Appium",
        icon: "appium",
        subtitle: "Appium Server",

        description:
          "Appium establishes a remote session and communicates with the mobile device through WebDriver protocol.",

        command: "http://127.0.0.1:4723",

        output: [
          "Appium Server Running",
          "Session Created",
          "Application Launched",
        ],
      },

      {
        title: "Android Emulator",
        icon: "android",
        subtitle: "Pixel API 35",

        description:
          "Automation is executed on an Android Emulator (or physical device) where every interaction is simulated automatically.",

        command: "adb devices",

        output: [
          "Pixel_API_35 Connected",
          "Application Installed",
          "Ready for Testing",
        ],
      },
      {
        title: "iOS Simulator",
        icon: "ios",
        subtitle: "iPhone 15 Simulator",

        description:
          "Appium connects to the iOS Simulator through XCUITest and launches the application for automated testing.",

        command: "xcrun simctl boot 'iPhone 15'",

        output: [
          "iPhone 15 Simulator Booted",
          "Application Installed",
          "Ready for Testing",
        ],
      },

      {
        title: "HTML Report",
        icon: "report",
        subtitle: "pytest-html",

        description:
          "After execution, Pytest generates an HTML report including execution time, screenshots, and test results.",

        command: "pytest-html reports/html/report.html",

        output: [
          "HTML Report Generated",
          "Screenshot Attached",
          "Summary Created",
        ],
      },

      {
        title: "Telegram",
        icon: "telegram",
        subtitle: "Notification",

        description:
          "The automation framework parses the final results and sends a notification to a Telegram group, including execution status and report link.",

        command: "python send_report.py",

        output: [
          "Result Parsed",
          "Telegram Message Sent",
          "Automation Finished Successfully",
        ],
      },
    ],

    code: `from pages.ios.login_page import LoginPage
from utils.helpers import load_json
import pytest

@pytest.mark.ios
@pytest.mark.regression
def test_login(driver):

    data = load_json("test_data/login.json")
    user = data["valid_user"]

    login = LoginPage(driver)

    login.login(
        user["username"],
        user["password"]
    )

    assert login.is_login_success()`,
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

    summary: "API validation using Postman, Newman, REST Assured, and Jest.",

    description:
      "Validated REST APIs with Postman, Newman, REST Assured, and Jest across functional, performance, and security scenarios.",

    github: "",
    live: "https://documenter.getpostman.com/view/22824154/2sA3JJ93TP",

    githubLabel: "",
    liveLabel: "View Postman Docs",

    highlight: "Reached 98% API coverage across the documented test scenarios.",

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

    summary: "Load and performance testing with K6 and Apache JMeter.",

    description:
      "Used K6 and Apache JMeter to exercise load, stress, spike, and endurance scenarios and observe response time and system stability.",

    github: "",
    live: "",

    githubLabel: "",
    liveLabel: "",

    highlight:
      "Validated the application under load up to 1000 concurrent virtual users.",

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
      "QA documentation covering test planning, scenarios, and bug reporting.",

    description:
      "Prepared test plans, test cases, Boundary Value Analysis, and bug reports to make QA work easier to execute and review.",

    github: "",
    live: "https://docs.google.com/spreadsheets/d/1AfhnYF8g7SUe6a5VdKIg4pvIrOImEOLm1z5oqOwfZts/edit",

    githubLabel: "",
    liveLabel: "View Documentation",

    highlight:
      "Created more than 250 test scenarios alongside structured QA documentation.",

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

  {
  id: 6,

  slug: "flowtest-studio",

  featured: true,

  name: "FlowTest Studio",

  category: "Automation IDE",

  icon: "⚡",

  color: "#16f2b3",

  year: "2026",

  status: "Active Development",

  role: "Creator",

  image: flowtest,

  gallery: [flowtest],

  summary:
    "A visual mobile automation studio I am building to make Android and iOS test workflows easier to design and debug.",

  description:
    "FlowTest Studio is a browser-based workspace that combines visual flow authoring, Appium inspection, mobile execution, evidence capture, reporting, test suites, CI execution, Python project generation, and structured AI assistance.",

  challenge:
    "Mobile automation can become fragmented: write code in one place, inspect elements in another, run the test somewhere else, then jump between logs and reports when something fails.",

  solution:
    "I built a visual, plugin-based workspace where a QA engineer can design a flow, inspect an Appium session, validate the flow, run it on Android or iOS, collect evidence, review the result, generate Python tests, and use structured AI assistance when needed.",

  highlight:
    "A visual workspace for designing mobile tests, inspecting Appium sessions, running flows, and keeping the evidence close to the execution.",

  github:
    "https://github.com/naufalazhar65/FlowTest-Studio",

  githubLabel: "Source Code",

  live: "/flowtest",

  liveLabel: "Launch Live Demo",

  tools: [
    { name: "React" },
    { name: "TypeScript" },
    { name: "Vite" },
    { name: "Tailwind CSS" },
    { name: "React Flow" },
    { name: "Zustand" },
    { name: "Framer Motion" },
    { name: "Appium" },
    { name: "UiAutomator2" },
    { name: "XCUITest" },
    { name: "Express" },
    { name: "Ollama" },
    { name: "Vitest" },
  ],

  features: [
    "Visual Flow Designer",
    "Plugin-Based Node System",
    "Appium Element Inspector",
    "Android & iOS Execution",
    "Real-Device Support",
    "Execution Timeline & Controls",
    "Screenshots & Page-Source Evidence",
    "Persisted Reports & Analytics",
    "Sequential Test Suites",
    "CI-Ready Headless Runner",
    "JUnit XML Reporting",
    "Python / Pytest Generator",
    "AI Test-Case Generation",
    "Generic Locator Self-Healing",
    "Execution Recovery",
  ],

  stats: [
    {
      label: "Registered Nodes",
      value: "38",
      featured: true,
    },
    {
      label: "Platforms",
      value: "Android + iOS",
      featured: true,
    },
    {
      label: "CI",
      value: "Ready",
      featured: true,
    },
  ],

  repository: {
    root: "FlowTest-Studio",

    branch: "main",

    folders: [
      {
        type: "folder",
        name: "src",

        description:
          "Frontend application, product features, shared components, and execution workflows",

        children: [
          {
            type: "folder",
            name: "features",

            children: [
              {
                type: "folder",
                name: "ai",
                description:
                  "AI client, plans, previews, and validated application",
              },
              {
                type: "folder",
                name: "command",
                description:
                  "Command palette and keyboard commands",
              },
              {
                type: "folder",
                name: "device",
                description:
                  "Device manager UI and configuration",
              },
              {
                type: "folder",
                name: "execution",
                description:
                  "Execution engine, Appium services, runners, and recovery",
              },
              {
                type: "folder",
                name: "flow",
                description:
                  "Canvas, nodes, plugins, actions, store, and validation",
              },
              {
                type: "folder",
                name: "generator",
                description:
                  "Python generator and code preview",
              },
              {
                type: "folder",
                name: "inspector",
                description:
                  "Element inspection and locator services",
              },
              {
                type: "folder",
                name: "project",
                description:
                  "Project persistence and file workflows",
              },
              {
                type: "folder",
                name: "reports",
                description:
                  "Report persistence, analytics, and exports",
              },
              {
                type: "folder",
                name: "suites",
                description:
                  "Test-suite models and execution",
              },
            ],
          },
        ],
      },

      {
        type: "folder",
        name: "server",

        description:
          "Express local service for device discovery and AI workflows",

        children: [
          {
            type: "folder",
            name: "device",
            description:
              "Android and iOS device discovery",
          },
          {
            type: "folder",
            name: "ai",
            description:
              "AI prompts and structured schemas",
          },
          {
            type: "folder",
            name: "services",
            description:
              "Ollama, QA intelligence, and target resolution",
          },
        ],
      },

      {
        type: "folder",
        name: "docs",

        description:
          "Project documentation and compatibility guidance",
      },
    ],

    files: [
      {
        type: "file",
        name: "README.md",

        description:
          "Product overview, capabilities, architecture, setup, testing, and current limitations",

        content:
          "# FlowTest Studio\n\nVisual Mobile Automation Testing Studio",
      },

      {
        type: "file",
        name: "docs/ROADMAP.md",

        description:
          "Phased product roadmap from real-device reliability through CI, resilience, scale, AI governance, and collaboration",

        content:
          "M1 Real-device reliability → M2 CI-ready execution → M3 Test data & resilience → M4 Parallel execution → M5 AI governance → M6 Collaboration",
      },

      {
        type: "file",
        name: "docs/COMPATIBILITY.md",

        description:
          "Android and iOS compatibility matrix",
      },

      {
        type: "file",
        name: "docs/IOS-REAL-DEVICE.md",

        description:
          "Validated iOS physical-device setup using Xcode, XCUITest, and WebDriverAgent",
      },
    ],
  },

  workflow: [
    {
      title: "Create Project",
      icon: "project",
      subtitle: "Project Workspace",

      description:
        "Create or open an Android, iOS, or cross-platform automation project.",

      command:
        "Create FlowTest project",

      output: [
        "Project created",
        "Platform configuration loaded",
        "Workspace ready",
      ],
    },

    {
      title: "Design Flow",
      icon: "flow",
      subtitle: "React Flow",

      description:
        "Build connected automation scenarios using the visual node-based editor.",

      command:
        "Add node → Connect node → Validate flow",

      output: [
        "Node inserted",
        "Execution path connected",
        "Flow validation passed",
      ],
    },

    {
      title: "Inspect App",
      icon: "inspector",
      subtitle: "Appium Inspector",

      description:
        "Inspect the active mobile application, generate locator candidates, and validate them against the Appium session.",

      command:
        "Inspect active Appium session",

      output: [
        "Page source retrieved",
        "Element tree parsed",
        "Locator candidates generated",
      ],
    },

    {
      title: "Execute",
      icon: "appium",
      subtitle: "Appium Runtime",

      description:
        "Run the visual flow against an Android or iOS Appium session.",

      command:
        "Run FlowTest flow",

      output: [
        "Session created",
        "Flow execution started",
        "Node results recorded",
      ],
    },

    {
      title: "Diagnose",
      icon: "report",
      subtitle: "Evidence & Reports",

      description:
        "Review execution logs, screenshots, page source, durations, errors, and persisted run reports.",

      command:
        "Open execution report",

      output: [
        "Execution evidence collected",
        "Report persisted",
        "Failure context available",
      ],
    },

    {
      title: "Generate",
      icon: "code",
      subtitle: "Python / Pytest",

      description:
        "Generate a structured Python, pytest, and Appium project from the visual flow.",

      command:
        "Generate Python project",

      output: [
        "Project structure generated",
        "Test code emitted",
        "Monaco preview ready",
      ],
    },

    {
      title: "Assist",
      icon: "ai",
      subtitle: "AI + QA Intelligence",

      description:
        "Use structured AI plans for test generation, flow analysis, validated changes, and generic locator self-healing.",

      command:
        "Generate QA improvement plan",

      output: [
        "Flow context analyzed",
        "Plan validated",
        "Recommended changes ready for review",
      ],
    },
  ],

  code: `const flow = [
  launchApp(),
  tap("Login"),
  inputText("Username", username),
  inputText("Password", password),
  tap("Login Button"),
  assert("Dashboard"),
];`,
}
];
