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
- `app/config/navigation.js` references `/resume` (no such page → 404) and `/#projects`, `/#contact` (home page has no matching anchors). These are vestigial; don't treat them as a source of truth for reachable routes.

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
- **Dead/incomplete:** nested `app/components/ui/{button,card,panel,badge,section,effects}/` is an unfinished reorg that is not imported anywhere (e.g. `button/indx.js` is a typo, `ui/index.js` exports the nested tree). Do not extend the nested tree; use or extend the flat files.
- Top-level `lib/` (`lib/motion.*`, empty `lib/projects/*`, `lib/seo/*`, `lib/theme.js`) is stale — the live motion presets are `app/lib/motion`. Only the unused nested `ui/card/MetricCard.jsx` imports `@/lib/motion`.
- `utils/data/project.js` (`projects` array, older schema) is not imported by the app.

## Styling

- Tailwind v3 directives + overrides in `app/css/globals.scss`, plus `app/css/card.scss`, imported by root layout. Utility theme tokens live in `tailwind.config.js` (colors like `primary: #16F2B3`, `accent: #EC4899`).
- `next.config.js` `sassOptions.includePaths` points at a `styles/` dir that doesn't exist — harmless, leave it.
- `next/image` remote domains are restricted to `res.cloudinary.com` and `media.dev.to`.

`docs/ARCHITECTURE.md` is aspirational and disagrees with the real layout — trust the codebase over it.