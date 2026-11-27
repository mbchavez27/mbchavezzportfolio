# STYLE.md

The design system behind **mbchavezz.dev**, written so any portfolio-style app can reproduce the same look and feel. Recipes are written as Tailwind CSS v4 classes, which is how the original is built. Every value here maps to plain CSS if you use something else.

The style in one line: **a research paper on a stage.** Inside, a quiet, text-first, academic page: numbered sections, hairline rules, small type. Around it, a dramatic frame: a black hero that opens onto red curtains. Maroon is the only accent.

---

## 1. Principles

1. **Direct over decorative.** One header, then the content. No taglines under headings, no sub-headers that repeat the heading, no "Fig." or "Table 1." scaffolding. If a line restates something nearby, cut it.
2. **Text first.** Lists of rows beat grids of cards. Use images only where the image *is* the content (projects, productions, the hats).
3. **One accent.** Maroon (`--primary`) marks numbers, links on hover, the `@` and the current state. Everything else is zinc grey on white, or white on near-black.
4. **Paper conventions, lightly.** Numbered section headings ("1.", "2."), hairline dividers, small caps for quiet labels, and an abstract-style summary sentence.
5. **Numbers come from data.** Counts ("6 projects", "Active since 2024") are computed from the content, never hand-typed, so they can't go stale.
6. **Motion is earned.** Entrances are short fades/slides. The two "big" moments (the hero word field and the portrait glitch) live only in the hero. Everything respects `prefers-reduced-motion`.
7. **Fast is part of the design.** Self-hosted fonts, prerendered HTML, CSS-first entrance animations, no animation library on the critical path. Hold Lighthouse performance at ≥ 0.95.

---

## 2. Tokens

### Colour

| Token | Value | Use |
|---|---|---|
| `--background` | `#ffffff` | Page column |
| `--foreground` | `#0f0f0f` | Body text default |
| `--primary` | `#9b1c1c` | **The** accent: section numbers, hover text, `@`, "Current", stat numbers |
| `--primary-foreground` | `#ffffff` | Text on primary |
| `--muted-foreground` | `#71717a` | Secondary text (zinc-500) |
| `--border` | `#e4e4e7` | Default borders (zinc-200) |
| `--ring` | `#dc2626` | Focus ring |
| `--radius` | `0.625rem` | Base radius (`rounded-md` ≈ 8px is used on images) |
| Hero / navbar / contact | `zinc-950` `#09090b` | The dark band, the navbar, the closing contact section |
| Dark dividers | `zinc-800` | Hairlines on dark |
| Curtain red | `#c80000 → #b50000 → #a40000` | The backdrop behind the column (see §3) |

**The grey ladder on white** (use exactly these, they carry the hierarchy):

| Class | Role |
|---|---|
| `text-zinc-900` | Titles, headings, emphasis |
| `text-zinc-800` | Abstract/summary sentence |
| `text-zinc-700` | Citations, strong body |
| `text-zinc-600` | Lists, table-like values |
| `text-zinc-500` | Subtitles, descriptions, bullets |
| `text-zinc-400` | Meta: dates, roles, labels, tags |

**On dark:** `text-white` for headings, `text-zinc-400` for links and secondary text, `hover:text-white`.

**Accent tints:** `border-primary/10` for image frames and row dividers (`divide-primary/10`), `border-primary/15` for section rules, `bg-primary` for the 1px underline and the drawn rule.

### Typography

Two variable fonts, self-hosted (`@fontsource-variable/*`):

| Role | Family | Tailwind |
|---|---|---|
| Display (headings, titles, numbers) | **Bricolage Grotesque Variable** | `font-display` |
| Body (everything else) | **Public Sans Variable** | `font-body` |
| Code-ish accents (hero word field only) | `ui-monospace, SFMono-Regular, Menlo, monospace` | system |

```css
@theme {
  --font-display: 'Bricolage Grotesque Variable', sans-serif;
  --font-body: 'Public Sans Variable', sans-serif;
}
```

**Scale in use:**

