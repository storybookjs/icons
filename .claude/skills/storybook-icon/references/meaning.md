# Meaning first

An icon in this set is a promise that a shape will mean one thing to the
people who see it, at 14px, usually without a label. The drawing is the
easy part. This file is what you do before drawing: write the semantic
brief, run the disambiguation checklist while you write it, and ask the
user to confirm. Nothing is drawn before they have.

## The semantic brief

Nine lines, written in chat, in the product's words. The example is for
the request "add an icon for a flaky test", and shows the depth each line
needs: one sentence, a product person can answer it in a minute.

- **Means:** the concept in one line, naming the product sense when it
  differs from the everyday one ("a story's tests passed", not "a check").
  *Example:* a story whose tests pass and fail across runs with no code
  change; the test addon's "flaky" result, a third outcome beside pass and
  fail.
- **Used:** where it sits, at what size, beside which existing icons,
  interactive or decorative, with or without a text label.
  *Example:* the sidebar status column and the test panel, at 14px, in a
  column with StatusPassIcon, StatusFailIcon and StatusWarnIcon; decorative,
  with a tooltip and no visible label.
- **Shape I'd draw:** one line.
  *Example:* a Status glyph: a 1px wave (a tilde) across the 8 by 8 Status
  box, the weight of StatusPassIcon's check.
- **Also reads as:** the other things this shape means (shape polysemy).
  *Example:* "approximately", a water or signal wave, vibration, a range
  dash in East Asian typography, "meh".
- **Who may read it differently:** by culture or region, by generation or
  personal experience, by context inside the product.
  *Example:* readers of Japanese or Chinese see a wave dash (a range or an
  elongated vowel) before "unsteady"; anyone who has used "~" for "roughly"
  may read it as an approximate result; in the test panel, next to timing
  numbers, it may read as "about this long".
- **Already in the set:** the nearest icons by meaning and by shape, and why
  this is neither a duplicate nor a collision.
  *Example:* by meaning, StatusWarnIcon (a warning, which flaky is not) and
  SyncIcon or RefreshIcon (a rerun, which is the remedy, not the state); by
  shape, nothing waves; the set has no tilde.
- **Siblings implied:** Hollow, Off, Ignored, Alt, a direction that mirrors
  in right-to-left layouts.
  *Example:* none now; a bare twin at toolbar size if a "flaky tests"
  filter ever needs a button. The wave is symmetric, so nothing mirrors.
- **Alternatives:** one or two other shapes with the same notes, a line
  each.
  *Example:* (a) a check whose right half becomes a cross, split on the
  diagonal: reads as "mixed results", but at 8px the two halves blur into
  StatusFailIcon; (b) a check with a small circular arrow: reads as "passed
  after a retry", hides the failure and borrows RefreshIcon's meaning. A die
  (chance) was rejected: it reads as gambling or a game, and as "random"
  rather than "intermittent".
- **Name and group:** *Example:* StatusFlakyIcon in the Communicate group,
  after StatusWarnIcon; the Status prefix is how the set names a state
  glyph drawn in the Status box (FlakyTestIcon would name a thing).

## The disambiguation checklist

Answer each while writing the brief. The examples are this set's own
icons; render them and look, do not reason from their names.

### Shape polysemy

Every simple shape means several things, and the set already owns some of
those meanings. A magnifier is SearchIcon and ZoomIcon here, told apart by
ZoomIcon's plus. A pin is a map pin (PinIcon) and a push pin (PinAltIcon):
"pin this story" wants the push pin. FlagIcon is one flag; a flag also
means report, bookmark, milestone, feature flag or a country. EyeIcon is
visibility, and also surveillance. BellIcon is a notification or an alarm.
StarIcon is favourite, rating, "new" or a religious symbol; HeartIcon is
like, favourite or health; LockIcon is security, private or read-only;
ShieldIcon is protection or police; LightningIcon is speed, a camera flash,
electricity or a keyboard shortcut; CheckIcon is done, selected, correct or
passed; CrossIcon is close, remove, wrong, failed or a religious symbol;
GlobeIcon is the web, "public" or language. Write every reading your shape
has into "Also reads as", then decide whether the "Used" line settles it.

### Concept polysemy

Product words have an everyday sense too: story, build, snapshot,
component, controls, flag, sweep, changed. Say which one you mean.
ChangedIcon sits with PassedIcon and FailedIcon as a snapshot result, not as
"edited". ControlsIcon is the Controls addon, not settings. ComponentIcon is
a component node in the sidebar, not "a part". BeakerIcon is tests, not
chemistry. A brief that says "flag" without saying feature flag or report
flag has not said anything yet.

### Culture and region

