// Requires a static server on dist/ (e.g. python3 -m http.server 4400 -d dist) (or BASE=<url>).
// QA: screenshots + overflow + console errors. Usage: node scripts/qa-shots.mjs <outdir> [paths...]
import { chromium } from 'playwright';
const out = process.argv[2] || 'qa';
const paths = process.argv.slice(3).length ? process.argv.slice(3) : ['/'];
const BASE = process.env.BASE || 'http://127.0.0.1:4400';
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || undefined });
const sizes = { mobile: [375, 812], tablet: [820, 1180], desktop: [1440, 900] };
for (const p of paths) {
  for (const [name, [w, h]] of Object.entries(sizes)) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    const errs = [];
    page.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
    page.on('pageerror', (e) => errs.push(e.message));
    await page.goto(BASE + p, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.querySelectorAll('[data-reveal]').forEach((e) => e.classList.add('is-visible')));
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    const wide = await page.evaluate(() => [...document.querySelectorAll('body *')].filter((e) => e.getBoundingClientRect().right > window.innerWidth + 1).slice(0, 4).map((e) => e.tagName + '.' + e.className));
    if (overflow > 0) console.log('  overflowing:', wide.join(', '));
    const slug = p.replace(/\//g, '_') || '_';
    if (process.env.SLICE) {
      const total = await page.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0, i = 0; y < total; y += h, i++) {
        await page.screenshot({ path: `${out}/${slug}-${name}-${i}.png`, fullPage: true, clip: { x: 0, y, width: w, height: Math.min(h, total - y) } });
      }
    } else {
      await page.screenshot({ path: `${out}/${slug}-${name}.png`, fullPage: true });
    }
    console.log(p, name, 'overflow:', overflow, errs.length ? 'ERRORS: ' + errs.join(' | ') : 'ok');
    await page.close();
  }
}
await browser.close();
