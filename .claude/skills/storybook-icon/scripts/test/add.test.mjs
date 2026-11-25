import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { checkSvg } from '../add.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, '..', '..', '..', '..', '..');
const addMjs = path.resolve(here, '..', 'add.mjs');
const fixture = (n) => fs.readFileSync(path.join(here, 'fixtures', n), 'utf8');
const read = (rel) => fs.readFileSync(path.join(repo, rel), 'utf8');
const run = (...args) => spawnSync('node', [addMjs, ...args], { cwd: repo, encoding: 'utf8' });

test('checkSvg passes the template, a circle, and a path with no fill', () => {
  for (const n of ['ok-plus.svg', 'ok-circle.svg', 'nofill.svg']) {
    const r = checkSvg(fixture(n));
    assert.deepEqual(r.errors, [], n);
  }
});

test('checkSvg refuses a stroke and says what to do instead', () => {
  const r = checkSvg(fixture('bad-stroke.svg'));
  assert.equal(r.errors.length, 1);
  assert.match(r.errors[0], /stroke/);
  assert.match(r.errors[0], /fill/);
});

test('checkSvg refuses a root without a viewBox', () => {
  const r = checkSvg(fixture('bad-nobox.svg'));
  assert.equal(r.errors.length, 1);
  assert.match(r.errors[0], /viewBox must be "0 0 14 14"/);
});

test('checkSvg refuses a 14x15 viewBox for a new icon', () => {
  const r = checkSvg(fixture('bad-15.svg'));
  assert.equal(r.errors.length, 1);
  assert.match(r.errors[0], /0 0 14 15/);
});

test('checkSvg refuses a <g>', () => {
  const r = checkSvg(fixture('bad-group.svg'));
  assert.equal(r.errors.length, 1);
  assert.match(r.errors[0], /<g>/);
});

test('checkSvg refuses a fill that is not black', () => {
  const r = checkSvg(fixture('bad-fill.svg'));
  assert.equal(r.errors.length, 1);
  assert.match(r.errors[0], /fill/);
  assert.match(r.errors[0], /#FF4785/);
});

test('checkSvg warns about coordinates with more than three decimals', () => {
  const r = checkSvg(fixture('warn-precision.svg'));
  assert.deepEqual(r.errors, []);
  assert.equal(r.warnings.length, 1);
  assert.match(r.warnings[0], /3 decimals/);
});

test('checkSvg with an existing 14x15 icon keeps its viewBox with a warning', () => {
  const r = checkSvg(fixture('bad-15.svg'), read('src/icons/LockIcon.tsx'));
  assert.deepEqual(r.errors, []);
  assert.equal(r.warnings.length, 1);
  assert.match(r.warnings[0], /14 15/);
  assert.match(r.warnings[0], /re-fit to 14x14 plain paths if this is a redraw$/);
});

test('checkSvg allows a clipPath only when the existing icon already has one', () => {
  const inherited = checkSvg(fixture('with-clippath.svg'), read('src/icons/PopOutIcon.tsx'));
  assert.deepEqual(inherited.errors, []);
  assert.equal(inherited.warnings.length, 1);
  const fresh = checkSvg(fixture('with-clippath.svg'), read('src/icons/LockIcon.tsx'));
  assert.equal(fresh.errors.length, 1);
  assert.match(fresh.errors[0], /clipPath/);
  const brandNew = checkSvg(fixture('with-clippath.svg'));
  assert.equal(brandNew.errors.length, 1);
});

test('CLI --check exits 1 with the message on a bad file and 0 with ok on a good one', () => {
  const bad = run(path.join(here, 'fixtures', 'bad-stroke.svg'), '--check');
  assert.equal(bad.status, 1);
  assert.match(bad.stderr + bad.stdout, /stroke/);
  const good = run(path.join(here, 'fixtures', 'ok-plus.svg'), '--check');
  assert.equal(good.status, 0, good.stderr);
  assert.match(good.stdout, /ok/);
});