| Element | Classes |
|---|---|
| Hero line (rotating role) | `font-display text-3xl md:text-5xl font-semibold leading-snug text-white` |
| Page title (h1) | `font-display text-2xl md:text-3xl font-semibold text-zinc-900 leading-snug` |
| Section heading (h2) | `font-display text-lg md:text-xl font-semibold text-zinc-900` |
| Group heading (h3) | `font-display text-base font-semibold` |
| Row / card title | `font-display text-[15px] md:text-base font-semibold text-zinc-900 leading-snug` |
| Abstract sentence | `font-display text-lg md:text-xl text-zinc-800 leading-snug` |
| Body / description | `font-body font-light text-sm text-zinc-500 leading-relaxed` |
| Meta (dates, roles) | `font-body font-light text-xs text-zinc-400 tracking-wide` |
| Quiet label | `font-body text-xs uppercase tracking-wide` (or `tracking-widest` for links) |
| Small-caps label | `[font-variant:small-caps] tracking-wide` |

Rules:
- **Weights:** `font-light` for body, `font-semibold` for display. Avoid bold body text, except to mark *your* name in a citation.
- **Numbers:** always `tabular-nums`.
- **Titles:** no trailing periods in titles or headings.

### Spacing and layout

- **Column:** a single centred white column, `max-w-6xl` (72rem), `min-h-screen`, with `lg:shadow-2xl` against the curtains.
- **Content gutter:** the `page-container` utility. Use it on every section so content lines up with the navbar.

```css
@utility page-container {
  max-width: var(--container-6xl);
  margin-inline: auto;
  padding-inline: --spacing(6);
  @variant sm { padding-inline: --spacing(10); }
  @variant md { padding-inline: --spacing(16); }
}
```

- **Meta column:** list rows use a fixed **8rem** left column (`sm:grid-cols-[8rem_1fr] gap-x-6`). Reuse that width anywhere you put a label beside content, so every list on the site lines up vertically.
- **Section rhythm:** heading block `pt-10 pb-4`, list rows `py-3.5`, section bottoms `pb-16`.

---

## 3. The frame (the stage)

This is the signature, and it makes the site recognisable.

**Backdrop.** A `fixed inset-0 -z-10 bg-zinc-950` layer sits behind the white column. It holds two half-width panels, each `bg-curtain` with a `bg-black/40` overlay. The panels slide in from the screen edges like curtains closing, driven by scroll:
- On pages that open on the dark hero, the backdrop starts **black** (the hero blends into it and reads as full width).
- From the first pixel scrolled, the curtains slide in (translateX −100% → 0 and 100% → 0), on a spring (`stiffness 420, damping 46, mass 0.5`).
- Content pages start with the curtains already closed.
- The column's shadow only fades in with the red (`rgb(0 0 0 / 0.25 × red)`), so it never shows as a halo on black.

```css
/* Fitted to the original photo, so it costs no download. */
@utility bg-curtain {
  background:
    radial-gradient(56% 187% at 47.5% 17.7%, rgb(0 0 0 / 0) 38.2%, rgb(0 0 0 / 0.069) 100%),
    linear-gradient(to bottom, #c80000, #b50000 36%, #a40000);
}
```

Use a fixed element, not `background-attachment: fixed`, because iOS Safari ignores the latter. Set `html { background: zinc-950; overscroll-behavior-y: none }`, so any overscroll shows black.

**Navbar.** `sticky top-0 z-50 bg-zinc-950`, `h-14`, inside `page-container`, with a 1px `bg-zinc-800` divider under it.
- Wordmark: `font-display text-base font-semibold tracking-tight text-white`, with a maroon `@` prefix (`<span class="text-primary">@</span>handle`).
- Links: `font-body text-sm font-light text-zinc-400 hover:text-white`, with a 1px `bg-primary` underline that grows from `w-0` to `w-full` on hover (`transition-all duration-200`).
- Mobile: a menu button opens a `border-t border-zinc-800` panel. Group labels are `text-xs tracking-widest uppercase text-zinc-600`, and nested links get an `border-l border-zinc-800 pl-3` indent.

---

## 4. Components

Each recipe is what the site actually ships. Names match the source components.

### Page title: `PageHero`
Just the `h1` (scale above) in `page-container mb-3`, fading in on load. **Nothing under it.** The content starts immediately: no subtitle, no tagline, no "1. Overview" heading that repeats the title.

### Section heading: `SectionHeading`
```html
<div class="border-t border-primary/15 pt-10 pb-4">
  <h2 class="font-display font-semibold text-zinc-900 text-lg md:text-xl">
    <span class="text-primary tabular-nums mr-2">1.</span>Selected Work
  </h2>
</div>
```
- Numbered like a paper ("1.", "2.", or "1.1." for an h3 group).
- The hairline is dropped (`divider={false}`) on a section that directly follows the dark band.
- **No subtitles.** If a heading needs explaining, rename it.
- Names are plain and short: "Currently", "What I Do", "Selected Work", "Latest Logs", "Contact". Avoid slogans.

