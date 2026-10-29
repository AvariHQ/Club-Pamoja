// Typesets the adopted Club Pamoja Bylaws into an accessible, tagged PDF (and a matching HTML reference copy).
// Source of truth: documents/bylaws/source-adopted-2026-10-29.txt (verbatim adopted text).
// Wording is never changed. Per-member merge fields ({{…}}) are rendered as blank fill-in lines.
// Usage: CHROMIUM=/path/to/chromium node scripts/build-bylaws-pdf.mjs
import { chromium } from 'playwright';
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'documents/bylaws/source-adopted-2026-10-29.txt';
const OUT_HTML = 'documents/bylaws/club-pamoja-bylaws-effective-2026-10-29.html';
const OUT_PDF = 'public/documents/club-pamoja-bylaws-effective-2026-10-29.pdf';
const TITLE = 'Club Pamoja Bylaws — Effective October 29, 2026';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const blank = (s) => s.replace(/\{\{[^}]+\}\}/g, '<span class="fill" aria-label="blank"></span>');
const lines = readFileSync(SRC, 'utf8').split('\n').map((l) => l.trim()).filter(Boolean);

const toc = [];
let body = '';
let inList = false;
const closeList = () => { if (inList) { body += '</ol>'; inList = false; } };
lines.forEach((line, i) => {
  const t = blank(esc(line));
  if (i === 0) { body += `<h1>${t}</h1>`; return; }
  const art = line.match(/^ARTICLE ([IVX]+)\. (.+)$/);
  if (art) {
    closeList();
    const id = `article-${art[1].toLowerCase()}`;
    toc.push({ id, label: `Article ${art[1]}. ${art[2]}` });
    body += `<h2 id="${id}">${t}</h2>`;
    return;
  }
  if (line === 'ATTESTATION AND SIGNATURE') {
    closeList();
    toc.push({ id: 'attestation', label: 'Attestation and signature' });
    body += `<h2 id="attestation">${t}</h2>`;
    return;
  }
  const sec = line.match(/^\(([ivx]+)\) ([A-Z][A-Z ,()'-]+[.:])(.*)$/);
  if (sec) {
    closeList();
    body += `<h3>(${sec[1]}) ${esc(sec[2])}</h3>${sec[3].trim() ? `<p>${blank(esc(sec[3].trim()))}</p>` : ''}`;
    return;
  }
  const item = line.match(/^([a-n]\)|[ivx]+\.)\s(.*)$/);
  if (item) {
    if (!inList) { body += '<ol class="items">'; inList = true; }
    body += `<li><span class="marker">${esc(item[1])}</span> ${blank(esc(item[2]))}</li>`;
    return;
  }
  closeList();
  if (i <= 4) body += `<p class="meta">${t}</p>`;
  else body += `<p>${t}</p>`;
});
closeList();

const fontFile = (pkg, f) => join(process.cwd(), 'node_modules/@fontsource-variable', pkg, 'files', f);
const html = `<!doctype html>
<html lang="en-US"><head><meta charset="utf-8">
<title>${TITLE}</title>
<meta name="author" content="AvariHQ LLC">
<meta name="subject" content="Club Pamoja Bylaws, effective October 29, 2026">
<style>
@font-face{font-family:'Fraunces';src:url('file://${fontFile('fraunces', 'fraunces-latin-opsz-normal.woff2')}')}
@font-face{font-family:'Public Sans';src:url('file://${fontFile('public-sans', 'public-sans-latin-wght-normal.woff2')}')}
@page{size:Letter;margin:0.9in 0.85in 0.9in}
body{font-kerning:none;font-family:'Public Sans',Arial,sans-serif;font-size:10.5pt;line-height:1.5;color:#121a1c}
h1{font-family:'Fraunces',Georgia,serif;font-weight:500;font-size:24pt;color:#0F2226;margin:0 0 6pt}
.meta{margin:0 0 3pt;color:#44443f}
.meta:first-of-type{font-size:11pt}
h2{font-family:'Fraunces',Georgia,serif;font-weight:500;font-size:14pt;color:#0F2226;margin:20pt 0 6pt;padding-top:8pt;border-top:1.5pt solid #C8A770;break-after:avoid}
h3{font-size:10.5pt;font-weight:700;color:#0F2226;margin:10pt 0 3pt;break-after:avoid}
p{margin:0 0 6pt;orphans:3;widows:3}
ol.items{list-style:none;padding:0;margin:0 0 6pt}
ol.items li{margin:0 0 5pt;padding-left:22pt;text-indent:-22pt;orphans:3;widows:3}
.marker{display:inline-block;width:22pt;text-indent:0;font-weight:600;color:#0F2226}
.meta .fill{min-width:1.7in}
.fill{display:inline-block;min-width:2.6in;border-bottom:0.75pt solid #44443f;height:1em;vertical-align:-2pt}
nav{margin:14pt 0 4pt;padding:10pt 12pt;background:#f5efe5;border-radius:3pt}
nav p{font-weight:700;color:#0F2226;margin:0 0 4pt}
nav ol{margin:0;padding:0;list-style:none;columns:2;column-gap:20pt}
nav li{break-inside:avoid;margin:0 0 2pt}
nav a{color:#0F2226;text-decoration:none}
</style></head><body>
<main>${body.replace('</h1>', '</h1>').replace(/(<h2 id="article-i">)/, `<nav aria-label="Contents"><p>Contents</p><ol>${toc.map((t) => `<li><a href="#${t.id}">${esc(t.label)}</a></li>`).join('')}</ol></nav>$1`)}</main>
</body></html>`;

writeFileSync(OUT_HTML, html);
const b = await chromium.launch({ executablePath: process.env.CHROMIUM || undefined });
const p = await b.newPage();
await p.goto('file://' + join(process.cwd(), OUT_HTML), { waitUntil: 'networkidle' });
await p.evaluate(() => document.fonts.ready);
await p.pdf({
  path: OUT_PDF,
  format: 'Letter',
  printBackground: true,
  tagged: true,
  outline: true,
  displayHeaderFooter: true,
  headerTemplate: '<span></span>',
  footerTemplate: `<div style="font-family:Arial;font-size:7.5pt;color:#6b6a64;width:100%;padding:0 0.85in;display:flex;justify-content:space-between"><span>${TITLE}</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`,
  margin: { top: '0.9in', bottom: '0.9in', left: '0.85in', right: '0.85in' },
});
await b.close();
console.log(`wrote ${OUT_HTML} and ${OUT_PDF}`);
