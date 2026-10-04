// Accessibility + interaction QA. Requires a static server on dist/ (python3 -m http.server 4400 -d dist).
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
const BASE = process.env.BASE || 'http://127.0.0.1:4400';
const axe = readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const paths = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || undefined });
let total = 0;
for (const p of paths) {
  for (const width of [375, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
    await page.goto(BASE + p);
    await page.addScriptTag({ content: axe });
    const res = await page.evaluate(async () => (await window.axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'] })).violations);
    for (const v of res) { total++; console.log(`${p} @${width} [${v.impact}] ${v.id}: ${v.help} — ${v.nodes.slice(0, 3).map((n) => n.target.join(' ')).join(' | ')}`); }
    await page.close();
  }
}
// Interaction checks
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(BASE + '/');
await page.keyboard.press('Tab');
console.log('first tab focus:', await page.evaluate(() => document.activeElement.textContent.trim()));
const trig = page.locator('[data-mega-trigger]').first();
await trig.focus(); await page.keyboard.press('Enter');
console.log('mega open after Enter:', await trig.getAttribute('aria-expanded'), 'panel visible:', await page.locator('#mega-0').isVisible());
await page.keyboard.press('Escape');
console.log('mega after Escape:', await trig.getAttribute('aria-expanded'), 'focus back:', await page.evaluate(() => document.activeElement.hasAttribute('data-mega-trigger')));
const m = await browser.newPage({ viewport: { width: 375, height: 800 } });
await m.goto(BASE + '/');
await m.click('[data-menu-toggle]');
console.log('mobile drawer visible:', await m.locator('#mobile-nav').isVisible());
await m.click('[data-accordion-trigger] >> nth=0');
console.log('mobile group open:', await m.locator('#m-group-0').isVisible());
await m.keyboard.press('Escape');
console.log('drawer closed on Escape:', !(await m.locator('#mobile-nav').isVisible()));
await browser.close();
console.log(`axe violations: ${total}`);
