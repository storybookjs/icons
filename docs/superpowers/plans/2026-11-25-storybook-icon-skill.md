# storybook-icon Skill Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A repo-local Claude Code skill at `.claude/skills/storybook-icon/` that takes an agent from "we need an icon for X" to a confirmed meaning, a drawn 14-grid SVG, a looked-at render, and the five repo files written, with the remaining ambiguities and the Figma gap reported.

**Architecture:** Three reference files carry the judgement (meaning, style, families); two Node scripts carry the mechanics (`render.mjs` draws a contact sheet with playwright-core; `add.mjs` validates an SVG and runs the repo's own svgr config to write component, story, export, list entry and changeset); `SKILL.md` sequences them in six gated steps. Scripts export their pure functions and run `main()` only when invoked directly, so they are unit-testable with `node --test`.

**Tech Stack:** Node 22+ ESM, `node:test`, playwright-core (skill-local), the repo's `@svgr/core` 5.5 + `svgr.config.js` + `src/templates/`, `jiti` for loading `story.ts`.

**Spec:** `docs/superpowers/specs/2026-11-25-storybook-icon-skill-design.md`

## Global Constraints

- Skill root: `.claude/skills/storybook-icon/`. All paths below are relative to it unless they start with `src/`, `docs/` or `.changeset/`.
- New icons: `viewBox="0 0 14 14"`; paths only; `fill="#000"` in the SVG source; no `stroke*`, `g`, `defs`, `clipPath`, `mask`, `use`, `text`, `image`, `id`, `transform`.
- Component output must equal what `src/generate.ts` emits: same `svgr.config.js`, same `componentTemplate.js`, same `story.ts`. The config is CommonJS in an ESM package: load it through the repo's `jiti` (`createJiti(repoRoot + '/package.json').import(repoRoot + '/svgr.config.js', { default: true })`), never `require`/`createRequire`.
- SVG attribute order before svgr: root `width height viewBox fill xmlns`; path `[fill-rule clip-rule] d fill`. This is Figma's export order and the only way the component matches a regenerated icon byte for byte.
- Light theme `#fff` text `#2E3438`; dark theme `#171C23` text `#C9CDCF`.
- Sizes default `14,28,56,112`; grid view at 20×.
- Changeset: `.changeset/<slug-of-summary>.md` containing `"@storybook/icons": <bump>` (double quotes, as upstream's latest) and the summary; bump defaults `minor` for add, `patch` for replace.
- Base: branch `skill/storybook-icon` from `origin/main` (2.2.0, 260 icons). `src/index.ts` line 2 is `export type { Icon, IconProps } from './types';`; icon exports follow. `StatusNewIcon` is no longer exported or listed; `SparkleIcon`, `StatusAddIcon`, `StatusRemoveIcon`, `QRIcon` exist.
- Allowed SVG elements in source: `path`, `circle`, `rect`, `ellipse`, `polygon`, `line` (svgo keeps circles; the rest become paths). Every shape ends up `fill="#000"` before svgr.
- `--replace` rule: an edit may not introduce a rule break the existing icon did not already have (viewBox, clipPath/defs, stroke are inherited with a warning).
- Scripts are invoked in prose as `node .claude/skills/storybook-icon/scripts/<name>.mjs`, never by bare path.
- Skill frontmatter follows `dx-skills/chromatic-illustration/SKILL.md`: `name`, third-person `description` ending with when to use it, `argument-hint`.
- Prose rules for every reference file: sentence case, no em dashes, "Done when" at the end of each SKILL.md step.
- Commit per task on `skill/storybook-icon`; push nothing.

## Review Focus

1. An SVG whose root has `width="14" height="14"` and no `viewBox` (common Figma/Illustrator export). `--check` must fail with "viewBox must be 0 0 14 14", not pass or crash. Test in Task 4.
2. A TSX in `src/icons` that uses `<circle cx={7} …/>` (StatusIcon) or a `clipPath` with `prefix__` ids (PopOutIcon). `render.mjs` must render both, converting JSX numeric props and camelCase attributes. Test in Task 3.
3. `--group` naming a group that does not exist, or `--after` naming an icon that is not in that group. `add.mjs` must refuse with the list of valid groups / say the sibling is in another group, and write nothing. Test in Task 5.
4. Running `add.mjs` twice for the same name without `--replace`. Must refuse before touching any file; with `--replace` must touch only the TSX. Test in Task 5.
5. A `--name` passed as `FlakyTestIcon` or `flaky-test`. Component must be `FlakyTestIcon` either way (strip a trailing `Icon`, PascalCase through the repo's `toPascalCase` rules). Test in Task 5.
6. `--replace` on `LockIcon` (14×15) or `PopOutIcon` (clipPath): `--check --replace` passes with a warning per inherited exception; the same SVG without `--replace` fails. Test in Task 4.

---

### Task 1: Baseline the behaviour without the skill (RED)

**Files:**
- Create: `evals/evals.json` (scenarios, in the shape of `dx-skills/chromatic-video/evals/evals.json`)
- Create: `evals/baseline.md` (observed behaviour, verbatim quotes, no narrative)

- [ ] **Step 1: Write the scenarios**

`evals/evals.json` with `skill_name: "storybook-icon"` and three evals: (1) `flaky-test`: "Add an icon for a flaky test (a test that passes and fails without a code change) to this icon set, ready to ship."; (2) `status-skipped`: "We need a StatusSkipped icon to go with StatusPass/StatusFail/StatusWarn."; (3) `update-bell`: "Make the BellIcon's clapper a bit bigger, it disappears at 14px." Each with an `expected_output` line.

- [ ] **Step 2: Run scenario 1 twice without the skill**

Dispatch two fresh general-purpose subagents, `isolation: "worktree"`, prompt = scenario 1's text plus "Work in this repository. You cannot talk to the user; if you would ask something, write the question and your assumption, then continue." No mention of the skill.

- [ ] **Step 3: Record the baseline**

In `evals/baseline.md`, one table per run: asked about meaning before drawing (y/n, quote); looked at siblings (y/n); drawing method (stroke vs fill, viewBox); rendered and looked (y/n); files touched out of tsx, story, index, iconList, changeset; mentioned the Figma gap (y/n); shape chosen and the ambiguity it carries. Add a "patterns" list of the failures seen in both runs.

- [ ] **Step 4: Discard the worktrees' changes** (they are throwaway) and commit

```bash
git checkout -b skill/storybook-icon origin/main   # docs/ is untracked and carries over
git add docs/superpowers .claude/skills/storybook-icon/evals
git commit -m "skill(storybook-icon): design, plan, eval scenarios and baseline"
```

### Task 2: Skill scaffold and renderer dependency

**Files:**
- Create: `.gitignore` (`work/`, `scripts/node_modules/`)
- Create: `scripts/package.json` (`"type": "module"`, dependency `playwright-core` `^1.63.0`, `"private": true`)
- Create: `assets/template.svg`

**Interfaces:**
- Produces: `assets/template.svg`, a 14×14 SVG: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">`, XML comments with the drawing rules (whole and half pixels; 1px line = fill with `.5` arcs; evenodd for hollows; `fill="#000"` becomes `{color}`; keep this attribute order), one `<path d="M7 1a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 017 1z" fill="#000"/>` (the Plus glyph, as a worked example of a 1px line pair).

- [ ] **Step 1: Create the three files**
- [ ] **Step 2: Install the renderer**

Run: `npm i --prefix .claude/skills/storybook-icon/scripts playwright-core`
Expected: `scripts/node_modules/playwright-core` exists; `scripts/package-lock.json` written.

- [ ] **Step 3: Commit** (`.gitignore`, `package.json`, `package-lock.json`, `template.svg`)

### Task 3: `render.mjs`

**Files:**
- Create: `scripts/render.mjs`
- Create: `assets/sheet.html`
- Test: `scripts/test/render.test.mjs`

**Interfaces:**
- Produces (exported from `render.mjs`):
  - `tsxToSvg(tsxSource: string): string` — the `<svg>…</svg>` from a `src/icons/*.tsx`, with `width={size} height={size}` → `width="14" height="14"`, `fill={color}` → `fill="currentColor"`, `ref={forwardedRef}` and `{...props}` removed, JSX numeric props `cx={7}` → `cx="7"`, camelCase attributes (`fillRule`, `clipRule`, `clipPath`, `strokeWidth`…) → kebab-case.
  - `svgToSvg(svgSource: string): string` — an SVG file's text with every `fill="#000"`/`black` → `currentColor`, comments stripped.
  - `svgToSource(svgCurrentColor: string): string` — the inverse for `--export`: `currentColor` → `#000`, pretty root attributes.
  - `resolveIcon(arg: string, repoRoot: string): { name: string, svg: string }` — `arg` is an `.svg` path, a `.tsx` path, or a bare name (`AddIcon` or `Add`) found in `src/icons`.
  - `buildSheet(icons: {name, svg}[], sizes: number[], theme: 'light'|'dark', template: string): string` — fills `assets/sheet.html` placeholders `{{rows}}`, `{{theme}}`, `{{grid}}`.
  - CLI as in the spec; writes `sheet-light.png`, `sheet-dark.png`, `grid.png`, `sheet.html` to `--out` (default: directory of the first icon arg, or `work/<name>` for a bare name).

- [ ] **Step 1: Write failing tests** in `scripts/test/render.test.mjs` (node:test):

```js
test('tsxToSvg converts AddIcon', () => {
  const svg = tsxToSvg(read('src/icons/AddIcon.tsx'));
  assert.match(svg, /^<svg[^>]*viewBox="0 0 14 14"/);
  assert.match(svg, /fill="currentColor"/);
  assert.doesNotMatch(svg, /\{|forwardedRef|fillRule=/);
  assert.match(svg, /fill-rule="evenodd"/);
});
test('tsxToSvg handles StatusIcon circle props', () => {
  assert.match(tsxToSvg(read('src/icons/StatusIcon.tsx')), /<circle cx="7" cy="7" r="3" fill="currentColor"/);
});
test('tsxToSvg handles PopOutIcon clipPath', () => {
  const svg = tsxToSvg(read('src/icons/PopOutIcon.tsx'));
  assert.match(svg, /clip-path="url\(#prefix__clip0_3002_502\)"/);
  assert.match(svg, /<clipPath id="prefix__clip0_3002_502">/);
});
test('resolveIcon accepts bare name, Icon-suffixed name, tsx path, svg path', …);
test('svgToSource round-trips the template', () => {
  const t = read('.claude/skills/storybook-icon/assets/template.svg');
  assert.equal(svgToSource(svgToSvg(t)).match(/fill="#000"/g).length, 1);
});
test('buildSheet puts the first icon first and labels rows', …);
```

- [ ] **Step 2: Run** `node --test .claude/skills/storybook-icon/scripts/test/` → FAIL (module not found)
- [ ] **Step 3: Write `assets/sheet.html`**: a page with `body.theme-light`/`theme-dark` colours from Global Constraints, `.sheet` as a table: one row per icon, first cell the label (`<code>` name), one cell per size with the inline SVG at that size, a thin divider under the first row; `.grid` region: the first icon at 280×280 over a 14×14 grid of 1px lines (whole pixels dark, half pixels faint). Placeholders `{{theme}}`, `{{rows}}`, `{{grid}}`.
- [ ] **Step 4: Write `scripts/render.mjs`** with the exported functions above and `main()` guarded by `import.meta.url === pathToFileURL(process.argv[1]).href`. Repo root = three directories up from `scripts/`. Playwright: `createRequire` for `playwright-core`; Chrome candidates `CHROME_PATH`, `/usr/bin/google-chrome-stable`, `/usr/bin/google-chrome`, `/usr/bin/chromium`, `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`; screenshot `.sheet` per theme and `.grid` once (light), `deviceScaleFactor: 2`. Missing module → print the `npm i --prefix …` line, exit 1.
- [ ] **Step 5: Run tests** → PASS
- [ ] **Step 6: Integration**: `node .claude/skills/storybook-icon/scripts/render.mjs AddIcon --with CloseIcon,PassedIcon,FailedIcon --out /tmp/claude-1000/-home-steve-Development-icons/43367f71-09a3-4a74-89cf-7f1738b42d32/scratchpad/render-check` → prints three PNG paths; open each with Read; the ring glyphs line up in one row per icon, 14px cells are legible, grid shows AddIcon edges on whole/half pixels. Also `--export AddIcon --out …` writes `AddIcon.svg` with `fill="#000"`.
- [ ] **Step 7: Commit**

### Task 4: `add.mjs --check`

**Files:**
- Create: `scripts/add.mjs` (check half)
- Create: `scripts/test/fixtures/` — `ok-plus.svg` (template copy), `ok-circle.svg` (`<circle cx="7" cy="7" r="3" fill="#000"/>`), `bad-stroke.svg`, `bad-nobox.svg` (`width="14" height="14"`, no viewBox), `bad-15.svg` (`0 0 14 15`), `bad-group.svg` (`<g>`), `bad-fill.svg` (`fill="#FF4785"`), `warn-precision.svg` (`M7.12345 1`), `nofill.svg` (a path with no fill: zero errors, since normalisation adds it)
- Test: `scripts/test/add.test.mjs`

**Interfaces:**
- Produces: `checkSvg(svgSource: string, existingTsx?: string): { errors: string[], warnings: string[] }`; each error is one sentence that names the problem and the fix, e.g. `viewBox must be "0 0 14 14" (found none; add viewBox="0 0 14 14" to the root)`. When `existingTsx` is given, its viewBox, any `clipPath`/`defs`, and any stroke are allowed and each produces a warning ending `re-fit to 14x14 plain paths if this is a redraw`.
- CLI: `node scripts/add.mjs <file.svg> --check [--replace]` prints errors and warnings, exit 1 on any error; with `--replace` the existing TSX is read from `src/icons/<Name>Icon.tsx` (name from the file or `--name`).

- [ ] **Step 1: Write failing tests**: one `test` per fixture asserting the exact error substring (`viewBox`, `stroke`, `<g>`, `fill`, and `0 0 14 15`), the two ok fixtures and `nofill.svg` have zero errors, the precision fixture has zero errors and one warning containing `3 decimals`; `checkSvg(bad15, read('src/icons/LockIcon.tsx'))` has zero errors and one warning containing `14 15`; `checkSvg(withClipPath, read('src/icons/PopOutIcon.tsx'))` has zero errors; `checkSvg(withClipPath, read('src/icons/LockIcon.tsx'))` has one error.
- [ ] **Step 2: Run** → FAIL
- [ ] **Step 3: Implement `checkSvg`** with regex/string scanning (no XML dependency): root tag attributes (`width="14"`, `height="14"`, viewBox), forbidden element names, forbidden attributes (`stroke`, `stroke-*`, `id`, `transform`, `style`), allowed fills (`#000`, `#000000`, `black`, `currentColor`, absent; `none` on root only), decimals via `/\d\.\d{4,}/`; `existingTsx` allowances by scanning the TSX for `viewBox="…"`, `<clipPath`, `stroke`.
- [ ] **Step 4: Run** → PASS; run the CLI on `bad-stroke.svg` → exit 1 with the message; on `ok-plus.svg` → `ok` exit 0.
- [ ] **Step 5: Commit**

### Task 5: `add.mjs` write path

**Files:**
- Modify: `scripts/add.mjs`
- Test: `scripts/test/add.test.mjs` (extend)

**Interfaces:**
- Produces (exported):
  - `componentName(input: string): string` — `flaky-test`, `FlakyTest`, `FlakyTestIcon`, `flaky_test.svg` → `FlakyTestIcon`; reuses the regex steps of `src/utils/toPascalCase.ts` (copy the three replaces; do not import TS).
  - `insertExport(indexSource: string, name: string, after?: string): string` — adds `export { ${name} } from './icons/${name}';` after the `after` line, else after the last `export {` line (so the `export type` line near the top is never displaced); throws `already exported` if present; throws `after not found` if `after` missing.
  - `insertListEntry(listSource: string, name: string, group: string, after?: string): string` — adds `      '${name}',` inside `name: '${group}'`'s `icons: [` block after the sibling or before its `]`; throws with the valid group names if the group is missing; throws if `after` is not in that group; throws `already listed` if present.
  - `changesetMarkdown(summary: string, bump: 'minor'|'patch'): string` — `---\n"@storybook/icons": ${bump}\n---\n\n${summary}\n`; `changesetName(summary: string): string` — lower-case words joined by `-`, at most eight words, e.g. `add-flaky-test-icon`.
  - `normalizeSvg(svgSource: string): string` — strips XML comments, ensures the root has `width="14" height="14"` (taken from the viewBox when absent), reorders root attributes to `width height viewBox fill xmlns` and each shape's to `[fill-rule clip-rule] d fill`, sets `fill="#000"` on every shape whose fill is absent or `currentColor`, collapses whitespace between tags.
  - `svgrComponent(svgSource: string, name: string, repoRoot: string): Promise<string>` — `const req = createRequire(repoRoot + '/package.json')`; `const { createJiti } = req('jiti')`; `const jiti = createJiti(repoRoot + '/package.json')`; `const config = await jiti.import(repoRoot + '/svgr.config.js', { default: true })`; `req('@svgr/core').default(normalizeSvg(svg), config, { componentName: name })`.
  - `storySource(name: string, repoRoot: string): Promise<string>` — same `jiti`, `(await jiti.import(repoRoot + '/src/templates/story.ts')).story(name)`.
  - CLI as in the spec, including `--dry-run`, `--replace`, `--after`, `--changeset`, and the `pnpm install` message when `@svgr/core` is unresolvable.

- [ ] **Step 1: Write failing tests** for `componentName` (the five forms), `insertExport` (append after the last export when the source starts with the `export type` line, after a named sibling, duplicate, missing after), `insertListEntry` (end of group, after sibling, missing group lists `Images, Documents, …`, sibling in other group, duplicate), `changesetMarkdown` (frontmatter exact, both bumps), `changesetName('Add FlakyTest icon') === 'add-flakytest-icon'`, `normalizeSvg` on a fixture whose root is `<svg xmlns=… fill="none" viewBox=… width=… height=…>` and whose path has `fill` before `d` (both reordered, comment gone), `svgrComponent` on `ok-plus.svg` with name `PlusTestIcon` (`assert.equal` to `src/icons/PlusIcon.tsx` with `PlusIcon` → `PlusTestIcon`; this is byte-exact and fails without `normalizeSvg`), `storySource('PlusTestIcon')` equals `src/icons/PlusIcon.stories.ts` with the name swapped.
- [ ] **Step 2: Run** → FAIL
- [ ] **Step 3: Implement** the functions and `main()`: order of operations is validate → compute all new file contents and edits in memory → refuse on any conflict → then write. `--dry-run` prints the component, the story path, the two edited lines in context (±1 line), and the changeset.
- [ ] **Step 4: Run tests** → PASS
- [ ] **Step 5: Integration in a scratch worktree** (`git worktree add <scratch>/wt-add skill/storybook-icon`, then `pnpm install --offline` there): `node … add.mjs fixtures/ok-plus.svg --name PlusTest --group CRUD --after PlusIcon --changeset "Add PlusTest icon"` → `git status --short` shows exactly `src/icons/PlusTestIcon.tsx`, `src/icons/PlusTestIcon.stories.ts`, `src/index.ts`, `src/iconList.tsx`, `.changeset/add-plustest-icon.md` (containing `minor`); `pnpm type-check` passes there; second run → refused, no changes; `--replace --changeset "Redraw PlusTest"` → only the TSX and a `patch` changeset change. Remove the worktree.
- [ ] **Step 6: Commit**

### Task 6: `references/style.md`

**Files:**
- Create: `references/style.md`

- [ ] **Step 1: Measure before writing.** From the TSX: ring glyphs (`AddIcon`, `CloseIcon`, `PassedIcon`, `InfoIcon`) outer radius and ring width; Status glyph box (`StatusPassIcon`, `StatusFailIcon`, `StatusWarnIcon`, `StatusIcon`) and Status frame (`StatusAddIcon`, `StatusRemoveIcon`); the `.5` arc idiom from `PlusIcon`; evenodd outline from `CircleHollowIcon`; object margins from `TrashIcon`, `FolderIcon`, `BellIcon`. Record each number used in the file with the icon it came from.
- [ ] **Step 2: Write the file** with the sections in the spec, in order: the five senses; canvas and optical margins (table: family, box, exemplar); line; fill; geometry; naming and home (suffix table with pairs: `Star/StarHollow`, `Close/CloseAlt`, `Lightning/LightningOff`, `Contrast/ContrastIgnored`, `Link/LinkBroken`, `Chevron/ChevronSmall`, `Arrow/ArrowSolid`; the eleven groups one line each with three example members); code shape (annotated `AddIcon.tsx`, the story, index line, list line, changeset); review checklist (the nine items from the spec, numbered, each one sentence).
- [ ] **Step 3: Check** every number in the file against Step 1's notes; every icon named exists in `src/icons` (`for n in $(grep -oE '[A-Z][A-Za-z]+Icon' references/style.md | sort -u); do test -f src/icons/$n.tsx || echo MISSING $n; done` prints nothing).
- [ ] **Step 4: Commit**

### Task 7: `references/families.md`

**Files:**
- Create: `references/families.md`

- [ ] **Step 1: Measure.** For each family in the spec list, open two members and write down the shared geometry (ring: outer r 7 inner r 6; Status: glyph within ~x 4–10; chevron: 1px polyline, round caps, span; arrow: shaft y 7, head 4.5 long; Hollow: evenodd of the filled twin's outline; Off: slash from (1.146, 1.854) direction, 1px, with 1px gap cut; Ignored: badge circle r 3.5 at (10.5, 10.5) with minus; frames: 1px rounded rect inset). Numbers come from the paths, not from memory.
- [ ] **Step 2: Write the file**: one `##` per family; story shape line; shared geometry (two to four lines); members (names); "copy from" (one name); when not to use this family. Families: ring glyphs; bare glyphs; Status glyphs (`StatusPass`, `StatusFail`, `StatusWarn`, `Status`, `Sparkle`) and Status frames (`StatusAdd`, `StatusRemove`); Hollow and filled twins; Alt pairs; Off and Ignored negations; directional sets; frames and devices; documents and lists; people and faces; logos (traced from official marks; how to fit a mark: longest axis 12–14px, centred, single path, cite source).
- [ ] **Step 3: Check** every named icon exists (same loop as Task 6 Step 3).
- [ ] **Step 4: Commit**

### Task 8: `references/meaning.md`

**Files:**
- Create: `references/meaning.md`

- [ ] **Step 1: Write the three parts** from the spec: the semantic brief template (nine labelled lines, each with a one-line example filled in for `FlakyTestIcon`); the disambiguation checklist (eight headings from the spec, each a short paragraph plus examples that name icons in this set: `SearchIcon`/`ZoomIcon`, `PinIcon`/`PinAltIcon`, `ThumbsUpIcon`, `BackIcon`/`ProceedIcon`, `BoldIcon`/`ItalicIcon`, `SaveIcon`/`PhoneIcon`, `DeleteIcon` as the prohibition sign, `EyeIcon`/`EyeCloseIcon`); the confirmation (how to ask with AskUserQuestion: question text, recommended option first with "(Recommended)", each alternative with its trade-off as the description, "Describe it differently" last; how to ask in chat; what counts as approval).
- [ ] **Step 2: Check** named icons exist; the brief example reads as something a product person would answer in one minute.
- [ ] **Step 3: Commit**

### Task 9: `SKILL.md`

**Files:**
- Create: `SKILL.md`

- [ ] **Step 1: Write it** to the spec's outline: frontmatter; opening paragraph; the six steps with exact script invocations and "Done when" lines; the gate sentence in step 1 (`Nothing is drawn before the user has confirmed. This is the gate.`); step 6 with both Figma wordings (new icon dropped on regenerate; edited icon reverted on regenerate); the "Changing an icon" section (start from `--export`; no new rule breaks; `--check --replace`; re-fit only when the brief is a redraw) and the "Logos" section; a closing "What goes wrong" table with the baseline patterns from `evals/baseline.md` as rows (thought → what to do instead). Keep under 200 lines; detail lives in references.
- [ ] **Step 2: Walk the steps yourself** on scenario 2 (`StatusSkipped`) without asking the user: do every command and path in the file work as written? Fix any that do not. Do not keep the icon.
- [ ] **Step 3: Commit**

### Task 10: Test with the skill (GREEN) and refactor

**Files:**
- Modify: `SKILL.md`, references as needed
- Modify: `evals/baseline.md` → add a "with skill" section

- [ ] **Step 1: Gate run.** Two fresh subagents, `isolation: "worktree"`, scenario 1, told: "Read and follow `.claude/skills/storybook-icon/SKILL.md`. The user cannot answer; when the skill tells you to ask, write the full question and options, then stop." Expected: a brief with every line of the template, at least two alternatives, "also reads as" filled, a stop. Record verbatim any drawing before the stop.
- [ ] **Step 2: Build run.** Continue one of them with `SendMessage`: "Confirmed: your recommended option, name and group as proposed." Expected: exemplar named, render looked at (the agent says what it saw), `add.mjs` run, type-check passed, delivery with the Figma note and the SVG path.
- [ ] **Step 3: Refactor.** For each rationalisation or skipped step seen, add a row to SKILL.md's "What goes wrong" table or tighten the step's wording; re-run the gate run once. Record outcomes in `evals/baseline.md`.
- [ ] **Step 4: Commit**

### Task 11: README pointer and final check

**Files:**
- Modify: `README.md` (new section "Adding an icon with an agent", four lines: what the skill is, where, the one-line invocation, the Figma caveat)

- [ ] **Step 1: Write the section**
- [ ] **Step 2: Run** `node --test .claude/skills/storybook-icon/scripts/test/` → all pass; `pnpm type-check` → pass; `git status` clean apart from intended files; `.claude/skills/storybook-icon/work/` absent from `git status`.
- [ ] **Step 3: Commit**
