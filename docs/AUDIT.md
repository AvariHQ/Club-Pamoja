# Audit and rebuild decisions

## 1. Access limitation (read first)

The build environment's network egress policy denied connections to **clubpamoja.com** and **staging2.clubpamoja.com** (`CONNECT tunnel failed, 403`). WebFetch was blocked too, and web search returned no indexed pages for Club Pamoja. As a result:

- The current site's IA, copy, forms, outbound links and technical SEO **could not be inspected**.
- The rebuild uses the **project brief** as its only verified source. Nothing else is presented as Club Pamoja policy. Every gap is a marker in `docs/CONTENT-REVIEW.md`.
- **Action:** add both hosts to the environment's allowed domains (or audit manually), then complete the "live-site diff" in CONTENT-REVIEW.md before launch.

## 2. Findings from the brief, and the decisions they drove

| Area | Decision |
|---|---|
| **Preserve** | Brand colours (#0F2226 / #FFFFFF / #C8A770). The idea "When loss comes, your community should already be in place." The verified fee and contribution amounts. The mutual-aid (not insurance) framing. Both entry paths. Open Enrollment status. |
| **Rewrite** | All public copy, now written as plain, specific language about what Club Pamoja does. Generic nonprofit phrasing is banned (see brief §16). |
| **Reorganize** | Six-item primary nav with disclosure mega-menus. Two persistent actions (Apply for Membership, Member Sign In). Joining costs and bereavement contributions are presented separately, so contributions never read as premiums. |
| **Delete / consolidate** | `/member-referrals/` was too thin for its own page. It is merged into `/how-to-join/#referral` with a redirect. The remaining URLs from the brief are kept because each serves a distinct need. |
| **Missing (now added)** | Explicit member responsibilities, not hidden in accordions. An honest legal-status page. A safety/anti-scam page. A loss-reporting entry point. An accessibility statement. Honest empty states for reports and policy documents. |
| **Needs confirmation** | See `docs/CONTENT-REVIEW.md` (22 items). |

## 3. Terminology standard

| Use | Never use |
|---|---|
| Member Sign In | login, log in, portal login, member access |
| Apply for Membership | join now, sign up, enroll |
| contribution / contribute when the community is called | premium, payment plan, dues (unless the bylaws use it) |
| bereavement support / coordinated support | benefit, payout, claim, coverage amount, policy |
| eligible registered family member | dependant, insured, covered person |
| mutual aid | insurance, policyholder, underwriting |

The `/coverage/` URL from the brief is kept for continuity, but the page is titled "Eligible family" to avoid insurance connotations.

## 4. Sitemap (built)

```
/                       Home
/membership/            Membership overview, responsibilities
/how-to-join/           Two paths, steps, apply (#referral, #open-enrollment, #apply)
/open-enrollment/       Open Enrollment
/contributions-fees/    Fees, contributions, summary table
/how-it-works/          Member journey, roles
/coverage/              Eligible family
/beneficiaries/         Beneficiary records
/bereavement-support/   Overview for families
/bereavement-process/   Stage-by-stage process
/transparency/          Principles
/reports/               Reports (empty state until supplied)
/governance/            Governance
/about/                 About
/safety/                Safety & privacy (anti-scam)
/help/                  Help centre
/faq/                   FAQ (FAQPage schema)
/contact/               Contact + #report-a-loss
/legal/                 Legal status hub
/bylaws/  /privacy/  /terms/  /accessibility/
/sign-in/               Portal handoff fallback (noindex)
/member-referrals/  →  /how-to-join/#referral (redirect)
```
