"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FiArrowUpRight,
  FiSearch,
} from "react-icons/fi";

import FlowTestStudioPreview from "./components/flowtest-preview/FlowTestStudioPreview";
import { projectsData } from "@/utils/data/projects-data";
import { highlight, siteCommands } from "@/app/config/commands";

function CommandPalette() {
  const router = useRouter();
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return siteCommands;
    return siteCommands.filter((item) =>
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
      if (item.action) {
        item.action();
        return;
      }
      if (item.external) {
        window.open(item.href, "_blank", "noopener,noreferrer");
      } else {
        router.push(item.href);
      }
    },
    [router],
  );

  const handleKeyDown = (event) => {
    if ((event.metaKey || event.ctrlKey) && /^[1-6]$/.test(event.key)) {
      const idx = Number(event.key) - 1;
      const item = results[idx];
      if (item) {
        event.preventDefault();
        open(item);
      }
      return;
    }
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

  useEffect(() => {
    setActive(0);
  }, [query, results.length]);

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

              return item.href ? (
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
              ) : (
                <button
                  key={item.id}
                  id={`command-${item.id}`}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => open(item)}
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
                </button>
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

const technicalProof = [  {
    number: "01",
    title: "Automation",
    tools: "Selenium · Playwright · WebdriverIO · PyTest",
    contribution:
      "Built frameworks that cut regression cycles from hours to minutes.",
  },
  {
    number: "02",
    title: "Mobile",
    tools: "Appium · UiAutomator2 · XCUITest",
    contribution: "Real-device testing that actually catches what emulators miss.",
  },
  {
    number: "03",
    title: "API",
    tools: "Postman · Newman · Supertest · Playwright API",
    contribution: "Contract tests that fail loud when APIs drift from spec.",
  },
  {
    number: "04",
    title: "Performance",
    tools: "k6 · JMeter",
    contribution: "Load tests that surface bottlenecks before users do.",
  },
];

export default function Home() {
  const featured = projectsData.find((p) => p.featured) ?? projectsData[0];
  const featuredTools = featured?.tools?.slice(0, 4).map((t) => t.name) ?? ["React", "TypeScript", "Appium", "React Flow"];
  const featuredStats = featured?.stats?.slice(0, 3).map((s) => `${s.value} ${s.label}`) ?? ["38 Nodes", "Android + iOS", "CI / JUnit"];

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
              I spend my days breaking apps so they don&rsquo;t break in
              production. Most of that work involves automation frameworks,
              device farms, and API contracts — but what I actually care about
              is making failure evidence easy to find.
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
            <p className="project-kicker">{(featured?.name ?? "FLOWTEST STUDIO").toUpperCase()}</p>

            <h2>
              Mobile test failures were
              <br />
              scattered across tools.
            </h2>

            <p>{featured?.summary ?? "Device logs here, screenshots there, reports somewhere else — FlowTest Studio puts the parts that matter in one view."}</p>

            <div className="featured-meta">
              {featuredTools.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className="featured-meta">
              {featuredStats.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>

            <Link
              href={`/projects/${featured?.slug ?? "flowtest-studio"}`}
              className="text-link featured-link"
            >
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
            The tools matter less than the layer they support. I care more about
            how fast I can reproduce a mobile flake than whether I used Appium
            or Espresso to find it.
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
            selectors inspectable, and building automation that can survive
            refactor storms.
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