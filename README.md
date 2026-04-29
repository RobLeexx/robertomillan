# Roberto Millan Portfolio

Static portfolio site built with Astro, TypeScript, Tailwind CSS, MDX, and lightweight client-side motion.

## Stack

- Astro with static output
- TypeScript
- Tailwind CSS v4 via the official Vite plugin
- MDX for long-form case studies
- GSAP for the hero entrance and case-study timeline motion
- Lucide SVG assets for lightweight icon usage

## Project structure

```text
/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   └── case-studies/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── .agents/
│   └── skills/
└── AGENTS.md
```

## Commands

- `npm install` installs dependencies
- `npm run dev` starts local development
- `npm run check` runs Astro type and content checks
- `npm run build` creates the static production build in `dist/`
- `npm run preview` previews the production build locally

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Run checks before shipping:

   ```bash
   npm run check
   npm run build
   ```

## Content updates

- Main site copy, services, and project summaries live in [src/data/site.ts](/c:/odoo/robertomillan/src/data/site.ts).
- The detailed case study lives in [src/content/case-studies/moving-company-crm.mdx](/c:/odoo/robertomillan/src/content/case-studies/moving-company-crm.mdx).
- Replace placeholder contact details, domain, and public reference copy before launch.

## SEO notes

- Set the production site URL with `SITE_URL` during builds so canonical URLs and the sitemap are generated correctly.
- Default social metadata is sourced from `public/social-card.svg`.
- The case study uses anonymized wording and intentionally avoids confidential company details.

## Cloudflare Pages deployment

This project is ready for static deployment on Cloudflare Pages with no backend adapter required.

Recommended settings:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22.12.0` or newer
- Environment variable: `SITE_URL=https://your-domain.example`

Suggested deployment flow:

1. Push the repository to GitHub.
2. Create a new Cloudflare Pages project connected to the repo.
3. Set `SITE_URL` to the final production domain.
4. Trigger the first production build.

## Notes for customization

- If you want to add more case studies, create new MDX files inside `src/content/case-studies/`.
- If you want to add public testimonials, replace the placeholders in `src/data/site.ts`.
- If you want a working contact form later, the cleanest static-friendly additions are Formspree, Basin, or a Cloudflare Worker endpoint.
