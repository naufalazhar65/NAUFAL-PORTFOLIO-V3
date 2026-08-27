import automation from "@/public/projects/project.gif";
import mobile from "@/public/projects/project.gif";
import api from "@/public/projects/project.gif";
import performance from "@/public/projects/project.gif";
import documentation from "@/public/projects/project.gif";
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
      "Browser automation framework for repeatable regression checks using Selenium, Cypress, and WebdriverIO.",

    description:
      "Built end-to-end browser automation around Page Object Model structure, reusable test flows, execution reports, and GitHub Actions so repetitive regression checks could run consistently instead of being repeated manually.",

    challenge:
      "Repeated regression checks were taking time and became harder to keep consistent as the number of scenarios increased.",

    solution:
      "Moved repeated scenarios into reusable Page Object Model automation and connected the suite to GitHub Actions so the same checks could be executed consistently in CI.",

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
      "Page Object Model",
      "Cross-Browser Scenarios",
      "Reusable Test Flows",
      "Execution Reports",
      "GitHub Actions CI",
    ],

    stats: [
      {
        label: "Test Cases",
        value: "120+",
        featured: true,
      },
      {
        label: "Average Execution",
        value: "4 min",
        featured: false,
      },
      {
        label: "Regression Reduction",
        value: "70%",
        featured: true,
      },
    ],

    workflow: [
      {
        title: "Define Scenario",
        icon: "test",
        subtitle: "Cypress / Cucumber",
        description:
          "Test scenarios are defined as feature-oriented cases so the expected behavior stays readable before implementation.",
        command: "Feature → Scenario → Step",
        output: ["Scenario defined", "Expected behavior documented"],
      },

      {
        title: "Page Object",
        icon: "page",
        subtitle: "Reusable UI Layer",
        description:
          "Application interactions are kept inside reusable Page Object classes instead of being repeated directly inside every test.",
        command: "Scenario → Page Object → Action",
        output: ["Reusable page methods", "UI interaction centralized"],
      },

      {
        title: "Execute",
        icon: "run",
        subtitle: "Automation Runner",
        description:
          "The selected regression scenarios are executed through the automation framework and the configured test runner.",
        command: "Run regression suite",
        output: ["Test execution started", "Assertions evaluated"],
      },

      {
        title: "Report",
        icon: "report",
        subtitle: "Execution Results",
        description:
          "Execution results are collected into reports so failed and passed scenarios can be reviewed after the run.",
        command: "Execution → Report",
        output: ["Test results recorded", "Execution report generated"],
      },

      {
        title: "CI",
        icon: "ci",
        subtitle: "GitHub Actions",
        description:
          "The same automated checks can be connected to GitHub Actions so regression execution is not tied to a local machine.",
        command: "Push → GitHub Actions → Regression",
        output: ["Workflow triggered", "Regression suite executed"],
      },
    ],

    repository: {
      root: "CYPRESS-CUCUMBER-POM",
      branch: "main",

      folders: [
        {
          type: "folder",
          name: "cypress",
          description: "Cypress test workspace",

          children: [
            {
              type: "folder",
              name: "e2e",
              description: "Feature files and test scenarios",
            },
            {
              type: "folder",
              name: "fixtures",
              description: "Reusable test data",
            },
            {
              type: "folder",
              name: "pages",
              description: "Page Object Model classes",
            },
            {
              type: "folder",
              name: "reports",
              description: "Generated execution reports",
            },
            {
              type: "folder",
              name: "support",
              description: "Custom commands and shared setup",
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

Browser automation framework using:

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
      "Built an Appium-based mobile automation framework with Python and Pytest, using Page Object Model, centralized driver creation, reusable test utilities, HTML reports, screenshots, GitHub Actions, and Telegram notifications.",

    challenge:
      "Repeated Android regression checks required too much manual execution, while keeping Android and iOS coverage organized introduced additional maintenance.",

    solution:
      "Separated platform configuration, driver creation, reusable Page Objects, and test execution so Android and iOS suites could share the same automation structure and reporting workflow.",

    highlight:
      "Built one mobile automation setup for Android and iOS with reusable Page Objects, reporting, screenshots, and CI execution.",

    github: "https://github.com/naufalazhar65/SELENIUM-MOBILE-PYTHON",

    githubLabel: "View GitHub",

    live: "",
    liveLabel: "Live Demo",

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
      "Android & iOS Support",
      "Page Object Model",
      "Reusable Driver Factory",
      "Pytest Fixtures",
      "HTML Reporting",
      "Automatic Screenshots",
      "Telegram Notifications",
      "GitHub Actions CI",
    ],

    stats: [
      {
        label: "Test Cases",
        value: "32+",
        description: "Automated end-to-end scenarios",
        featured: true,
      },
      {
        label: "Platforms",
        value: "2",
        description: "Android and iOS execution",
        featured: true,
      },
      {
        label: "Execution Time",
        value: "3 min",
        description: "Average test suite duration",
        featured: false,
      },
    ],

    repository: {
      root: "MOBILE-AUTOMATION-PYTHON",
      branch: "main",

      folders: [
        {
          type: "folder",
          name: "config",
          description: "Android and iOS platform configuration",

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
          description: "Centralized Appium driver creation",

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
          description: "Reusable Page Object Model classes",

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
          description: "Android and iOS test suites",

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
          description: "Reporting and notification helpers",

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

- Python
- Appium
- Pytest
- Page Object Model
- GitHub Actions
- Telegram Notification

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
          "Pytest discovers the iOS login scenario and prepares it for execution.",

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
          "Appium establishes the remote session and communicates with the mobile device through WebDriver.",

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
          "The test can execute against an Android emulator or physical device through Appium.",

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
          "After execution, Pytest generates an HTML report containing execution results and attached evidence.",

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
          "The framework parses the final result and sends execution status and report information to a Telegram group.",

        command: "python send_report.py",

        output: [
          "Result Parsed",
          "Telegram Message Sent",
          "Automation Finished",
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
      "Validated REST APIs with Postman, Newman, REST Assured, and Jest across functional, performance, and security scenarios, with documented requests and repeatable execution.",

    challenge:
      "API checks need to cover more than successful responses. Requests, validation rules, failure scenarios, and repeatable execution all need to stay consistent as the number of endpoints grows.",

    solution:
      "Combined documented Postman scenarios with automated execution through Newman, REST Assured, and Jest so API behavior could be checked repeatedly instead of relying only on manual requests.",

    highlight: "Reached 98% API coverage across the documented test scenarios.",

    github: "",
    githubLabel: "",

    live: "https://documenter.getpostman.com/view/22824154/2sA3JJ93TP",

    liveLabel: "View Postman Docs",

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
        description: "Documented API test scenarios covered",
        featured: true,
      },
      {
        label: "Execution",
        value: "3 min",
        description: "Reported average execution time",
        featured: false,
      },
      {
        label: "Endpoints",
        value: "45+",
        description: "Endpoints included in the documented test scope",
        featured: true,
      },
    ],

    workflow: [
      {
        title: "Define Requests",
        icon: "request",
        subtitle: "Postman",

        description:
          "Define API requests, parameters, headers, payloads, and expected behavior in a documented collection.",

        command: "Collection → Request → Expected Response",

        output: ["Request defined", "Expected behavior documented"],
      },

      {
        title: "Validate",
        icon: "validate",
        subtitle: "Functional Checks",

        description:
          "Validate response status, payload structure, values, and negative scenarios against the expected API behavior.",

        command: "Request → Response → Assertions",

        output: ["Response validated", "Assertions evaluated"],
      },

      {
        title: "Automate",
        icon: "automation",
        subtitle: "Newman / Jest",

        description:
          "Move repeatable API checks into automated execution so the same scenarios can be run consistently.",

        command: "Collection → Newman / Jest → Result",

        output: ["Suite executed", "Results collected"],
      },

      {
        title: "Extend",
        icon: "coverage",
        subtitle: "Performance / Security",

        description:
          "Extend the API test scope beyond functional behavior with performance and security-oriented scenarios.",

        command: "Functional → Performance → Security",

        output: ["Additional scenarios evaluated", "Service behavior reviewed"],
      },

      {
        title: "Document",
        icon: "docs",
        subtitle: "Postman Documentation",

        description:
          "Keep the request collection and endpoint behavior accessible through published API documentation.",

        command: "Collection → Documentation",

        output: [
          "API documentation published",
          "Test scope remains discoverable",
        ],
      },
    ],

    code: `pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response contains expected data", function () {
  const body = pm.response.json();

  pm.expect(body).to.have.property("data");
});`,
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

    summary: "Load and performance testing with k6 and Apache JMeter.",

    description:
      "Used k6 and Apache JMeter to exercise load, stress, spike, and endurance scenarios while observing response time and system stability under increasing traffic.",

    challenge:
      "A performance check is not just about sending more traffic. The useful part is understanding how response behavior and system stability change as the load profile changes.",

    solution:
      "Created separate load, stress, spike, and endurance scenarios with k6 and Apache JMeter so system behavior could be observed under different traffic patterns.",

    highlight:
      "Validated the application under load reaching 1000 concurrent virtual users.",

    github: "",
    githubLabel: "",

    live: "",
    liveLabel: "",

    tools: [{ name: "k6" }, { name: "JMeter" }],

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
        description:
          "Maximum concurrent virtual users in the reported test scenario",
        featured: true,
      },
      {
        label: "Response",
        value: "<300ms",
        description: "Reported response time under the tested workload",
        featured: true,
      },
      {
        label: "Execution",
        value: "5 min",
        description: "Reported duration of the performance test run",
        featured: false,
      },
    ],

    workflow: [
      {
        title: "Define Load",
        icon: "load",
        subtitle: "Traffic Scenario",

        description:
          "Define the expected traffic profile, concurrency target, and test duration before running the scenario.",

        command: "Scenario → Virtual Users → Duration",

        output: ["Load profile defined", "Test duration configured"],
      },

      {
        title: "Run Baseline",
        icon: "baseline",
        subtitle: "Initial Measurement",

        description:
          "Run a baseline scenario to establish normal response behavior before increasing the workload.",

        command: "Baseline → Requests → Response Metrics",

        output: ["Baseline captured", "Response behavior recorded"],
      },

      {
        title: "Increase Load",
        icon: "stress",
        subtitle: "Stress / Spike",

        description:
          "Increase traffic according to the scenario to observe how the application responds under heavier demand.",

        command: "Load → Stress → Spike",

        output: ["Concurrency increased", "System behavior observed"],
      },

      {
        title: "Observe",
        icon: "metrics",
        subtitle: "Response & Stability",

        description:
          "Review response time and execution behavior while the workload is running.",

        command: "Traffic → Response Time → Stability",

        output: ["Response metrics collected", "Stability behavior reviewed"],
      },

      {
        title: "Compare",
        icon: "report",
        subtitle: "Test Results",

        description:
          "Compare the reported results from the different scenarios to understand how workload changes affected the system.",

        command: "Scenario Results → Compare → Report",

        output: ["Results compared", "Performance findings documented"],
      },
    ],

    code: `import http from "k6/http";
import { check } from "k6";

export const options = {
  vus: 1000,
  duration: "5m",
};

export default function () {
  const response = http.get(
    "https://example.com/api"
  );

  check(response, {
    "status is 200": (res) =>
      res.status === 200,
  });
}`,
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
      "QA documentation covering test planning, scenarios, boundary analysis, and bug reporting.",

    description:
      "Prepared test plans, test cases, Boundary Value Analysis scenarios, and bug reports so QA work could be executed, reviewed, and tracked in a consistent structure.",

    challenge:
      "Manual testing becomes harder to review when scenarios, expected behavior, and defects are documented inconsistently across different files or formats.",

    solution:
      "Structured test plans, test cases, boundary-value scenarios, and bug reports into reusable QA documentation so coverage and observed defects could be reviewed independently.",

    highlight:
      "Created more than 250 test scenarios alongside structured QA documentation.",

    github: "",
    githubLabel: "",

    live: "https://docs.google.com/spreadsheets/d/1AfhnYF8g7SU6e5VdKIg4pvIrOImEOLm1z5oqOwfZts/edit",

    liveLabel: "View Documentation",

    tools: [
      { name: "Google Sheets" },
      { name: "Test Case" },
      { name: "Bug Report" },
      { name: "BVA" },
    ],

    features: [
      "Test Planning",
      "Test Case Design",
      "Boundary Value Analysis",
      "Bug Reporting",
    ],

    stats: [
      {
        label: "Documents",
        value: "70+",
        description: "QA documentation artifacts created",
        featured: false,
      },
      {
        label: "Scenarios",
        value: "250+",
        description: "Documented testing scenarios",
        featured: true,
      },
      {
        label: "Bugs Found",
        value: "100+",
        description: "Defects recorded during testing",
        featured: true,
      },
    ],

    workflow: [
      {
        title: "Plan",
        icon: "plan",
        subtitle: "Test Planning",

        description:
          "Define the scope, objectives, and areas that need to be covered before individual test scenarios are written.",

        command: "Requirement → Scope → Test Plan",

        output: ["Test scope defined", "QA objectives documented"],
      },

      {
        title: "Design Cases",
        icon: "test",
        subtitle: "Test Cases",

        description:
          "Translate expected behavior into structured test cases with preconditions, steps, test data, and expected results.",

        command: "Scenario → Steps → Expected Result",

        output: ["Test case documented", "Expected behavior captured"],
      },

      {
        title: "Check Boundaries",
        icon: "boundary",
        subtitle: "BVA",

        description:
          "Use Boundary Value Analysis to cover edge conditions around accepted and rejected input ranges.",

        command: "Minimum → Boundary → Maximum",

        output: ["Boundary cases identified", "Edge scenarios documented"],
      },

      {
        title: "Record Defects",
        icon: "bug",
        subtitle: "Bug Reporting",

        description:
          "Document observed failures with reproducible steps, expected behavior, actual behavior, and supporting information.",

        command: "Failure → Reproduce → Bug Report",

        output: ["Defect reproduced", "Bug report documented"],
      },

      {
        title: "Review",
        icon: "review",
        subtitle: "QA Evidence",

        description:
          "Keep test scenarios and defect records structured enough for another person to review the testing work and its findings.",

        command: "Test Cases + Bugs → QA Review",

        output: ["Coverage reviewed", "Findings organized"],
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

    github: "https://github.com/naufalazhar65/FlowTest-Studio",

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
                  description: "Command palette and keyboard commands",
                },
                {
                  type: "folder",
                  name: "device",
                  description: "Device manager UI and configuration",
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
                  description: "Python generator and code preview",
                },
                {
                  type: "folder",
                  name: "inspector",
                  description: "Element inspection and locator services",
                },
                {
                  type: "folder",
                  name: "project",
                  description: "Project persistence and file workflows",
                },
                {
                  type: "folder",
                  name: "reports",
                  description: "Report persistence, analytics, and exports",
                },
                {
                  type: "folder",
                  name: "suites",
                  description: "Test-suite models and execution",
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
              description: "Android and iOS device discovery",
            },
            {
              type: "folder",
              name: "ai",
              description: "AI prompts and structured schemas",
            },
            {
              type: "folder",
              name: "services",
              description: "Ollama, QA intelligence, and target resolution",
            },
          ],
        },

        {
          type: "folder",
          name: "docs",

          description: "Project documentation and compatibility guidance",
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

          description: "Android and iOS compatibility matrix",
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

        command: "Create FlowTest project",

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

        command: "Add node → Connect node → Validate flow",

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

        command: "Inspect active Appium session",

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

        command: "Run FlowTest flow",

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

        command: "Open execution report",

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

        command: "Generate Python project",

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

        command: "Generate QA improvement plan",

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
  },
];
