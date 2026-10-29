# Club Pamoja — production finalization handover (2026-10-29)

## A. Executive summary

**Determination: NOT VERIFIED. Do not announce the website on the strength of this report.**

The live production site (WordPress / Hello Elementor on SiteGround) could not be inspected from this session:

| Target | Result |
|---|---|
| https://clubpamoja.com, /bylaws/, /robots.txt | Blocked by this environment's network egress policy (proxy `CONNECT` 403). This is **not** a SiteGround 202 bot challenge: the request never left this environment. |
| https://staging2.clubpamoja.com | Blocked (same) |
| https://app.clubpamoja.com | Blocked (same) |
| SiteGround / SSH / SFTP / WP admin | No credentials available in this environment |
| Google Search Console | No access |
| Owner's computer (Remote Control) | Folders on `WIN-R2P9QEDQSPD` are not offered to cloud sessions (Windows) |
| Google Drive | Searched. No bylaws or adoption record found (only two checklists) |

So sections B, D, E and F are **unverified**. Nothing is marked as passed. The `public_html.prev` backup was not inspected, and no production file was changed.

**Completed:** the adopted bylaws (text supplied by the owner in this session) have been typeset into an accessible, tagged PDF. Its text was verified character-for-character against the supplied adopted text (section C).

## B. Page audit

| URL | Status | Issues | Changes | Verification |
|---|---|---|---|---|
| All production pages (/, /membership/, /how-to-join/, /membership/readmission/, contributions & fees, /bylaws/, bereavement process, beneficiaries, transparency, safety, about, help/FAQ, contact, privacy, terms, cookie policy) | Not reachable | — | None | **UNVERIFIED** |

Use the checklist in section H when the audit is run from a session with access.

## C. Bylaws finalization

| Item | Result |
|---|---|
| Source | Full bylaws text supplied by the owner in this session (SuiteDash generator template with merge fields). Stored verbatim in `documents/bylaws/source-adopted-2026-10-29.txt`. |
| Adopted effective date | **October 29, 2026** (stated in the document) |
| Official version identifier | **None in the document.** No version number is asserted anywhere. The file is titled by effective date. |
| PDF | `public/documents/club-pamoja-bylaws-effective-2026-10-29.pdf` (12 pages, US Letter, tagged PDF, document outline/bookmarks, title metadata, linked Contents, page x of y footer) |
| HTML reference copy | `documents/bylaws/club-pamoja-bylaws-effective-2026-10-29.html` (same source and markup as the PDF) |
| PDF ↔ source consistency | **PASS.** `scripts/verify-bylaws-pdf.py` shows the extracted PDF text is character-identical to the adopted source once whitespace is removed (24,416 characters). Merge fields, the generated Contents box and running footers are excluded from the comparison. |
| PDF ↔ live /bylaws/ page | **UNVERIFIED** (production not reachable) |
| Mobile download | **UNVERIFIED on production.** The file is a standard 329 KB PDF with no scripts. |
| Cross-references | Checked by reading. Every internal reference resolves to an existing clause: VIII(i)(d), V(iv), V(ii), II(ii), IX(ii), VI(ii), VII(i)(i)/(j)/(k), V(i)(b)/(c)/(d), V(iii)(a), V(v), IV(i)(b), IV(ii)(b), IX(iv). |
| Amounts | $20 / $60 / $200 / $30 / $90 / $3 / $5 are consistent everywhere they appear (III, IV, VI, IX, Attestation). |

**Presentation-only changes (no wording changed):**
1. Per-member merge fields (`{{documentIdentity…}}`, `{{documentCreationDate}}`) are rendered as blank fill-in lines, because the public copy is not a member's signed record.
2. In IX(iii)(a), the pasted text contained Markdown link syntax `[www.clubpamoja.com](https://www.clubpamoja.com)`. This was rendered as the plain text `www.clubpamoja.com`, which is how the generator template presumably reads. **Owner: confirm.**
3. The paste ended with a stray `)Bylaws` after the final merge field. It was treated as a copy artifact and omitted. **Owner: confirm.**
4. Added a Contents list and footer ("Club Pamoja Bylaws — Effective October 29, 2026 · Page x of y"). These are navigational, not part of the adopted text.

No signature, seal, certification or legal-review claim was added. The SuiteDash generators and signed member records were not touched.

**Observations on the adopted text (reported only, not changed; owner decision):**
- IX(iii)(a) names the website as `www.clubpamoja.com`. Production canonicals should agree with whichever hostname is preferred (www vs non-www).
- VIII(i)(a) uses "Chapter" (capacity 501 per Chapter), which is not defined elsewhere.
- V(i)(m) and VII(i)(d)/(e) refer to the "Club Pamoja forum", while IX(iii)(b) refers to the "official WhatsApp community". Public copy should not imply the forum is a Formal Notice channel.
- IX(vi)(a) refers to "the designated Club Pamoja email address" without naming it. The Contact page should publish it.

## D. Membership journeys

| Journey | Result |
|---|---|
| New-member: Home → Membership → How to Join → Application | **UNVERIFIED** |
| Readmission: /membership/readmission/ → https://app.clubpamoja.com/frm/2qNvGTGsibwqu2EeS | **UNVERIFIED** (neither URL reachable) |
| Payment disclosures | **UNVERIFIED** |
| Official-communication statements | **UNVERIFIED** |

No form was submitted and no payment was attempted.

## E. SEO

Sitemap, robots.txt, canonicals, indexability, metadata and Search Console are all **UNVERIFIED** (no access).

## F. Accessibility and performance

Production: **UNVERIFIED.**
Bylaws PDF: tagged structure (`Tagged: yes`), real text (not images), heading hierarchy (H1 title, H2 articles, H3 sections), bookmarks, document title, language `en-US`, body text ≥10.5 pt, brand teal text on white. A full PDF/UA check (e.g. PAC) was not run.

