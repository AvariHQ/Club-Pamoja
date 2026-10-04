// Verifies every internal href/anchor in dist/ resolves to a built page (and #id exists).
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const root = 'dist';
const pages = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && pages.push(p); });
walk(root);
const ids = new Map();
for (const p of pages) ids.set(p, new Set([...readFileSync(p, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
let bad = 0;
for (const p of pages) {
  const html = readFileSync(p, 'utf8');
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:)/.test(href) || href.startsWith('/_astro') || href.endsWith('.svg') || href.endsWith('.xml')) continue;
    const [path, hash] = href.split('#');
    const target = path === '' ? p : join(root, path, path.endsWith('/') ? 'index.html' : '');
    if (!existsSync(target)) { console.log(`MISSING ${p} -> ${href}`); bad++; continue; }
    if (hash && !ids.get(target)?.has(hash)) { console.log(`NO ANCHOR ${p} -> ${href}`); bad++; }
  }
}
console.log(`${pages.length} pages checked, ${bad} problems`);
process.exit(bad ? 1 : 0);
