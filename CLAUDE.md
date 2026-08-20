# restuu.github.io

Agent-facing build/maintenance notes for this repo. For the human-readable project
overview (what the site is, live URL, how to run it), see [`README.md`](README.md).

Muhammad Restu Utomo's personal site: a portfolio (`index.html`) combined with a
**self-learning platform** (`learning/`) — a growing library of deep-dive engineering
topics, one topic at a time. Each topic is a single self-contained page that starts
with a plain description of what the thing is and what it is for, then goes deep with
a worked example carried end to end plus an animation where movement explains it
better than prose.

**Currently available topic: the query engine** (Topic 01 · Foundations). It follows
one SQL query through eight stages — parse and bind, logical plan, statistics,
optimize, physical operators, execution model, columnar and pushdown, distributed
execution — contrasting a transactional engine (Postgres/MySQL) with an analytical
one (DuckDB, ClickHouse, Trino, Polars) at every stage. Topics 02–05 (columnar file
formats, DataFrame engines, indexing, memory management and spilling) are listed on
the library page as planned, not yet written.

## Layout

```
index.html              Portfolio / about-me home page. Entry point (GitHub Pages root).
support.js               The `dc-runtime` — parses <x-dc> and renders it. Generated; do not edit.
_ds/broadsheet-.../      The "Broadsheet" design system, shared by every page on the site.
  styles.css               Design tokens + component classes. Source of truth for the look.
  _ds_bundle.js            Compiled system JS (inlines print-plates.js — the CMYK plate SVG filters).
  readme.md                How to use the system: tokens, components, do/don't. Read before styling.
learning/                The learning platform, one level down from the site root.
  library/index.html       Topic index. Links back to ../../index.html.
  query-engine/index.html  Topic 01. Links back to ../library/.
certificates/             PDF certificates linked from index.html's Certifications section.
```

Each topic lives in its own directory, `learning/<topic-slug>/index.html`, so it's
served at a clean URL (e.g. `learning/library/`, `learning/query-engine/`) with no
internal file extension or filename spaces exposed. These pages reference
`../../support.js` and `../../_ds/...` — two levels up, since each topic page now
sits one directory deeper than the `learning/` folder itself. If you move a topic page
in or out of its `learning/<slug>/` directory, fix the depth of every relative path
(`../../` ↔ `../` ↔ none) accordingly.

Previously this subtree mirrored the standalone `me_learning_code` Claude Design
project's paths flat (no subdirectories), so it could round-trip via the
`claude_design` MCP (`DesignSync`) into that project. Moving to per-topic directories
for clean URLs breaks that flat-mirror assumption — DesignSync round-tripping for
`learning/` is no longer expected to work as-is. Anyone wanting to resume that
workflow needs to reconcile the new directory structure against the `me_learning_code`
project first. `index.html` and the shared `_ds/`/`support.js` at the repo root were
never part of that round-trip.

## How the pages work

These are **Design Canvas documents**, not plain HTML, regardless of what their
filename or extension looks like — `index.html` at the site root has always been one,
and the learning pages now are too, each named literally `index.html` inside its own
`learning/<slug>/` directory so GitHub Pages serves it at that directory's clean URL.
Each page is:

- `<script src="./support.js">` (or `../../support.js` under `learning/<slug>/`) in
  `<head>` — the runtime. It injects React 18 UMD from unpkg **at page load**, so pages need
  network access. (Babel standalone is also fetched, but only lazily for
  `x-import`ed JSX modules — no page here uses that.)
- `<x-dc>` — the template. Inside it, `<helmet>` carries the stylesheet/font/bundle
  links, and the markup uses runtime directives:
  - `{{ expr }}` — bind to a value from `renderVals()`
  - `<sc-for list="{{ items }}" as="item">` — repeat
  - `<sc-if value="{{ flag }}">` — conditional
  - `onClick="{{ handler }}"`, `style-hover="..."` — events and hover styles
- `<script type="text/x-dc" data-dc-script data-props="...">` at the end of `<body>` —
  a `class Component extends DCLogic` with `state`, lifecycle methods, and
  `renderVals()` returning everything the template binds to. `data-props` declares
  editor-tunable props (`playbackMs`, `showRedFlags` on the query engine page).
  `index.html` and `learning/library/index.html` are static and skip this script
  entirely.

The query engine page's `Component` holds `{ step, playing }` and drives the
eight-stage walkthrough: Play/Back/Step/Reset buttons, a clickable stage rail, and
`is1`…`is8` booleans selecting which `<sc-if>` panel shows.

## Running it

Serve over HTTP from the repo root — do not open with `file://`:

```bash
python3 -m http.server 8787
# then http://localhost:8787/index.html
# or    http://localhost:8787/learning/library/
```

## Conventions

