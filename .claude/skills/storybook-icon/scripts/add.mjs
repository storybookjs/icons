#!/usr/bin/env node
// Validate an icon SVG against the set's rules and wire it into the repo:
// component (through the repo's own svgr config), story, export, iconList
// entry and changeset, exactly as `pnpm generate-icons` would write them.
//
//   node add.mjs <file.svg> --check [--replace] [--name <Name>]
//   node add.mjs <file.svg> --group <Group> [--name <Name>] [--after <Name>Icon]
//                           [--changeset "<summary>"] [--bump minor|patch] [--dry-run]
//   node add.mjs <file.svg> --replace [--name <Name>] [--changeset "<summary>"]
//                           [--bump minor|patch] [--dry-run]
//
// Exit 1 on any error, and nothing is written unless every step succeeds.
// Errors say what is wrong and what to do instead.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
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

/** `flaky-test`, `FlakyTest`, `FlakyTestIcon`, `/x/flaky_test.svg` → `FlakyTestIcon` (the repo's toPascalCase rules). */
export function componentName(input) {
  let s = path.basename(String(input)).replace(/\.svg$/i, '').replace(/Icon$/, '');
  s = s
    .replace(/[-_]+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+(.)(\w*)/g, (all, first, rest) => first.toUpperCase() + rest.toLowerCase())
    .replace(/\w/, (c) => c.toUpperCase());
  return s + 'Icon';
}

/** Add `export { Name } from './icons/Name';` after `after`, else after the last export line. */
export function insertExport(indexSource, name, after) {
  if (indexSource.includes(`export { ${name} }`)) throw new Error(`${name} is already exported from src/index.ts`);
  const lines = indexSource.split('\n');
  let at;
  if (after) {
    at = lines.findIndex((l) => l.startsWith(`export { ${after} }`));
    if (at < 0) throw new Error(`after not found: ${after} is not exported from src/index.ts`);
  } else {
    at = lines.map((l) => l.startsWith('export {')).lastIndexOf(true);
  }
  lines.splice(at + 1, 0, `export { ${name} } from './icons/${name}';`);
  return lines.join('\n');
}

function listGroups(lines) {
  const groups = [];
  lines.forEach((l, i) => {
    const m = l.match(/^\s*name: '([^']+)',/);
    if (m) groups.push({ name: m[1], start: i });
  });
  return groups;
}

/** Add `'Name',` to the named group of src/iconList.tsx, after `after` or at the end of the group. */
export function insertListEntry(listSource, name, group, after) {
  if (listSource.includes(`'${name}',`)) throw new Error(`${name} is already listed in src/iconList.tsx`);
  const lines = listSource.split('\n');
  const groups = listGroups(lines);
  const g = groups.find((x) => x.name === group);
  if (!g) throw new Error(`no group ${group} in src/iconList.tsx; valid groups: ${groups.map((x) => x.name).join(', ')}`);
  const end = lines.findIndex((l, i) => i > g.start && /^\s*\]/.test(l));
  let at;
  if (after) {
    at = lines.findIndex((l, i) => i > g.start && i < end && l.trim() === `'${after}',`);
    if (at < 0) throw new Error(`${after} is not in group ${group} of src/iconList.tsx`);
  } else {
    at = end - 1;
  }
  lines.splice(at + 1, 0, `      '${name}',`);
  return lines.join('\n');
}

export function changesetMarkdown(summary, bump) {
  return `---\n"@storybook/icons": ${bump}\n---\n\n${summary}\n`;
}

export function changesetName(summary) {
  return summary.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().split(/\s+/).slice(0, 8).join('-');
}

const ROOT_ORDER = ['width', 'height', 'viewBox', 'fill', 'xmlns'];
const SHAPE_ORDER = ['fill-rule', 'clip-rule', 'd', 'fill'];
const parseAttrs = (attrs) => [...attrs.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]);
const orderAttrs = (pairs, order) => {
  const byName = new Map(pairs);
  const out = order.filter((k) => byName.has(k)).map((k) => `${k}="${byName.get(k)}"`);
  for (const [k, v] of pairs) if (!order.includes(k)) out.push(`${k}="${v}"`);
  return out.join(' ');
};

