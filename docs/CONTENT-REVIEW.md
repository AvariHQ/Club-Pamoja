# Content review list

Everything here needs written confirmation from Club Pamoja before launch.
Each ID matches a `<ReviewNote id="…">` in the code. Build with `PUBLIC_SHOW_REVIEW_NOTES=true` to see every marker in context.

## Verified facts (source: project brief, 2026-10-04)

The live site (clubpamoja.com) and staging (staging2.clubpamoja.com) could not be reached from the build environment (blocked by the network egress policy), so the brief is the **only** verified source. Re-check these against the live site before launch.

| Fact | Value | Where used |
|---|---|---|
| Application fee | $20 | `src/config/site.ts` → `fees.application` |
| One-time activation fee | $60 | `fees.activation` |
| Contribution following the death of a member | $90 | `fees.memberContribution` |
| Contribution following the death of an eligible registered family member | $30 | `fees.familyContribution` |
| Open Enrollment | Active | `PUBLIC_OPEN_ENROLLMENT` |
| Entry paths | Referral; direct application during Open Enrollment | how-to-join, open-enrollment |
| Member portal | Separate system; one label: **Member Sign In** | `actions.signIn` |
| Primary action | **Apply for Membership** | `actions.apply` |
| Status | Mutual aid, not insurance | Site-wide |

## Launch blockers

| ID | Item | Page(s) |
|---|---|---|
| CR-01 | **Bylaws document**: supply the final approved text or PDF and set `PUBLIC_BYLAWS_URL`. Many pages defer to the bylaws. | /bylaws/ |
| CR-02 | **Eligible family definition**: list the categories (and any limits) exactly as the bylaws define them. Add them to `categories` in `src/components/CoverageGrid.astro`. | /, /coverage/, FAQ |
| CR-03 | **Member portal URL**: set `PUBLIC_PORTAL_URL`. Also confirm the full list of portal capabilities (only "sign in", "family/beneficiary records" and "manage membership" are shown). | All pages (header), /help/ |
| CR-11 | **Application URL**: set `PUBLIC_APPLY_URL`. Confirm the information requested and accepted payment methods. | /how-to-join/#apply |
| CR-20 | **Contact channel**: provide the official email (set `PUBLIC_CONTACT_EMAIL`), plus phone, address and response times if public. | /contact/ |
| CR-05 | **Bereavement process**: confirm the six stage names and descriptions, the loss-reporting channel, and the documents needed. Add **no timelines** until confirmed. | /, /bereavement-process/, /contact/ |
| CR-10 | **Contribution rules**: how members are notified, payment methods, the deadline, consequences of non-payment, and reinstatement. | /contributions-fees/, /membership/, FAQ |
| CR-21 | **Privacy policy**: supply the authoritative text. | /privacy/ |
| CR-22 | **Terms of use**: supply the authoritative text. | /terms/ |

## Confirm wording

| ID | Item | Page(s) |
|---|---|---|
| CR-04 | Confirm the four-stage member journey and the five-step joining sequence, including when the activation fee is paid relative to approval. | /, /how-it-works/, /how-to-join/ |
| CR-06 | Confirm the six "What membership connects you to" functions. | /, /membership/ |
| CR-07 | Who is eligible to join? Kenyan diaspora only? Any residency, age or other requirements? | FAQ |
| CR-08 | Confirm that "Every campaign. Every contribution. Every fee. Every disbursement. Accounted for." accurately reflects how records are kept and reported. | /, /transparency/ |
| CR-09 | How referrals work: code or link? Any referrer obligations? Are referrals accepted outside Open Enrollment? | /how-to-join/ |
| CR-12 | Does Open Enrollment have a published closing date? | /open-enrollment/ |
| CR-13 | Are the application and activation fees refundable? What does each fund? | /contributions-fees/ |
| CR-14 | Confirm the description of administration's role, and name the administering body. | /how-it-works/ |
| CR-15 | Beneficiary rules: who may be named, how many, verification of changes, and what happens if none is recorded. | /beneficiaries/ |
| CR-16 | Supply reports. Which are public and which are members-only? | /reports/ |
| CR-17 | Governance structure: board or committee, officer roles, how leaders are selected, how the bylaws are amended, and how members raise concerns. | /governance/ |
| CR-18 | Founding story: year, founders (with consent), legal form and registration, states served. | /about/ |
| CR-19 | Official payment channels and official communication channels (email domain, social accounts). | /safety/ |

## Editorial copy to approve (not policy, but written for Club Pamoja)

- Cultural framing on Home and About ("At home, when a family lost someone, the community arrived…"). Confirm it fits Club Pamoja's voice.
- Legal page: "If you need insurance… speak to a licensed insurance professional." Confirm Club Pamoja is comfortable with this suggestion.
- Bereavement Support: "We are sorry for your loss… we will guide your family through the next steps." This implies administration is responsive. Confirm.
- `Logo.astro` is an **interim wordmark**. Replace it with the official logo files.

## Not migrated

The previous site's content could not be inventoried (see `docs/AUDIT.md`). Before launch:
1. Crawl the live site and list every URL. Add 301 redirects for old URLs in `astro.config.mjs → redirects`.
2. Diff the live site's policy statements against this list. Anything on the live site that is not here should be reviewed, not silently dropped.
