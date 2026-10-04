# Club Pamoja — public website

The public website for Club Pamoja, a professionally administered mutual-aid community for the Kenyan diaspora in the United States, focused on coordinated bereavement support.

> When loss comes, your community should already be in place.

Built with [Astro](https://astro.build) as a fully static site: no client framework, about 2 KB of inline JavaScript (menus and scroll reveal), and self-hosted variable fonts.

## Quick start

```bash
npm install
cp .env.example .env   # fill in the values, see below
npm run dev            # http://localhost:4321
npm run build          # static output in dist/
npm run check:links    # verify every internal link and #anchor in dist/
```

Node 20 or later.

## Environment variables

| Variable | Required at launch | Purpose |
|---|---|---|
| `PUBLIC_SITE_URL` | yes | Canonical origin for canonical URLs, OG tags and the sitemap. Default `https://clubpamoja.com`. |
| `PUBLIC_PORTAL_URL` | **yes** | Member portal sign-in URL. If empty, **Member Sign In** links to the `/sign-in/` holding page. |
| `PUBLIC_APPLY_URL` | **yes** | External membership application. If empty, **Apply for Membership** links to `/how-to-join/#apply`, which tells people to contact administration. |
| `PUBLIC_BYLAWS_URL` | **yes** | Authoritative bylaws document. |
| `PUBLIC_CONTACT_EMAIL` | **yes** | Public contact address. Enables the email actions on /contact/ and adds email to the Organization schema. |
| `PUBLIC_OPEN_ENROLLMENT` | – | `false` hides the site-wide announcement bar and switches the Open Enrollment page to its closed state. |
| `PUBLIC_SHOW_REVIEW_NOTES` | – | `true` shows inline content-review markers and placeholder labels. **Staging only.** |

These values are inlined at build time, so rebuild after changing them.

## Structure

```
src/
  config/site.ts          Verified facts (fees), canonical action labels/URLs, env
  config/navigation.ts    Primary, footer and legal navigation
  data/content.ts         Member journey, bereavement stages, membership functions
  data/faq.ts             FAQ (single source for page + FAQPage schema)
  data/assets.ts          Higgsfield image specs (CP-HERO-01 …)
  styles/tokens.css       Design tokens: colour, type, spacing, radii, motion
  styles/global.css       Reset, typography, buttons, prose, tables, layout patterns
  layouts/BaseLayout      <head>, SEO, JSON-LD, shell
  layouts/PageLayout      Interior page: hero + breadcrumbs + closing CTA
  components/             AnnouncementBar, Header (nav, mega menu, mobile nav), Footer,
                          PageHero, Breadcrumbs, SectionHeader, ProcessTimeline,
                          StorySequence, FeeBreakdown, CoverageGrid, TransparencyPanel,
                          TrustPanel, PortalShowcase, ResourceCards, FAQAccordion,
                          Callout, LegalNotice, EmptyState, PolicyDocument,
                          ImagePlaceholder, ReviewNote, ActionLink, Logo
  pages/                  One file per route
scripts/                  check-links, qa-shots, qa-a11y, make-og
docs/                     AUDIT, CONTENT-REVIEW, VISUAL-ASSETS, SEO, LAUNCH-READINESS
```

## Content rules (important)

- **Never invent policy.** Fees live only in `src/config/site.ts`. Anything not verified gets a `<ReviewNote id="CR-xx">`, which must also be listed in `docs/CONTENT-REVIEW.md`. The surrounding copy must read correctly with the note hidden.
- **Mutual aid, not insurance.** Don't use premium, policy, claim, payout, coverage or benefit in the insurance sense. See the terminology table in `docs/AUDIT.md`.
- **One label per action.** Use `<ActionLink action="apply" | "signIn">`, never hand-written labels.
- **Never draft legal text.** `PolicyDocument` shows an honest empty state until the authoritative text is supplied.

## QA

```bash
npm run build
python3 -m http.server 4400 -d dist &          # static server for QA scripts
node scripts/qa-shots.mjs ./qa / /membership/   # screenshots @375/820/1440 + overflow + console errors
node scripts/qa-a11y.mjs / /faq/ …              # axe-core (WCAG 2.2 AA) + keyboard/menu checks
```
If the Playwright browser download is unavailable, set `CHROMIUM=/path/to/chromium`.

## Deployment

The output is plain static files in `dist/`, deployable to any static host (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, or nginx).

- Build command `npm run build`, publish directory `dist`.
- Set the environment variables in the host's build settings.
- Serve `404.html` for unknown paths.
- Recommended headers: long cache on `/_astro/*` (`Cache-Control: public, max-age=31536000, immutable`), plus HSTS, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and a CSP allowing `'self'` (JSON-LD and the small inline script need `'unsafe-inline'` or hashes).
- **Do not** point the production domain at this build until the launch blockers in `docs/LAUNCH-READINESS.md` are cleared.
