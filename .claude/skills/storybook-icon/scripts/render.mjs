#!/usr/bin/env node
// Render icons from @storybook/icons to a contact sheet (PNG, light and dark)
// and a 20x grid view, so the agent can look at an icon beside its siblings.
//
//   node render.mjs <icon>... [--with Name,Name] [--out dir] [--sizes 14,28,56,112]
//                              [--themes light,dark] [--no-grid]
//   node render.mjs --export <Name>Icon [--out dir]
//
// <icon> is a path to an .svg, a path to a src/icons/*.tsx, or a bare icon
// name (Add or AddIcon). The first icon is the one under review; --with adds
// siblings. Default --out: the .svg's folder, else <skill>/work/<FirstName>/.
// --export writes the current component back out as an SVG source file.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url)); // <skill>/scripts
const skillRoot = path.resolve(here, '..');
const repoRoot = path.resolve(skillRoot, '..', '..', '..');

const KEEP_CAMEL = new Set(['viewBox', 'preserveAspectRatio']);
const ROOT_ORDER = ['width', 'height', 'viewBox', 'fill', 'xmlns'];

const tidy = (s) => s.replace(/\s+/g, ' ').replace(/>\s+</g, '><').replace(/\s*\/>/g, '/>').trim();

/** The <svg>…</svg> of a src/icons/*.tsx as a plain SVG string at 14px, currentColor. */
export function tsxToSvg(tsx) {
  const m = tsx.match(/<svg[\s\S]*?<\/svg>/);
  if (!m) throw new Error('tsxToSvg: no <svg> element found');
  let s = m[0];
  s = s.replace(/\s+ref=\{forwardedRef\}/, '').replace(/\s+\{\.\.\.props\}/, '');
  s = s.replace(/width=\{size\}/, 'width="14"').replace(/height=\{size\}/, 'height="14"');
  s = s.replace(/=\{color\}/g, '="currentColor"');
  s = s.replace(/=\{([^}]+)\}/g, '="$1"');
  s = s.replace(/\s([a-z]+)([A-Z][a-zA-Z]*)=/g, (all, head, tail) => {
    const name = head + tail;
    if (KEEP_CAMEL.has(name)) return all;
    return ' ' + name.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase()) + '=';
  });
  return tidy(s);
}

/** An SVG source file as the sheet wants it: comments gone, #000 fills as currentColor. */
export function svgToSvg(svgText) {
  let s = svgText.replace(/<!--[\s\S]*?-->/g, '');
  s = s.replace(/fill="(#000000|#000|black)"/gi, 'fill="currentColor"');
  return tidy(s);
}

function orderRootAttrs(attrs) {
  const pairs = [...attrs.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]);
  const byName = new Map(pairs);
  const out = [];
  for (const k of ROOT_ORDER) if (byName.has(k)) out.push(`${k}="${byName.get(k)}"`);
  for (const [k, v] of pairs) if (!ROOT_ORDER.includes(k)) out.push(`${k}="${v}"`);
  return out.join(' ');
}

/** The inverse of svgToSvg/tsxToSvg: an SVG source file (fill="#000", Figma attribute order). */
export function svgToSource(svg) {
  let s = svg.replace(/fill="currentColor"/g, 'fill="#000"');
  s = s.replace(/prefix__/g, '');
  s = s.replace(/^<svg\b([^>]*)>/, (all, attrs) => `<svg ${orderRootAttrs(attrs)}>`);
  return s.replace(/></g, '>\n<') + '\n';
}

/** Resolve an argument to { name, svg, source }. */
export function resolveIcon(arg, repo = repoRoot) {
  if (arg.endsWith('.svg')) {
    const file = path.resolve(arg);
    if (!fs.existsSync(file)) throw new Error(`no such file: ${arg}`);
    return { name: path.basename(file, '.svg'), svg: svgToSvg(fs.readFileSync(file, 'utf8')), source: file };
  }
  let file;
  if (arg.endsWith('.tsx')) file = path.resolve(arg);
  else file = path.join(repo, 'src', 'icons', (arg.endsWith('Icon') ? arg : arg + 'Icon') + '.tsx');
  if (!fs.existsSync(file)) throw new Error(`no icon ${arg}: expected ${file}`);
  return { name: path.basename(file, '.tsx'), svg: tsxToSvg(fs.readFileSync(file, 'utf8')), source: file };
}

