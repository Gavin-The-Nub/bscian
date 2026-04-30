# BSC Phase 1 — Design Audit
**Five Fold Industries · April 2026**

Audit subject: `app/tap-to-shower/page.tsx`, `app/page.tsx` flagship block, `app/contact/page.tsx`, shared components.
Reference: [docs/ui-journey-skill.md](./ui-journey-skill.md)

---

## Summary

**13 tickets total: 3 CRITICAL, 3 HIGH, 5 MEDIUM, 2 LOW.**

The TTS page in its current form is a SKU catalogue, not a journey. Three of the five arc positions (Understanding, Identification, Action) are missing entirely. The hero fails the 5-second test. The form is not on the page. Once those three CRITICALs land, the HIGH and MEDIUM tickets are about giving Calibri the room to breathe, removing inconsistencies that betray multiple authors, and tightening the H2 narrative.

---

## CRITICAL

### DESIGN-001 · CRITICAL · Journey
**TTS hero fails the 5-second test.**

**ISSUE**
At `app/tap-to-shower/page.tsx` the hero shows: overline "The Shower Experience Redefined" → H1 "Tap-to-Shower Collection" → a 4-line subhead → image. There are no CTAs. A retail buyer scanning the hero in five seconds reads "Tap-to-Shower Collection" — a product name they have never heard of — and a poetic overline that says nothing concrete. The retrofit concept (cold-only → hot+cold) is buried in line 2 of the subhead behind "engineered to transform standard cold-only installations into luxurious hot & cold shower experiences with minimal disruption." That sentence is a paragraph, not a claim. By the time the visitor parses it they have already decided to leave. There is also no path: no primary CTA, no secondary CTA, nothing to click. The hero is the most expensive square footage on the page and it is doing nothing.

**FIX**
Rebuild the hero around a single claim and a single path.
- H1 (≤8 words): "Turn a Cold Tap into a Hot Shower."
- Subhead (one line, ≤22 words): "Retrofit any single-line bathroom in 30 to 45 minutes — no concealed plumbing, no wall work."
- Primary CTA: "Request Product Information" → `#inquiry`
- Secondary CTA (ghost): "Watch How It Works" → `#how-it-works`
- Keep the editorial image to the right at `lg:col-span-6`, but compress the headline column from `col-span-12` to `col-span-6` so the image sits beside the H1 instead of below it. Right now the H1 occupies a full row and the image is pushed under it visually on lg.
- Drop the overline "The Shower Experience Redefined" — it is decoration, not orientation.

**DONE WHEN**
A reader of the hero alone — no scrolling — knows in five seconds: it converts a cold tap to a hot shower, it is a retrofit, and there are two clear paths. Two CTAs visible above the fold at 1280px and 390px.

---

### DESIGN-002 · CRITICAL · Journey
**Buyer group section is absent. The Identification arc is missing entirely.**

**ISSUE**
The TTS page has zero buyer-group segmentation. A retail chain buyer, property developer, architect, and homeowner all hit the same generic five-product grid. None of them find themselves on the page. Identification is the most commercially valuable section for a B2B page and it does not exist. This isn't a copy oversight — it's a structural omission. The page architecture treats every visitor as a window-shopper picking SKUs from a catalogue.

**FIX**
Insert a "Who It's For" section after Understanding and before Evidence (target position: section 4 of 8). Four blocks, in this order:
1. **Retailers / Distributors** — "Stock a category that sells itself in cold-water markets." CTA: *Ask About Retail Packages*.
2. **Developers / Builders** — "Standardise hot-water across single-line projects without rework." CTA: *Ask About Project Solutions*.
3. **Architects / Specifiers** — "Specify a retrofit-friendly shower system with full datasheets." CTA: *Request Specification Support*.
4. **End Consumers** — "Get a hot shower without breaking your wall." CTA: *Find Out Where to Buy*.

Each block: two-line role-specific value claim above the CTA. Card layout 2×2 desktop, 1-col mobile, 32px internal padding minimum, 24px gap. Each CTA anchors to `#inquiry` with a query param indicating the buyer group (e.g. `#inquiry?type=retail`) so the form pre-selects the enquiry type — this is the conversion mechanic of the page.

**DONE WHEN**
A visitor sees a section where they recognise themselves in the first two lines, has a single CTA in their block, and lands on the form with their type pre-selected.

---

### DESIGN-003 · CRITICAL · Journey
**The lead capture form is not on the TTS page. Form is unreachable in two actions on mobile.**

