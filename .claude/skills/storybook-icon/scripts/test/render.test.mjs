import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { tsxToSvg, svgToSvg, svgToSource, resolveIcon, buildSheet } from '../render.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, '..', '..', '..', '..', '..');
const skill = path.resolve(here, '..', '..');
const read = (rel) => fs.readFileSync(path.join(repo, rel), 'utf8');

test('tsxToSvg converts AddIcon to a plain SVG string', () => {
  const svg = tsxToSvg(read('src/icons/AddIcon.tsx'));
  assert.match(svg, /^<svg[^>]*viewBox="0 0 14 14"/);
  assert.match(svg, /^<svg[^>]*width="14" height="14"/);
  assert.match(svg, /fill="currentColor"/);
  assert.doesNotMatch(svg, /\{|forwardedRef|fillRule=|clipRule=/);
  assert.match(svg, /fill-rule="evenodd"/);
  assert.match(svg, /<\/svg>$/);
});

test('tsxToSvg handles StatusIcon numeric circle props', () => {
  const svg = tsxToSvg(read('src/icons/StatusIcon.tsx'));
  assert.match(svg, /<circle cx="7" cy="7" r="3" fill="currentColor"/);
});

test('tsxToSvg handles PopOutIcon clipPath and defs', () => {
  const svg = tsxToSvg(read('src/icons/PopOutIcon.tsx'));
  assert.match(svg, /clip-path="url\(#prefix__clip0_3002_502\)"/);
  assert.match(svg, /<clipPath id="prefix__clip0_3002_502">/);
  assert.doesNotMatch(svg, /clipPath=/);
});

test('tsxToSvg keeps a 14x15 viewBox as the component has it', () => {
  const svg = tsxToSvg(read('src/icons/LockIcon.tsx'));
  assert.match(svg, /viewBox="0 0 14 15"/);
  assert.match(svg, /width="14" height="14"/);
});

test('svgToSvg maps source fills to currentColor and drops comments', () => {
  const svg = svgToSvg(read('.claude/skills/storybook-icon/assets/template.svg'));
  assert.doesNotMatch(svg, /<!--/);
  assert.doesNotMatch(svg, /#000|black/);
  assert.equal(svg.match(/fill="currentColor"/g).length, 1);
  assert.match(svg, /^<svg[^>]*fill="none"/);
});

test('svgToSource round-trips the template to one #000 fill', () => {
  const t = read('.claude/skills/storybook-icon/assets/template.svg');
  const src = svgToSource(svgToSvg(t));
  assert.equal(src.match(/fill="#000"/g).length, 1);
  assert.match(src, /^<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http:\/\/www.w3.org\/2000\/svg">/);
  assert.doesNotMatch(src, /currentColor/);
});

test('svgToSource strips svgr id prefixes so a re-import does not double them', () => {
  const src = svgToSource(tsxToSvg(read('src/icons/PopOutIcon.tsx')));
  assert.match(src, /id="clip0_3002_502"/);
  assert.match(src, /url\(#clip0_3002_502\)/);
  assert.doesNotMatch(src, /prefix__/);
});

test('resolveIcon accepts a bare name, an Icon-suffixed name, a tsx path and an svg path', () => {
  for (const arg of ['Add', 'AddIcon', path.join(repo, 'src/icons/AddIcon.tsx')]) {
    const r = resolveIcon(arg, repo);
    assert.equal(r.name, 'AddIcon', arg);
    assert.match(r.svg, /^<svg/);
    assert.match(r.svg, /currentColor/);
  }
  const t = resolveIcon(path.join(skill, 'assets/template.svg'), repo);
  assert.equal(t.name, 'template');
  assert.match(t.svg, /currentColor/);
  assert.doesNotMatch(t.svg, /<!--/);
});

test('resolveIcon names the icon it cannot find', () => {
  assert.throws(() => resolveIcon('NoSuchThing', repo), /NoSuchThing/);
});

test('buildSheet puts the first icon first, labels rows, sizes cells and fills the grid', () => {
  const tpl = read('.claude/skills/storybook-icon/assets/sheet.html');
  const icons = [resolveIcon('Add', repo), resolveIcon('Close', repo)];
  const html = buildSheet(icons, [14, 28], 'dark', tpl);
  assert.ok(html.indexOf('<code>AddIcon</code>') < html.indexOf('<code>CloseIcon</code>'));
  assert.match(html, /class="theme-dark"/);
  assert.match(html, /width="28" height="28"/);
  assert.equal((html.match(/width="14" height="14"/g) || []).length, 2);
  assert.doesNotMatch(html, /\{\{/);
  assert.match(html, /class="grid"/);
});
