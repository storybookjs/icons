# Families in the Storybook icon set

A new icon is almost never alone: it joins a family and borrows the
family's geometry, so a row of siblings reads as one set. Find the family
first, then copy its exemplar's paths and change only the glyph. Every
number here is measured from the shipped component named beside it, on the
14 by 14 grid; the drawing rules those numbers obey are in
[style.md](style.md).

## Ring glyphs

Reads as: a small symbol inside a thin circle, the shape of a round button.

- The ring is `M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z`
  (AddIcon), radius 7 outside and 6 inside, a 1px wall, edge to edge.
  QuestionIcon, StopIcon and FaceHappyIcon wind the same ring the other way
  (`M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z`); either
  is fine, the ring is its own path.
- The glyph is 1px lines with round caps inside the 8 by 8 box from 3 to
  11: AddIcon's plus and SubtractIcon's minus run 3 to 11, CloseIcon's cross
  4.146 to 9.854, StopIcon's square 4 to 10, InfoIcon's bar y 5.5 to 11 with
  a dot of radius .75 at (7, 3.75).
- The filled twin of this family is the **disc**: `M7 14A7 7 0 107 0a7 7 0 000 14z`
  with the glyph as a second contour cutting a hole in it. PassedIcon's
  check spans 3.646 to 10.854 and FailedIcon's cross 4.146 to 9.854, the
  same cross as CloseIcon. One colour, so there is no white glyph on top.

Members: AddIcon, SubtractIcon, CloseIcon, StopIcon, InfoIcon,
QuestionIcon, DeleteIcon, SupportIcon, CircleHollowIcon, UserIcon,
AccessibilityIcon, FaceHappyIcon, FaceNeutralIcon, FaceSadIcon. Discs:
PassedIcon, FailedIcon, ChangedIcon, AlertAltIcon, AccessibilityAltIcon,
CircleIcon.

Copy from: AddIcon (ring), PassedIcon (disc).

Not for: a state beside a label in a list (Status glyphs), a thing (an
object has its own outline), or a glyph that already exists bare and only
needs to sit on a button; the host draws the button.

## Bare glyphs

Reads as: a symbol with nothing around it, drawn large.

- 1px lines with round caps, 10 to 14 wide: PlusIcon 1 to 13, CrossIcon 2 to
  12, CheckIcon 0 to 14 by 2.5 to 12, AlertIcon 0 to 14 by 1 to 13, MenuIcon
  three bars 0.5 to 13.5 on y 4, 7 and 10.
- PlusIcon is the model path:
  `M7 1a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 017 1z`,
  one outline for the whole cross.
- CloseAltIcon is the one heavy glyph: 1.5px bars (`.75` arcs), 1 to 13.
  Do not copy its weight for a new glyph unless you are making the heavy
  twin of a 1px one.

Members: PlusIcon, CrossIcon, CheckIcon, AlertIcon, CloseAltIcon, MenuIcon,
MenuReverseIcon, ExpandAltIcon, CollapseIcon.

Copy from: PlusIcon.

Not for: a state in a list row (Status glyphs: a 12px check next to a
story name shouts), or a symbol that the set already shows in a ring and
that will sit among ring glyphs.

## Status glyphs and Status frames

Reads as: a quiet mark beside a story name in the sidebar, telling its
state, in a column with others like it.

- The glyph lives in the 8 by 8 box from (3, 3) to (11, 11), centred on
  (7, 7). StatusPassIcon's check is
  `M10.854 4.146a.5.5 0 010 .708l-5 5a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L5.5 8.793l4.646-4.647a.5.5 0 01.708 0z`
  (3.146 to 10.854 by 4.146 to 9.854); StatusFailIcon's cross is CloseIcon's
  cross without the ring (4.146 to 9.854); StatusWarnIcon is a 1px triangle
  3.07 to 10.93 by 3.04 to 10; StatusIcon is a filled dot
  `<circle cx={7} cy={7} r={3}>`; SparkleIcon is a four-point star in 3 to 11.
