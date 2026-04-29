# AGENTS.md

## Project goal

This repository contains a static Astro portfolio for a Fullstack Developer focused on CRM systems, business automation, Odoo customization, Django + React delivery, and production-ready software for service businesses.

## Core conventions

- Keep the site static. Avoid backend dependencies unless explicitly requested.
- Preserve anonymized client wording. Do not introduce confidential company names or private operational details.
- Prefer editing shared content in `src/data/site.ts` and long-form case studies in `src/content/case-studies/`.
- Reuse components in `src/components/` before introducing new page-specific structures.
- Keep dependencies lightweight. New libraries need a clear performance or maintainability reason.

## Design conventions

- Maintain the premium technical visual language already established in `src/styles/global.css`.
- Use the existing color system, typography, spacing rhythm, and glass-panel treatment unless a broader redesign is requested.
- Favor accessible contrast, clear hierarchy, and restrained motion.

## Motion conventions

- Use GSAP only where richer sequencing clearly adds value.
- Respect `prefers-reduced-motion`.
- Prefer transforms and opacity over layout-affecting animations.
- Keep scroll-driven animation focused and sparse.

## SEO and content

- Each page should have clear `title` and `description` props passed to `BaseLayout`.
- Keep metadata factual and avoid overstating outcomes.
- When adding case studies or project summaries, emphasize workflow, technical decisions, and business impact.

## Verification

- Run `npm run check` after content or component changes.
- Run `npm run build` before finishing substantial work.
- If a change affects animations, test that the site still works with reduced motion enabled.
