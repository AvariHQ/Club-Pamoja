/**
 * Global site configuration.
 * Values sourced from environment variables are documented in .env.example.
 * Business facts here are VERIFIED (see docs/CONTENT-REVIEW.md for provenance).
 */
const env = import.meta.env;

const clean = (v: string | undefined) => (v && v.trim() ? v.trim() : '');

export const site = {
  name: 'Club Pamoja',
  url: clean(env.PUBLIC_SITE_URL) || 'https://clubpamoja.com',
  tagline: 'When loss comes, your community should already be in place.',
  description:
    'Club Pamoja is a professionally administered mutual-aid community for the Kenyan diaspora in the United States, organized around coordinated bereavement support. Mutual aid, not insurance.',
  locale: 'en_US',
  qualifier: 'Mutual aid. Not insurance.',
  openEnrollment: clean(env.PUBLIC_OPEN_ENROLLMENT) !== 'false',
  showReviewNotes: clean(env.PUBLIC_SHOW_REVIEW_NOTES) === 'true',
  contactEmail: clean(env.PUBLIC_CONTACT_EMAIL),
  /** URL of the authoritative bylaws document (PDF or page). */
  bylawsUrl: clean(env.PUBLIC_BYLAWS_URL),
};

/** Single source of truth for the two primary actions. Labels must not vary across the site. */
export const actions = {
  apply: {
    label: 'Apply for Membership',
    href: clean(env.PUBLIC_APPLY_URL) || '/how-to-join/#apply',
    external: Boolean(clean(env.PUBLIC_APPLY_URL)),
  },
  signIn: {
    label: 'Member Sign In',
    href: clean(env.PUBLIC_PORTAL_URL) || '/sign-in/',
    external: Boolean(clean(env.PUBLIC_PORTAL_URL)),
  },
};

/** Verified amounts (USD). Do not change without written confirmation from Club Pamoja. */
export const fees = {
  application: 20,
  activation: 60,
  memberContribution: 90,
  familyContribution: 30,
};

export const usd = (n: number) => `$${n}`;
