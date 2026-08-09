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
      "Scalable cross-platform mobile automation framework built with Appium, Python, and Pytest, supporting Android & iOS with Page Object Model architecture, HTML reporting, screenshots, and Telegram notifications.",

    description:
      "Designed and developed a scalable mobile automation framework for Android and iOS applications using Appium, Python, and Pytest. The framework follows the Page Object Model architecture and includes centralized driver management, reusable utilities, HTML reporting, screenshot capture, GitHub Actions CI integration, and automated Telegram notifications.",

    github: "https://github.com/naufalazhar65/SELENIUM-MOBILE-PYTHON",

    githubLabel: "View GitHub",

    challenge:
      "Manual testing on Android devices required repetitive execution and increased regression time.",

    solution:
      "Implemented a reusable Page Object Model framework with automated test execution and reporting.",

    highlight:
      "Built a reusable cross-platform automation framework capable of running Android and iOS test suites with automated reporting and CI/CD integration.",

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

  {
  id: 6,

  slug: "flowtest-studio",

  featured: true,

  name: "FlowTest Studio",

  category: "Automation IDE",

  icon: "⚡",

  color: "#16f2b3",

  year: "2026",

  status: "In Development",

  role: "Creator",

  image: flowtest,

  gallery: [flowtest],

  summary:
    "A visual mobile automation testing platform inspired by Node-RED and React Flow.",

  description:
    "FlowTest Studio is a visual workflow builder designed for creating mobile automation tests without writing code. Users can drag and connect automation nodes such as Launch App, Tap, Input, Delay, Assert, Swipe, and Execute Workflow. The project is built with React Flow, Zustand, Tailwind CSS, and Framer Motion to provide an interactive testing experience.",

  challenge:
    "Traditional mobile automation frameworks require writing and maintaining code, making them difficult for non-developers and time-consuming for repetitive workflow creation.",

  solution:
    "Designed a visual node-based editor that allows automation workflows to be built through drag-and-drop interactions, complete with live execution simulation, workflow visualization, execution logs, and an interactive inspector.",

  highlight:
    "Built an interactive visual automation platform with real-time workflow execution and node-based testing.",

  github: "https://github.com/naufalazhar65",

  githubLabel: "Source Code",

  live: "/flowtest",

  liveLabel: "Launch Live Demo",

  tools: [
    { name: "Next.js" },
    { name: "React Flow" },
    { name: "Zustand" },
    { name: "Tailwind CSS" },
    { name: "Framer Motion" },
    { name: "Appium" },
    { name: "React Icons" },
  ],

  features: [
    "Visual Workflow Builder",
    "Drag & Drop Nodes",
    "Interactive Execution",
    "Execution Timeline",
    "Inspector Panel",
    "Execution Console",
    "Animated Workflow",
    "React Flow Canvas",
  ],

  stats: [
    {
      label: "Workflow Nodes",
      value: "8+",
      featured: true,
    },
    {
      label: "Interactive",
      value: "100%",
      featured: true,
    },
    {
      label: "Built With",
      value: "React",
      featured: true,
    },
  ],

  code: `const workflow = [
  launch(),
  tap(),
  input(),
  assert()
];`,
},
];
