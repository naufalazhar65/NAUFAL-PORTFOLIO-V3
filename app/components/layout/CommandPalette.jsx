"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiFolder,
  FiGithub,
  FiSearch,
} from "react-icons/fi";

import { highlight, siteCommands } from "@/app/config/commands";
import { projectsData } from "@/utils/data/projects-data";

export function openCommandPalette() {
  window.dispatchEvent(new CustomEvent("command-palette:open"));
}

function matchesItem(item, q) {
  if (!q) return true;
  return `${item.label} ${item.hint ?? ""} ${(item.keywords ?? []).join(" ")}`
    .toLowerCase()
    .includes(q);
}

const RECENT_KEY = "cmd-palette-recents";
const RECENT_LIMIT = 4;

function readRecents() {
  try {
    const raw = JSON.parse(localStorage.getItem(RECENT_KEY));
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
}

function writeRecents(ids) {
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(ids));
  } catch {
    // storage unavailable — ignore
  }
}

export default function CommandPalette() {
  const router = useRouter();
  const pathname = usePathname();
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activePos, setActivePos] = useState(0);
  const [recentIds, setRecentIds] = useState(readRecents);

  useEffect(() => {
    const onKey = (event) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("command-palette:open", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("command-palette:open", onOpen);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActivePos(0);
    const id = window.setTimeout(() => inputRef.current?.focus(), 10);
    return () => window.clearTimeout(id);
  }, [open]);

  const extras = useMemo(() => {
    const match = pathname.match(/^\/projects\/([\w-]+)$/);
    if (!match) return [];
    const project = projectsData.find((p) => p.slug === match[1]);
    if (!project) return [];

    const list = [];
    if (project.github) {
      list.push({
        id: `${project.slug}-github`,
        label: "Open the source repository",
        hint: "GitHub · view the code",
        external: true,
        href: project.github,
        icon: FiGithub,
      });
    }
    if (project.live) {
      list.push({
        id: `${project.slug}-live`,
        label: `Launch ${project.name}`,
        hint: project.liveLabel || "Open live build",
        href: project.live,
        icon: FiExternalLink,
        tag: "LIVE",
      });
    }
    return list;
  }, [pathname]);

  const projectCommands = useMemo(() => {
    return projectsData
      .filter((p) => p.slug !== "flowtest-studio")
      .map((p) => ({
        id: `project-${p.slug}`,
        label: p.name,
        hint: p.category,
        keywords: [
          p.name,
          p.slug,
          p.category,
          ...(p.tools ?? []).map((t) => t.name),
        ],
        href: `/projects/${p.slug}`,
        icon: FiFolder,
      }));
  }, []);

  const allItemMap = useMemo(() => {
    const map = {};
    const groups = [projectCommands, siteCommands];
    for (const list of groups) {
      for (const item of list) map[item.id] = item;
    }
    return map;
  }, [projectCommands]);

  const groups = useMemo(() => {
    const out = [];
    const hasQuery = query.trim().length > 0;
    if (!hasQuery && recentIds.length) {
      const recents = recentIds
        .map((id) => allItemMap[id])
        .filter(Boolean);
      if (recents.length) out.push({ label: "Recents", commands: recents });
    }
    if (extras.length) out.push({ label: "This Project", commands: extras });
    if (!hasQuery) out.push({ label: "Projects", commands: projectCommands });
    out.push({ label: "Actions", commands: siteCommands });
    return out;
  }, [extras, projectCommands, allItemMap, recentIds, query]);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out = [];
    for (const group of groups) {
      let hasItems = false;
      for (const item of group.commands) {
        if (!matchesItem(item, q)) continue;
        if (!hasItems) {
          out.push({ type: "label", text: group.label });
          hasItems = true;
        }
        out.push({ type: "item", item });
      }
    }
    return out;
  }, [groups, query]);

  const itemIndexes = useMemo(() => {
    const indexes = [];
    rows.forEach((row, index) => {
      if (row.type === "item") indexes.push(index);
    });
    return indexes;
  }, [rows]);

  useEffect(() => {
    setActivePos(0);
  }, [query, rows.length]);

  const openItem = (item) => {
    if (item.action) {
      item.action();
      setOpen(false);
      return;
    }
    setRecentIds((ids) => {
      const next = [item.id, ...ids.filter((id) => id !== item.id)].slice(
        0,
        RECENT_LIMIT,
      );
      writeRecents(next);
      return next;
    });
    const href = item.href;
    const isExternal =
      item.external || typeof href === "string" && /^https?:/.test(href);
    if (isExternal) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      router.push(href);
    }
    setOpen(false);
  };

  const handleKeyDown = (event) => {
    if ((event.metaKey || event.ctrlKey) && /^[1-6]$/.test(event.key)) {
      const index = Number(event.key) - 1;
      const rowIndex = itemIndexes[index];
      if (rowIndex !== undefined) {
        event.preventDefault();
        openItem(rows[rowIndex].item);
      }
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActivePos((pos) => (pos + 1) % Math.max(itemIndexes.length, 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActivePos(
        (pos) => (pos - 1 + itemIndexes.length) % Math.max(itemIndexes.length, 1),
      );
    } else if (event.key === "Enter") {
      const rowIndex = itemIndexes[activePos];
      if (rowIndex !== undefined) {
        event.preventDefault();
        openItem(rows[rowIndex].item);
      }
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="palette-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div className="palette-window palette-overlay-window">
        <div className="palette-status">
          <span className="hero-status-dot" aria-hidden="true" />
          <span className="palette-status-text">Open to opportunities</span>
          <span className="palette-status-name">Naufal Azhar</span>
        </div>

        <div className="palette-search">
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
            aria-controls="palette-overlay-commands"
            aria-activedescendant={
              itemIndexes[activePos] !== undefined
                ? `palette-command-${rows[itemIndexes[activePos]].item.id}`
                : undefined
            }
            autoComplete="off"
            spellCheck="false"
          />
          <kbd className="palette-kbd">
            <span className="palette-kbd-key">⌘K</span>
          </kbd>
        </div>

        <div className="palette-body">
          <div
            className="palette-commands"
            id="palette-overlay-commands"
            role="listbox"
          >
            {rows.length > 0 ? (
              rows.map((row, index) => {
                if (row.type === "label") {
                  return (
                    <p key={row.text} className="palette-group-label">
                      {row.text}
                    </p>
                  );
                }
                const item = row.item;
                const Icon = item.icon;
                const isActive = index === itemIndexes[activePos];
                return (
                  <div
                    key={item.id}
                    id={`palette-command-${item.id}`}
                    role="option"
                    aria-selected={isActive}
                    onMouseEnter={() => setActivePos(itemIndexes.indexOf(index))}
                    onMouseDown={(event) => {
                      event.preventDefault();
                      openItem(item);
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
                      {item.hint && (
                        <span className="palette-command-hint">
                          {highlight(item.hint, query)}
                        </span>
                      )}
                    </span>

                    {item.tag && (
                      <span className="palette-command-tag">{item.tag}</span>
                    )}

                    <span className="palette-command-shortcut">
                      <kbd className="palette-kbd">↵</kbd>
                    </span>

                    <FiArrowUpRight
                      size={13}
                      aria-hidden="true"
                      className="palette-command-arrow"
                    />
                  </div>
                );
              })
            ) : (
              <div className="palette-command palette-empty" role="option" aria-selected="false">
                <FiSearch size={14} aria-hidden="true" />
                <span>No results for &ldquo;{query}&rdquo;</span>
              </div>
            )}
          </div>
        </div>

        <div className="palette-footer">
          <span>
            <i>↑↓</i> Navigate
          </span>
          <span>
            <i>↵</i> Open
          </span>
          <span>
            <i>⌘K</i> Toggle
          </span>
          <span>
            <i>⌘1-6</i> Jump
          </span>
          <span className="palette-footer-spacer" />
          <span className="palette-footer-hint">
            Software QA · Automation · Mobile
          </span>
        </div>
      </div>
    </div>
  );
}