# AGENTS.md

## Project goal

This repository contains a minimal static Astro portfolio for Roberto Millán.

## Core conventions

- Keep the site static and simple.
- Prefer editing content in `src/data/experience.ts` and `src/data/projects.ts`.
- Keep the component structure flat under `src/components/`.
- Avoid adding dependencies unless they are clearly necessary.
- Avoid client-side JavaScript unless there is no simpler Astro-native solution.

## Design conventions

- Keep the UI clean, responsive, professional, and minimal.
- Favor readable spacing, strong hierarchy, and restrained styling.
- Avoid decorative sections or complex animation.

## Verification

- Run `npm run check` after structural or content changes.
- Run `npm run build` before finishing substantial work.