- The **frame** variant is a 1px rounded square
  `M10.5 3a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h7zM4 10h6V4H4v6z`
  (3 to 11, corner radius .5) with a 1px glyph inside 5 to 9: StatusAddIcon's
  plus `M7 5a.5.5 0 01.5.5v1h1a.5.5 0 010 1h-1v1a.5.5 0 01-1 0v-1h-1a.5.5 0 010-1h1v-1A.5.5 0 017 5z`,
  StatusRemoveIcon's minus `M8.5 6.5a.5.5 0 010 1h-3a.5.5 0 010-1h3z`.
- The ChevronSmall set shares the size (4.75 to 9.25 by 3 to 11) and sits
  in the same rows.

Members: StatusPassIcon, StatusFailIcon, StatusWarnIcon, StatusIcon,
SparkleIcon, StatusAddIcon, StatusRemoveIcon.

Copy from: StatusPassIcon (glyph), StatusAddIcon (frame).

Not for: a toolbar or button (too light at 14px among ring and bare
glyphs), or a thing. A frame means "a change to the set of stories"
(added, removed); a bare Status glyph means "a result" (pass, fail, warn).

## Hollow and filled twins

Reads as: the same silhouette twice, once solid and once as an outline;
the solid one is "on" or "selected".

- The plain name is the filled shape, `Hollow` is its outline: the same
  outer contour plus an inner contour 1px inside, `fill-rule="evenodd"`.
  Both share one bounding box: StarIcon and StarHollowIcon 0.16 to 13.84,
  HeartIcon and HeartHollowIcon 0 to 14 by 1 to 13, CircleIcon and
  CircleHollowIcon 0 to 14, CloudIcon and CloudHollowIcon 0 to 14 by 2 to
  12, PlayIcon and PlayHollowIcon 3 to 12.8, BookmarkIcon and
  BookmarkHollowIcon 3 to 11 by 0 to 14.
- Joins on the filled shape are rounded with radius .75 (StarIcon,
  CloseAltIcon) or .8 (PlayIcon); the Hollow twin keeps them.
- Draw the filled one first; the Hollow one is derived from it, never the
  other way round.

Members: StarIcon/StarHollowIcon, HeartIcon/HeartHollowIcon,
CircleIcon/CircleHollowIcon, CloudIcon/CloudHollowIcon,
PlayIcon/PlayHollowIcon, BookmarkIcon/BookmarkHollowIcon,
StopAltIcon/StopAltHollowIcon, PlayAllHollowIcon.

Copy from: StarIcon, then StarHollowIcon.

