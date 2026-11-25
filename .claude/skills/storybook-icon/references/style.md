# Storybook icon style

The set is `@storybook/icons`: 260 one-colour icons on a 14 by 14 grid, drawn
in Figma and exported as React components. A new icon has to pass as one of
them at 14px in the Storybook sidebar, where most of them live. Every number
below was measured from the shipped components named beside it.

## The five senses of matching

Check them in this order. The third is the one an agent checks on its own;
the first is the one that goes wrong silently.

1. **Meaning.** The icon says what its name says, to the people who will see
   it, in the place it will sit. It does not double an existing icon's
   meaning and does not borrow a shape the set already uses for another one.
   A bare check already means Check, a ring with a check means Passed, a
   small check means StatusPass. Confirmed with the user before drawing
   (see [meaning.md](meaning.md)).
2. **Family.** It is built like its siblings: same ring for ring glyphs, same
   8 by 8 box for Status glyphs, same slash for Off variants, same badge for
   Ignored variants, same head and shaft for arrows, same outline for a
   Hollow twin (see [families.md](families.md)).
3. **Form.** 14 by 14, 1px lines drawn as fills with round caps, hollows via
   evenodd, every edge on a whole or half pixel, margins like its neighbours,
   one colour, no strokes, no groups, no ids. The rest of this file.
4. **Name and home.** PascalCase plus `Icon`, the set's suffixes, the right
   `iconList` group next to the icons it will be used with.
5. **Code.** The exact component svgr emits from the repo's own config, a
   story, an export, a list entry, a changeset. `scripts/add.mjs` does this;
   do not hand-write the component.

## Canvas and optical margins

`viewBox="0 0 14 14"`, always, for a new icon. Eighteen shipped icons are
`0 0 14 15` from Figma frame drift (Lock, Bookmark, Tablet, Mobile, Watch,
Comment, Contrast and others); their drawing still fits in 14 by 14. An
edited one keeps its box unless the brief is a redraw. Never copy the 15.

The set draws edge to edge. Nothing is inset "for safety"; the box is the
drawing box and the host UI adds the space around it.

| Family | Occupies | Measured on |
| --- | --- | --- |
| Ring glyph (a glyph inside a 1px ring, or on a filled disc) | the full 14 by 14; ring outer radius 7, inner 6; the glyph inside spans about 3 to 11 | AddIcon, CloseIcon, PassedIcon, InfoIcon |
| Bare glyph | 10 to 14 wide; Plus 1 to 13, Cross 2 to 12, Check 0 to 14 by 2.5 to 12, Alert 0 to 14 by 1 to 13 | PlusIcon, CrossIcon, CheckIcon, AlertIcon |
| Status glyph | an 8 by 8 box from (3,3) to (11,11), centred on (7,7); round or diagonal shapes may sit in the inner 6 by 6 from (4,4) | StatusPassIcon 3 to 11 by 4 to 10, StatusWarnIcon 3 to 11 by 3 to 10, StatusIcon 4 to 10, StatusAddIcon 3 to 11 |
| Object or frame (1px outline of a thing) | 12 to 14 on the long axis, so 0 to 1 px clear; Trash 1 to 13 by 0 to 13, Folder 0 to 14 by 1 to 12, Document 1 to 13 by 0 to 14, Browser 0 to 14 by 1 to 13 | TrashIcon, FolderIcon, DocumentIcon, BrowserIcon |
| Device | full height, 8 to 10 wide: Mobile 3 to 11, Tablet 2 to 12 | MobileIcon, TabletIcon |
| Chevron | 6.5 wide by 12 tall (4.75 to 11.25 by 1 to 13); the Small variant 4.5 by 8 (4.75 to 9.25 by 3 to 11) | ChevronRightIcon, ChevronSmallRightIcon |
| Arrow | full width, 10 tall: shaft on y 7 from x 0.5, head 5 long from (8.5,2) to the tip at (13.5,7) | ArrowRightIcon |
| Logo | 14 on its longest axis, centred on the other | GithubIcon, StorybookIcon, FigmaIcon |

A filled twin and its Hollow twin share one bounding box (StarIcon and
StarHollowIcon, HeartIcon and HeartHollowIcon, CircleIcon and
CircleHollowIcon).

## Line

Every line in the set is 1px wide, has round caps, and is a filled shape.
There is not one `stroke` attribute among the 260 icons (DirectionIcon's
stroke is the exception that proves it). Draw lines as fills from the
start; converting a stroked drawing afterwards is where geometry bugs come
from.

