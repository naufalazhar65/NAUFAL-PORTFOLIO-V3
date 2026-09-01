# AGENTS.md

Next.js 14 (App Router) portfolio for Naufal Azhar, deployed to Netlify. JavaScript/JSX (only a `.ts` re-export exists).

## Commands

- `npm run dev` — dev server on http://localhost:3000
- `npm run lint` — `next lint` (Next 14; there is no standalone ESLint script)
- `npm run build` && `npm run start` — verify production build locally
- There is **no test runner or test script** in the repo.

Always use `npm ci` (lockfile). Do not bump `react`, `react-dom`, or `tailwindcss`:

- `react: "latest"` resolves to **18.3.1** in the lockfile — Next 14 is incompatible with React 19.
- `tailwindcss: "latest"` resolves to **3.4.x (v3)** in the lockfile, while `@tailwindcss/postcss@^4` sits unused in devDeps and `postcss.config.js` uses the v3 `tailwindcss` plugin. A fresh `npm install` can pull v4/React 19 and break the build.

## Environment

`.env.local` is gitignored and already present locally; deploy the same vars on Netlify.

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` — used by `app/components/contact/contact-form.jsx`.
- `NEXT_PUBLIC_GTM` — read in `app/layout.js` for Google Tag Manager; unset is fine.

## Routing / layout quirks

- Pages: `/`, `/about`, `/skills`, `/projects`, `/projects/[slug]`, `/contact`, `/flowtest`. Pages chain to the next via `app/components/layout/NextPage`.
- Non-route folders live inside `app/` (`app/components/`, `app/config/`, `app/lib/`, `app/css/`) — valid because they contain no `page.js`.
- `@/*` aliases the repo root (`jsconfig.json`).
- `app/config/navigation.js` is the sidebar nav (Home, Projects, FlowTest, Resume→`personalData.resume`, Contact) — all reachable routes. `app/config/commands.js` powers the CommandPalette `siteCommands`; keep both in sync with reachable pages.

## Project data (single source of truth)

- `utils/data/projects-data.js` (~1600 lines) defines `projectsData`; `@/utils/data/projects` (`utils/data/projects/index.ts`) just re-exports it. Edit the array directly.
- Components expect its exact schema: `id, slug, name, category, year, status, role, image, gallery, summary, description, challenge, solution, highlight, github, githubLabel, live, liveLabel, tools, features, stats, workflow, repository`. Requiring extra fields breaks the detail page.
- `app/projects/[slug]/page.js` hardcodes 11 sections that import from `./components/...`; slugs are generated via `generateStaticParams`. Unknown slug → `notFound()`.
- `app/flowtest/` is an in-browser working demo of the FlowTest Studio project (own stores/nodes/execution engine) — keep changes self-contained.

## Data vs dead code

- Skills: edit `app/components/skills/constants.js`; each skill name must exist in `utils/skill-image.js` (`skillsImage`) or its icon silently won't render. Personal/about copy lives in `utils/data/`.
- Experience (`app/components/experience/` + `utils/data/experience.js`) and Education (`app/components/education/` + `utils/data/educations.js`) are **intentionally deactivated** — not imported by any page, data still carries old template values (Bangladesh roles/schools). Don't "fix" or wire them up unless asked.
- `utils/data/personal-data.js` `name` is commented out and its `description` is generic template text; both are only consumed by the unused hero tree — harmless, but don't rely on them.

## UI components — two overlapping trees

- **Active:** flat `app/components/ui/*.jsx` (`Button`, `GlassPanel`, `GlowCard`, `SectionHeader`, `TechBadge`, etc.) — these are imported across about/experience/education/hero sections.
- Nested UI survivors are **live**: `ui/panel/Panel`, `ui/section/Section`, `ui/section/SectionHeader` (imported by the project detail page). Everything else nested was removed; use or extend the flat `app/components/ui/*.jsx` files.
- Top-level `lib/` and `utils/data/project.js` (older schema) were removed as dead code — the live motion presets are `app/lib/motion`.

## Styling

- Tailwind v3 directives + overrides in `app/css/globals.scss`, plus `app/css/card.scss`, imported by root layout. Utility theme tokens live in `tailwind.config.js` (colors like `primary: #16F2B3`, `accent: #EC4899`).
- `next.config.js` `sassOptions.includePaths` points at a `styles/` dir that doesn't exist — harmless, leave it.
- `next/image` remote domains are restricted to `res.cloudinary.com` and `media.dev.to`.

`docs/ARCHITECTURE.md` is aspirational and disagrees with the real layout — trust the codebase over it.

## graphify

This project has a knowledge graph at graphify-out/ (gitignored — regenerate with `/graphify`) with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
