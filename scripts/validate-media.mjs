#!/usr/bin/env node
// scripts/validate-media.mjs
//
// Pre-merge guardrail. Run before approving a content PR:
//   node scripts/validate-media.mjs
//
// Checks:
//   1. Every file under static/ has a clean name (lowercase, digits,
//      hyphens; no spaces, no uppercase) and is < 5 MB.
//   2. Every media reference in docs/ and i18n/ markdown points to
//      an absolute path (/img/..., /pdf/..., etc.) that resolves
//      to an actual file under static/.
//
// Exit code: 0 = clean, 1 = at least one violation.

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const STATIC_DIR = path.join(REPO_ROOT, 'static');
const SIZE_LIMIT_BYTES = 5 * 1024 * 1024;

// Filename rule: lowercase letters/digits, segments separated by hyphens,
// followed by a lowercase extension. Example: dashboard-overview.png
const NAME_PATTERN = /^[a-z0-9]+([_-][a-z0-9]+)*\.[a-z0-9]+$/;

const MEDIA_EXTS = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico',
  '.pdf',
  '.mp4', '.webm', '.mov', '.mp3', '.wav', '.ogg',
]);

function walk(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, results);
    else results.push(full);
  }
  return results;
}

function relPosix(from, to) {
  return path.relative(from, to).split(path.sep).join('/');
}

function isExternal(url) {
  return /^(https?:|mailto:|tel:|ftp:|#)/i.test(url);
}

const errors = [];

// ---------- 1. Validate every file under static/ ----------------------------
const staticFiles = walk(STATIC_DIR);
for (const file of staticFiles) {
  const rel = relPosix(REPO_ROOT, file);
  const base = path.basename(file);

  if (!NAME_PATTERN.test(base)) {
    errors.push(
      `BAD-NAME    ${rel}\n` +
      `            Filenames must be lowercase, hyphen-separated, no spaces.`
    );
  }

  const size = fs.statSync(file).size;
  if (size > SIZE_LIMIT_BYTES) {
    const mb = (size / 1024 / 1024).toFixed(2);
    errors.push(
      `TOO-LARGE   ${rel} (${mb} MB)\n` +
      `            Files must be < 5 MB. Compress or host externally.`
    );
  }
}

// ---------- 2. Validate media references in markdown ------------------------
const MD_IMG_RE  = /!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
const MD_LINK_RE = /(?<!!)\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
const HTML_SRC_RE = /<(?:img|video|source|audio)\b[^>]*\bsrc=["']([^"']+)["']/gi;

const mdRoots = ['docs', 'i18n'].map((d) => path.join(REPO_ROOT, d));
const mdFiles = mdRoots
  .flatMap((d) => walk(d))
  .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

for (const mdFile of mdFiles) {
  const content = fs.readFileSync(mdFile, 'utf8');
  const refs = new Set();
  for (const re of [MD_IMG_RE, MD_LINK_RE, HTML_SRC_RE]) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(content)) !== null) {
      const url = m[1].split('#')[0].split('?')[0];
      if (url && !isExternal(url)) refs.add(url);
    }
  }

  const mdRel = relPosix(REPO_ROOT, mdFile);
  for (const ref of refs) {
    const ext = path.extname(ref).toLowerCase();
    if (!MEDIA_EXTS.has(ext)) continue;  // skip non-media (e.g. links to .md)

    if (!ref.startsWith('/')) {
      errors.push(
        `BAD-PATH    ${mdRel}\n` +
        `            "${ref}" — use an absolute path like /img/foo.png`
      );
      continue;
    }

    const target = path.join(STATIC_DIR, ref.slice(1));
    if (!fs.existsSync(target)) {
      errors.push(
        `BROKEN      ${mdRel}\n` +
        `            "${ref}" — file does not exist under static/`
      );
    }
  }
}

// ---------- Report ----------------------------------------------------------
if (errors.length > 0) {
  console.error(`\n  ${errors.length} issue(s) found:\n`);
  for (const e of errors) console.error('  ' + e + '\n');
  process.exit(1);
}

console.log(
  `OK  validated ${staticFiles.length} media file(s) and ` +
  `${mdFiles.length} markdown file(s).`
);
