# Baseline: scenario 1 without the skill

Two fresh agents, each in its own worktree of `origin/main` (2.2.0), given
only the scenario text plus "the user has stepped away; note questions with
your assumption and keep going". No skill file existed. Recorded 2026-11-25.

## Run A

| Check | Result |
| --- | --- |
| Asked about meaning before drawing | No. The only thing framed as the user's call was the name: "assumption: the user could not confirm the name; a plain `FlakyIcon` is the alternative". |
| Looked at siblings | Yes: rendered eight candidates at 14/28/112px beside StatusPass, StatusFail, StatusWarn, StatusAdd. |
| Drawing method | Fills, 1px, round caps, viewBox 14×14; one evenodd path plus three `<circle>` pips (r 0.8). Produced through the repo's svgr config via a hand-written jiti script. |
| Rendered and looked | Yes: resvg at three sizes on light and dark; Storybook dev server in the browser pane. |
| Files touched | tsx, story, index, iconList, changeset (`minor`). All five. |
| Mentioned the Figma gap | Yes, as flag 1, with the Figma layer name to use. |
| Shape and its ambiguity | A die showing three diagonal pips ("pass or fail is a roll of the dice"). Listed after the fact: "random / shuffle / randomize", "chance / gambling / games", "the number three". Gambling imagery's cultural weight not considered. |

## Run B

| Check | Result |
| --- | --- |
| Asked about meaning before drawing | No. "Assumption made (user was away): the icon is for the sidebar/test-addon status row". The metaphor itself was never framed as a question; "Semantic collision to decide on" appears as flag 4, after the work. |
| Looked at siblings | Yes: seven candidates rendered beside the Status family. |
| Drawing method | Fills, 1px, round caps, viewBox 14×14, one path. Strokes expanded to outlines by a script; the first version had SVG arc sweep flags inverted ("rendered notched joins"), caught by pixel-diffing against a stroked render. |
| Rendered and looked | Yes: contact sheet, static Storybook build in the browser pane. |
| Files touched | tsx, story, index, iconList, changeset (`minor`). All five. |
| Mentioned the Figma gap | Yes, as flag 1. |
| Shape and its ambiguity | A single zigzag (one period, 45° segments). Listed after the fact: "approximately / roughly", "wave / signal / vibration / pulse", "mountain range", "the letters W/M", "the squiggly spell-check underline". Noted that Playwright uses the warning triangle for flaky, which here would collide with StatusWarnIcon. "Design review welcome: the glyph was drawn by me, not by the design team." |

## Patterns

1. **The metaphor was chosen unilaterally and the meaning question surfaced last.** Both runs delivered a shipping-ready icon, exports and changeset, then listed "other meanings worth knowing before shipping" in the closing flags. The two runs chose different shapes (a die, a zigzag) for the same brief, so the choice was not obvious and should have been the user's.
2. **Context of use was assumed, not asked**, and the assumption (sidebar status row) silently decided the family (Status glyph), the name (`StatusFlakyIcon`) and the group. A toolbar button or a badge would have needed a different icon.
3. **Alternative readings were post hoc and shallow.** Gambling and "randomize" were named but not weighed for audience or culture; nobody checked what the product already calls or draws for flaky tests (Chromatic has a flake feature), how "flaky" lands for non-native readers, whether a label will accompany the glyph, or whether a direction is involved.
4. **Mechanics were right but expensive and fragile.** Each run rebuilt the svgr pipeline, a renderer and a stroke-to-outline converter from scratch (54 and 73 tool calls, about 13 minutes each). Hand-expanding strokes produced a geometry bug in run B that only a pixel diff caught. The set's own idiom (`.5` arcs as round caps) was not used directly.
5. **What was already right, and the skill must keep cheap:** fills not strokes, 14×14, matching the Status box, all five files, `minor` bump, the Figma warning, rendering beside siblings before choosing.

## What the skill must change

- A written semantic brief and a stop for confirmation before any drawing, with the alternative readings and the context of use as inputs to the choice rather than footnotes to it.
- Scripts for rendering and wiring in, so the agent's effort goes into meaning and form rather than tooling.
- The `.5` arc idiom and the family measurements written down, so lines are drawn as fills from the start.

# With the skill

