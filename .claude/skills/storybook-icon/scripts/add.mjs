#!/usr/bin/env node
// Validate an icon SVG against the set's rules and wire it into the repo.
//
//   node add.mjs <file.svg> --check [--replace] [--name <Name>]
//
// Exit 1 on any error. Errors say what is wrong and what to do instead.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url)); // <skill>/scripts
const skillRoot = path.resolve(here, '..');
const repoRoot = path.resolve(skillRoot, '..', '..', '..');

const ALLOWED_ELEMENTS = new Set(['svg', 'path', 'circle', 'rect', 'ellipse', 'polygon', 'line']);
const CLIP_ELEMENTS = new Set(['g', 'defs', 'clipPath']);
const OK_FILLS = new Set(['#000', '#000000', 'black', 'currentColor']);
const REFIT = 're-fit to 14x14 plain paths if this is a redraw';

/**
 * Check an SVG source against the rules for a new icon. With `existingTsx`
 * (the current component, for --replace) the icon may keep what it already
 * has: its viewBox, a clipPath, a stroke. Each inherited exception is a
 * warning; anything it did not have is still an error.
 */
export function checkSvg(svgSource, existingTsx) {
  const errors = [];
  const warnings = [];
  const body = svgSource.replace(/<!--[\s\S]*?-->/g, '');
  const allow = existingTsx
    ? {
        viewBox: (existingTsx.match(/viewBox="([^"]+)"/) || [])[1],
        clip: /<clipPath/.test(existingTsx),
        stroke: /\sstroke[A-Za-z]*=/.test(existingTsx),
      }
    : {};

  const root = body.match(/<svg\b([^>]*)>/);
  if (!root) return { errors: ['no <svg> root element found'], warnings };
  const rootAttrs = Object.fromEntries([...root[1].matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));

  const vb = rootAttrs.viewBox;
  if (vb !== '0 0 14 14') {
    if (vb && allow.viewBox === vb) warnings.push(`keeps viewBox "${vb}" from the existing icon; ${REFIT}`);
    else errors.push(`viewBox must be "0 0 14 14" (found ${vb ? `"${vb}"` : 'none'}; set viewBox="0 0 14 14" on the root and draw inside it)`);
  }
  if (rootAttrs.width !== '14' || rootAttrs.height !== '14') {
    errors.push(`root must have width="14" height="14" (found width=${rootAttrs.width ?? 'none'} height=${rootAttrs.height ?? 'none'}); svgr needs them to emit width={size} height={size} where the set has them`);
  }
  if (rootAttrs.fill !== 'none') {
    errors.push(`root must have fill="none" (found ${rootAttrs.fill ? `fill="${rootAttrs.fill}"` : 'none'}); colour goes on each shape as fill="#000"`);
  }

  const tags = [...body.matchAll(/<([A-Za-z][\w:-]*)\b/g)].map((m) => m[1]);
  const hasClip = tags.includes('clipPath');
  if (hasClip) {
    const msg = 'has a clipPath (with its defs, g and id attributes)';
    if (allow.clip) warnings.push(`${msg} as the existing icon does; ${REFIT}`);
    else errors.push(`${msg}; draw the shape without clipping, clipPath, defs, g and id are not allowed in a new icon`);
  }
  const seen = new Set();
  for (const t of tags) {
    if (ALLOWED_ELEMENTS.has(t)) continue;
    if (hasClip && CLIP_ELEMENTS.has(t)) continue;
    if (seen.has(t)) continue;
    seen.add(t);
    errors.push(`<${t}> is not allowed (found <${t}>); use path, circle, rect, ellipse, polygon or line, with no groups, text, images or symbols`);
  }

  const strokes = [...new Set([...body.matchAll(/\s(stroke(?:-[a-z]+)?)="/g)].map((m) => m[1]))];
  if (strokes.length) {
    const msg = `uses ${strokes.join(', ')}`;
    if (allow.stroke) warnings.push(`${msg} as the existing icon does; ${REFIT}`);
    else errors.push(`${msg}; draw every line as a filled shape 1px wide with round caps (the .5 arcs), the set has no strokes`);
  }
  for (const attr of ['transform', 'style']) {
    if (new RegExp(`\\s${attr}="`).test(body)) errors.push(`${attr} attribute is not allowed; bake it into the coordinates`);
  }
  if (!hasClip && /\sid="/.test(body)) errors.push('id attributes are not allowed; nothing in the set references ids');

  const outsideClip = body.replace(root[0], '').replace(/<clipPath[\s\S]*?<\/clipPath>/g, '');
  const fills = [...new Set([...outsideClip.matchAll(/\sfill="([^"]*)"/g)].map((m) => m[1]))];
  for (const f of fills) {
    if (!OK_FILLS.has(f)) errors.push(`fill must be #000 (found fill="${f}"); the component maps #000 to the color prop, any other colour would be baked in`);
  }

  const long = (body.match(/\d\.\d{4,}/g) || []).length;
  if (long) warnings.push(`${long} coordinate${long > 1 ? 's have' : ' has'} more than 3 decimals; svgo rounds to 3, so put edges on whole or half pixels`);

  return { errors, warnings };
}

function usage(msg) {
  if (msg) console.error(msg);
  console.error('usage: node add.mjs <file.svg> --check [--replace] [--name <Name>]');
  process.exit(1);
}

async function main(argv) {
  const args = [...argv];
  const opt = (name, def) => { const i = args.indexOf('--' + name); if (i < 0) return def; const v = args[i + 1]; args.splice(i, 2); return v; };
  const flag = (name) => { const i = args.indexOf('--' + name); if (i < 0) return false; args.splice(i, 1); return true; };
  const check = flag('check');
  const replace = flag('replace');
  const nameOpt = opt('name');
  const file = args.find((a) => !a.startsWith('--'));
  if (!file) usage();
  if (args.some((a) => a.startsWith('--'))) usage(`unknown option ${args.find((a) => a.startsWith('--'))}`);
  if (!fs.existsSync(file)) usage(`no such file: ${file}`);
  const svg = fs.readFileSync(file, 'utf8');

  let existing;
  if (replace) {
    const base = nameOpt || path.basename(file, '.svg');
    const name = base.endsWith('Icon') ? base : base + 'Icon';
    const tsx = path.join(repoRoot, 'src', 'icons', name + '.tsx');
    if (!fs.existsSync(tsx)) usage(`--replace: no existing component at ${tsx}`);
    existing = fs.readFileSync(tsx, 'utf8');
  }

  const { errors, warnings } = checkSvg(svg, existing);
  for (const w of warnings) console.warn(`warning: ${w}`);
  for (const e of errors) console.error(`error: ${e}`);
  if (errors.length) process.exit(1);
  if (check) {
    console.log(`ok: ${path.basename(file)}${warnings.length ? ` (${warnings.length} warning${warnings.length > 1 ? 's' : ''})` : ''}`);
    return;
  }
  console.error('writing is not implemented yet; use --check');
  process.exit(2);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main(process.argv.slice(2)).catch((e) => { console.error(e.message); process.exit(1); });
}
