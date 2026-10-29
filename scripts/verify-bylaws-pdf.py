"""Word-level comparison of the bylaws PDF text against the adopted source text.
Ignores: merge fields ({{...}}), the generated Contents box, and running footers."""
import re, subprocess, sys, difflib
src = open('documents/bylaws/source-adopted-2026-10-29.txt', encoding='utf8').read()
src = re.sub(r'\{\{[^}]+\}\}', ' ', src)
pdf = subprocess.run(['pdftotext', '-raw', 'public/documents/club-pamoja-bylaws-effective-2026-10-29.pdf', '-'], capture_output=True, text=True).stdout
pdf = re.sub(r'Club Pamoja Bylaws — Effective October 29, 2026\s+Page \d+ of \d+', ' ', pdf)
pdf = re.sub(r'Contents\s.*?(?=ARTICLE I\. NAME AND MISSION\s+\(i\))', ' ', pdf, flags=re.S)
norm = lambda s: re.sub(r'\s+', ' ', s.replace('’', "'")).split()
a, b = norm(src), norm(pdf)
# Primary test: identical character stream once whitespace is removed (line wrapping cannot hide a wording change).
ca, cb = ''.join(a), ''.join(b)
print('character-identical (whitespace-insensitive):', ca == cb, f'({len(ca)} chars)')
if ca == cb: sys.exit(0)
diff = [d for d in difflib.ndiff(a, b) if d[0] in '+-']
print(f'source words: {len(a)}  pdf words: {len(b)}  differences: {len(diff)}')
for d in diff[:40]: print(' ', d)
sys.exit(1 if diff else 0)
