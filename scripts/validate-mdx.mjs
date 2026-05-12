#!/usr/bin/env node
// scripts/validate-mdx.mjs
//
// MDX compilation check. Run before merging a content PR:
//   node scripts/validate-mdx.mjs
//
// Compiles every .md / .mdx file under docs/ and i18n/ using the same MDX
// parser Docusaurus uses. Reports each file that fails and exits 1.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { compile } from '@mdx-js/mdx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

function walk(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, results);
    else results.push(full);
  }
  return results;
}

function relPosix(from, to) {
  return path.relative(from, to).split(path.sep).join('/');
}

const mdRoots = ['docs', 'i18n'].map((d) => path.join(REPO_ROOT, d));
const mdFiles = mdRoots
  .flatMap((d) => walk(d))
  .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

const settled = await Promise.allSettled(
  mdFiles.map(async (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    await compile(content, { format: 'mdx' });
  })
);

const errors = [];
for (let i = 0; i < settled.length; i++) {
  if (settled[i].status === 'rejected') {
    const err = settled[i].reason;
    const start = err.position?.start ?? err.place?.start;
    const loc = start?.line != null ? `:${start.line}:${start.column ?? 1}` : '';
    errors.push({
      file: relPosix(REPO_ROOT, mdFiles[i]) + loc,
      message: err.message,
    });
  }
}

if (errors.length > 0) {
  console.error(`\n  ${errors.length} MDX compilation error(s) found:\n`);
  for (const { file, message } of errors) {
    console.error(`  FILE: ${file}`);
    console.error(`  ${message}\n`);
  }
  process.exit(1);
}

console.log(
  `OK  compiled ${mdFiles.length} markdown file(s) — no MDX errors.`
);
