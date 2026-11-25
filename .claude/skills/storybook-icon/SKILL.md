---
name: storybook-icon
description: Makes icons for the @storybook/icons set (14 by 14, one colour, 1px filled lines with round caps) and wires them in as components with story, export, list entry and changeset. Use when the user asks for a new icon, a variant of an existing one (Hollow, Alt, Off, Ignored, a direction), a logo, or a change to an icon in this set, or for something "in the Storybook icon style". Starts by confirming what the icon must mean, to whom and where, before anything is drawn.
argument-hint: "[what the icon should mean, and where it will be used]"
---

# Storybook icon

An icon here is an SVG on a 14 by 14 grid, made of filled paths with
`fill="#000"`, that the repo's svgr config turns into a React component in
`src/icons/`. The set has 260 of them and a new one has to pass as one of
them at 14px, in the Storybook sidebar, usually without a label.

An icon matches the set in five senses, checked in this order: meaning,
family, form, name and home, code. Read
[references/style.md](references/style.md) (the senses and the drawing
rules) and [references/meaning.md](references/meaning.md) (the brief and
the confirmation) before step 1. The commands below run from the
repository root; the skill's drafts and renders go in
`.claude/skills/storybook-icon/work/<Name>Icon/`, which is gitignored.

## Steps

### 1. Brief the meaning and confirm it

List the neighbours by name: `ls src/icons`, and read the target group in
`src/iconList.tsx`. Render the closest three to six so you have seen them:

```
node .claude/skills/storybook-icon/scripts/render.mjs StatusPassIcon --with StatusFailIcon,StatusWarnIcon
```

Then write the semantic brief in chat, all nine lines from meaning.md, and
answer its disambiguation checklist as you write: what else the shape
means, who reads it differently, what the set already means by that shape,
whether it has a negation or mirrors in right-to-left layouts.

Ask the user to confirm: with the question tool when the harness has one
(AskUserQuestion in Claude Code), in chat otherwise, as meaning.md
describes. The recommended shape is the first option, each alternative
from the brief (at most two) is an option, "Describe it differently" is
the last. Then stop and wait.

Nothing is drawn before the user has confirmed. This is the gate.

Done when the user has confirmed meaning, context of use, shape and name,
or chosen an alternative.

### 2. Pick the family

From [references/families.md](references/families.md), name in chat the
construction family and the exemplar you will build from, and say which of
its measurements you are keeping (the ring, the 8 by 8 Status box, the
slash, the badge, the arrow head). Done when the exemplar is named and its
render from step 1 has been looked at.

### 3. Draw

```
mkdir -p .claude/skills/storybook-icon/work/<Name>Icon
cp .claude/skills/storybook-icon/assets/template.svg .claude/skills/storybook-icon/work/<Name>Icon/<Name>Icon.svg
```

Draw in that file as 1px outlines unless the family is a solid one: paths
only, `fill="#000"` on every shape, every edge on a whole or half pixel
(pixel hinted), 1px lines as fills with the `.5` arc caps from style.md,
no text, no strokes, groups, clipPaths or ids. Copy the exemplar's path
and change the glyph rather than drawing from nothing.

For a change to an existing icon, start from the shipped source instead of
the template:

```
node .claude/skills/storybook-icon/scripts/render.mjs --export <Name>Icon
```

For a logo, start from the brand's official single-colour mark and fit it
to the grid; never invent a mark.

Check as you go; `--check` enforces the Geometry list in style.md and
nothing more, so draw to that list rather than reading the script:

```
node .claude/skills/storybook-icon/scripts/add.mjs .claude/skills/storybook-icon/work/<Name>Icon/<Name>Icon.svg --check
```

Done when the check prints `ok`, with no warnings or only inherited ones
(an edit checked with `--check --replace`).

### 4. Render and look

```
node .claude/skills/storybook-icon/scripts/render.mjs .claude/skills/storybook-icon/work/<Name>Icon/<Name>Icon.svg --with <Sibling>Icon,<Sibling>Icon
```

