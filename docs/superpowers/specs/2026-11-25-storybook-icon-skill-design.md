# storybook-icon skill: design

Date: 2026-11-25. Status: approved in conversation; builder check done and
folded in (the two open questions were settled as calls: the `--replace`
rule and the changeset bump levels; see those sections).

## Intent

A repo-local Claude Code skill that lets an agent add or change an icon in
`@storybook/icons` the way the `chromatic-illustration` skill in
`dx-skills` makes diagrams: a numbered workflow with a "done when" line per
step, a style reference, worked exemplars, a render script so the agent looks
at the result before handing it over, and a delivery step that says what was
made and what remains uncertain.

Why: icons now get added to this set by hand with an agent (Sweep, Bug,
Editor, Checklist, Files, PopOut, StatusNew all came in as hand-edited TSX).
Those additions should come out looking like the set, mean what their name
says to the people who will see them, and land in every file that has to
change. The second point is the one an agent gets wrong silently: it draws a
shape that means one thing to its author and something else to a reader from
another culture, generation or part of the product. So the skill makes the
agent write down what the icon means and where it will be used, name the
other things the chosen shape could mean, and get the user's confirmation
before drawing.

## Goals

- An agent following the skill produces an icon that matches the set in all
  five senses listed under "Matching" below, and can show a render proving it.
- Before drawing, the agent presents a semantic brief and the user confirms
  the meaning, the context of use and the shape. Ambiguities are spelled out,
  not discovered after the fact.
- Adding an icon touches every file the repo needs (component, story,
  `src/index.ts`, `src/iconList.tsx`, a changeset) through one script, so
  nothing is forgotten.
- Changing an existing icon and adding a brand logo go through the same
  workflow with the differences called out.
- The skill is self-contained in the repo and mirrors the sibling skill's
  layout, so someone who knows one knows the other.

## Non-goals

- Drawing in Figma, or syncing hand-drawn icons back into the Figma file. The
  skill hands over an SVG ready to paste and says what happens if nobody does.
- A general icon-design tutorial. Only what this set needs.
- Multi-colour, animated, or sized variants. The set is one colour, 14×14.
- Replacing `pnpm generate-icons`. Figma stays the source of truth for the
  bulk of the set.

## Anti-goals (failure even if it "works")

- The agent draws first and asks afterwards, or asks a yes/no question that
  hides the alternatives and the ambiguity.
- An icon that is technically valid but visibly from another set: stroked
  paths, a different line weight, square caps, a different ring radius,
  wrong optical size.
- A new icon that duplicates an existing meaning or borrows a shape the set
  already uses for something else (a bare check already means Check, a
  ring with a check means Passed, a small check means StatusPass).
- A delivery that does not mention the Figma gap, so the icon vanishes from
  `index.ts` and `iconList.tsx` on the next regenerate and nobody knows why.

## Constraints (from the repo)

- Icons are React components in `src/icons/<Name>Icon.tsx`, produced by svgr
  5.5 with `svgr.config.js` and `src/templates/componentTemplate.js`:
  `viewBox="0 0 14 14"`, root `fill="none"`, every path `fill={color}`,
  `width={size} height={size}`, forwardRef, `/* @__PURE__ */`. svgr replaces
  `#000` with `{color}` and runs svgo and prettier. 18 icons are 14×15 from
  Figma export drift; new icons are 14×14.
- Drawing language: 1px strokes expressed as fills with round caps (`.5`
  radius arcs), hollow shapes via `fillRule="evenodd"`, geometry on whole
  and half pixels, three-decimal coordinates. No `stroke` attributes. 14
  icons carry a `<defs><clipPath>`, 18 are 14×15, one (`DirectionIcon`) has a
  stroke; new icons have none of these. svgo (v1, via `@svgr/plugin-svgo`
  5.5) turns `rect`, `line` and `polygon` into paths but keeps `circle` and
  `ellipse` (`StatusIcon` is a `<circle>`), so paths plus the odd circle is
  the honest description of the output.
