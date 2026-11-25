import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import {
  checkSvg, componentName, insertExport, insertListEntry, changesetMarkdown, changesetName,
  normalizeSvg, svgrComponent, storySource,
} from '../add.mjs';

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

const INDEX = `export { iconList } from './iconList';
export type { Icon, IconProps } from './types';

export { AIcon } from './icons/AIcon';
export { BIcon } from './icons/BIcon';
`;

const LIST = `export const iconList = [
  {
    name: 'Images',
    icons: [
      'PhotoIcon',
      'ComponentIcon',
    ]
  },
  {
    name: 'CRUD',
    icons: [
      'PlusIcon',
      'CloseAltIcon',
    ]
  },
];
`;

test('componentName normalises every input form to <Name>Icon', () => {
  for (const i of ['flaky-test', 'FlakyTest', 'FlakyTestIcon', 'flaky_test.svg', 'flaky test', '/tmp/x/FlakyTestIcon.svg']) {
    assert.equal(componentName(i), 'FlakyTestIcon', i);
  }
  assert.equal(componentName('QR'), 'QRIcon');
  assert.equal(componentName('status-add'), 'StatusAddIcon');
});

test('insertExport appends after the last export and leaves the type export in place', () => {
  const out = insertExport(INDEX, 'NewIcon');
  const lines = out.trimEnd().split('\n');
  assert.equal(lines[1], "export type { Icon, IconProps } from './types';");
  assert.equal(lines.at(-1), "export { NewIcon } from './icons/NewIcon';");
  assert.equal(lines.at(-2), "export { BIcon } from './icons/BIcon';");
});

test('insertExport places the export right after a named sibling', () => {
  const lines = insertExport(INDEX, 'NewIcon', 'AIcon').trimEnd().split('\n');
  assert.equal(lines.indexOf("export { NewIcon } from './icons/NewIcon';"), lines.indexOf("export { AIcon } from './icons/AIcon';") + 1);
});

test('insertExport refuses a duplicate and an unknown sibling', () => {
  assert.throws(() => insertExport(INDEX, 'AIcon'), /already exported/);
  assert.throws(() => insertExport(INDEX, 'NewIcon', 'NopeIcon'), /after not found/);
});

test('insertExport on the real index keeps line 2 and appends last', () => {
  const lines = insertExport(read('src/index.ts'), 'ZzzIcon').trimEnd().split('\n');
  assert.match(lines[1], /^export type \{ Icon, IconProps \}/);
  assert.equal(lines.at(-1), "export { ZzzIcon } from './icons/ZzzIcon';");
});

test('insertListEntry adds at the end of the group or after a sibling', () => {
  const end = insertListEntry(LIST, 'NewIcon', 'CRUD').split('\n');
  assert.equal(end.indexOf("      'NewIcon',"), end.indexOf("      'CloseAltIcon',") + 1);
  assert.equal(end[end.indexOf("      'NewIcon',") + 1], '    ]');
  const after = insertListEntry(LIST, 'NewIcon', 'CRUD', 'PlusIcon').split('\n');
  assert.equal(after.indexOf("      'NewIcon',"), after.indexOf("      'PlusIcon',") + 1);
});

test('insertListEntry refuses a missing group, a sibling in another group, and a duplicate', () => {
  assert.throws(() => insertListEntry(LIST, 'NewIcon', 'Nope'), /Images, CRUD/);
  assert.throws(() => insertListEntry(LIST, 'NewIcon', 'CRUD', 'PhotoIcon'), /PhotoIcon.*not in.*CRUD|not in group CRUD/);
  assert.throws(() => insertListEntry(LIST, 'PlusIcon', 'CRUD'), /already listed/);
});

test('insertListEntry on the real list puts the icon last in People', () => {
  const lines = insertListEntry(read('src/iconList.tsx'), 'ZzzIcon', 'People').split('\n');
  const i = lines.indexOf("      'ZzzIcon',");
  assert.ok(i > 0);
  assert.equal(lines[i + 1], '    ]');
  assert.equal(lines[i - 1], "      'AccessibilityIgnoredIcon',");
});

test('changesetMarkdown and changesetName follow the upstream convention', () => {
  assert.equal(changesetMarkdown('Add FlakyTest icon', 'minor'), '---\n"@storybook/icons": minor\n---\n\nAdd FlakyTest icon\n');
  assert.equal(changesetMarkdown('Redraw BellIcon', 'patch'), '---\n"@storybook/icons": patch\n---\n\nRedraw BellIcon\n');
  assert.equal(changesetName('Add FlakyTest icon'), 'add-flakytest-icon');
  assert.equal(changesetName('Add StatusSkipped, a status glyph for skipped stories in the sidebar, please'), 'add-statusskipped-a-status-glyph-for-skipped-stories');
});

test('normalizeSvg orders attributes, fills shapes black, strips comments', () => {
  const out = normalizeSvg(fixture('unordered.svg'));
  assert.match(out, /^<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http:\/\/www.w3.org\/2000\/svg">/);
  assert.match(out, /<path d="M7 1h1v12h-1z" fill="#000"\/>/);
  assert.match(out, /<path d="M1 7h12v1H1z" fill="#000"\/>/);
  assert.match(out, /<path fill-rule="evenodd" clip-rule="evenodd" d="M7 13A6[^"]*" fill="#000"\/>/);
  assert.doesNotMatch(out, /<!--|currentColor/);
});

test('normalizeSvg adds width and height from the viewBox when absent', () => {
  const out = normalizeSvg('<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1h1v1z"/></svg>');
  assert.match(out, /^<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns=/);
});

test('svgrComponent reproduces PlusIcon.tsx byte for byte from the template', async () => {
  const out = await svgrComponent(fixture('ok-plus.svg'), 'PlusTestIcon', repo);
  assert.equal(out, read('src/icons/PlusIcon.tsx').replace(/PlusIcon/g, 'PlusTestIcon'));
});

test('storySource reproduces a story byte for byte', async () => {
  const out = await storySource('PlusTestIcon', repo);
  assert.equal(out, read('src/icons/PlusIcon.stories.ts').replace(/PlusIcon/g, 'PlusTestIcon'));
});
