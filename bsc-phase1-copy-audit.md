# BSC Phase 1 — Copy Audit
**Five Fold Industries · April 2026**

Audit subject: `app/tap-to-shower/page.tsx`, `app/page.tsx` (homepage flagship block + hero subhead), `app/contact/page.tsx`, `app/components/Footer.tsx`.
Reference: [docs/copywriting-skill.md](./copywriting-skill.md)
Sibling skills: [docs/qa-audit-skill.md](./qa-audit-skill.md), [docs/ui-journey-skill.md](./ui-journey-skill.md)

---

## Summary

**22 tickets total: 1 CRITICAL, 6 HIGH, 9 MEDIUM, 6 LOW.**

The TTS hero is canonical and sets the voice ceiling correctly. From What Is TTS onward, the voice slips: pronoun violations are pervasive (every "we", "our", "us" in narrative sections is a HIGH), banned adjectives appear in body copy ("elegant", "experience" as noun, "seamless"), trust-signal copy uses vague filler the skill explicitly forbids, and How It Works imperative-frames steps that the FAQ confirms a professional must perform. Form microcopy needs placeholder removal. The CRITICAL is the End Consumer CTA destination gap — the contracted "Find Out Where to Buy" promises a stockist page that does not exist, and the matrix amendment to "Request Information" is still pending Schaefer sign-off.

---

## CRITICAL

### COPY-001 · CRITICAL · Who It's For — End Consumer block
**File:** `app/tap-to-shower/page.tsx` (line 273)

**ISSUE**
The End Consumer block CTA reads "Find Out Where to Buy" → `#inquiry`. There is no "where to buy" content anywhere on the site — no stockist list, no distributor page, no map. The CTA promises a destination that does not exist. Per the skill's PENDING-AMENDMENT note, the contracted CTA stands until Schaefer signs off on the swap to "Request Information", but the destination gap is a separate CRITICAL on the destination side. A consumer who clicks lands on a generic enquiry form with no answer to the question they were promised an answer to.

**REWRITE**
Two paths, pick one:
- **(a)** Build a holding stockist page at `/where-to-buy` with the line *"Distribution in the Philippines is being finalised. For current stockist information, contact info@bsundc.com or +86 158 21 48 42 72."* Update the End Consumer CTA href from `#inquiry` to `/where-to-buy`.
- **(b)** Push Schaefer for written matrix amendment this week. On sign-off, update `qa-audit-skill.md` and `copywriting-skill.md`, change the CTA to "Request Information", and the destination problem dissolves.

**DONE WHEN**
Either `/where-to-buy` exists with a real holding answer, or the matrix amendment lands and the CTA is replaced.

---

## HIGH

### COPY-002 · HIGH · What Is TTS — body paragraph 2
**File:** `app/tap-to-shower/page.tsx` (lines 170–172)

**ISSUE**
Current text: *"Tap-to-Shower™ is our patented conversion system. By utilizing an elegant external PEX retrofit and a specialized connection kit, we convert your single cold line into a fully functional, thermostatic-ready hot and cold shower system — without concealing any new plumbing behind your walls."*

Five separate violations in one paragraph:
1. *"our patented conversion system"* — "our" is pronoun violation; "patented" is unverified claim banned by the skill until a patent number is provided; "conversion system" is internal jargon.
2. *"elegant"* — banned adjective.
3. *"we convert your single cold line"* — "we" pronoun violation.
4. *"fully functional"* — "fully" is a banned intensifier.
5. Em-dash — this is the second em-dash on the TTS page (the hero already uses one). Cap is one per page (covered separately in COPY-009).

**REWRITE**
> Tap-to-Shower™ is a retrofit system. An external PEX line and a specialised connection kit convert a single cold-water line into a thermostatic-ready hot and cold shower without concealing new plumbing behind walls.

**DONE WHEN**
The paragraph reads as the rewrite. Section length recheck per COPY-008.

---

### COPY-003 · HIGH · How It Works — install steps
**File:** `app/tap-to-shower/page.tsx` (lines 213, 217–220)

**ISSUE**
The intro line and all four steps violate the skill's How It Works rule (third-person descriptive; never imperative). The FAQ confirms a certified professional is required, so imperative framing — *"Mount the column"*, *"Install the heater"*, *"Connect using our connectors"*, *"Enjoy your new experience"* — is misleading: the buyer is reading to understand the process, not to follow instructions.

