# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — eslint (flat config in `eslint.config.mjs`, extends `eslint-config-next`)

No test suite is configured.

## Architecture

This is Linden Beaumont's personal landing page: a single-route Next.js App Router site.

- `app/layout.tsx` — root layout; sets page metadata (title/description) and loads the Geist fonts.
- `app/page.tsx` — the entire homepage content (name header + link buttons). There are no other routes.
- `app/globals.css` — Tailwind v4 setup (`@tailwindcss/postcss`), no separate `tailwind.config.*`.
- `vercel.json` — defines rewrites so paths on this domain proxy to *other, separately deployed* Vercel projects rather than living in this repo. E.g. `/garden-planner` rewrites to a standalone Garden Planner deployment. When adding a new project link from the homepage, prefer adding a rewrite entry here (source path → destination deployment URL) over building the feature into this app.
- Path alias `@/*` maps to the repo root (`tsconfig.json`).

Since the whole site is one page, most changes involve editing `app/page.tsx` directly rather than navigating between components/routes.
