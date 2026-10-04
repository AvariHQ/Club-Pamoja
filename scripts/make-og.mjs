// Renders public/og-default.png (1200x630) from HTML using the site fonts. Run after `npm run build`.
import { chromium } from 'playwright';
import { readdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
const font = (dir) => readdirSync(`node_modules/@fontsource-variable/${dir}/files`).find((f) => f.includes('latin-') && !f.includes('ext') && f.endsWith('.woff2') && !f.includes('italic'));
const fri = `node_modules/@fontsource-variable/fraunces/files/fraunces-latin-opsz-italic.woff2`;
const fr = `node_modules/@fontsource-variable/fraunces/files/${font('fraunces')}`;
const ps = `node_modules/@fontsource-variable/public-sans/files/${font('public-sans')}`;
const html = `<html><head><style>
@font-face{font-family:F;src:url(file://${process.cwd()}/${fr})} @font-face{font-family:F;font-style:italic;src:url(file://${process.cwd()}/${fri})} @font-face{font-family:P;src:url(file://${process.cwd()}/${ps})}
body{margin:0;width:1200px;height:630px;background:#0F2226;color:#fff;font-family:P;display:flex;flex-direction:column;justify-content:space-between;padding:72px 80px;box-sizing:border-box;position:relative;overflow:hidden}
.k{color:#C8A770;letter-spacing:.16em;text-transform:uppercase;font-size:22px;font-weight:650}
h1{font-family:F;font-weight:420;font-size:72px;line-height:1.05;margin:0;max-width:900px;letter-spacing:-.02em}
h1 em{color:#C8A770}
.f{display:flex;justify-content:space-between;font-size:26px;color:#c5d1d3}
svg{position:absolute;right:-90px;top:-60px;width:520px;opacity:.5}
</style></head><body>
<svg viewBox="0 0 200 140"><circle cx="78" cy="70" r="60" fill="none" stroke="#fff" stroke-opacity=".3"/><circle cx="122" cy="70" r="60" fill="none" stroke="#C8A770"/></svg>
<div class="k">Club Pamoja</div>
<h1>When loss comes, your community should <em>already be in place.</em></h1>
<div class="f"><span>Kenyan diaspora mutual aid · United States</span><span>Mutual aid. Not insurance.</span></div>
</body></html>`;
const b = await chromium.launch({ executablePath: process.env.CHROMIUM || undefined });
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
const tmp = join(tmpdir(), 'cp-og.html');
writeFileSync(tmp, html);
await p.goto('file://' + tmp, { waitUntil: 'networkidle' });
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: 'public/og-default.png' });
await b.close();
console.log('public/og-default.png written');