### List row: `EntryRow` + `EntryList`
The default way to show anything with a date or label: experience, education, logs.
```html
<ul class="divide-y divide-primary/10">
  <li class="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-6 gap-y-1 py-3.5">
    <div class="font-body font-light text-xs text-zinc-400 tracking-wide sm:pt-0.5">Oct 2026 – Present · 2 mos</div>
    <div>
      <h3><a class="group inline-flex items-baseline gap-1.5 font-display text-[15px] md:text-base font-semibold text-zinc-900 hover:text-primary">
        DevOps Engineer Intern
        <!-- arrow: opacity-0 -translate-x-1 → group-hover:opacity-100 translate-x-0 -->
      </a></h3>
      <p class="font-body font-light text-sm text-zinc-500 mt-0.5"><span class="text-primary">@</span> Org · Internship</p>
    </div>
  </li>
</ul>
```
- The meta column holds **only** the date or label. Put status on the title (see the Current tag).
- Linked titles get a 14px `ArrowRight` (internal) or `ArrowUpRight` (external) that fades and slides in on hover.
- Organisations are prefixed with a maroon `@`.
- Bullets inside a row use a maroon em dash: `<span class="text-primary">—</span>` in a `flex gap-3` line.
- On mobile the meta stacks above the content.

### Current tag: `CurrentLabel`
Status for anything ongoing. It replaces dots, pulses and badges.
```html
<span class="ml-1.5 font-body text-[10px] font-medium uppercase tracking-[0.14em] text-primary">Current</span>
```
It sits inline after the title. Past items get no marker at all.

### One-line highlight: Selected Work
For a short "best of" list: label · title · one fact, nothing else.
```
sm:grid-cols-[8rem_1fr_auto] items-baseline gap-x-6 py-3.5
[ role, xs zinc-400 ] [ linked title + hover arrow ] [ fact, sm zinc-500, right-aligned ]
```
On mobile it stacks as label, title, fact.

### Image card: `Figure` + `FigureGrid`
Only where the picture matters.
```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
  <figure>
    <a class="group block aspect-[4/3] overflow-hidden rounded-md border border-primary/10 hover:border-primary/40">
      <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]">
    </a>
    <figcaption class="mt-3">
      <a class="font-display font-semibold text-zinc-900 hover:text-primary">Project →</a>
      <p class="font-body text-xs text-zinc-400 mt-0.5 truncate">Role · Date</p>          <!-- optional meta -->
      <p class="font-body font-light text-sm text-zinc-500 leading-relaxed mt-1.5">…</p>  <!-- ExpandableText -->
    </figcaption>
  </figure>
</div>
```
- **Never** add a coloured label line above the title, a tag line, a "Fig. N." prefix, or a bracketed `[case study]` link. The image and title already link.
- Descriptions use **ExpandableText** (next).

### ExpandableText
Clamps a description to 3 lines with a soft white fade over the last line. On hover, keyboard focus or tap, it eases open to its full height and the fade clears.
- `max-height` animates from `4.27rem` (3 × text-sm × leading-relaxed) to the measured `scrollHeight`, with `transition-[max-height] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]`.
- The fade is an `::after` gradient `from-white to-transparent`, `h-6`, whose opacity goes to 0 on open.
- Overflow is detected by comparing `scrollHeight` with **3 × line-height**, not with the current height, which grows while the text is open. Re-measure on `document.fonts.ready` and on hover.
- Text that fits gets no fade and no behaviour.
- `motion-reduce:transition-none`.

### Abstract summary: `AtAGlance`
The top of a collection page (Papers, Engineering, Productions). It replaces stat tables and KPI grids with one sentence, set like the opening line of a paper's abstract:
```html
<section aria-label="Projects at a glance" class="page-container mt-4 mb-10">
  <p class="font-display text-lg md:text-xl text-zinc-800 leading-snug max-w-2xl">
    <strong class="font-semibold text-primary tabular-nums">6</strong> projects across
    <strong class="font-semibold text-primary tabular-nums">3</strong> domains, built with
    <strong class="font-semibold text-primary tabular-nums">13</strong> tools and practices.
  </p>
  <p class="font-body font-light text-sm text-zinc-500 leading-relaxed mt-3 max-w-2xl">
    <span class="font-medium text-zinc-700">Keywords</span> — Scalable Systems, TypeScript, …
  </p>
</section>
```
- Numbers are computed and pluralised ("1 project" / "6 projects").
- Keywords are deduplicated.