- svgr maps `fill="#000"`, `#000000` and `black` to `{color}`. A shape with
  no `fill` stays fill-less and is invisible under the root `fill="none"`;
  `fill="currentColor"` stays literal and ignores the `color` prop. Hand
  drawn SVGs must therefore have `fill="#000"` on every shape, or be
  normalised to it.
- Each icon has `src/icons/<Name>Icon.stories.ts` from `src/templates/story.ts`
  (`Default` story, `size: 100`). Storybook has light `#fff` and dark
  `#171C23` backgrounds.
- `src/index.ts` exports every icon; `src/iconList.tsx` places every icon in
  one of eleven groups: Images, Documents, Editing, Git, OS, Logos, Devices,
  CRUD, Communicate, Wayfinding, People.
- Naming: PascalCase + `Icon`. Suffix conventions in use: `Hollow` (outline
  of a filled sibling), `Alt` (second rendering of the same concept), `Off`
  (slash), `Ignored` (small badge bottom right), `Broken`, `Small`, `Solid`,
  `Add`, `Toggle`, direction words `Up Down Left Right TopLeft ...`.
- Releases use changesets. The two most recent (2.1.0, 2.2.0, both on
  `origin/main`) use `"@storybook/icons": minor` for new icons and new
  exports, with a descriptive filename (`add-qr-sparkle-status-icons.md`);
  the older 2.0.2 used `patch` and a random name. Follow the recent ones:
  `minor` for a new icon, `patch` for a redraw, filename from the summary.
- The skill is built against `origin/main` (2.2.0): 260 icons; `src/index.ts`
  line 2 is `export type { Icon, IconProps } from './types';` and the icon
  exports follow; `StatusNewIcon` is gone from `index.ts` and `iconList.tsx`
  (its file remains) and `SparkleIcon`, `StatusAddIcon`, `StatusRemoveIcon`,
  `QRIcon` are new. Local `main` is behind; the work branch starts from
  `origin/main`.
- `pnpm generate-icons` rewrites `index.ts` and `iconList.tsx` from the
  Figma file alone. Hand-added icons drop out of both on the next run.
- Tooling on hand: Node 22+ (`.nvmrc` v22.12.0, CI Node 24), pnpm 9,
  `google-chrome-stable` at `/usr/bin`. `node_modules` is not installed in a
  fresh checkout; `@svgr/core`, `jiti`, `prettier`, `svgo` arrive with
  `pnpm install`.
- `package.json` has `"type": "module"` while `svgr.config.js` and
  `componentTemplate.js` are CommonJS. Node refuses to `require()` them and
  `createRequire` fails too; `pnpm generate-icons` only works because it runs
  `generate.ts` under `jiti`. Any script that wants the repo's svgr config
  loads it through the repo's `jiti` (`createJiti(...).import(path, { default: true })`).
  Verified: that route plus `@svgr/core` reproduces `PlusIcon.tsx` and
  `PlusIcon.stories.ts` from a hand-written SVG, up to attribute order.