On first use it may report `playwright-core missing` or no browser found;
run the install line it prints, then render again. It writes `sheet.html`,
`sheet-light.png`, `sheet-dark.png` and `grid.png` next to the SVG.

Open each PNG with the Read tool and run the review checklist at the end
of style.md against what you see, not against the code. Fix the SVG,
re-render, until it passes. Done when the checklist passes on both themes
at 14px and the family row reads as one set.

### 5. Wire in

```
node .claude/skills/storybook-icon/scripts/add.mjs .claude/skills/storybook-icon/work/<Name>Icon/<Name>Icon.svg --group <Group> --after <Sibling>Icon --changeset "<summary>"
pnpm type-check
```

`--group` is one of the eleven groups in `src/iconList.tsx`; `--after`
places the icon next to the sibling it will be used with. The script writes
the component, its story, the export in `src/index.ts`, the list entry and
a `minor` changeset, and prints each path. For a change, use `--replace`
instead of `--group` and `--after`; it rewrites the component only and
writes a `patch` changeset.

Done when the files are written, the changeset exists and type-check
passes.

### 6. Deliver

Show the sheet (the light PNG, or its path). Then, briefly:

- the icon's name and group, and the files touched;
- the confirmed meaning, in one line;
- the readings that remain possible for some audiences, from the brief, so
  the product team can decide on a label;
- the Figma gap, in the wording that fits. New icon: it is not in Figma, and
  the next `pnpm generate-icons` will drop it from `src/index.ts` and
  `src/iconList.tsx` unless it is added to the Icons canvas under the same
  name. Edited icon: it is in Figma, and the next `pnpm generate-icons` will
  revert it unless the Figma component is updated too. Either way, the path
  of the SVG to paste;
- how to re-render after editing the SVG (the step 4 command).

## Changing an icon

Steps 1 to 6 still apply, with these differences. The brief in step 1 says
what changes and why, and whether the meaning changes (a redraw that
changes meaning is a new icon under a new name). Step 2 is "stay in the
icon's family". Step 3 starts from `render.mjs --export`; the icon may keep
its viewBox and constructs (eighteen shipped icons are `0 0 14 15`,
fourteen carry a clipPath), but the edit adds no rule break the icon did
not already have, and `--check --replace` tells the inherited ones from new
ones. Re-fit to 14 by 14 plain paths only when the brief is a redraw. Step
5 uses `--replace`.

## Logos

Step 1 confirms the brand, which of its marks, and that the brand's
guidelines permit a monochrome mark at this size; the brief names the
source of the mark. Step 3 traces that mark and fits it: longer axis 12 to
14px, centred, one path, counters by evenodd (families.md, Logos). Nothing
is drawn from memory.

## What goes wrong

The two baseline runs of this skill, without it, did these. Each row is a
thought and what to do instead.

| Thought | Do instead |
| --- | --- |
| "The shape is obvious, I'll draw it and list other meanings at the end" | Two runs chose two different shapes for the same brief. Write the brief, ask, wait. The meanings go in before the choice, not after. |
| "It's a status icon, so sidebar, Status box, Status prefix" | That was an assumption that fixed the family, name and group. Ask where it sits; a toolbar button or a badge is a different icon. |
| "Other readings: gambling, random. Done." | Check who reads it differently (region, generation, context in the product), what the product already calls and draws for this, and whether a label will be there. |
| "I'll build an svgr pipeline and a renderer" | `.claude/skills/storybook-icon/scripts/add.mjs` and `.claude/skills/storybook-icon/scripts/render.mjs` exist; each run that rebuilt them spent 50 to 70 tool calls on tooling. |
| "I'll draw strokes and expand them to outlines" | Hand expansion produced a geometry bug only a pixel diff caught. Draw fills with the `.5` arc idiom from the start. |
| "The code looks right, ship it" | Look at the PNGs. The checklist runs against the render, on both themes, at 14px, beside the siblings. |
| "It renders, so it's in the set" | It is not in Figma. Say so, with the wording from step 6, every time. |