Not for: a line icon (it is already an outline; a "Hollow" of it means
nothing), or a glyph in a ring (the disc is that family's filled twin).

## Alt pairs

Reads as: the same idea drawn a second way, for a different place in the
UI, not a different state.

- `Alt` changes the rendering, not the meaning: CloseIcon is a cross in a
  ring, CloseAltIcon a heavy bare cross; StopIcon a square in a ring,
  StopAltIcon a filled rounded square 1 to 13; UserIcon a bust in a ring,
  UserAltIcon the bust alone; AccessibilityIcon a figure in a ring,
  AccessibilityAltIcon the figure cut from a disc; AlertIcon a triangle,
  AlertAltIcon a disc; PinIcon a map pin, PinAltIcon a push pin; ShareIcon a
  box with an arrow up, ShareAltIcon a box with an arrow to the top right;
  SidebarIcon a panel on the left, SidebarAltIcon the panel on the right;
  ExpandIcon diagonal arrows, ExpandAltIcon vertical chevrons.
- The Alt follows the geometry of whichever other family it moves into
  (bare, disc, frame), so copy from that family, not from the plain icon.

Members: CloseAltIcon, StopAltIcon, UserAltIcon, AccessibilityAltIcon,
AlertAltIcon, PinAltIcon, ShareAltIcon, SidebarAltIcon,
SidebarAltToggleIcon, GridAltIcon, ExpandAltIcon, PaintBrushAltIcon,
SwitchAltIcon, StopAltHollowIcon.

Copy from: the plain icon for the concept, the target family's exemplar
for the rendering.

Not for: a new concept (give it its own name), a state (that is `Off`,
`Ignored`, `Hollow` or a Status glyph), or a third rendering; there is
no `Alt2`.

## Off and Ignored negations

Reads as: the thing, crossed out (Off) or carrying a small "minus" badge
(Ignored).

- **Off**: a 1px slash from top left to bottom right, centreline from
  (1.5, 1.5) to (12.5, 12.5), round caps:
  `M1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z`
  (EyeCloseIcon). The thing behind it is cut along the lines 1px either side
  of the centreline (y = x ± 1.414), so a half pixel of clear space
  separates it from the slash; EyeCloseIcon's pupil halves and
  LightningOffIcon's two bolt pieces both stop there. The thing keeps its
  own geometry otherwise (LightningIcon and LightningOffIcon share the bolt).
- **Ignored**: a filled disc of radius 3.5 at (10.5, 10.5) with a minus cut
  out, 8.5 to 12.5 on y 10 to 11:
  `M14 10.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-5.5 0A.5.5 0 019 10h3a.5.5 0 010 1H9a.5.5 0 01-.5-.5z`
  (ContrastIgnoredIcon, AccessibilityIgnoredIcon). The thing behind it is
  cut back to a radius of 4.5 around the badge centre, a 1px gap. The two
  shipped Ignored icons carry a Figma `clipPath`; copy the badge path, not
  the clip.

Members: EyeCloseIcon, LightningOffIcon, ContrastIgnoredIcon,
AccessibilityIgnoredIcon, LinkBrokenIcon (the link's two halves pulled
apart, no slash), UnlockIcon and UnpinIcon (`Un`: the thing in its undone
pose, no slash).

Copy from: EyeCloseIcon (slash), ContrastIgnoredIcon (badge).

Not for: "none" or "empty" (that is a plain shape), "failed" (Status), or
a thing the set does not already have in its "on" form; add the plain icon
first.

## Directional sets

Reads as: a pointer; four or eight of the same shape, one per direction.

- **Arrow**: 1px, round caps, shaft on y 7 from x 0.5 to 12.5, head legs
  4.5 by 4.5 from (8.5, 2) and (8.5, 12) to the tip at (13.5, 7); full width,
  2 to 12 tall (ArrowRightIcon). The diagonal four
  (ArrowTopRightIcon and siblings) are the same arrow turned 45 degrees,
  1.9 to 12.1.
- **Chevron**: 1px, round caps and join, legs 5.5 by 5.5, 4.75 to 11.25 by 1
  to 13 (ChevronRightIcon). **ChevronSmall**: legs 3.5, 4.75 to 9.25 by 3 to
  11 (ChevronSmallRightIcon), the Status size.
- **ArrowSolid**: a filled isoceles triangle about 11 across and 6 deep
  with corner radius .3, ArrowSolidRightIcon 4.5 to 10.3 by 1.4 to 12.6,
  ArrowSolidUpIcon 1.1 to 12.9 by 3.6 to 9.5.
- Make the whole set in one change, each direction the same path rotated
  about (7, 7), and name them `<Shape><Direction>Icon` with Up, Down, Left,
  Right, TopLeft, TopRight, BottomLeft, BottomRight.

Members: ArrowUpIcon and the eight Arrow directions, ChevronUpIcon and the
four Chevrons, ChevronSmallUpIcon and the four ChevronSmalls,
ArrowSolidUpIcon and the four ArrowSolids, SortUpIcon, SortDownIcon,
ExpandIcon, CollapseIcon, PlayBackIcon, PlayNextIcon.

Copy from: ArrowRightIcon, ChevronRightIcon, ChevronSmallRightIcon,
ArrowSolidRightIcon.

Not for: one direction on its own (make the set), or "go" and "back" in a
flow (BackIcon and ProceedIcon exist). DirectionIcon is a compass needle
with a stroke; do not copy it.

## Frames and devices

Reads as: a screen or a panel, drawn as a thin rounded rectangle with a
hint of its chrome.

- **UI frame**: 1px outline, corner radius .5, 12 to 14 on the long side.
  BrowserIcon is 0 to 14 by 1 to 13 with a 2px title bar (inner panel 1 to
  13 by 4 to 12) and three dots of radius .5 at (1.5, 2.5), (3.5, 2.5),
  (5.5, 2.5). SidebarIcon is 1 to 13 square with a 1px divider at x 5 to 6
  (panels 2 to 5 and 6 to 12) and three 1px dashes `h1` at x 3 to 4 on y 4.5,
  6.5, 8.5; SidebarAltIcon mirrors it. BottomBarIcon divides at y 8 to 9,
  StackedIcon at y 7 to 8.
- **Toggle**: the frame plus a 1px arrow in the main panel pointing at the
  side panel (SidebarToggleIcon, BottomBarToggleIcon).
- **Device**: 1px outline, corner radius 1.5, full height. MobileIcon 3 to
  11 by 0 to 13 with a 2px chin (screen 4 to 10 by 1 to 11); TabletIcon 2 to
  12 by 0 to 14 with a 2px home dash `h2` on y 12.5; WatchIcon body 4 to 10
  with 1px strap bars on y 0.5 and 13.5. MobileIcon, TabletIcon and
  WatchIcon ship in a `0 0 14 15` box; draw a new one in 14 by 14.
- A panel inside a frame is at least 3px wide, a chrome band 2px.

Members: BrowserIcon, SidebarIcon, SidebarAltIcon, SidebarToggleIcon,
SidebarAltToggleIcon, BottomBarIcon, BottomBarToggleIcon, StackedIcon,
EditorIcon, ProfileIcon, MobileIcon, TabletIcon, WatchIcon, CPUIcon,
MemoryIcon, DatabaseIcon, QRIcon.

Copy from: BrowserIcon (frame), SidebarToggleIcon (toggle), MobileIcon
(device).

Not for: a document or file (next family), or a plain rounded square with
nothing in it (StopAltIcon is that shape and means stop).

## Documents and lists

Reads as: a page, a card or a list, told by a few short 1px "text" lines.

- **Page**: 1px outline 1 to 13 by 0 to 14 with a dog-ear of about 2.7px
  at the top right (DocumentIcon: the corner runs from (9.8, 0) to
  (12.5, 2.7)). Text lines are 1px with round caps, 6 long, x 4 to 10, on
  y 5.5, 8 and 10.5 (a 2.5px pitch), 2px inside the frame.
- **Card**: DocListIcon is a .5 radius frame 1 to 13 with a 2px header band
  (inner from y 4) and two lines x 3.5 to 10.5 on y 6.5 and 9.5. CommentIcon
  is a bubble 1 to 13 by 2 to 12 with a tail at the bottom left and two lines
  x 3 to 11 on y 5.5 and 8.5.
- **Stack**: FilesIcon and CopyIcon are two pages, the back one offset by
  (5, -3) from the front (front 0 to 9 by 3 to 14, back 5 to 14 by 0 to 11).
- **List**: ListUnorderedIcon has bullets of radius .75 at x 2 and lines 5
  to 13 on y 2.5, 7 and 11.5 (a 4.5px pitch); ListOrderedIcon swaps the
  bullets for 1px digits; MenuIcon is three full bars.
- A text line is never shorter than 3px, and lines in one icon share a
  pitch of 2.5 to 4.5px.

Members: DocumentIcon, DocListIcon, DocChartIcon, BookIcon, FilesIcon,
CopyIcon, CommentIcon, CommentsIcon, CommentAddIcon, ListUnorderedIcon,
ListOrderedIcon, ChecklistIcon, MenuIcon, AlignLeftIcon, AlignRightIcon,
CalendarIcon, FolderIcon.

Copy from: DocumentIcon (page), ListUnorderedIcon (list).

Not for: a screen or panel (frames), or a single line of text as a
formatting command (the Editing group: BoldIcon, ItalicIcon,
ParagraphIcon).

## People and faces

Reads as: a head and shoulders, or a round face with two dot eyes.

- **Bust**: a filled head of radius about 1.5 over filled shoulders.
  UserIcon puts the bust inside the 1px ring (one path, the ring and the
  bust together); UserAltIcon is the bust alone, 1 to 13 wide; UserAddIcon
  adds a plus; UsersIcon overlaps a front bust at the left with a smaller
  one behind at the right, 0 to 14 by 1.9 to 12.4; ProfileIcon puts a small
  bust in a 1 to 13 by 0 to 14 card.
- **Face**: the ring, two eyes of radius 1 at (4.5, 5) and (9.5, 5), and a
  1px mouth: FaceHappyIcon an arc of radius 4.5 about (7, 7) from (3.5, 9)
  to (10.5, 9) through (7, 11.5); FaceNeutralIcon a bar x 4 to 10 on y 9.5;
  FaceSadIcon the arc turned over.
- **Figure**: AccessibilityIcon is the ring with a stick figure, head of
  radius 1 at (7, 3.5), 1px arms and legs; AccessibilityAltIcon cuts the
  same figure from the disc.

Members: UserIcon, UserAltIcon, UserAddIcon, UsersIcon, ProfileIcon,
FaceHappyIcon, FaceNeutralIcon, FaceSadIcon, AccessibilityIcon,
AccessibilityAltIcon, AccessibilityIgnoredIcon.

Copy from: UserIcon (bust), FaceHappyIcon (face), AccessibilityIcon
(figure).

Not for: a role, team or permission that is not a person (draw the
object: LockIcon, KeyIcon, ShieldIcon), or a mood that is really a result
(Status glyphs, PassedIcon and FailedIcon).

## Logos

Reads as: a brand's mark, in one colour, filling the box.

- Traced from the brand's official mark, never redrawn from memory. Cite
  the source (the brand's press or assets page) in the changeset summary.
- Fitted so the longer axis is 12 to 14px and the mark is centred on the
  other: GithubIcon 0 to 14 by 0 to 13.65, StorybookIcon 1.4 to 12.6 by 0.6
  to 13.4, FigmaIcon 2.2 to 11.8 by 0 to 14, ChromaticIcon 0 to 14,
  YoutubeIcon 0 to 14 by 2 to 12.
- One `<path>`, `fill="#000"`, counters cut with `fill-rule="evenodd"`
  (ChromaticIcon's ring and inner shapes are one path). The mark's own
  geometry wins over the `.5` arc idiom; snap only the outer bounding edges
  to whole or half pixels where the mark allows.
- Check the brand's guidelines first: if they forbid a monochrome or
  resized mark, the icon cannot be added.

Members: the Logos group (StorybookIcon, ChromaticIcon, GithubIcon,
GitlabIcon, BitbucketIcon, AzureDevOpsIcon, FigmaIcon, DiscordIcon,
FacebookIcon, TwitterIcon, XIcon, LinkedinIcon, MediumIcon, YoutubeIcon,
GoogleIcon, GDriveIcon, GraphqlIcon, ReduxIcon, VSCodeIcon,
ComponentDrivenIcon) and the OS group (AppleIcon, LinuxIcon, UbuntuIcon,
WindowsIcon, ChromeIcon).

Copy from: GithubIcon (a single filled shape), ChromaticIcon (a shape
with counters).

Not for: a concept that happens to belong to a product (a "pull request"
belongs with BranchIcon and MergeIcon in the Git group, not with GithubIcon), or a product without a public mark.