- Figma's exported SVGs order root attributes `width height viewBox fill
  xmlns` and path attributes `[fill-rule clip-rule] d fill`. svgr keeps
  source order, so a hand-written SVG must use the same order (or be
  normalised to it) for its component to match a regenerated one byte for
  byte.
- Claude Code discovers project skills in `.claude/skills/<name>/SKILL.md`.
  Sibling repos on this machine use that layout.

## Approaches considered

1. **Hand-drawn SVG, rendered to a contact sheet, wired in through the
   repo's own svgr config.** (Chosen.) The agent draws on the 14 grid, a
   script renders the new icon beside its siblings at several sizes on light
   and dark, and a second script runs svgr exactly as `generate.ts` does and
   edits the four repo files. Mirrors the sibling skill's HTML-to-PNG loop
   and reuses the repo's pipeline so output is byte-for-byte the shape
   `generate.ts` would emit.
2. **Figma first.** Drive the Figma MCP to draw the icon in the Icons canvas,
   then run `pnpm generate-icons`. Keeps Figma as source of truth, but
   drawing 14px paths through the MCP is impractical, needs a token and
   file access the agent may not have, and regenerating re-exports all 256
   icons for one addition.
3. **Storybook as the review surface.** Start Storybook and screenshot the
   story through the browser pane instead of a render script. Ties review to
   a dev server and to one harness; cannot show the icon at 14px beside
   chosen siblings in one image.

## Matching: the five senses

The style reference opens with these, in this order, because the agent
tends to check only the third.

1. **Meaning.** The icon says what its name says, to the people who will see
   it, in the place it will sit. It does not double an existing icon's
   meaning and does not borrow a shape the set already uses for another
   meaning. Confirmed with the user before drawing.
2. **Family.** It is built like its siblings: same ring radius and thickness
   for ring glyphs, same glyph box for Status glyphs, same slash angle and
   gap for Off variants, same badge for Ignored variants, same head and
   shaft for arrows, same construction for Hollow twins.
3. **Form.** 14×14, 1px lines as fills with round caps, hollows via evenodd,
   geometry on whole and half pixels, optical margins like its neighbours,
   one colour, no strokes, no groups, no ids.
4. **Name and home.** PascalCase + `Icon`, the set's suffixes, the right
   `iconList` group next to the icons it will be used with.
5. **Code.** The exact component svgr emits with the repo config, a story,
   an export, a list entry, a changeset.

## The skill

### Layout

```
.claude/skills/storybook-icon/
  SKILL.md
  .gitignore              work/  scripts/node_modules/
  references/
    meaning.md            semantic brief, disambiguation checklist, confirmation template
    style.md              the five senses; grid, line, fill rules; naming; code shape; review checklist
    families.md           each construction family with named exemplars from src/icons
  scripts/
    package.json          playwright-core (installed on first use)
    render.mjs            contact sheet + grid view, PNG, light and dark
    add.mjs               svg → tsx + story + index + iconList + changeset, via the repo's svgr config
  assets/
    template.svg          14×14 starting file with grid notes in comments
    sheet.html            the page render.mjs fills and screenshots
  work/                   (ignored) one folder per icon: the SVG source and renders