const sized = (svg, size) =>
  svg.replace(/^<svg([^>]*)>/, (all, attrs) =>
    '<svg' + attrs.replace(/\bwidth="[^"]*"/, `width="${size}"`).replace(/\bheight="[^"]*"/, `height="${size}"`) + '>');

/** Fill assets/sheet.html for one theme. First icon first; the grid shows the first icon at 20x. */
export function buildSheet(icons, sizes, theme, template) {
  const rows = icons
    .map((ic, i) => {
      const cells = sizes
        .map((s) => `<td class="cell"><div class="box">${sized(ic.svg, s)}</div><div class="size">${s}</div></td>`)
        .join('');
      return `<tr class="${i === 0 ? 'first' : ''}"><th><code>${ic.name}</code></th>${cells}</tr>`;
    })
    .join('\n');
  const grid = sized(icons[0].svg, 280);
  return template.split('{{theme}}').join(theme).split('{{rows}}').join(rows).split('{{grid}}').join(grid);
}

function usage(msg) {
  if (msg) console.error(msg);
  console.error('usage: node render.mjs <icon>... [--with Name,Name] [--out dir] [--sizes 14,28,56,112] [--themes light,dark] [--no-grid]');
  console.error('       node render.mjs --export <Name>Icon [--out dir]');
  process.exit(1);
}

async function main(argv) {
  const args = [...argv];
  const opt = (name, def) => { const i = args.indexOf('--' + name); if (i < 0) return def; const v = args[i + 1]; args.splice(i, 2); return v; };
  const flag = (name) => { const i = args.indexOf('--' + name); if (i < 0) return false; args.splice(i, 1); return true; };
  const exportName = opt('export');
  const out = opt('out');
  const withList = opt('with', '');
  const sizes = opt('sizes', '14,28,56,112').split(',').map(Number);
  const themes = opt('themes', 'light,dark').split(',').filter(Boolean);
  const noGrid = flag('no-grid');
  const positional = args.filter((a) => !a.startsWith('--'));
  if (args.some((a) => a.startsWith('--'))) usage(`unknown option ${args.find((a) => a.startsWith('--'))}`);

  if (exportName) {
    const icon = resolveIcon(exportName, repoRoot);
    const dir = out ? path.resolve(out) : path.join(skillRoot, 'work', icon.name);
    fs.mkdirSync(dir, { recursive: true });
    const dest = path.join(dir, icon.name + '.svg');
    fs.writeFileSync(dest, svgToSource(icon.svg));
    console.log(dest);
    return;
  }
  if (!positional.length) usage();

  const icons = [...positional, ...withList.split(',').filter(Boolean)].map((a) => resolveIcon(a, repoRoot));
  const outDir = out
    ? path.resolve(out)
    : positional[0].endsWith('.svg') ? path.dirname(path.resolve(positional[0])) : path.join(skillRoot, 'work', icons[0].name);
  fs.mkdirSync(outDir, { recursive: true });
  const template = fs.readFileSync(path.join(skillRoot, 'assets', 'sheet.html'), 'utf8');
  fs.writeFileSync(path.join(outDir, 'sheet.html'), buildSheet(icons, sizes, themes[0] || 'light', template));

  const require = createRequire(import.meta.url);
  let chromium;
  try { ({ chromium } = require('playwright-core')); }
  catch { console.error(`playwright-core missing. Run: npm i --prefix ${here} playwright-core`); process.exit(1); }
  const executablePath = [
    process.env.CHROME_PATH,
    '/usr/bin/google-chrome-stable', '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].filter(Boolean).find((p) => fs.existsSync(p));
  let browser;
  try { browser = await chromium.launch(executablePath ? { executablePath } : {}); }
  catch (e) { console.error(`No browser found. Install Google Chrome, set CHROME_PATH, or run: npx playwright install chromium\n${e.message.split('\n')[0]}`); process.exit(1); }
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 2 });
  const shot = async (selector, dest) => {
    const el = page.locator(selector);
    await el.screenshot({ path: dest });
    const box = await el.boundingBox();
    console.log(`${dest}  ${Math.round(box.width * 2)}x${Math.round(box.height * 2)}`);
  };
  for (const [i, theme] of themes.entries()) {
    await page.setContent(buildSheet(icons, sizes, theme, template));
    await shot('.sheet', path.join(outDir, `sheet-${theme}.png`));
    if (i === 0 && !noGrid) await shot('.grid', path.join(outDir, 'grid.png'));
  }
  await browser.close();
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main(process.argv.slice(2)).catch((e) => { console.error(e.message); process.exit(1); });
}