**ISSUE**
There is no form on `app/tap-to-shower/page.tsx`. The only form lives at `/contact` and is a generic 14-field "send us a message" form bound to product collections, not buyer types. A mobile visitor on the TTS page who decides to convert has to: (1) tap the nav, (2) tap Contact, (3) wait for a route load, (4) scroll past a hero, (5) fill 14 fields, (6) submit. That's six actions and ~45 seconds. By that point they're gone.

**FIX**
Add a Lead Capture section at the bottom of the TTS page, with `id="inquiry"`. Five fields visible, in this order:
1. **Enquiry type** (single-select, required) — Retail / Distribution, Developer / Builder, Architect / Specifier, End Consumer, General.
2. **Name** (required)
3. **Email** (required)
4. **Company** (optional, conditional — show only when enquiry type ≠ End Consumer)
5. **Message** (required, textarea)

That's three required fields for an end consumer, four for a B2B buyer. Container padding: 48px desktop, 32px mobile minimum. White card on bg-alt section. Submit button: "Submit Enquiry", primary style, full width on mobile.

The `/contact` form continues to exist as the universal contact page but stops being the conversion path for TTS.

**DONE WHEN**
A visitor at the TTS hero can reach the form in two taps (CTA → scroll), see five fields, and submit without leaving the page.

---

## HIGH

### DESIGN-004 · HIGH · Hierarchy
**H1 says "Collection," not the benefit.**

**ISSUE**
"Tap-to-Shower Collection" frames the page as a SKU listing. Collections imply browsing. This product is not browsed — it is bought once because it solves one problem. The H1 should make a claim, not announce a category. "Collection" also conflicts with the page's actual job (one decision, one form, one conversation), and it implicitly tells the buyer there are five things to evaluate when there is only one thing to understand.

**FIX**
Replace H1 with a benefit-led claim, ≤8 words. Options:
- "Turn a Cold Tap into a Hot Shower."
- "A Hot Shower from a Cold Tap."
- "Retrofit Your Shower in 45 Minutes."

Pick one. Italicise one accent word in `#0F5E8A` (e.g. *Hot* or *Retrofit*) per the brand pattern. Cut the word "Collection" entirely.

**DONE WHEN**
The H1 is a one-line benefit claim. The word "Collection" does not appear in the hero.

---

### DESIGN-005 · HIGH · Hierarchy
**The H2 scan reads as a parts catalogue, not a narrative.**

**ISSUE**
Read every H2 on the TTS page in sequence: "Complete Tap-to-Shower™ Kit. Tap-to-Shower™ Tap Only. Tap-to-Shower™ Connection Set. Instant Water Heater. Upgrade Kit. Ready to Upgrade Your Space?" That is six H2s, five of which are SKU names. There is no "What is this," no "How it works," no "Who it's for," no "Why us." A visitor scanning H2s alone — the most common scan pattern on a long page — learns: "BSC sells five things." They do not learn what the product does, why it matters, or where they fit. The page is structured as a brochure index.

**FIX**
Once DESIGN-002 and DESIGN-003 land, the H2 sequence should read like a story:
1. What Is Tap-to-Shower
2. How It Works
3. Who It's For (with the four buyer-group blocks below, each using H3 not H2)
4. Why This System (trust signals: warranty, certifications, Worldbex)
5. Frequently Asked
6. Submit an Enquiry

The five-product collection grid moves into "What's in the System" or a smaller "Configurations" subsection under Evidence — not as five top-level H2s. SKU names become H3.

**DONE WHEN**
Reading only the H2s on the TTS page conveys what the product is, who it's for, and why to buy — without body copy.

---

### DESIGN-006 · HIGH · Journey
**Homepage TTS block on mobile shows one CTA and no anchor to the form.**

**ISSUE**
At `app/page.tsx` lines 132–191, the mobile variant of the flagship Tap-to-Shower block renders a single CTA: "Explore Collection" → `/tap-to-shower`. A primary visitor scrolling the homepage on a phone sees the block, gets the concept (the subhead does mention "single-line (cold-only)" — good), but has only one path: a deep-dive route. There is no "Request Information" shortcut. The result is that the most decisive mobile visitors — those ready to convert — have to commit to a longer journey than they need.

**FIX**
Render two CTAs on the mobile variant, stacked vertically with full width:
- Primary: "Discover Tap-to-Shower™" → `/tap-to-shower`
- Secondary (ghost): "Request Information" → `/tap-to-shower#inquiry`

Use the ghost button style with white border on the dark gradient overlay so contrast holds.

**DONE WHEN**
Mobile homepage flagship block shows two stacked, full-width CTAs; the secondary lands the visitor directly on the lead capture form anchor.

---

### DESIGN-007 · HIGH · Space
**The contact form has no container. It floats on a raw section background with zero internal padding.**