Additional violations stacked on top:
- Intro line *"Our PEX retrofit connection set is designed for rapid, professional deployment."* → "Our" pronoun violation.
- Step 3: *"our proprietary push connectors"* → "our" pronoun violation.
- Step 4: *"Enjoy your new hot & cold shower experience."* → "experience" is a banned noun; "&" in body copy violates house style.

**REWRITE**

Intro line:
> The PEX retrofit connection set is designed for professional installation in 30 to 45 minutes. No concealed plumbing required.

Steps (third-person descriptive):
- **01** — The Tap-to-Shower™ column mounts to the existing G½″ cold-water outlet.
- **02** — The instant water heater installs wall-hung, with a 6m cuttable PEX tube run to the column.
- **03** — Push connectors and a safety valve complete the connection.
- **04** — The retrofit is complete. Hot and cold water at the tap.

**DONE WHEN**
The four steps read as third-person descriptions. No imperatives, no "our", no "experience", no ampersands in body copy.

---

### COPY-004 · HIGH · Why This System — three trust-signal bodies
**File:** `app/tap-to-shower/page.tsx` (lines 302–305)

**ISSUE**
All three trust-signal body copies violate the pronoun rule. The Worldbex signal additionally uses the exact vague phrasing the skill explicitly calls out as forbidden.

Current:
- 3-Year Tap Warranty: *"We stand behind our brass casting and ceramic cartridges with a comprehensive limited warranty."* → "We" + "our".
- CB IEC 60335 Certified: *"Our water heaters meet stringent international electrical safety standards."* → "Our".
- Worldbex Featured: *"Proudly showcased at premier international building and construction expositions."* → vague filler explicitly banned by the skill; tile title also doesn't match the locked phrasing.

**REWRITE**
- **Title:** *3-year limited warranty*
  **Body:** *Brass HP59 body and ceramic cartridges, covered for three years from date of purchase.*
- **Title:** *CB IEC 60335 certified*
  **Body:** *Instant water heaters meet international electrical safety standards under IEC 60335-2-35.*
- **Title:** *Showcased at Worldbex 2026*
  **Body:** *Featured exhibitor at Worldbex 2026, SMX Convention Center, Pasay City, Philippines.*

**DONE WHEN**
All three trust signals carry the locked phrasings, no first-person, no vague filler.

---

### COPY-005 · HIGH · FAQ — pronoun and intensifier sweep
**File:** `app/tap-to-shower/page.tsx` (lines 354–357)

**ISSUE**
All four FAQ answers carry first-person ("our", "we") in violation of the pronoun rule, plus banned intensifiers and a banned adjective.

Per Q&A:
1. *"our PEX tubing is specifically rated… easily handling the output"* → "our" + "easily" intensifier.
2. *"we recommend a certified professional"* → "we".
3. *"Tap-to-Shower is optimized to work with our proprietary instant water heaters for seamless integration"* → missing ™, "our", "seamless" (banned), "proprietary" (internal jargon).
4. *"Our core tap bodies are available in…"* → "Our".

**REWRITE**

**Q1:** *Yes. The PEX tubing is rated for high-temperature and high-pressure applications and handles the output of the 3.5-kilowatt heater.*

**Q2:** *The system is designed for professional installation. A certified plumber or electrician is required to validate the warranty.*

**Q3:** *Tap-to-Shower™ is optimised for the BSC instant water heater range. Compatibility with other systems depends on connection type and pressure rating — contact us for confirmation before purchase.*

**Q4:** *Tap bodies are available in Chrome, Matt Black, and Brushed Stainless Steel.*

**DONE WHEN**
No first-person pronouns in any FAQ answer; no banned intensifiers; ™ present on the first mention of Tap-to-Shower in Q3.

---

### COPY-006 · HIGH · Lead Capture left-column pitch
**File:** `app/tap-to-shower/page.tsx` (line 383)

**ISSUE**
Current: *"Whether you're a retailer, developer, architect, or homeowner, our specialists are ready to provide specifications, pricing, and consultation."*

This line is in the skill's trash-test calibration set. Three violations:
- *"our specialists"* — pronoun + implies a team that doesn't exist
- *"pricing"* — flagged sensitivity per skill Q13; offer-of-conversation framing is acceptable but only with explicit "on request" qualifier
- *"consultation"* — vague

