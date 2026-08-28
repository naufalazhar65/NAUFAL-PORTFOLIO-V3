"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import FlowTestStudioPreview from "./components/flowtest-preview/FlowTestStudioPreview";

const technicalProof = [
  {
    number: "01",
    title: "Automation",
    tools: "Selenium · Playwright · WebdriverIO · PyTest",
    contribution:
      "Reusable automation structure, browser workflows, and CI execution.",
  },
  {
    number: "02",
    title: "Mobile",
    tools: "Appium · UiAutomator2 · XCUITest",
    contribution:
      "Real-device flows, locator inspection, and session debugging.",
  },
  {
    number: "03",
    title: "API",
    tools: "Postman · Newman · Supertest · Playwright API",
    contribution:
      "Contract checks, request validation, and failure diagnostics.",
  },
  {
    number: "04",
    title: "Performance",
    tools: "k6 · JMeter",
    contribution: "Load scenarios, thresholds, and result analysis.",
  },
];

export default function Home() {
  return (
    <main className="vercel-home">
      <div className="home-grid" />

      {/* =========================
          HERO
      ========================= */}

      <section className="hero-minimal">
        <div className="hero-meta">
          <span>OPEN TO OPPORTUNITIES</span>
        </div>

        <div className="hero-content">
          <div className="hero-identity">
            <span className="hero-status-dot" />

            <span>HELLO, I&apos;M NAUFAL</span>
          </div>

          <h1>
            I build test tooling
            <br />
            <span>for failures worth investigating.</span>
          </h1>

          <p className="hero-description">
            Software Quality Assurance Engineer focused on automation, mobile
            testing, API testing, and the tooling around reliable execution,
            inspection, and failure evidence.
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="button button-primary">
              See the work
              <FiArrowUpRight size={14} />
            </Link>

            <Link href="/about" className="button button-secondary">
              About Naufal
            </Link>
          </div>
        </div>

        <div className="hero-footer">
          <span>AUTOMATION · MOBILE · API · PERFORMANCE</span>
        </div>
      </section>

      {/* =========================
          FEATURED PROJECT
      ========================= */}

      <section className="featured-section">
        <div className="section-label">
          <span>01</span>
          <span>FEATURED PROJECT</span>
        </div>

        <div className="featured-grid">
          <div className="featured-copy">
            <p className="project-kicker">FLOWTEST STUDIO</p>

            <h2>
              Mobile test failures were
              <br />
              scattered across tools.
            </h2>

            <p>
              Code, inspector sessions, device execution, logs, screenshots, and
              reports often lived in separate places. FlowTest Studio is my
              attempt to bring the most important parts of that workflow into
              one workspace.
            </p>

            <div className="featured-meta">
              <span>React</span>
              <span>TypeScript</span>
              <span>Appium</span>
              <span>React Flow</span>
            </div>

            <div className="featured-meta">
              <span>38 Nodes</span>
              <span>Android + iOS</span>
              <span>CI / JUnit</span>
            </div>

            <Link href="/projects/flowtest-studio" className="text-link">
              Explore the build
              <FiArrowUpRight size={14} />
            </Link>
          </div>

          <div className="featured-preview">
            <div className="preview-product-shell">
              <FlowTestStudioPreview />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          TECHNICAL PROOF
      ========================= */}

      <section className="stats-section">
        <div className="section-label">
          <span>02</span>
          <span>TECHNICAL PROOF</span>
        </div>

        <div className="stats-intro">
          <h2>
            What I work with,
            <br />
            <span>and what I do with it.</span>
          </h2>

          <p>
            The tools matter less than the layer they support: automation
            structure, real-device execution, API validation, and performance
            analysis.
          </p>
        </div>

        <div className="stats-grid">
          {technicalProof.map((item) => (
            <div className="stat-item" key={item.number}>
              <div className="stat-top">
                <span>{item.number}</span>
              </div>

              <div className="stat-bottom">
                <strong>{item.title}</strong>

                <span className="stat-arrow">
                  <FiArrowUpRight size={16} />
                </span>
              </div>

              <p className="stat-tools">{item.tools}</p>

              <p className="stat-contribution">{item.contribution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          ENGINEERING PRINCIPLE
      ========================= */}

      <section className="closing-section">
        <div className="closing-content">
          <p className="hero-eyebrow">HOW I THINK ABOUT QA</p>

          <h2>
            A failed test is only useful
            <br />
            <span>when you can explain why.</span>
          </h2>

          <p className="hero-description">
            That means keeping execution evidence close to the workflow, making
            selectors inspectable, reproducing device failures, and building
            automation that can survive change.
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="button button-primary">
              View my QA work
              <FiArrowUpRight size={14} />
            </Link>

            <Link href="/contact" className="button button-secondary">
              Discuss a QA problem
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
