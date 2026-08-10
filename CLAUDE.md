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
- `microfrontends.json` — this app is the *default application* in a [Vercel Microfrontends](https://vercel.com/docs/microfrontends) group. Paths like `/garden-planner` are routed by Vercel's network layer to other, separately deployed Vercel projects rather than living in this repo — they are not part of this app's routes. When adding a new project link from the homepage, prefer adding a routing entry here (path → microfrontend application) over building the feature into this app. `next.config.ts` wraps the config with `withMicrofrontends` so JS/CSS assets route correctly too.
- Path alias `@/*` maps to the repo root (`tsconfig.json`).

Since the whole site is one page, most changes involve editing `app/page.tsx` directly rather than navigating between components/routes.