The line tries to address all four buyer groups in one breath and serves none of them. The Who It's For section already segments — this line doesn't need to.

**REWRITE**
> Specifications, technical drawings, and project pricing available on request. Submit an enquiry below or contact info@bsundc.com directly.

**DONE WHEN**
The left-column pitch reads as the rewrite. No first-person, no fictitious team, no naked "pricing" without "on request".

---

### COPY-007 · HIGH · Homepage flagship — body copy banned noun
**File:** `app/page.tsx` (lines 184–188 mobile, 272–276 desktop)

**ISSUE**
Both mobile and desktop variants of the homepage flagship Tap-to-Shower block use *"shower experience"* — a banned noun on the forbidden list. Both also use "&" in *"hot & cold"* within body copy (ampersand only permitted in compact UI/tile labels). The body also does not put ™ on the first mention of Tap-to-Shower.

Current: *"Tap-to-Shower turns a single-line (cold-only) bathroom installation into a modern shower experience with a neat, upgraded look. With minimal installation work, it delivers the real upgrade — hot & cold comfort every day."*

**REWRITE** (both variants):
> Tap-to-Shower™ turns a single-line (cold-only) bathroom into a hot and cold shower without concealed plumbing or wall work. Engineered in Germany and Denmark.

**DONE WHEN**
Both mobile and desktop blocks read the rewrite. ™ on first mention. No "experience". No ampersand in body. The ~30-word body now also closes the comprehension job per DESIGN-006.

---

## MEDIUM

### COPY-008 · MEDIUM · What Is TTS — section over the 60-word cap
**File:** `app/tap-to-shower/page.tsx` (lines 167–172)

**ISSUE**
The two paragraphs combined run ~85 words. The skill's cap is 60. Tightening is required regardless of COPY-002, but lands automatically once COPY-002 is applied (the rewritten p2 drops 35 words).

**REWRITE**

Paragraph 1 (keep, lightly compressed):
> Most Philippine bathrooms have a single cold-water line. Upgrading to a hot and cold shower has traditionally meant breaking tiles, rerouting pipes, and weeks of renovation.

Paragraph 2 (per COPY-002).

Combined word count after both rewrites: ~55 words. Under cap.

**DONE WHEN**
Section word count ≤60 with both paragraphs in production.

---

### COPY-009 · MEDIUM · TTS page exceeds em-dash cap
**File:** `app/tap-to-shower/page.tsx` (lines 125, 171)

**ISSUE**
Two em-dashes on the TTS page: one in the hero subhead (load-bearing, keep), one in the What Is TTS section (line 171, *"without concealing any new plumbing… — without concealing"*). Cap is one per page; the second em-dash is lazy connector use.

**REWRITE**
The hero em-dash stays. The What Is TTS em-dash is removed by the COPY-002 rewrite (the new paragraph uses no em-dash).

**DONE WHEN**
Exactly one em-dash on the TTS page, in the hero subhead.

---

### COPY-010 · MEDIUM · Features H2 — banned abstract pattern
**File:** `app/tap-to-shower/page.tsx` (line 185)

**ISSUE**
H2 reads *"Built to Perform"* — explicitly listed in the skill's forbidden phrases as an abstract triple/pattern with no referent. Same family as *"Built for Everyone"*.

**REWRITE**
*"The Facts"* → already serves as the section overline. The H2 can drop the empty claim and lead with the substance:

H2: **"Five Things to Know"**

(Or, if a verb-led H2 is preferred: *"Built on Five Specifics"* — concrete because the five specifics are right below it.)

**DONE WHEN**
The H2 names something specific or quantifiable, not an abstract verb-led pattern.

---

### COPY-011 · MEDIUM · Why This System — banned three-word triplet
**File:** `app/tap-to-shower/page.tsx` (lines 290–292)

**ISSUE**
The decorative overlay text reads *"Tested. Certified. Proven."* — listed in the skill's trash-test calibration set as a banned triplet pattern with no referent. Tested by whom, certified to what, proven where.

**REWRITE**
Three options, pick one:
- **(a)** Replace with a specific triplet that resolves the referents: *"IEC 60335. Worldbex. Three years."*
- **(b)** Replace with a single specific claim: *"Certified to IEC 60335-2-35."*
- **(c)** Remove the overlay text entirely. The shield icon already reads as "trust" — the words are decorative, not informational. The skill's rule is that decorative copy still must mean something.

