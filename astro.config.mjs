import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = process.env.PUBLIC_SITE_URL || 'https://clubpamoja.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  // Consolidated URLs: thin pages merged into stronger parents (see docs/SITEMAP.md).
  redirects: {
    '/member-referrals/': '/how-to-join/#referral',
  },
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') && !page.includes('/sign-in/') })],
});