**ISSUE**
At `/contact`, the form area sits in `lg:col-span-7` of a grid against `bg-bg-alt` with no card, no border, no surface differentiation, and no internal padding around the field cluster. On mobile (`px-6` = 24px) the form fields run nearly edge-to-edge against the viewport. The form is the commercial conversion point of the engagement and it looks like a scratch sheet. Form completion rates are directly affected by spatial comfort — a cramped form is an abandoned form.

**FIX**
Wrap the form in a card:
- `bg-bg-main` (white, against the `bg-bg-alt` section behind)
- 48px internal padding desktop, 32px mobile
- Subtle border (`border-text-main/10`) and 1px shadow at most — no dropshadow
- Section labels ("Personal Information", "Company Details", etc.) get a 24px top margin instead of just a bottom border
- Fields keep their current 16–24px vertical rhythm but the whole form sits inside the card

The same card treatment applies to the new TTS-page lead capture form (DESIGN-003).

**DONE WHEN**
The form sits inside a white card with ≥48px desktop / ≥32px mobile internal padding on all sides; no field touches the section background directly.

---

## MEDIUM

### DESIGN-008 · MEDIUM · Harmony
**Three primary button implementations, three secondary variants.**

**ISSUE**
The codebase has a Button component with primary / secondary / link variants — good single source of truth — but it is bypassed in three places:
1. `/contact` submit button (lines 502–522) is hand-rolled with `bg-text-main`, hover `bg-accent`, an inline arrow SVG, and `tracking-[0.2em]`. It does not use Button.
2. Homepage flagship block secondary on mobile (`page.tsx` line 185) overrides Button's secondary border from `border-text-main` to `border-text-main/40` — a different, lighter secondary.
3. TTS final CTA secondary (`tap-to-shower/page.tsx` line 196) uses `border-bg-main/30 text-bg-main` against a dark section — a third secondary treatment.

A discerning client will feel that buttons "look slightly different" without being able to name why. It is the single biggest tell that a page was assembled by multiple hands.

**FIX**
- Make the form submit button use `<Button variant="primary">`. The arrow icon can be a child element passed via children; if the arrow is required by spec, add it as a built-in option in Button.
- Add an `onDark` prop to Button that switches the secondary border/text colors for use on dark backgrounds. Use it on the TTS final CTA secondary and the homepage flagship mobile secondary.
- Delete every inline button-style className in the codebase. One primary, one secondary (with light/dark mode), one link. No exceptions.

**DONE WHEN**
Grep for `bg-text-main text-bg-main` and `border border-text-main` in `app/**` returns only `Button.tsx`; every CTA in the codebase renders through `<Button>`.

---

### DESIGN-009 · MEDIUM · Harmony
**Four font weights in active use; five-plus animation durations.**

**ISSUE**
Font weights detected across the codebase: regular (400), medium (500), semibold (600), and bold (700). The principle is three weights maximum with one consistent emphasis style. Semibold appears on the contact submit button; bold appears on H1/H2 headings and the decorative giant "CONTACT" background text. Mixing semibold and bold as parallel emphasis weakens both. Separately, animation durations in use: 150ms, 300ms, 500ms (button hover), 700ms (fade-up), 800ms (nav), 900ms (hero copy), 1200ms (image reveal). That's seven durations across the page. The principle is one duration universally, with one exception for the hero image. The current variety reads as "built by multiple people on different days" — which the audit confirms is the case.

**FIX**

*Typography:*
- Pick one emphasis weight. Recommend bold (700) for headings only; medium (500) for buttons, labels, overlines; regular (400) for body. Drop semibold.
- The contact submit button currently uses `font-semibold` — change to `font-medium` per Button component standard.

*Motion:*
- One transition duration: 200ms for state changes (hover, focus, color), one easing (`ease-out`). One exception: framer-motion fade-up on scroll-in at 600ms, used for one section reveal pattern only.
- Drop the 500ms hover transition on Button — visitors notice 500ms as sluggish on hover. Reduce to 200ms.
- Drop the 1200ms image reveal — at 1.2s the visitor scrolls past before it completes. Reduce to 600ms.
- Standardise framer-motion ease arrays. Currently three different cubic-beziers are in use (`[0.25, 0.46, 0.45, 0.94]`, `[0.23, 1, 0.32, 1]`, default `ease-out`). Pick one.

**DONE WHEN**
Three font weights or fewer across the app; transitions resolve to two durations (200ms for state, 600ms for scroll-in) and one easing curve.

---

### DESIGN-010 · MEDIUM · Harmony
**Two consecutive white sections on the TTS page with no visual differentiation.**