```

### SKILL.md

Frontmatter in the sibling's form: `name: storybook-icon`, a `description`
that says what it makes and when to use it in the third person (asks for a
new icon, an icon variant, a logo, a change to an icon in this set, "in the
Storybook icon style"), `argument-hint: "[what the icon should mean, and where it will be used]"`.

Opening paragraph: what an icon is here (a 14-grid SVG of filled paths,
turned into a component by the repo's svgr config) and the pointer to read
`references/style.md` and `references/meaning.md` before step 1.

Steps, each ending in a "Done when" line:

1. **Brief the meaning and confirm it.** List the set's neighbours by name
   (grep `src/icons`, read `iconList.tsx` for the target group) and render
   the closest three to six with `render.mjs` so you have seen them. Write
   the semantic brief in chat using the template in `meaning.md`. Then ask
   the user to confirm, with the question tool when the harness has one
   (AskUserQuestion in Claude Code) and in chat otherwise, and stop until
   they answer. The recommended shape is the first option; every
   alternative from the brief is an option; "describe it differently" is
   always an option. Done when the user has confirmed meaning, context of
   use, shape and name, or chosen an alternative. Nothing is drawn before
   this; this is the gate.
2. **Pick the family.** From `families.md`, name the construction family and
   the exemplar icon(s) you will build from, and say which of their
   measurements you are keeping (ring radius, glyph box, slash, head). Done
   when the exemplar is named in chat and its render has been looked at.
3. **Draw.** Make `work/<slug>/` inside the skill folder, copy
   `assets/template.svg` to `<Name>Icon.svg`, and draw: paths only,
   `fill="#000"`, whole and half pixels, the rules in `style.md`. For a
   change to an existing icon, start from `render.mjs --export <Name>`,
   which writes the current SVG into the work folder. For a logo, start from
   the brand's official single-colour mark and fit it to the grid; never
   invent a mark. Done when `node scripts/add.mjs <svg> --check` passes.
4. **Render and look.** `node scripts/render.mjs work/<slug>/<Name>Icon.svg --with <Sibling>,<Sibling>`
   writes `sheet-light.png`, `sheet-dark.png` and `grid.png`. Open each PNG
   with the Read tool and run the review checklist in `style.md` against
   what you see, not against the code. Fix, re-render, until it passes. Done
   when the checklist passes on both themes at 14px and the family row reads
   as one set.
5. **Wire in.** `node scripts/add.mjs work/<slug>/<Name>Icon.svg --group <Group> [--after <Sibling>Icon] --changeset "<summary>"`
   (or `--replace` for a change). Then `pnpm type-check`. Done when the four
   files (or one, for a replace) are written, the changeset exists and
   type-check passes.
6. **Deliver.** Show the sheet. Then, briefly: the icon's name and group and
   the files touched; the confirmed meaning in one line; the readings that
   remain possible for some audiences (from the brief) so the product team
   can decide on a label; the Figma gap in the wording that fits: a new icon
   is not in Figma and the next `pnpm generate-icons` will drop it from
   `index.ts` and `iconList.tsx` unless it is added to the Icons canvas under
   the same name; an edited icon that is in Figma will be reverted by the
   next regenerate unless the Figma component is updated too; either way the
   path of the SVG to paste; how to re-render after editing the SVG.

A short section after the steps covers the three variants of the job:
adding (all steps), changing (step 2 is "stay in the icon's family"; step 3
starts from `--export` and may keep the icon's existing viewBox and
constructs but adds no new rule breaks, re-fitting to 14×14 plain paths only
when the brief is a redraw; step 5 uses `--replace`; the brief in step 1
says what changes and why, and whether the meaning changes), and logos (step 1 confirms brand, which mark and that
its use is permitted; step 3 traces; the brief names the source of the mark).

### references/meaning.md

Three parts.

**The semantic brief.** What the agent writes in chat before asking:

- Means: the concept in one line, in the product's words, naming the
  product sense when the everyday sense differs ("a story's tests passed",
  not "a check").
- Used: where it sits (sidebar status, toolbar button, badge, menu), at
  what size, beside which existing icons, interactive or decorative, with
  or without a text label.
- Shape I'd draw: one line.
- Also reads as: the other things this shape means (shape polysemy).
- Who may read it differently: by culture or region, by generation or
  personal experience, by context inside the product.
- Already in the set: the nearest icons by meaning and by shape, and why
  this is neither a duplicate nor a collision.
- Siblings implied: Hollow, Off, Ignored, Alt, a direction that mirrors in
  right-to-left layouts.
- Alternatives: one or two other shapes with the same notes in a line each.
- Name and group.

**The disambiguation checklist.** Questions the agent answers while writing
the brief, each with examples drawn from this set where possible:

- Shape polysemy: magnifier is Search and Zoom here, distinguished by a plus;
  pin is a map pin (Pin) and a push pin (PinAlt); flag can be report,
  bookmark, milestone, feature flag or country; eye is visibility or
  surveillance; bell is notification or alarm; star is favourite, rating,
  new or a religious symbol; heart is like, favourite or health; lock is
  security, private or read-only; shield is protection or police; lightning
  is speed, flash, electricity or shortcut; check is done, selected, correct
  or passed; cross is close, remove, wrong, failed or a religious symbol;
  globe is web, public or language.
- Concept polysemy: the product sense versus the everyday sense (story,
  build, snapshot, component, controls, flag, sweep, changed). Say which.
- Culture and region: reading direction (Back, Proceed, chevrons, undo and
  reply mirror in RTL; Play does not); hand gestures (ThumbsUp exists and is
  offensive in some regions; avoid new gestures); animals; religious and
  national symbols (crosses, stars, crescents, flags, maple leaves); the
  ○ for correct and ✓ for wrong convention in some schooling traditions;
  mailbox, house and trash-can shapes that differ by country; currency and
  letters (Bold and Italic are Latin letters already in the set; add no
  more letters unless the thing is the letter).
- Generation and personal experience: skeuomorphs fading from memory (floppy
  disk, handset, film camera, envelope). Fine when the set already uses the
  object consistently (Save is a floppy, Phone is a handset); risky for a
  new one.
- Context of use inside the product: the same shape reads differently in a
  password field, a toolbar, a status column, a chip, a map. The brief's
  "Used" line is what makes the shape decidable.
- Collisions and duplicates: list what the set already means by the shape
  you want, and what it already uses for the meaning you want. Render them.
- Pairs and states: does the concept have a negation or toggled state? Then
  design both, using the set's way of negating (slash for Off, badge for
  Ignored, Hollow for unselected, Unlock and LinkBroken as drawn pairs).
- Colour carries nothing: the set is one colour and the host app recolours
  it, so the shape alone must carry the meaning.

**The confirmation.** How to ask: one question, the recommended shape
first, each alternative as an option with its one-line trade-off, and
"describe it differently" last. With the question tool, options are the
shapes. In chat, the same list, then stop. Treat "sounds good" as approval
of what was shown, not of anything else.

### references/style.md

- The five senses, as above, in that order.
- Canvas: 14×14 viewBox; new icons never 14×15; an edited 14×15 icon keeps
  its box unless the brief is a redraw. Optical margins: ring
  glyphs fill the canvas (radius 7, 1px ring); object icons keep roughly
  1px clear on the longest axis; Status glyphs sit in about a 7×7 box
  centred at (7, 7). Each with exemplars.
- Line: 1px, drawn as a filled shape with round caps (the `.5` radius arc
  idiom), never a `stroke`. How to write a 1px line from (x1,y1) to (x2,y2)
  as a path; how corners join; how a 1px ring of radius r is two circles
  with evenodd.
- Fill: solid shapes for filled variants, evenodd outlines for Hollow ones;
  counters at least 1px wide; gaps between parts at least 1px at 14px.
- Geometry: whole and half pixels; three decimals; no transforms; one or two
  `<path>` elements, or a `<circle>` for a plain dot (`StatusIcon`); every
  shape `fill="#000"`; no `<g>`, `<defs>`, `<clipPath>`, ids, strokes.
- Naming and home: the suffix table with one exemplar pair each; the eleven
  groups with what belongs in each.
- Code shape: the component as svgr emits it (one annotated example,
  `AddIcon.tsx`), the story, the index line, the list line, the changeset.
- Review checklist, run against the render: reads at 14px without a label;
  weight matches the siblings in the row; nothing thinner than 1px, no gap
  under 1px; sits centred optically beside its siblings; holds on light and
  dark; the family row looks like one set; grid view shows edges on whole or
  half pixels; nothing in the SVG that `add.mjs --check` would refuse; the
  meaning survives the "what else could this be" question from the brief.

### references/families.md

One section per construction family, each with: the story shape ("a
concept that has a done, failed and changed state"), the geometry that
members share, members by name, and the one to copy from. Families observed
in the set: ring glyphs (Add, Close, Delete, Passed, Failed, Changed, Info,
Question, Support, User); bare glyphs (Plus, Cross, Check, Alert); Status
glyphs (StatusPass, StatusFail, StatusWarn, Status, Sparkle) and Status
frames (StatusAdd, StatusRemove: a 1px 7×7 square with a glyph); Hollow and
filled twins (Star, Heart, Circle, Bookmark, Cloud, StopAlt, Play); Alt
pairs; Off and Ignored negations (EyeClose, LightningOff, AccessibilityIgnored,
ContrastIgnored, Unlock, LinkBroken, Unpin); directional sets (Arrow,
ArrowSolid, Chevron, ChevronSmall, Sort, Align); frames (Browser, Tablet,
Mobile, Watch, Document, Folder, Editor, Sidebar); people and faces; logos.
The builder verifies each family's measurements from the TSX before writing
them down.

### scripts/render.mjs

```
node scripts/render.mjs <icon>... [--with Name,Name] [--out dir]
                        [--sizes 14,28,56,112] [--themes light,dark] [--no-grid]