**DONE WHEN**
The decorative overlay either references specifics or is removed.

---

### COPY-012 · MEDIUM · Who It's For — three blocks need audience-tuned rewrites
**File:** `app/tap-to-shower/page.tsx` (lines 247, 253, 259)

**ISSUE**
Three of the four blocks use vague consultant-deck phrasing rather than the audience register the skill requires. End Consumer block is fine.

Current:
- **Retailers:** *"Stock a category that sells itself in cold-water markets."* → *"sells itself"* was rejected as too vague; merchandising teams need margin/SKU/training language.
- **Developers:** *"Standardise hot-water across single-line projects without rework."* → project managers don't use *"Standardise"*; cost/scope words needed.
- **Architects:** *"Specify a retrofit-friendly shower system with full datasheets."* → *"retrofit-friendly"* is not the spec-sheet hook; need certification + drawings register.

**REWRITE** (skill-canonical phrasings):
- **Retailers / Distributors:** *Stock a single-line shower upgrade with a verified 3-year tap warranty and ready packaging. No assembly, no staff training required.*
- **Developers / Builders:** *Specify hot water for single-line bathrooms without adding plumbing runs or redesigning the layout.*
- **Architects / Specifiers:** *Specify a CB IEC 60335-certified shower system for single-line bathrooms. Full technical datasheets and dimensional drawings available on request.*

**DONE WHEN**
All four block descriptions speak in their primary reader's register and hit their two-question test (what is this / does it fit me).

---

### COPY-013 · MEDIUM · Lead Capture bullet — pricing language incomplete
**File:** `app/tap-to-shower/page.tsx` (line 392)

**ISSUE**
Current bullet: *"Bulk Pricing & Project Rates"*. Per the skill's Q13 rule, this is acceptable as offer-of-conversation only with the explicit *"on request"* qualifier. Naked *"Bulk Pricing & Project Rates"* without that qualifier reads as if pricing is being disclosed.

**REWRITE**
> Bulk pricing and project rates available on request

(Note: *"and"* not *"&"* because this is a bullet line in body context, not a compact UI label.)

**DONE WHEN**
The bullet ends with *"available on request"* and uses *"and"* not *"&"*.

---

### COPY-014 · MEDIUM · Form placeholders not stripped
**File:** `app/tap-to-shower/page.tsx` (lines 431, 435, 441, 446)

**ISSUE**
Current placeholders (*"Your name"*, *"your@email.com"*, *"Company name"*, *"Tell us about your project requirements..."*) violate the skill's microcopy rule. Labels are sufficient. Placeholders that repeat the label are visual noise.

**REWRITE**
- Full Name placeholder: **remove**
- Email Address placeholder: **remove**
- Company placeholder: **remove**
- Message textarea placeholder: change to *"Tell us about your project or enquiry."*

**DONE WHEN**
Three of the four fields have no placeholder; only the message textarea retains a prompt and uses the locked phrasing.

---

### COPY-015 · MEDIUM · Homepage hero subhead — "Premium" used as standalone
**File:** `app/page.tsx` (lines 83–86)

**ISSUE**
Subhead: *"Premium faucets, fixtures, and sanitary products — developed in Germany & Denmark, trusted across Southeast Asia."*

*"Premium"* is allowed once per page only in a comparative context. Used here as a standalone descriptor. Plus *"Germany & Denmark"* uses *"&"* in body copy.

The skill notes the homepage hero is a known inconsistency out of Phase 1 scope, so this ticket is logged but **non-blocking** until the homepage is formally in scope. Flag, don't fix.

**REWRITE** (when the homepage rebuild happens):
> Faucets, fixtures, and sanitary products. Engineered in Germany and Denmark. Available across Southeast Asia.

**DONE WHEN**
Homepage hero rebuild is scoped; this ticket lands as part of that work.

---

### COPY-016 · MEDIUM · Contact page hero body — "premium" standalone
**File:** `app/contact/page.tsx` (lines 102–105)

**ISSUE**
*"Whether you're looking for premium bathroom and kitchen products or exploring partnership opportunities — we'd love to hear from you."*

*"premium"* used as standalone descriptor again, not comparative. The *"we'd love to hear from you"* is operational/conversation register so allowed under the named exception. The em-dash is the only one on the page so it stays under cap.

**REWRITE**
> For bathroom and kitchen product enquiries or partnership conversations, contact us below.

