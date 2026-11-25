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