## G. Production changes

**None.** All work in this session is in the repository (branch `claude/vigilant-einstein-8uib9b`):
- `documents/bylaws/source-adopted-2026-10-29.txt` (adopted text, verbatim)
- `documents/bylaws/club-pamoja-bylaws-effective-2026-10-29.html`
- `public/documents/club-pamoja-bylaws-effective-2026-10-29.pdf`
- `scripts/build-bylaws-pdf.mjs`, `scripts/verify-bylaws-pdf.py`
- this report

**To publish the PDF on WordPress** (needs WP admin):
1. Media → Add New → upload `club-pamoja-bylaws-effective-2026-10-29.pdf`. Keep the filename. Set Title "Club Pamoja Bylaws — Effective October 29, 2026".
2. On /bylaws/, above the HTML text, add a button: **"Download the Bylaws (PDF, effective October 29, 2026)"** linking to the uploaded file.
3. Keep the HTML version. Compare it against `documents/bylaws/source-adopted-2026-10-29.txt`.
4. Clear the SiteGround cache. Test the download on desktop and mobile.

## H. Outstanding issues

**Critical**
1. **No verification access to production, staging, portal, hosting or Search Console.** Every production check in the brief is outstanding. Fix one of these: run the audit from Claude Code in the desktop app or via Claude in Chrome (real browser, passes SiteGround normally); or allow `clubpamoja.com`, `staging2.clubpamoja.com` and `app.clubpamoja.com` in this environment's network settings and provide SFTP/WP application-password secrets.
2. **Bylaws PDF not yet uploaded to /bylaws/.** Owner action, or a session with WP access.

**Important**
3. Confirm the two paste artifacts (C.2, C.3).
4. Decide the preferred hostname (www vs non-www) to match IX(iii)(a) and the canonicals.
5. Publish the designated complaint/contact email (IX(vi)(a)).

**Optional**
6. Define "Chapter" and "forum" in a future amendment (via the IX(iv) 30-day notice process).

### Production audit checklist (from the adopted bylaws)

Every public statement should match these. Article citations are given for each.

| Topic | Must say / must not say | Source |
|---|---|---|
| Nature | Mutual aid, not an insurance business. No guaranteed, fixed or minimum assistance. | I(vii), II(iii) |
| Eligibility | 18+. Residing in the U.S. at application; membership drawn from the 50 states + DC. Kenyan descent or related to someone of Kenyan descent by marriage or kinship. One individual = one Member. Members keep membership after relocating if compliant. | III(i), III(iii)(e), III(iv)(a),(c),(d) |
| Referrals | Optional. Not a condition. The form asks "Were you referred by a current member?". | III(iii)(a), VIII(i)(b) |
| Enrollment | Open enrollment, rolling admission up to 501 per Chapter. | III(iii)(a), VIII(i)(a) |
| Application fee | $20, at application, for identity/beneficiary document audit. Non-refundable except as required by law. | III(iii)(b), VI(i)(a) |
| Activation fee | $60, after verification, before activation. Separate from the application fee. | III(iii)(c), VI(i)(b) |
| Activation | Activation requires Administrator-recorded verification + $60 + signed Bylaws + Beneficiary Form. **Payment alone does not activate.** Benefit eligibility starts on the date the welcome email is sent. No other waiting period. | VIII(i)(d), III(iv)(e) |
| Immediate family | Spouse (one); biological/adoptive parent, child, sibling. NOT half-siblings, step-parents or step-children. Declared on the Beneficiary Form. | II(i), V(i)(g) |
| Contributions | $90 per Participating Member (member death). $30 (covered immediate-family death). Reviewed each April; changes only by notice. | IV(i)(b), IV(ii)(b) |
| Deductions | $3 (family) / $5 (member) per participating contribution. Third-party processing fees are separate. | IV(ii)(b), VI(i)(f), IX(ii) |
| Deadline | Within 4 business days of the bereavement notice, 11:59 p.m. Eastern, via the Portal (card/ACH). **Remove any "6:00 PM" deadline.** | V(i)(b) |
| Nonpayment | Terminated immediately once the period expires AND a Formal Notice is sent. No grace period. Disputes and chargebacks are not by themselves nonpayment. | V(i)(d), V(v) |
| Formal Notice | Email + Portal record. WhatsApp is supplementary only. | V(iv), IX(iii)(b) |
| Bereavement claim | Benefit form via Portal. Government ID for self + beneficiary. Validation is mandatory. Deaths abroad: newspaper notice within 7 days, OR burial permit/death certificate. | IV(ii)(a), V(i)(j)–(n) |
| Payout | Net of deductions to the pre-designated beneficiary/estate. No promised provider, date or processing time. | IV(i)(b), V(i)(c), IX(ii) |
| Withdrawal | Any time, except within 1 year of the latest benefit received. | V(iii)(a) |
| Readmission (voluntary) | After 6 consecutive months, counted from the Administrator's exit-acknowledgement email. $200, the only fee (no $20/$60). Non-refundable. | VI(v)(a), VII(i)(j) |
| Readmission (nonpayment) | After the balance or dispute is resolved and eligibility is confirmed. The 6 months and $200 do not automatically apply. | VI(v)(b), VII(i)(k) |
| Misconduct | Permanently ineligible for readmission. | VI(v)(c), VII(i)(i) |
| Complaints | Written, via Portal or the designated email. 15 business days where practicable. Voluntary mediation. Not arbitration. Maryland law. | IX(v), IX(vi) |
| Obsolete terms to search for and remove | "mandatory referral", "screening fee", "6:00 PM", old deduction amounts, Mercury payment instructions, "guaranteed" assistance, any fixed payout figure | — |
