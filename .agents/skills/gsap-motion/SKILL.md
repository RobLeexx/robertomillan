# GSAP Animation Implementation

Use this skill when adding or revising motion in the portfolio.

## Rules

- Use GSAP for sequences that benefit from timing control or scroll orchestration.
- Prefer `transform` and `autoAlpha`.
- Guard all motion with `prefers-reduced-motion`.
- Keep animation subtle enough that copy remains easy to read.

## Existing patterns

- `src/components/HeroMotion.astro` handles the homepage hero reveal.
- `src/components/TimelineMotion.astro` handles the case-study timeline reveal.

## Avoid

- Large parallax effects
- Constant looping motion near important text
- ScrollTrigger usage where CSS or IntersectionObserver is sufficient