### Glossary: `RolesCapabilities`
A `dl` in `md:grid-cols-2 gap-x-10`. Each item is `border-t border-primary/10 py-4`, with a maroon `text-xs tabular-nums` index, a display-font term, and a `pl-7` light definition.

### Skills matrix: `TechnicalStack`
- Categories sit side by side between a `border-t-2 border-zinc-900` top rule and a `border-b border-zinc-300` bottom rule.
- Each column is `border-l border-primary/20 pl-4`, with a small-caps lowercase heading plus a maroon `<sup>` count. Items are `text-sm font-light text-zinc-600 leading-7` and turn maroon on hover.

### Citation
`Authors (Year). Title. In Venue.`
- Your name is in `<strong class="font-semibold text-zinc-900">`.
- The title is set in the display font, semibold.
- The venue is in `<em>`.
- An `Oral` / `Full paper` label goes in the row's meta column.

### Tags
`font-body font-light text-xs border px-2 py-0.5`, in `border-zinc-200 text-zinc-400` on white or `border-zinc-700 text-zinc-400` on dark. Square corners. Use sparingly. Inline lists usually read better as `A · B · C`.

### "More" link: `MoreLink`
It closes a section, aligned right: `text-xs tracking-widest uppercase text-zinc-500 hover:text-primary` with a 12px arrow that nudges `translate-x-1` on hover.

### Contact band
The closing section is dark (`bg-zinc-950 py-16`). It holds:
- a numbered white heading
- an author-block layout, set like the correspondence block on a paper: `grid sm:grid-cols-[1fr_1.4fr]`, between a `border-t-2 border-zinc-200` top rule and a `border-b border-zinc-700` bottom rule
- your name in white, the affiliation in italic `zinc-300`, and the location in `zinc-500`.

---

## 5. The hero

The one place the site performs. It's a dark band (`bg-zinc-950`, `min-h-[calc(100svh-3.5rem)]`, content centred) that sets the backdrop to black while it's on screen. In order:

1. **Glitch portrait.** A square photo (`w-44 sm:w-52 md:w-60 aspect-square rounded-2xl bg-zinc-900`).
   - Hover, or tap on touch, swaps to a second photo through a 650ms glitch: torn slices, red/cyan RGB-split clip-path slices, a skew shake, a colour jolt, noise bars, scanlines and a white flash.
   - All of it is `steps(1)` CSS keyframes.
   - With reduced motion, it does a plain 200ms crossfade instead.
2. **A small line:** `Est. 2005 · 21 years in` (`text-zinc-400 text-sm md:text-base font-light tracking-wide`).
3. **Rotating role (h1).**
   - It cycles through the roles every 3.6s. Each change *decodes*: characters flicker through `!<>-_/[]{}=+*^?#%&$` and settle roughly left to right over 1.1s.
   - It ends with a maroon period. Its height is reserved so nothing jumps.
   - Screen readers get the full sentence once. Reduced motion shows the full sentence, static.
4. **A drawn rule:** 1px `bg-primary` that grows from 0 to 32px.
5. **Name** in `uppercase tracking-[0.18em] text-zinc-400`.
6. **Links:** an icon plus light `text-sm` label in `zinc-400 → white`.

**Word field (the backdrop of the hero).**
- **What it shows:**
  - A single 2D `<canvas>` behind the content, with about 20–60 words, each appearing once.
  - The words are **only terms from your own work**: project and production titles, paper venues, research areas, focus languages and disciplines. No generic filler.
  - Words drift slowly upward at depths z ∈ [0.3, 1]. Depth sets the size (10–15px monospace) and opacity (0.04–0.16 white). About 13% of words are maroon.
  - The field tilts gently against the pointer (≈14px × z).
- **Interaction:**
  - Within 140px of the cursor, words drift aside, brighten, and scramble with the *same* glyph set as the role line, then decode left to right.
  - A click or tap sends a faint maroon ring outward (1.1s) that garbles the words it crosses.