node scripts/render.mjs --export <Name>Icon [--out dir]
```

- `<icon>` is a path to an `.svg`, a path to a `.tsx` in `src/icons`, or a
  bare icon name resolved in `src/icons`. `--with` adds siblings after the
  first icon(s).
- Reads a TSX by taking its `<svg>…</svg>`, substituting `{size}`, `{color}`
  and JSX numeric props, dropping `ref`/`{...props}`, and turning camelCase
  attributes into SVG attributes. Reads an SVG as is but forces `fill` to the
  theme's text colour. `--export` writes the source form (`fill="#000"`,
  Figma attribute order) and strips svgr's `prefix__` from ids so a re-import
  does not double it.
- Fills `assets/sheet.html`: one row per icon (new first), one cell per
  size, label under each row; light `#fff` with text `#2E3438`, dark
  `#171C23` with text `#C9CDCF` (Storybook's defaults). Screenshots at
  device scale 2 to `sheet-light.png` and `sheet-dark.png`, and the first
  icon alone at 20× with the 14 grid and half-pixel lines to `grid.png`.
- Default `--out`: the folder of the first argument when it is an `.svg`
  path; otherwise `work/<FirstName>/` inside the skill. It never writes into
  `src/icons`. Also leaves `sheet.html` in `--out` so a person can open it.
- playwright-core from `scripts/node_modules`; on first use prints the
  install line (`npm i --prefix <skill>/scripts playwright-core`) and exits;
  finds Chrome via `CHROME_PATH`, then the usual Linux and macOS paths.

### scripts/add.mjs

```
node scripts/add.mjs <file.svg> --check [--replace]
node scripts/add.mjs <file.svg> --group <Group> [--name <Name>] [--after <Name>Icon]
                     [--changeset "<summary>"] [--bump minor|patch] [--dry-run]
node scripts/add.mjs <file.svg> --replace [--changeset "<summary>"] [--bump minor|patch] [--dry-run]
```

- `--name` defaults to the file's basename without `Icon.svg`/`.svg`; the
  component is `<Name>Icon`.
- `--check` validates and exits: root has `width="14" height="14"` and
  `viewBox="0 0 14 14"`; no `stroke*` attribute anywhere; no `g`, `defs`,
  `clipPath`, `mask`, `use`, `text`, `image`; no `id`; no `transform` or
  `style`; only `path`, `circle`, `rect`, `ellipse`, `polygon`, `line`
  elements; every shape's `fill` is `#000`, `#000000`, `black`,
  `currentColor` or absent (the last two are normalised to `#000` before
  svgr; any other colour is an error); warns on coordinates with more than
  three decimals. Every failure is printed with the fix. Exit 1 on any
  failure.
- `--check --replace` (and `--replace` itself) reads the existing
  `src/icons/<Name>Icon.tsx` first and allows what it already has: its
  viewBox (so a 14×15 icon may stay 14×15), a `clipPath`/`defs` block, a
  stroke. Each inherited exception is printed as a warning with the advice
  to re-fit to 14×14 plain paths when the brief is a redraw. A construct the
  existing icon did not have is still an error. The rule in one line: an edit
  may not introduce a rule break the icon did not already have.
- Without `--check`: validates, normalises attribute order to Figma's
  (`width height viewBox fill xmlns` on the root, `[fill-rule clip-rule] d
  fill` on paths) and strips comments, then runs `@svgr/core` with the
  repo's `svgr.config.js` loaded through the repo's `jiti` (the way
  `pnpm generate-icons` runs `generate.ts`, so the same template and
  plugins run), writes
  `src/icons/<Name>Icon.tsx`, writes the story from `src/templates/story.ts`
  (loaded with the repo's `jiti`), inserts the export in `src/index.ts`
  (after `--after`'s line, else at the end), inserts `'<Name>Icon',` in the
  named group in `src/iconList.tsx` (after `--after`, else at the end of the
  group), and writes `.changeset/<slug-of-summary>.md` when `--changeset`
  is given, with `"@storybook/icons": <bump>` where `<bump>` defaults to
  `minor` for an add and `patch` for a replace (`--bump` overrides). The
  export is inserted after the last `export {` line so the `export type`
  line at the top stays put. Refuses to overwrite an existing component
  unless `--replace`; with `--replace` it rewrites the TSX only and leaves
  story, index, list alone (and still accepts `--changeset`).
- Needs the repo's `node_modules`; if `@svgr/core` or `jiti` cannot be
  resolved it prints `run pnpm install in <repo>` and exits 1.
- Prints each file written or edited. `--dry-run` prints the component and
  the three edits without writing.

### assets/template.svg

A 14×14 SVG in Figma's attribute order (`<svg width="14" height="14"
viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">`), one
example `<path d="…" fill="#000"/>` (the Plus glyph, a worked 1px line
pair), and XML comments stating the rules that matter while drawing: whole
and half pixels, 1px lines as fills with `.5` arcs, evenodd for hollows,
comments need not be deleted (svgo strips them).

### Work folder and ignores

`.claude/skills/storybook-icon/work/<slug>/` holds the SVG source and the
renders for one icon. The skill's `.gitignore` ignores `work/` and
`scripts/node_modules/`. The SVG is the artefact handed over for Figma.

## Testing the skill

Per the writing-skills discipline: baseline first, then the skill, then
close the gaps found.

- **Baseline (RED).** Started during planning, before any skill file
  existed. A fresh subagent in a worktree of this repo is asked
  to "add an icon for a flaky test (a test that passes and fails without a
  code change) to this icon set, ready to ship", with no skill. Record
  verbatim whether it asks about meaning before drawing, whether it looks
  at siblings, whether it uses strokes or the set's fills, whether it
  renders and looks, which of the four files plus changeset it touches, and
  whether it mentions the Figma gap. Two runs.
- **With the skill (GREEN).** Same prompt, told to read and follow
  `.claude/skills/storybook-icon/SKILL.md`, and told that when the skill
  says to ask the user it must write the question out and stop. Expect: the
  brief with the ambiguity notes, a stop at the gate; on a second run that
  supplies the confirmation, a drawn icon, a render it looked at, the four
  files, the changeset, the Figma note. Two runs each.
- **Scripts.** Run `render.mjs` and `add.mjs --check`/`--dry-run` on the
  test icon and on two existing icons; `pnpm type-check` after a real add
  in the worktree; `git diff` shows exactly the expected files.
- **Refactor.** Any rationalisation seen in GREEN runs ("the meaning is
  obvious", "I'll ask after drawing so they can see it") gets an explicit
  counter in SKILL.md.

## Left to the builder

- Exact wording of every reference file, within the structure above.
- The measurements in `families.md` (verify from the TSX, do not guess).
- The contact sheet's layout details and the grid view's styling.
- Whether `add.mjs` also runs prettier on `index.ts` and `iconList.tsx`
  after its line inserts (it should not need to if it matches indentation).
- The slug rule for changeset filenames (lower-case words of the summary
  joined by `-`, trimmed to a sensible length).
- How `--export` strips `prefix__` from ids and whether to keep a
  `clipPath` at all when the icon is being redrawn.