**DONE WHEN**
*"Premium"* removed; the line is functional rather than emotive.

---

## LOW

### COPY-017 · LOW · Features tile titles — verbatim variations
**File:** `app/tap-to-shower/page.tsx` (lines 191–192)

**ISSUE**
Two tile titles deviate slightly from locked phrasings:
- *"3-Year Tap Warranty"* — locked is *"3-year limited warranty"* (lowercase year, includes *"limited"*).
- *"CB IEC 60335 Certified"* — locked is *"CB IEC 60335 certified"* (lowercase *"certified"*).

Tile-label title-case is conventional but the skill didn't carve out an exception. Either change the tiles or amend the skill to permit title case in tile labels.

**REWRITE** (option A — bring tiles to lockup):
- *"3-Year Limited Warranty"*
- *"CB IEC 60335 Certified"* (capitalisation kept; the issue is *"limited"* missing on the warranty tile only)

**REWRITE** (option B — amend skill):
Add to House Style: *"Tile labels and headings use title case. Required verbatim phrasings apply to body copy."*

**DONE WHEN**
Either the tile titles include *"limited"* and exact casing, or the skill explicitly permits title-case tile labels.

---

### COPY-018 · LOW · Holding-state copy uses "shortly"
**File:** `app/tap-to-shower/page.tsx` (lines 449–451)

**ISSUE**
Current: *"Online enquiries available shortly. In the meantime, contact us directly:"*

*"Shortly"* is on the LOW forbidden list — it's a promise with no date behind it. The skill provides a locked replacement.

**REWRITE**
> The online enquiry form is in finalisation. Direct contact: info@bsundc.com or +86 158 21 48 42 72.

**DONE WHEN**
Holding-state copy reads as the locked phrasing; no *"shortly"*.

---

### COPY-019 · LOW · Homepage flagship H2 missing ™
**File:** `app/page.tsx` (lines 175–178 mobile, 263–266 desktop)

**ISSUE**
Both H2s read *"Tap-to-Shower Collection"* without ™. Skill rule: ™ never omitted in H1 or H2 headings.

(Note: separate from the design-audit ticket about whether *"Collection"* is the right framing word — this is the trademark mark only.)

**REWRITE**
H2: *"Tap-to-Shower™ Collection"*

(Or pending the design-audit DESIGN-004 rewrite to a benefit-led H2, ensure ™ is on whatever heading replaces this.)

**DONE WHEN**
Both mobile and desktop H2s on the homepage flagship block carry ™.

---

### COPY-020 · LOW · Contact form submit label variation
**File:** `app/contact/page.tsx` (line 507)

**ISSUE**
Current submit button text: *"Send Enquiry"*. The matrix's lead-capture primary CTA is *"Submit Enquiry"*. The contact form is a separate form from the TTS lead capture, so this isn't a strict matrix breach, but the copywriting skill prefers consistency across all submit-form CTAs.

**REWRITE**
*"Submit Enquiry"*

**DONE WHEN**
Both the TTS lead capture and the `/contact` form use *"Submit Enquiry"* as the submit-button label.

---

### COPY-021 · LOW · Buyer group "End Consumer" approved phrasing variation
**File:** `app/tap-to-shower/page.tsx` (line 265)

**ISSUE**
Current: *"Get a hot shower without breaking your wall."*
Skill-approved: *"Get a hot shower without opening your wall."*

Minor wording difference — *"breaking"* reads slightly more aggressive, *"opening"* softer. Skill specified *"opening"*. LOW.

**REWRITE**
> Get a hot shower without opening your wall.

**DONE WHEN**
End Consumer block uses *"opening"* not *"breaking"*.

---

### COPY-022 · LOW · TTS page Worldbex tile title vague
**File:** `app/tap-to-shower/page.tsx` (line 305)

**ISSUE**
Tile title currently reads *"Worldbex Featured"*. Skill-locked phrasing for this trust signal is *"Showcased at Worldbex 2026"*. Without the year, the claim ages immediately. Covered partially by COPY-004 but called out separately so the tile-title rewrite isn't lost in the body-copy ticket.

**REWRITE**
- Tile title: *"Worldbex 2026"*
- Body: per COPY-004.

**DONE WHEN**
Tile title carries the year.

---

**Copy audit complete. 22 tickets: 1 CRITICAL, 6 HIGH, 9 MEDIUM, 6 LOW.**
