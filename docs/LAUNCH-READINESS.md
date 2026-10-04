# Launch readiness

**Status: NOT READY FOR PRODUCTION.** The build is complete and passes QA, but launch depends on content that only Club Pamoja can supply.

## Done and verified (2026-10-04)

| Check | Result |
|---|---|
| Routes | 25 pages + 1 redirect, statically rendered |
| Internal links and anchors | `scripts/check-links.mjs`: 0 problems |
| Horizontal overflow @375 / 820 / 1440 | 0 pages overflow |
| Console errors | none |
| axe-core (WCAG 2.0/2.1/2.2 A+AA + best practice) @375 and 1440 | 0 violations on every page |
| Keyboard | Skip link is the first tab stop. Mega menu opens with Enter/Space and closes with Escape (focus returns). Mobile drawer and accordion work; Escape closes the drawer. FAQ uses native `<details>`. |
| Reduced motion | Reveal and transitions disabled. Content is visible without JS. |
| Payload (home) | HTML 12 KB gz · CSS 6.4 KB gz · JS ~0.8 KB gz inline · 2 preloaded woff2 fonts (latin subset) · no images yet |
| SEO | Unique titles and descriptions, canonicals, OG/Twitter, Organization + WebSite + BreadcrumbList + FAQPage JSON-LD, sitemap, robots |
| Terminology | No insurance language except explicit "not insurance" disclaimers |

## Launch blockers

1. **Audit the live site.** It was blocked from the build environment. Crawl clubpamoja.com, diff its policy content against `docs/CONTENT-REVIEW.md`, and add 301 redirects for old URLs.
2. Set `PUBLIC_PORTAL_URL`, `PUBLIC_APPLY_URL`, `PUBLIC_CONTACT_EMAIL` and `PUBLIC_BYLAWS_URL`.
3. Resolve CR-01, CR-02, CR-05, CR-10, CR-21 and CR-22 (bylaws, eligible family, bereavement process, contribution rules, privacy, terms).
4. Supply the official logo (replace `src/components/Logo.astro`).
5. Deliver the Higgsfield imagery (`docs/VISUAL-ASSETS.md`) or approve launching with the designed placeholders.
6. Have Club Pamoja leadership review all copy on a staging build with `PUBLIC_SHOW_REVIEW_NOTES=true`.

## Recommended after launch
- Add privacy-respecting analytics only if the privacy policy covers them (the site currently claims none; update /privacy/ and /safety/ if that changes).
- Run Lighthouse on the production host, and check that CDN caching headers are applied.
- Test with real assistive technology (VoiceOver iOS, NVDA).