The idiom, in the words of PlusIcon: a round cap is a half-circle of radius
0.5, written `a.5.5 0 010 1` (or `-1`), and a quarter cap on a corner is
`a.5.5 0 01.5.5`.

A horizontal 1px line from x 1 to x 13 on y 7, caps included:

```
M1.5 6.5h11a.5.5 0 010 1h-11a.5.5 0 010-1z
```

Start half a pixel in from the left end on the top edge (1.5, 6.5), run the
length minus 1 (`h11`), cap down (`a.5.5 0 010 1`), run back, cap up. The
caps reach x 1 and x 13. A vertical line is the same with `v` and the caps
`a.5.5 0 01-1 0` / `a.5.5 0 011 0`.

A 45 degree line from (1,1) to (13,13), as EyeCloseIcon draws its slash:

```
M1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z
```

The cap endpoints of a diagonal are offset by 0.354 (0.5 divided by the
square root of 2), not 0.5. Keep those three decimals.

Two lines that cross (Plus, Cross) are one path: PlusIcon is
`M7 1a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 017 1z`,
twelve segments walking the outline of the whole cross. A line that bends
(a chevron, a check) is also one outline with round joins: ChevronRightIcon
is `M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z`.

A 1px ring of radius 7 is two circles with evenodd, as in AddIcon:

```
M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z
```

A 1px rounded frame with 0.5 corners, as in StatusAddIcon (outer 3 to 11,
inner 4 to 10):

```
M10.5 3a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h7zM4 10h6V4H4v6z
```

## Fill