- **This site must work on mobile.** There is no separate mobile stylesheet and no
  `@media` breakpoints in use — layouts are expected to reflow with fluid CSS instead.
  Concretely: never split a section into a fixed-ratio two-column
  `grid-template-columns` (e.g. `minmax(0, 1.3fr) minmax(0, 0.7fr)`) or a grid with a
  hard pixel track (e.g. `380px minmax(0, 1fr)`) — both hold their column count at any
  viewport width and either crush or overflow on a phone. Use
  `grid-template-columns: repeat(auto-fit, minmax(<px>, 1fr))` instead, so columns
  collapse to one per row once the viewport can't fit them side by side (this is
  already the pattern most of the site's grids use). Give large display headings
  (anything above ~40px) a `clamp(<min>, <vw>, <max>)` font-size rather than a bare
  px value, and add `flex-wrap: wrap` to any flex row that could hold more content
  than a narrow screen's width (nav bars, button groups, tag lists). Check any new
  section at a ~380–400px container width before considering it done — the design
  system ships no device emulation helper, so simulate it by cloning the page's root
  content div into a fixed-width absolutely-positioned wrapper via a scratch
  `javascript_tool` snippet and screenshotting that, rather than trusting a resized
  browser window (window-resize does not reliably reach the real viewport in this
  environment).
- **Never hard-code a hex, font name, px value, radius or shadow.** Take them from the
  Broadsheet tokens: `var(--color-*)`, `var(--font-*)`, `var(--space-*)`,
  `var(--radius-*)`, `var(--shadow-*)`. `_ds/.../readme.md` is the reference.
- Broadsheet is newsprint: Source Serif 4 throughout (no sans-serif for chrome),
  paper-white ground, cyan `--color-accent` for interactive elements, magenta
  `--color-accent-2` as the rarer second spot. Separate sections with whitespace, not
  rules, borders or boxes. Reserve `.card` for genuinely discrete listings.
- Body copy in the accent uses a deep ramp step (`--color-accent-700`); the base accent
  only clears 3:1 against the ground, which is enough for chrome and large text only.
- Do not edit `support.js` or `_ds_bundle.js` — both are generated.
- **Favicon.** Unless told otherwise, every new HTML page gets the same favicon as
  `index.html`: copy its `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,...">`
  tag from `index.html`'s `<helmet>` verbatim into the new page's `<helmet>` (same
  position as the stylesheet link). It's an inline SVG data URI — a cyan
  (`--color-accent`) circle, a paper-white (`--color-bg`) serif "R", and a small
  magenta (`--color-accent-2`) dot — not a binary `.ico` file, so there's nothing to
  generate or convert; just reuse the tag as-is.
- **Stages vs. sections.** A *stage* in the numbered walkthrough (the `STAGES` array,
  `is1`…`isN` flags) models a step the query travels through in sequential order.
  Only add one when the content is genuinely a sequential step — inserting a stage
  means renumbering every stage after it (the array, the flags,
  `hint-placeholder-count`, and every stage-numbered cross-reference in prose). A
  cross-cutting or reference topic (how indexes work, a diagnostics checklist) belongs
  in its own standalone `<section>` instead, styled like the query engine page's
  "First: OLTP and OLAP" or "Red flags in a query profile" sections — no renumbering,
  no animation. Default to a section; treat a new stage as the exception.
- Write for a human reader first: explain jargon inline the first time it appears (as
  the query engine page does for terms like *cardinality* or *selectivity*), and prefer
  a plain sentence over a denser one. A reader should never need to leave the page to
  follow a sentence.

## Adding a topic

1. Create `learning/<topic-slug>/index.html` (lowercase-kebab-case slug, e.g.
   `learning/columnar-formats/index.html`), copying the structure of
   `learning/query-engine/index.html` (head → `<x-dc>` → `<helmet>` → content →
   `data-dc-script`), including the favicon `<link>` (see Conventions above).
2. Fix the relative paths for the new directory depth: `../../support.js` and
   `../../_ds/...` (two levels up from `learning/<topic-slug>/`, not one).
3. Link back to the index with `<a href="../library/">← Library</a>` and label the
   topic number in the kicker.
4. Move the topic's card in `learning/library/index.html` from "Planned next" into
   "Ready to read", matching the existing anchor markup, with its link pointing to
   `../<topic-slug>/`.

Whenever content is added to a topic (a claim, stat, example, or explanation sourced
from elsewhere), include a link to the source alongside it. Uncited claims should not
be added.

## About-me content

`index.html`'s career facts (roles, dates, education, skills) are sourced from
[LinkedIn](https://www.linkedin.com/in/muhammad-restu-utomo-75478513b) plus direct
corrections from Restu. When updating them, keep the source note at the bottom of the
page current and prefer what Restu tells you directly over what LinkedIn shows, since
LinkedIn can lag behind an actual job change.
