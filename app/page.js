"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FiArrowUpRight,
  FiCpu,
  FiDownload,
  FiFolder,
  FiMail,
  FiSearch,
  FiTerminal,
  FiUser,
} from "react-icons/fi";

import FlowTestStudioPreview from "./components/flowtest-preview/FlowTestStudioPreview";
import { personalData } from "@/utils/data/personal-data";

const commands = [
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
  {
    id: "resume",
    label: "Download resume",
    hint: "PDF · opens in Google Drive",
    keywords: ["resume", "cv", "pdf", "download", "file"],
    external: true,
    href: personalData.resume,
    icon: FiDownload,
  },
];

function highlight(text, query) {
  const q = query.trim().toLowerCase();
  if (!q) return text;
  const index = text.toLowerCase().indexOf(q);
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index)}
      <span className="palette-hit">{text.slice(index, index + q.length)}</span>
      {text.slice(index + q.length)}
    </>
  );
}

function CommandPalette() {
  const router = useRouter();
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((item) =>
      `${item.label} ${item.hint} ${item.keywords.join(" ")}`
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  useEffect(() => {
    setActive(0);
  }, [query, results.length]);

  const open = useCallback(
    (item) => {
      if (item.external) {
        window.open(item.href, "_blank", "noopener,noreferrer");
      } else {
        router.push(item.href);
      }
    },
    [router],
  );

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => (index + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive(
        (index) => (index - 1 + results.length) % results.length,
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      const item = results[active];
      if (item) open(item);
    } else if (event.key === "Escape") {
      setQuery("");
      inputRef.current?.blur();
    }
  };

  return (
    <div className="palette-window">
      {/* =========================
          WINDOW HEADER
      ========================= */}
      <div className="palette-status">
        <span className="hero-status-dot" aria-hidden="true" />
        <span className="palette-status-text">Open to opportunities</span>
        <span className="palette-status-name">Naufal Azhar</span>
      </div>

      {/* =========================
          SEARCH
      ========================= */}
      <div
        className="palette-search"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) inputRef.current?.focus();
        }}
      >
        <FiSearch size={16} aria-hidden="true" className="palette-search-icon" />
        <span className="palette-prefix" aria-hidden="true">
          naufal<span className="palette-prefix-colon">:</span>
        </span>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search commands, projects, tools…"
          aria-label="Search commands"
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-commands"
          aria-activedescendant={results[active] ? `command-${results[active].id}` : undefined}
          autoComplete="off"
          spellCheck="false"
        />
        <kbd className="palette-kbd">
          <span className="palette-kbd-key">⌘K</span>
        </kbd>
      </div>

      {/* =========================
          COMMANDS
      ========================= */}
      <div className="palette-body">
        <p className="palette-group-label">Actions</p>

        <div className="palette-commands" id="palette-commands" role="listbox">
          {results.length > 0 ? (
            results.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === active;

              return (
                <Link
                  key={item.id}
                  id={`command-${item.id}`}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  role="option"
                  aria-selected={isActive}
                  onMouseEnter={() => setActive(index)}
                  onClick={(event) => {
                    if (item.external) {
                      event.preventDefault();
                      open(item);
                    }
                  }}
                  className={`palette-command${isActive ? " is-active" : ""}`}
                >
                  <span className="palette-command-icon" aria-hidden="true">
                    <Icon size={15} />
                  </span>

                  <span className="palette-command-text">
                    <span className="palette-command-label">
                      {highlight(item.label, query)}
                    </span>
                    <span className="palette-command-hint">
                      {highlight(item.hint, query)}
                    </span>
                  </span>

                  {item.tag && (
                    <span className="palette-command-tag">{item.tag}</span>
                  )}

                  <kbd className="palette-kbd palette-kbd-shortcut">
                    ⌘{index + 1}
                  </kbd>

                  <FiArrowUpRight
                    size={13}
                    aria-hidden="true"
                    className="palette-command-arrow"
                  />
                </Link>
              );
            })
          ) : (
            <div className="palette-command palette-empty" role="option" aria-selected="false">
              <FiSearch size={14} aria-hidden="true" />
              <span>
                No results for &ldquo;{query}&rdquo;
              </span>
            </div>
          )}
        </div>
      </div>

      {/* =========================
          FOOTER
      ========================= */}
      <div className="palette-footer">
        <span>
          <i>↑↓</i> Navigate
        </span>
        <span>
          <i>↵</i> Open
        </span>
        <span>
          <i>esc</i> Clear
        </span>
        <span className="palette-footer-spacer" />
        <span className="palette-footer-hint">
          Software QA · Automation · Mobile
        </span>
      </div>
    </div>
  );
}

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
          HERO — COMMAND PALETTE
      ========================= */}

      <section className="hero-palette">
        <div className="hero-palette-inner">
          <div className="hero-copy">
            <span className="hero-identity">
              <span className="hero-status-dot" />
              <span>HELLO, I&apos;M NAUFAL</span>
            </span>

            <h1 className="hero-title">
              I build test tooling
              <br />
              <span>for failures worth investigating.</span>
            </h1>

            <p className="hero-description">
              Software Quality Assurance Engineer focused on automation, mobile
              testing, API testing, and the tooling around reliable execution,
              inspection, and failure evidence.
            </p>
          </div>

          <CommandPalette />
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

            <Link
              href="/projects/flowtest-studio"
              className="text-link featured-link"
            >
              Explore the build
              <FiArrowUpRight size={14} />
              <span className="button-kbd">↵</span>
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
              <span className="button-kbd">↵</span>
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