- A filled variant is a solid shape (StarIcon, HeartIcon, CircleIcon,
  PassedIcon's disc with the check cut out of it).
- A Hollow variant is the same outline with the inside cut away:
  `fill-rule="evenodd" clip-rule="evenodd"` on the path, outer contour then
  inner contour. StarHollowIcon is StarIcon's outline with a second contour
  1px inside; CircleHollowIcon is the ring above.
- A counter (the hole in a ring, the eye of a needle) is at least 1px wide,
  and so is the gap between two parts. At 14px anything thinner fills in.
- A glyph on a disc (PassedIcon, FailedIcon, ChangedIcon) is the disc with
  the glyph subtracted by evenodd, not a white glyph drawn on top: there is
  only one colour.

## Geometry

- Every edge sits on a whole or half pixel (7, 7.5), never 7.3. The only
  other values the set uses are the cap offsets (0.146, 0.354, 0.854,
  0.707) and the arc flags they come with.
- Three decimals at most; svgo rounds to three anyway, so a fourth is a
  sign the edge is off the grid.
- No `transform`, no `style`, no `<g>`, `<defs>`, `<clipPath>`, no `id`. One
  or two `<path>` elements is the norm; a plain dot may be a `<circle>`
  (StatusIcon is `<circle cx={7} cy={7} r={3}>`; svgo keeps circles and turns
  rectangles, lines and polygons into paths).
- Every shape has `fill="#000"` in the SVG source. svgr turns that into
  `fill={color}`. Any other colour would be baked in, and a shape with no
  fill is invisible under the root `fill="none"`. `scripts/add.mjs` fills
  in a missing one and refuses any other colour.
- The root is exactly `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">`,
  in that order; on a path the order is `fill-rule clip-rule d fill`. That is
  Figma's export order and the only way the component comes out byte for
  byte like a regenerated one. `assets/template.svg` starts you there.

## Naming and home

PascalCase plus `Icon`. The name is the concept, not the shape, except for
plain shapes (CircleIcon, DiamondIcon). Modifiers go at the end:

| Suffix | Means | Pair to copy |
| --- | --- | --- |
| `Hollow` | the outline of a filled twin | StarIcon, StarHollowIcon |
| `Alt` | a second rendering of the same concept, for a different place | CloseIcon (in a ring), CloseAltIcon (bare, heavier) |
| `Off` | the thing switched off: a diagonal slash across it | LightningIcon, LightningOffIcon |
| `Ignored` | the thing set aside: a small filled badge with a minus at the bottom right | ContrastIcon, ContrastIgnoredIcon |
| `Broken` | a link or bond cut | LinkIcon, LinkBrokenIcon |
| `Small` | the same shape at the Status size | ChevronRightIcon, ChevronSmallRightIcon |
| `Solid` | a filled version of a line shape | ArrowRightIcon, ArrowSolidRightIcon |
| `Add` | the thing with a plus | CommentIcon, CommentAddIcon |
| `Toggle` | the thing with an open or close affordance | SidebarIcon, SidebarToggleIcon |
| `Up Down Left Right TopLeft TopRight BottomLeft BottomRight` | direction, after the shape | ArrowUpIcon, ArrowTopRightIcon |
| `Status` prefix | a glyph for a state, drawn in the Status box | StatusPassIcon, StatusFailIcon |

Negations and states: `Un` prefix for an undone action (UnlockIcon,
UnpinIcon), `Close` for a closed eye (EyeCloseIcon). Pick the form the
nearest sibling uses.

`src/iconList.tsx` places every icon in one of eleven groups. This is where
the gallery shows it and where a new icon sits next to the ones it will be
used with:

| Group | Holds | Count | For example |
| --- | --- | --- | --- |
| Images | media, viewing, playback, visual tools | 41 | `PhotoIcon`, `ContrastIgnoredIcon`, `StackedIcon` |
| Documents | files, pages, data views | 17 | `BookIcon`, `CalendarIcon`, `MenuIcon` |
| Editing | text formatting | 9 | `MarkupIcon`, `ListOrderedIcon`, `MarkdownIcon` |
| Git | version control | 5 | `RepoIcon`, `BranchIcon`, `MergeIcon` |
| OS | operating systems and browsers | 5 | `AppleIcon`, `UbuntuIcon`, `ChromeIcon` |
| Logos | brand marks, traced from the official mark | 20 | `StorybookIcon`, `GitlabIcon`, `XIcon` |
| Devices | hardware, viewports, system resources | 17 | `BrowserIcon`, `BottomBarIcon`, `QRIcon` |
| CRUD | actions on things: make, change, remove, confirm | 46 | `EditIcon`, `ChangedIcon`, `EditorIcon` |
| Communicate | messages, notifications, status, feedback, security | 43 | `InfoIcon`, `StarHollowIcon`, `StatusRemoveIcon` |
| Wayfinding | movement, direction, navigation, time, place | 44 | `ChevronUpIcon`, `ExpandIcon`, `DirectionIcon` |
| People | users, faces, accessibility | 11 | `UserIcon`, `FaceHappyIcon`, `AccessibilityIgnoredIcon` |

## Code shape

`scripts/add.mjs` produces all of this; it is here so you can recognise it.
The component, as svgr emits it from `svgr.config.js` and
`src/templates/componentTemplate.js` (AddIcon.tsx, annotated):

```tsx
import * as React from 'react';
import { IconProps } from '../types';

export const AddIcon = /* @__PURE__ */ React.forwardRef<   // name = file name
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', size = 14, ...props }, forwardedRef) => {
  return (
    <svg
      width={size}                                           // from the SVG's width="14"
      height={size}
      viewBox="0 0 14 14"
      fill="none"                                            // root fill stays none
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardedRef}
      {...props}
    >
      <path
        d="M7 3a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 017 3z"
        fill={color}                                         // from fill="#000"
      />
      <path
        fillRule="evenodd"                                   // from fill-rule
        clipRule="evenodd"
        d="M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z"
        fill={color}
      />
    </svg>
  );
});
```

The story (`src/templates/story.ts`): a `Default` story with `size: 100`.
The export in `src/index.ts`: `export { AddIcon } from './icons/AddIcon';`,
after the last export line (line 2 is the `export type` line; it stays).
The list entry in `src/iconList.tsx`: `      'AddIcon',` inside its group.
The changeset in `.changeset/<slug>.md`: `"@storybook/icons": minor` for a
new icon, `patch` for a redraw, and a one-line summary.

## Review checklist

Run it against the rendered sheet and grid, not against the code.

1. At 14px, with no label, the icon still reads as its meaning; ask what
   else it could be and compare with the "also reads as" line of the brief.
2. Its weight matches the siblings in the rows below it: lines look the
   same thickness, filled areas the same darkness.
3. Nothing is thinner than 1px and no gap or counter is narrower than 1px.
4. It sits where its family sits: a ring runs edge to edge, a Status glyph
   stays inside its 8 by 8 box, an object keeps at most a pixel clear.
5. It holds on both themes: the dark sheet shows no hairline that the light
   one hides.
6. The family row reads as one set; nothing about the new icon catches the
   eye before its siblings do.
7. In the grid view every edge lands on a whole or half pixel line and every
   cap is a clean half circle.
8. `node .claude/skills/storybook-icon/scripts/add.mjs <svg> --check` prints
   `ok` with no warnings (or only the inherited ones under `--replace`).
9. The name and group follow the table above, and no existing icon already
   means this or already looks like this.