/** Comments gone, Figma attribute order, width/height present, every shape fill="#000". */
export function normalizeSvg(svgSource) {
  let s = svgSource.replace(/<!--[\s\S]*?-->/g, '').replace(/^\s*<\?xml[^>]*>\s*/, '');
  s = s.replace(/<svg\b([^>]*)>/, (all, attrs) => {
    const pairs = parseAttrs(attrs);
    const byName = new Map(pairs);
    const vb = (byName.get('viewBox') || '0 0 14 14').trim().split(/\s+/);
    if (!byName.has('width')) pairs.push(['width', vb[2]]);
    if (!byName.has('height')) pairs.push(['height', vb[3]]);
    return `<svg ${orderAttrs(pairs, ROOT_ORDER)}>`;
  });
  s = s.replace(/<(path|circle|rect|ellipse|polygon|line)\b([^>]*?)(\/?)>/g, (all, tag, attrs, close) => {
    let pairs = parseAttrs(attrs);
    const fill = new Map(pairs).get('fill');
    if (fill === undefined || fill === 'currentColor') {
      pairs = pairs.filter(([k]) => k !== 'fill');
      pairs.push(['fill', '#000']);
    }
    return `<${tag} ${orderAttrs(pairs, SHAPE_ORDER)}${close}>`;
  });
  return s.replace(/\s+/g, ' ').replace(/>\s+</g, '><').trim();
}

function repoTools(repo) {
  const req = createRequire(path.join(repo, 'package.json'));
  try {
    req.resolve('@svgr/core');
    req.resolve('jiti');
  } catch {
    throw new Error(`cannot resolve @svgr/core or jiti; run pnpm install in ${repo}`);
  }
  const { createJiti } = req('jiti');
  return { req, jiti: createJiti(path.join(repo, 'package.json')) };
}

/** The component source, produced by the repo's svgr config and template, as generate.ts would. */
export async function svgrComponent(svgSource, name, repo = repoRoot) {
  const { req, jiti } = repoTools(repo);
  const config = await jiti.import(path.join(repo, 'svgr.config.js'), { default: true });
  const svgr = req('@svgr/core').default;
  return svgr(normalizeSvg(svgSource), config, { componentName: name });
}

/** The story source from the repo's src/templates/story.ts. */
export async function storySource(name, repo = repoRoot) {
  const { jiti } = repoTools(repo);
  const mod = await jiti.import(path.join(repo, 'src', 'templates', 'story.ts'));
  return mod.story(name);
}

function usage(msg) {
  if (msg) console.error(msg);
  console.error('usage: node add.mjs <file.svg> --check [--replace] [--name <Name>]');
  console.error('       node add.mjs <file.svg> --group <Group> [--name <Name>] [--after <Name>Icon] [--changeset "<summary>"] [--bump minor|patch] [--dry-run]');
  console.error('       node add.mjs <file.svg> --replace [--name <Name>] [--changeset "<summary>"] [--bump minor|patch] [--dry-run]');
  process.exit(1);
}

const inContext = (source, needle) => {
  const lines = source.split('\n');
  const i = lines.findIndex((l) => l.includes(needle));
  return lines.slice(Math.max(0, i - 1), i + 2).map((l, j) => (j === (i === 0 ? 0 : 1) ? `+ ${l}` : `  ${l}`)).join('\n');
};