Reading direction: BackIcon, ProceedIcon, the chevrons, UndoIcon and
ReplyIcon mirror in right-to-left layouts; PlayIcon does not, because a
play button points forward everywhere. Say in "Siblings implied" whether
yours mirrors. Hand gestures: ThumbsUpIcon exists and is offensive in some
regions; add no new gestures. Animals, religious and national symbols
(crosses, stars, crescents, flags, maple leaves) read differently by
country. In some schooling traditions a circle marks a correct answer and a
check marks a wrong one, so a check is not universally "right"; the set
leans on it anyway, and a new icon should not lean harder. Mailbox, house
and trash-can shapes differ by country (HomeIcon, EmailIcon and TrashIcon
are the set's compromises, use them rather than redraw them). Letters and
currency: BoldIcon and ItalicIcon are Latin letters already in the set; add
no more letters unless the thing is the letter.

### Generation and personal experience

Skeuomorphs fade. SaveIcon is a floppy disk and PhoneIcon a handset, and
they work because the set uses them consistently and the whole industry
still does. A new skeuomorph (a film camera, a cassette, a rolodex) is
risky: say in "Who may read it differently" who has never held the object.
Personal experience cuts the other way too: a shape tied to a bad memory
(a siren, a syringe, a scale) reads as the memory first.

### Context of use inside the product

The same shape reads differently in a password field, a toolbar, a status
column, a chip and a map: EyeIcon in a password field means "show the
password", in a story list "this story is visible", in a settings page
"watch". DeleteIcon, a ring with a slash, is the prohibition sign in a
toolbar and "deleted" in a status column. The "Used" line is what makes
the shape decidable; without it the brief is a guess about where the icon
will live, and the two baseline runs of this skill both guessed.

### Collisions and duplicates

List what the set already means by the shape you want, and what it already
uses for the meaning you want. A collision is the set using your shape for
something else (a bare check is CheckIcon; a check in a ring is
PassedIcon; a small check is StatusPassIcon). A duplicate is the set
already having your meaning under another shape (if "retry" is wanted,
RefreshIcon and SyncIcon are already there). Render the nearest three to
six with `scripts/render.mjs` and put the result in "Already in the set".

### Pairs and states

Does the concept have a negation, an opposite or a toggled state? Then
design both now, in the set's way: a slash for Off (EyeIcon and
EyeCloseIcon, LightningIcon and LightningOffIcon), a badge for Ignored
(ContrastIcon and ContrastIgnoredIcon), Hollow for unselected (StarIcon and
StarHollowIcon), or a drawn pair (LockIcon and UnlockIcon, LinkIcon and
LinkBrokenIcon). An icon whose "off" state is drawn later, by someone else,
rarely matches.

### Colour carries nothing

The set is one colour and the host application recolours it: a red cross
and a green check are the same black path here. The shape alone must carry
the meaning. If your concept only works in red (danger, stop, a live
recording), say so in "Also reads as" and make the shape do the work.

## The confirmation

One question, asked after the brief and before any drawing. Its parts:

- the question names the icon's meaning and place in one sentence, from
  the "Means" and "Used" lines;
- the first option is the shape you recommend, with "(Recommended)" at the
  end of its label, and its description is the one reading of it that
  matters most;
- every alternative from the brief is an option, its trade-off as the
  description;
- the last option is "Describe it differently", so the user can send the
  brief back in their own words.

With the question tool (AskUserQuestion in Claude Code), the options are
the shapes. The tool takes at most four options, which is why the brief
carries at most two alternatives; a third shape goes in the "Alternatives"
line as rejected, with its reason:

```
question: "Which shape should the flaky-test status glyph take? It sits in
           the sidebar status column at 14px beside the pass, fail and warn
           marks, with a tooltip and no label."
header:   "Shape"
options:
  - label: "Wave (Recommended)"
    description: "A 1px tilde across the Status box: reads as unsteady;
                  also reads as 'approximately'. Nothing in the set uses it."
  - label: "Half check, half cross"
    description: "Reads as mixed results; the halves blur into
                  StatusFailIcon at 8px."
  - label: "Check with retry arrow"
    description: "Reads as passed after a rerun; hides the failure and
                  borrows RefreshIcon's meaning."
  - label: "Describe it differently"
    description: "Tell me the meaning, place or shape in your own words."
```

Without the tool, write the same list in chat, numbered, the recommended
shape first and marked, end with the question, and stop the turn.

What counts as approval:

- A chosen option approves that shape, with the name, group and "Used"
  line of the brief as shown. If the chosen alternative changes the name or
  group, restate those two lines and go on; it needs no second question.
- "Sounds good", "yes", "go ahead" approve exactly what was shown, nothing
  else.
- A new meaning, a new place or a new audience is not an answer; rewrite
  the affected lines of the brief and ask again.
- A question from the user is a question. Answer it, then ask again.
- No answer is no approval. Stop; do not draw.
