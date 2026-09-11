# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Vite dev server with HMR
npm run build     # vite build, then copies dist/index.html -> dist/404.html
npm run preview   # serve the production build locally
npm run lint      # eslint . (flat config, eslint.config.js)
```

There is no test suite. Dependency installs may need `npm ci --legacy-peer-deps` (React 19 peer-dep conflicts); the deploy workflow uses this.

## Deployment

Static site deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main` (or manual dispatch). No preview environments — `main` is production.

## Architecture

Single-page personal portfolio: React 19 + React Router 7 (`BrowserRouter`) + Vite 7, no backend.

- **Routing**: `src/main.jsx` → `src/App.jsx` declares all routes. Every route renders inside `src/components/Layout.jsx`, which provides the `<Header>`, `<Footer>`, skip link, and `<Outlet>`. Because routing uses `BrowserRouter` (not hash), the `build` script copies `index.html` to `404.html` so GitHub Pages serves deep links.
- **Pages** (`src/pages/`) are self-contained. Page content is authored as in-file data arrays/objects at the top of each file (e.g. `projects` in `Projects.jsx`, entries in `Experience.jsx`/`Writing.jsx`), then mapped to markup. To change site content, edit these arrays, not a CMS or JSON file.
- **Styling**: one hand-written global stylesheet, `src/index.css` (~1500 lines), built on CSS custom properties (`--paper`, `--ink`, `--orange`, `--display`, `--ease-out`, …) and semantic class names (`site-shell`, `page-hero`, `project-row`, `eyebrow`, …). Tailwind + PostCSS are configured and `cn()` exists in `src/lib/utils.js`, but components style through the custom classes in `index.css` almost exclusively — match that convention.
- **Motion system**: no JS animation library is active. `gsap` / `@gsap/react` are in `package.json` but currently unused. Animation is CSS-driven:
  - Scroll reveals: add `data-reveal` to an element; the `IntersectionObserver` in `Layout.jsx` adds `is-revealed` when it enters view. Stagger with an inline `style={{ '--reveal-delay': '...' }}`.
  - Page/route transitions: the `viewTransition` prop on React Router `<Link>`/`<NavLink>`, plus the `supports-view-transitions` class `Layout.jsx` sets on `<html>`, drive View Transitions API animations defined in `index.css`.
  - All of the above must respect `prefers-reduced-motion` (existing code branches on it).
- **Scroll behavior**: reset to top on navigation is done manually via `window.scrollTo(0, 0)` in an effect keyed on `location.pathname` (in `Header`).
- **Assets**: `public/` is served at site root (e.g. `public/blog-images/plot1.png` → `/blog-images/plot1.png`).

## Lint notes

Flat ESLint config with `js.recommended` + react-hooks + react-refresh. `no-unused-vars` is an error but ignores identifiers matching `^[A-Z_]` (constants/components).