async function main(argv) {
  const args = [...argv];
  const opt = (name, def) => { const i = args.indexOf('--' + name); if (i < 0) return def; const v = args[i + 1]; args.splice(i, 2); return v; };
  const flag = (name) => { const i = args.indexOf('--' + name); if (i < 0) return false; args.splice(i, 1); return true; };
  const check = flag('check');
  const replace = flag('replace');
  const dryRun = flag('dry-run');
  const nameOpt = opt('name');
  const group = opt('group');
  const after = opt('after');
  const summary = opt('changeset');
  const bumpOpt = opt('bump');
  const file = args.find((a) => !a.startsWith('--'));
  if (!file) usage();
  if (args.some((a) => a.startsWith('--'))) usage(`unknown option ${args.find((a) => a.startsWith('--'))}`);
  if (!fs.existsSync(file)) usage(`no such file: ${file}`);
  if (bumpOpt && !['minor', 'patch'].includes(bumpOpt)) usage(`--bump must be minor or patch (got ${bumpOpt})`);
  if (replace && (group || after)) usage('--group and --after are for a new icon; --replace keeps the existing export and list entry');

  const svg = fs.readFileSync(file, 'utf8');
  const name = componentName(nameOpt || file);
  const tsxPath = path.join(repoRoot, 'src', 'icons', `${name}.tsx`);
  const tsxRel = path.relative(repoRoot, tsxPath);
  let existing;
  if (replace) {
    if (!fs.existsSync(tsxPath)) usage(`--replace: no existing component at ${tsxRel}`);
    existing = fs.readFileSync(tsxPath, 'utf8');
  } else if (fs.existsSync(tsxPath)) {
    usage(`${tsxRel} already exists; pass --replace to redraw it, or --name for a different icon`);
  }

  const { errors, warnings } = checkSvg(svg, existing);
  for (const w of warnings) console.warn(`warning: ${w}`);
  for (const e of errors) console.error(`error: ${e}`);
  if (errors.length) process.exit(1);
  if (check) {
    console.log(`ok: ${path.basename(file)}${warnings.length ? ` (${warnings.length} warning${warnings.length > 1 ? 's' : ''})` : ''}`);
    return;
  }

  const indexPath = path.join(repoRoot, 'src', 'index.ts');
  const listPath = path.join(repoRoot, 'src', 'iconList.tsx');
  if (!replace && !group) {
    const groups = listGroups(fs.readFileSync(listPath, 'utf8').split('\n')).map((g) => g.name);
    usage(`--group is required for a new icon; one of: ${groups.join(', ')}`);
  }

  // Compute everything first; write nothing until every step has succeeded.
  const writes = [];
  const edits = [];
  const component = await svgrComponent(svg, name, repoRoot);
  writes.push([tsxPath, component]);
  if (!replace) {
    writes.push([path.join(repoRoot, 'src', 'icons', `${name}.stories.ts`), await storySource(name, repoRoot)]);
    edits.push([indexPath, insertExport(fs.readFileSync(indexPath, 'utf8'), name, after), `export { ${name} }`]);
    edits.push([listPath, insertListEntry(fs.readFileSync(listPath, 'utf8'), name, group, after), `'${name}',`]);
  }
  if (summary) {
    const bump = bumpOpt || (replace ? 'patch' : 'minor');
    const csPath = path.join(repoRoot, '.changeset', `${changesetName(summary)}.md`);
    if (fs.existsSync(csPath)) usage(`${path.relative(repoRoot, csPath)} already exists; change the summary or remove it`);
    writes.push([csPath, changesetMarkdown(summary, bump)]);
  }

  if (dryRun) {
    console.log(`--- ${tsxRel} ---\n${component}`);
    for (const [p, content] of writes.slice(1)) console.log(`--- ${path.relative(repoRoot, p)} ---\n${content}`);
    for (const [p, content, needle] of edits) console.log(`--- ${path.relative(repoRoot, p)} ---\n${inContext(content, needle)}`);
    console.log('(dry run: nothing written)');
    return;
  }
  for (const [p, content] of writes) {
    fs.writeFileSync(p, content);
    console.log(`wrote ${path.relative(repoRoot, p)}`);
  }
  for (const [p, content] of edits) {
    fs.writeFileSync(p, content);
    console.log(`edited ${path.relative(repoRoot, p)}`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main(process.argv.slice(2)).catch((e) => { console.error(e.message); process.exit(1); });
}
