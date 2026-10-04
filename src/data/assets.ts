/**
 * Higgsfield visual campaign — image specifications.
 * Each id is rendered by <ImagePlaceholder id="…" /> until a final asset is supplied.
 * To ship an asset: export AVIF + WebP + JPEG at the listed widths into
 * /public/images/<id>/, then set `src` below (path prefix, no extension).
 * Full brief: docs/VISUAL-ASSETS.md (generated from this file's content).
 */
export interface AssetSpec {
  id: string;
  page: string;
  section: string;
  subject: string;
  composition: string;
  aspect: string; // CSS aspect-ratio for desktop
  mobileAspect: string;
  mobileCrop: string;
  tone: string;
  lighting: string;
  negativeSpace: string;
  alt: string;
  src?: string; // set when final asset is delivered
}

export const assets: Record<string, AssetSpec> = {
  'CP-HERO-01': {
    id: 'CP-HERO-01',
    page: 'Home',
    section: 'Hero',
    subject:
      'A multigenerational Kenyan-American family gathered in a warm, contemporary American living room — an elder seated, adults and a teenager close by, mid-conversation. Calm, connected, unhurried.',
    composition: 'Subjects in the right two-thirds; left third quiet for headline overlap on wide screens. Eye level, 35–50mm feel.',
    aspect: '4 / 5',
    mobileAspect: '4 / 3',
    mobileCrop: 'Centre-crop on the elder and nearest adult; faces must remain fully in frame at 4:3.',
    tone: 'Belonging, steadiness, quiet confidence. Not grief.',
    lighting: 'Late-afternoon natural window light, warm but not golden-hour saturated.',
    negativeSpace: 'Soft, low-detail background on the left edge.',
    alt: 'Three generations of a Kenyan-American family talking together in their living room.',
  },
  'CP-COMMUNITY-01': {
    id: 'CP-COMMUNITY-01',
    page: 'Home / About',
    section: 'Pamoja means together',
    subject:
      'A community gathering in a US church hall or community centre — people greeting, an embrace, someone serving chai. Subtle Kenyan context (a kikoi scarf, a kanga print on a table runner), never costume.',
    composition: 'Wide, documentary framing with layered depth; no single posed hero subject.',
    aspect: '3 / 2',
    mobileAspect: '4 / 3',
    mobileCrop: 'Keep the central greeting in frame.',
    tone: 'Warm, editorial, real.',
    lighting: 'Mixed interior light, soft and even.',
    negativeSpace: 'None required.',
    alt: 'Members of the Kenyan diaspora greeting one another at a community gathering.',
  },
  'CP-FAMILY-01': {
    id: 'CP-FAMILY-01',
    page: 'Coverage / Membership',
    section: 'Eligible family',
    subject: 'A couple and an older parent at a kitchen table, relaxed, reviewing papers together on a tablet.',
    composition: 'Three-quarter view across the table; hands and tablet visible but screen content not legible.',
    aspect: '4 / 3',
    mobileAspect: '1 / 1',
    mobileCrop: 'Square crop centred on the three faces.',
    tone: 'Preparedness, care, ordinariness.',
    lighting: 'Morning daylight.',
    negativeSpace: 'Top quarter calm.',
    alt: 'A couple and an older parent reviewing family details together at their kitchen table.',
  },
  'CP-SUPPORT-01': {
    id: 'CP-SUPPORT-01',
    page: 'Bereavement support',
    section: 'Introduction',
    subject:
      'Two friends sitting together on a front porch step, one with a reassuring hand on the other\'s shoulder. Dignified, private, restrained.',
    composition: 'Medium-wide; faces partially turned, no tears, no funeral setting, no flowers or caskets.',
    aspect: '3 / 2',
    mobileAspect: '4 / 5',
    mobileCrop: 'Vertical crop keeping both figures and the hand.',
    tone: 'Presence, quiet support. Avoid grief exploitation.',
    lighting: 'Overcast soft daylight.',
    negativeSpace: 'Generous sky/wall area top-left.',
    alt: 'A friend resting a reassuring hand on another person\'s shoulder on a quiet front porch.',
  },
  'CP-PORTAL-01': {
    id: 'CP-PORTAL-01',
    page: 'Home / Membership',
    section: 'Member portal',
    subject:
      'A member using a laptop at home. Screen shows ONLY approved, real portal UI supplied by Club Pamoja (no invented features), or is angled away.',
    composition: 'Over-the-shoulder; device as focal point.',
    aspect: '16 / 10',
    mobileAspect: '4 / 3',
    mobileCrop: 'Centre on device.',
    tone: 'Organised, calm, modern.',
    lighting: 'Even interior daylight.',
    negativeSpace: 'Right side clean.',
    alt: 'A member signing in to the Club Pamoja member portal on a laptop.',
  },
  'CP-ABOUT-01': {
    id: 'CP-ABOUT-01',
    page: 'About',
    section: 'Page hero',
    subject: 'Hands of several generations joined over a table, one wearing a simple beaded bracelet. Close, tactile, warm.',
    composition: 'Top-down or 45° close-up; no faces needed.',
    aspect: '16 / 9',
    mobileAspect: '4 / 3',
    mobileCrop: 'Centre on joined hands.',
    tone: 'Together. Pamoja.',
    lighting: 'Warm interior light.',
    negativeSpace: 'Edges soft.',
    alt: 'Hands from several generations joined together on a table.',
  },
};
