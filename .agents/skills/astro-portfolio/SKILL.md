# Astro Static Portfolio Development

Use this skill when extending or restructuring the Astro portfolio.

## Goals

- Preserve a static-first architecture.
- Keep dependencies minimal.
- Favor reusable Astro components over page duplication.

## Working rules

- Shared content belongs in `src/data/site.ts`.
- Long-form narrative content belongs in `src/content/case-studies/`.
- Page-level metadata should be passed through `BaseLayout`.
- Prefer semantic HTML and keyboard-accessible interactions.

## Before finishing

- Run `npm run check`.
- Run `npm run build`.
- Confirm new routes are linked from the main navigation when relevant.
