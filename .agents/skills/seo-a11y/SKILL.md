# SEO and Accessibility Checks

Use this skill when reviewing portfolio pages for search visibility and usability.

## Checklist

- Every page has a meaningful title and meta description.
- Heading hierarchy is logical and starts with one `h1`.
- Interactive controls have visible labels or screen-reader text.
- Color contrast remains strong in both dark and light themes.
- Links have descriptive text.
- Motion respects `prefers-reduced-motion`.
- Canonical URLs and sitemap generation still work with `SITE_URL`.

## Verification

- Run `npm run check`.
- Run `npm run build`.
- Spot check keyboard navigation for the header and theme toggle.