**ISSUE**
TTS page background sequence: hero (white) → collections grid (`bg-bg-main/30 backdrop-blur`, which renders as off-white/white) → final CTA (charcoal). The first two sections read as one continuous white block — there is no visual punctuation between Orientation and what's currently the body of the page. The visitor scrolls and the page architecture is invisible. Then a hard cut to charcoal for the final CTA, with the footer (also charcoal) immediately after, producing a long dark tail that flattens the close.

**FIX**
Set deliberate background alternation across the rebuilt TTS page:
- Hero: white (`bg-bg-main`)
- What Is TTS: white (compound with hero, intentional)
- How It Works: light grey (`bg-bg-alt` `#F7F7F7`)
- Who It's For: white
- Why This System: feature tint (`bg-bg-feature` `#F2F5F7`)
- FAQ: white
- Lead capture: light grey (`bg-bg-alt`) — visually separates the form from preceding content
- Final CTA section: remove or merge into lead capture; the dark close is unnecessary if the form is the actual close.

**DONE WHEN**
No two consecutive non-compound sections share a background; the close of the page is the lead capture form, not a dark decorative slab followed by a dark footer.

---

### DESIGN-011 · MEDIUM · Hierarchy
**TTS hero subhead is a 4-line run-on that buries the concept.**

**ISSUE**
Current subhead: "Our Tap-to-Shower system is engineered to transform standard cold-only installations into luxurious hot & cold shower experiences with minimal disruption. From complete bundles to individual components, each element reflects our commitment to German and Danish engineering precision." That's 41 words across two sentences and roughly four lines on desktop. The cold-only concept is stranded mid-clause. "Luxurious hot & cold shower experiences" is marketing fluff that consumer brands earn over years; this brand has not, and it reads as posturing. The second sentence is brand boilerplate that belongs in About, not in the orientation moment.

**FIX**
Replace with one sentence, ≤22 words, plain claim:
> "Retrofit any single-line bathroom in 30 to 45 minutes — no concealed plumbing, no wall work."

If a second line is desired for emphasis, add one short benefit line below in smaller type:
> "Engineered in Germany and Denmark. Available across the Philippines."

Cut the rest. Brand boilerplate moves to the About page or the footer, not the hero.

**DONE WHEN**
The TTS hero subhead is one line of body copy ≤22 words, with the retrofit concept in the first eight words.

---

### DESIGN-012 · MEDIUM · Space
*(originally LOW; promoted because the rhythm break is visible side-by-side with adjacent sections)*

Reverting to original severity → see LOW section below. (Skip — keep numbering consistent with audit output.)

---

## LOW

### DESIGN-012 · LOW · Space
**Homepage stats section is at minimum mobile padding next to 96px-padded sections.**

**ISSUE**
At `app/page.tsx` line 330, the trust/proof stats section uses `py-16 md:py-24` (64px mobile, 96px desktop). Adjacent sections use `py-20 md:py-32` (80px / 128px). On mobile the visitor scrolls from a 80px-spaced section into a 64px-spaced section into a 80px-spaced section — the rhythm wobbles. On desktop the gap is similar (96 vs 128). It's small but the page reads slightly less premium than its other sections, and stats are exactly the section type that should feel grand.

**FIX**
Bring the stats section to `py-20 md:py-32` to match the neighbouring rhythm. If the section feels too tall after the change, increase the typographic size of the numbers (currently `text-4xl md:text-5xl lg:text-6xl`) — those numbers are the section's content, they should be huge.

**DONE WHEN**
Stats section vertical padding matches the adjacent sections; numbers feel like the largest element on the page in their viewport.

---

### DESIGN-013 · LOW · Hierarchy
**Decorative giant "CONTACT" background text is set to font-bold and conflicts with the H1.**

**ISSUE**
At `/contact` line 73, a giant background "CONTACT" word renders at `text-[18vw] font-bold tracking-tighter` at `text-text-main/[0.03]` opacity. The word is decorative — fine — but at `font-bold` it competes for visual weight with the actual H1 ("Let's Talk") even at 3% opacity, especially on smaller viewports where the decorative word and the H1 are roughly the same physical size. It also adds a fourth font weight (see DESIGN-009).

**FIX**
Either drop the `font-bold` (let the giant word inherit the body weight at 3% opacity) or replace this decorative pattern with the existing `vertical-text` label pattern used elsewhere on the site for consistency. Recommend the second — fewer decorative patterns, stronger system.

**DONE WHEN**
Either the giant background word is non-bold, or the pattern is removed in favour of the existing vertical-text label.

---

**Design audit complete. 13 tickets: 3 CRITICAL, 3 HIGH, 5 MEDIUM, 2 LOW.**