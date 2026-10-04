# Visual asset plan (Higgsfield campaign)

Original campaign imagery replaces stock photography. Until final assets arrive, each slot renders a designed, clearly temporary placeholder (`src/components/ImagePlaceholder.astro`). Placeholder labels show only when `PUBLIC_SHOW_REVIEW_NOTES=true`.

The source of truth is `src/data/assets.ts`. This document mirrors it.

## Campaign direction
- Kenyan diaspora community, multigenerational families, contemporary American home and community settings.
- Subtle Kenyan cultural context (kikoi, kanga, chai, beadwork) used as everyday detail, never costume.
- Dignity, preparation, mutual responsibility. **No** grief exploitation, funerals, caskets, graves, safari or pattern overload.
- Warm, natural light. Restrained grading that sits well against the dark teal #0F2226.

## Delivery
For each ID, export `<id>-640`, `-960` and `-1440` in AVIF, WebP and JPEG to `public/images/<id>/`, then set `src: "/images/<id>/<id>"` in `assets.ts`. Responsive `<picture>` markup, lazy loading and fetch priority are handled automatically.

## CP-HERO-01

| Field | Spec |
|---|---|
| Page | Home |
| Section | Hero |
| Subject | A multigenerational Kenyan-American family gathered in a warm, contemporary American living room — an elder seated, adults and a teenager close by, mid-conversation. Calm, connected, unhurried. |
| Composition | Subjects in the right two-thirds; left third quiet for headline overlap on wide screens. Eye level, 35–50mm feel. |
| Aspect (desktop) | 4 / 5 |
| Aspect (mobile) | 4 / 3 |
| Mobile crop | Centre-crop on the elder and nearest adult; faces must remain fully in frame at 4:3. |
| Emotional tone | Belonging, steadiness, quiet confidence. Not grief. |
| Lighting | Late-afternoon natural window light, warm but not golden-hour saturated. |
| Negative space | Soft, low-detail background on the left edge. |
| Alt text | Three generations of a Kenyan-American family talking together in their living room. |

## CP-COMMUNITY-01

| Field | Spec |
|---|---|
| Page | Home / About |
| Section | Pamoja means together |
| Subject | A community gathering in a US church hall or community centre — people greeting, an embrace, someone serving chai. Subtle Kenyan context (a kikoi scarf, a kanga print on a table runner), never costume. |
| Composition | Wide, documentary framing with layered depth; no single posed hero subject. |
| Aspect (desktop) | 3 / 2 |
| Aspect (mobile) | 4 / 3 |
| Mobile crop | Keep the central greeting in frame. |
| Emotional tone | Warm, editorial, real. |
| Lighting | Mixed interior light, soft and even. |
| Negative space | None required. |
| Alt text | Members of the Kenyan diaspora greeting one another at a community gathering. |

## CP-FAMILY-01

| Field | Spec |
|---|---|
| Page | Coverage / Membership |
| Section | Eligible family |
| Subject | A couple and an older parent at a kitchen table, relaxed, reviewing papers together on a tablet. |
| Composition | Three-quarter view across the table; hands and tablet visible but screen content not legible. |
| Aspect (desktop) | 4 / 3 |
| Aspect (mobile) | 1 / 1 |
| Mobile crop | Square crop centred on the three faces. |
| Emotional tone | Preparedness, care, ordinariness. |
| Lighting | Morning daylight. |
| Negative space | Top quarter calm. |
| Alt text | A couple and an older parent reviewing family details together at their kitchen table. |

## CP-SUPPORT-01

| Field | Spec |
|---|---|
| Page | Bereavement support |
| Section | Introduction |
| Subject | Two friends sitting together on a front porch step, one with a reassuring hand on the other's shoulder. Dignified, private, restrained. |
| Composition | Medium-wide; faces partially turned, no tears, no funeral setting, no flowers or caskets. |
| Aspect (desktop) | 3 / 2 |
| Aspect (mobile) | 4 / 5 |
| Mobile crop | Vertical crop keeping both figures and the hand. |
| Emotional tone | Presence, quiet support. Avoid grief exploitation. |
| Lighting | Overcast soft daylight. |
| Negative space | Generous sky/wall area top-left. |
| Alt text | A friend resting a reassuring hand on another person's shoulder on a quiet front porch. |

## CP-PORTAL-01

| Field | Spec |
|---|---|
| Page | Home / Membership |
| Section | Member portal |
| Subject | A member using a laptop at home. Screen shows ONLY approved, real portal UI supplied by Club Pamoja (no invented features), or is angled away. |
| Composition | Over-the-shoulder; device as focal point. |
| Aspect (desktop) | 16 / 10 |
| Aspect (mobile) | 4 / 3 |
| Mobile crop | Centre on device. |
| Emotional tone | Organised, calm, modern. |
| Lighting | Even interior daylight. |
| Negative space | Right side clean. |
| Alt text | A member signing in to the Club Pamoja member portal on a laptop. |

## CP-ABOUT-01

| Field | Spec |
|---|---|
| Page | About |
| Section | Page hero |
| Subject | Hands of several generations joined over a table, one wearing a simple beaded bracelet. Close, tactile, warm. |
| Composition | Top-down or 45° close-up; no faces needed. |
| Aspect (desktop) | 16 / 9 |
| Aspect (mobile) | 4 / 3 |
| Mobile crop | Centre on joined hands. |
| Emotional tone | Together. Pamoja. |
| Lighting | Warm interior light. |
| Negative space | Edges soft. |
| Alt text | Hands from several generations joined together on a table. |