Same scenario 1 prompt, two fresh subagents told to read and follow
`SKILL.md` and to write the question instead of asking (the user was not
there), each in a worktree at the skill's commit (7983904). One of them was
then sent "Confirmed: your recommended option, name and group as proposed."

## Gate run A

Stopped at the gate. All nine brief lines, in order. The "Used" line was
written as an assumption to confirm, with the toolbar-filter and badge
cases named as different icons. Checked what the testing module reports
today (pass, fail, warn, pending, unknown; a pass on retry folded into
pass) and that "warn" there already means accessibility violations, so
flaky cannot be a triangle variant. Eight "also reads as" readings,
including the semver `~` and alternating current. Rendered the Status row
and eight neighbours in two sheets before writing "Already in the set".
Three alternatives and five rejected shapes. Five numbered options,
"Wave (Recommended)" first, "Describe it differently" last with the
toolbar case called out, and a line saying what choosing 1 to 4 also
confirms. Nothing drawn, `src/` untouched. 13 tool calls, about 4 minutes.

## Gate run B

Stopped at the gate. Same shape and structure as A with a shorter
checklist: the wave dash, the shell `~`, "about this long" beside a
duration, and "skipped" for runners that mark skipped tests with a dash.
Four alternatives and three rejected. Nothing drawn. 11 tool calls, about
3 minutes.

## Build run (B, continued)

Named the family (Status glyph) and exemplar (StatusPassIcon) and the two
measurements kept (the 8 by 8 box, the 1px round-capped line). Drew the
wave as one outline from the `.5` arc idiom (two r 2 and r 1 arcs with
half-pixel caps, 3.5 to 10.5 by 5 to 9), checked it (`ok`, no warnings),
rendered it beside StatusPassIcon, StatusFailIcon, StatusWarnIcon and
StatusIcon, and wrote the nine checklist answers against the PNGs. Ran
`add.mjs` with `--group Communicate --after StatusPassIcon`, which wrote
the component, story, export, list entry and a `minor` changeset;
`pnpm type-check` passed. Delivered the sheet path, the name and files, the
meaning in one line, the four remaining readings, the new-icon Figma
wording with the SVG path, and the re-render command. Verified from the
worktree: the diff is exactly the two one-line edits and three new files,
and the SVG passes `--check` from the main checkout. 19 tool calls in all,
about 9 minutes, against 54 and 73 calls and about 13 minutes without the
skill, and the time went into the brief and the look, not the tooling.

## What changed, and what did not

- Both runs chose the same shape, by the same reasoning, and asked before
  drawing; the baseline runs chose two different shapes and asked after.
- Both wrote the brief's "also reads as" and "who reads it differently"
  lines from the product and the audience, where the baseline named
  "gambling, random" in a closing note.
- Both runs reproduce the worked example in `meaning.md` (the wave, and
  its first two alternatives) almost verbatim, because scenario 1 is the
  example's own request. Scenario 1 therefore no longer tests the agent's
  reasoning about meaning, only the process; the post-refactor gate run
  uses scenario 2, which no reference pre-answers.
- Both listed three or four alternatives; the question tool takes four
  options in all, so the refactor caps the brief at two alternatives and
  says so in `meaning.md` and step 1.
- The build run read the checker's source to learn its rules before
  drawing; the refactor says in step 3 that `--check` enforces the
  Geometry list in `style.md` and nothing more.
- No rationalisation and no skipped step was seen, so the "What goes
  wrong" table gained no row.

## Gate re-run after the refactor (scenario 2, StatusSkipped)

Stopped at the gate, at the refactored commit (43881c6). No reference
pre-answers this request, and the brief shows it: "Means" separates
skipped from pending (StatusIcon's dot) and from cancelled; "Who may read
it differently" checked how Mocha, Cypress, Jest, GitHub Actions, VS Code
and GitLab mark a skipped test and what a diff's "-" means; "Already in
the set" found the three minuses the set already draws (SubtractIcon,
StatusRemoveIcon, the Ignored badge) and named StatusRemoveIcon as the
collision to watch; the name line argued from the Status family's stems
for StatusSkipIcon and offered to keep StatusSkipped. Two alternatives, so
four options in all, within the question tool's limit; the toolbar case
flagged on the "Used" line; nothing drawn, `src/` untouched.