- **Readability:** a radial vignette (`ellipse 38% 50%`, zinc-950 at 0.97 → 0.85 → transparent) keeps the centre clear behind the copy.
- **Rules (keep these, they're what makes it cheap):**
  - Pointer events are read from the parent section, and the canvas is `pointer-events-none` + `aria-hidden`.
  - It starts in `requestIdleCallback`, after the largest contentful paint.
  - It pauses off-screen (`IntersectionObserver`) and in background tabs.
  - DPR is capped at 2.
  - Per-frame state lives in plain objects, never in framework state.
  - Reduced motion draws one static frame and attaches no listeners.

---

## 6. Motion

| Pattern | Spec |
|---|---|
| On-load entrance (above the fold) | **CSS keyframes**, so it runs before JS. Fade + `translateY(16–20px)`, 0.6s `cubic-bezier(0.25, 0.1, 0.25, 1)`, staggered 0.1–0.75s |
| LCP image entrance | Slide + `scale(0.97)` **without** a fade (a fade delays the largest paint) |
| Scroll reveal | Fade + `y: 12–20px`, 0.45–0.6s, list stagger `0.05s × index` (capped at 6) |
| Hover colour | `transition-colors duration-200` |
| Hover arrow | `opacity-0 -translate-x-1` → `opacity-100 translate-x-0`, 200ms |
| Image hover | `scale-[1.02]` over 500ms, border `primary/10 → primary/40` |
| Underline | `w-0 → w-full`, 200ms |
| Expand | `max-height`, 500ms, same cubic-bezier |
| Scramble | Glyph refresh every 45–55ms, settles left to right |

Use a `usePrefersReducedMotion` that reports `false` on the server and during hydration, then the real preference, so prerendered markup always matches.

---

## 7. Content and voice

- **Headings:** plain nouns ("Selected Work", "Latest Logs"). No slogans ("Three hats. One portfolio.") and no trailing periods.
- **Descriptions:** one sentence, concrete, with one number when you have a real one ("22,000+ students"). Cut adjectives like "modern", "intuitive" and "seamless" before they reach a card.
- **Status:** "Current" tag on ongoing items. Dates read `Oct 2026 – Present · 2 mos` (en dash, middle dot, LinkedIn-style duration).
- **Separators:** a middle dot ` · ` between facts, an en dash `–` in ranges, an em dash `—` before keywords and in bullets.
- **Lists of tags:** prefer `A · B · C` text over chip rows.
- **Numbers:** derived from data, pluralised, `tabular-nums`, maroon when they're the point of the sentence.

---

## 8. Accessibility and performance checklist

- [ ] Every page has exactly one `h1`. Sections are `h2`, groups are `h3`.
- [ ] Decorative layers (canvas, vignettes, glitch slices, backdrop) are `aria-hidden` and `pointer-events-none`.
- [ ] Animated text has a static screen-reader version.
- [ ] Everything has a `prefers-reduced-motion` path: static or a simple fade.
- [ ] Hover-only reveals also work on focus and tap.
- [ ] Contrast meets WCAG AA. On the dark hero, secondary text is `zinc-400`, not darker.
- [ ] Fonts are self-hosted, and the hero image is preloaded and sized to its display.
- [ ] Pages are prerendered to static HTML. Entrance animations are CSS. Heavy effects start on idle.
- [ ] Images are WebP, `loading="lazy"` below the fold.
- [ ] Lighthouse: performance ≥ 0.95, accessibility ≥ 0.9.

---

## 9. Quick start for a new app

1. Install Tailwind v4, `@fontsource-variable/bricolage-grotesque` and `@fontsource-variable/public-sans`.
2. Copy into your global CSS:
   - the colour tokens (§2)
   - the `@theme` fonts
   - the `page-container` and `bg-curtain` utilities
   - the three on-load keyframes (`reveal-on-load`, `settle-on-load`, `draw-rule`)
3. Build the frame: a fixed black/curtain backdrop, the `max-w-6xl` white column, and the sticky `h-14` zinc-950 navbar with the maroon `@` wordmark.
4. Compose pages from:
   - **PageHero** (title only)
   - **AtAGlance** (one sentence + keywords)
   - **SectionHeading** (numbered)
   - **EntryRow** lists, or **Figure** grids when images matter
5. Close with the dark contact band.
6. If the app has a landing hero, use the dark band: a portrait, a decoding role line, a drawn maroon rule, and a word field built from *that app's own* vocabulary.
