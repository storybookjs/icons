import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const skill = path.resolve(here, '..', '..');
const md = fs.readFileSync(path.join(skill, 'SKILL.md'), 'utf8');

test('SKILL.md invokes the scripts and names the work folder and template by repo-relative path', () => {
  for (const call of md.match(/node \S+/g) || []) {
    assert.match(call, /^node \.claude\/skills\/storybook-icon\/scripts\/(render|add)\.mjs$/, call);
  }
  for (const m of md.matchAll(/(^|[^\w/.-])(work\/|assets\/template\.svg)/gm)) {
    assert.fail(`bare path at: ${JSON.stringify(md.slice(m.index, m.index + 48))}`);
  }
  assert.doesNotMatch(md, /relative to this skill's folder/);
});

test('SKILL.md step 3 allows the inherited warnings of an edit', () => {
  assert.match(md, /Done when the check prints `ok`[^\n]*inherited/);
});
