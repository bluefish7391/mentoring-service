# Website Development Plan
## Alpharetta CS Discovery & Mentorship Program

---

## Context

| Field | Value |
|---|---|
| Site type | Static (HTML/CSS/JS), hosted on Firebase |
| Existing analytics | Google Analytics `G-36ERVTECDE` |
| Sign-up form | [MS Forms](https://forms.office.com/r/kcuqDF8fRu) — keep as-is |
| Sponsor | Abbotts Bridge Dojo (`abbottsbridgedojo.com`) |
| Location | 5075 Abbotts Bridge Rd, Johns Creek, GA 30005 |
| Schedule | Sundays, 2-hour sessions, **starting June 7th, 2026** |
| Time | TBD — see time placeholder note below |
| Audience | Ages 8–15, all skill levels, 100% free |
| Team | Brian (bio complete), Vihaan (TBA), David (TBA) |

---

## Confirmed Decisions

- **Program name:** "Alpharetta CS Discovery & Mentorship Program" — used in the H1 and all
  on-page branding. The `<title>` and meta description tags keep the SEO-friendly keyword string
  ("Free Coding Classes for Kids…") unchanged.
- **Team section heading:** "The Mentorship Team"
- **Visual style:** Polished & prestigious — like a selective academic program — while keeping the
  existing green/blue color palette and fonts.
- **Program structure:** Single flexible track that accommodates all skill levels. Discovery and
  Mentorship are framed as two *pillars* of the same program, not separate tracks.
- **Pricing:** Still 100% free.
- **Time placeholder:** The time is TBD but will be confirmed very soon. The HTML contains the
  inline comment `<!-- SESSION_TIME -->` immediately adjacent to the time text so that a single
  find-and-replace (or Ctrl+H) swaps it in one step. Current visible text: **"Time: TBD"**.

---

## Sections — Full Plan

### 1. Announcement Banner *(new, above everything)*
A slim, high-contrast strip spanning the full viewport width.
- Text: *"Applications now open · First session: Sunday, June 7th"*
- Includes a "Sign Up Free →" link
- Dismissible (×) so it doesn't obscure content on repeat visits

### 2. Sticky Navigation Bar *(new)*
- Left: program name / logo text
- Center: anchor links — **Program · Topics · Team · Details · FAQ**
- Right: "Sign Up Free" pill CTA (links to MS Forms)
- On scroll: gains a drop shadow (JS adds `.nav-scrolled` class)
- Mobile (<768 px): collapses to a hamburger menu

**Section IDs** — The current HTML has no `id` attributes on any section. These must be added
for anchor links to function:

| Nav label | `id` to add | Section |
|---|---|---|
| Program | `id="program"` | Program Overview section |
| Topics | `id="topics"` | What You'll Explore section |
| Team | `id="team"` | The Mentorship Team section |
| Details | `id="details"` | Quick Details section |
| FAQ | `id="faq"` | FAQ section |

### 3. Header *(updated)*
- H1: **"Alpharetta CS Discovery & Mentorship Program"**
- Updated tagline communicating the hybrid discovery + mentorship model; include a line that
  explicitly bridges the age range — e.g., *"Whether picking up coding for the first time or
  already building projects, there's a path here"* — so parents of both younger beginners and
  older students don't self-select out.
- Two CTA buttons: **"Sign Up Free"** and **"Explore the Program ↓"** (anchor)
- Keep existing green gradient

### 4. Program Overview *(new section, after header)*
Two side-by-side cards presenting the two pillars:

| Discovery Pillar | Mentorship Pillar |
|---|---|
| Exciting exposure to CS topics not in typical curricula | Personalized guidance from high-school student mentors |
| Spark genuine curiosity and passion | Advanced challenges and project-based progression |
| Real-world examples (how the internet works, AI tools, etc.) | Pathway to portfolio-worthy capstone projects |

### 5. What You'll Explore *(replaces "Fun Skills You'll Build")*
Six topic cards in a responsive grid:

| # | Topic | Teaser |
|---|---|---|
| 1 | **How the Internet Really Works** | Packets, DNS, protocols — see what happens when you hit Enter |
| 2 | **Creative Web Development** | Build real, styled, interactive pages with HTML, CSS & JS |
| 3 | **AI & Tool Orchestration** | Understand how modern AI tools work and learn to use them effectively |
| 4 | **Networking Fundamentals** | IP addresses, routers, Wi-Fi — how devices talk to each other |
| 5 | **Computational Thinking** | Problem-solving strategies used in real-world software and systems |
| 6 | **Game Dev & Interactive Animation** | Bring ideas to life with logic, loops, and creative code |

### 6. Your Learning Journey *(new section)*
A three-step horizontal progression showing how students grow over the program:

1. **Explore** — Hands-on discovery sessions; no experience needed. Try everything.
2. **Build** — Take on real projects with mentor feedback. Go deeper in areas you love.
3. **Advance** — Tackle advanced challenges, refine your portfolio, and pursue capstone work.

Includes a note that the program is flexible — students are never locked into one stage.

### 7. The Mentorship Team *(updated from "Meet The Alpharetta CS Tutor Team")*
Keep existing team gallery (Brian, Vihaan, David) and bio modals.
Only the section heading changes.

### 8. Why Join? *(refined bullets)*
Update the benefit bullets to include mentorship language, prestige framing, and the hybrid model.

### 9. Quick Details *(updated)*
- **Starting:** June 7th, 2026
- **When:** Sundays — drop-off friendly, 2 focused hours
- **Time:** TBD `<!-- SESSION_TIME -->` *(replace this comment + the TBD text once confirmed)*
- **Where:** Link the address text to Google Maps:
  `https://maps.google.com/?q=5075+Abbotts+Bridge+Rd+Johns+Creek+GA+30005`
- **Ages:** 8–15, all skill levels welcome
- **Bring:** Your own laptop or tablet
- **Cost:** Free
- Replace the soft note with: *"Time will be announced shortly —
  [email us](mailto:thecstutors039@gmail.com?subject=Notify%20me%20of%20session%20time) to be
  notified!"* This gives parents who aren't ready for MS Forms a low-friction way to register
  interest before the time is confirmed.

### 10. Sponsors *(unchanged)*
Keep the Abbotts Bridge Dojo card exactly as-is.

### 10.5 Testimonials *(new — hidden at launch)*
A `display:none` section to be populated after the first sessions run. **Do not make it visible
at launch** — unhide it manually once real student/parent quotes are collected.

- CSS class: `.testimonials-section` (set `display:none` initially)
- Contains 2–3 `.testimonial-card` placeholder blocks (quote text + student first name + age)
- No JS required; reveal by removing `display:none` from the section element when ready

### 11. FAQ *(keep 3 existing + add 5 new)*
Existing questions:
1. Is it really free?
2. What age group is this for?
3. What if my child is a total beginner?

New questions to add:
4. **What makes this different from a typical coding class?**
   > Most intro classes stick to a fixed curriculum. Here, students explore topics like how the
   > internet works at the packet level, AI tool usage, and networking — things rarely taught in
   > school. Plus, they get real mentor feedback on their projects, not just auto-graded exercises.
5. **What does mentorship actually look like?**
   > Each session blends group discovery activities with one-on-one time with a student mentor.
   > Mentors help identify what each student enjoys, tailor challenges to their level, and give
   > feedback on their work — all in a friendly, low-pressure environment.
6. **What will my child build by the end?**
   > That depends on how far they want to go! Beginners will leave with working websites, small
   > games, and a real understanding of how computers communicate. Advanced students can work toward
   > a portfolio-worthy capstone project — something genuinely impressive to show colleges or future
   > employers.
7. **Who supervises the sessions?**
   > Sessions are overseen by responsible adults at all times. Our mentors are background-checked
   > high school students who do not work unsupervised with children. A safe, comfortable
   > environment is a non-negotiable priority.
8. **What does a typical Sunday session look like?**
   > Sessions run a focused 2 hours. Students arrive, kick off with a group discovery activity
   > led by a mentor, then move into hands-on project time with one-on-one mentor feedback. We
   > wrap up with a quick share-out so students can see what peers built. Drop-off is welcome.

### 12. Floating CTAs *(unchanged)*
Keep "Sign Up Free Now" and the share menu exactly as-is.

### 13. Footer *(unchanged)*

### 14. Bio Modals *(updated)*
Brian's full bio stays. Vihaan and David remain "TBA" until bios are provided.

**Cleanup:** Remove the orphaned `#charithBioModal` overlay div. "Charith" appears nowhere in
the team gallery but has a lingering modal in the current HTML.

---

## CSS Additions

| Class / selector | Purpose |
|---|---|
| `.announcement-banner` | Full-width strip above nav |
| `.site-nav`, `.nav-scrolled` | Sticky nav bar; JS adds shadow on scroll |
| `.nav-links`, `.nav-cta` | Nav link group and CTA pill |
| `.hamburger`, `.mobile-menu` | Mobile nav toggle |
| `.pillar-grid`, `.pillar-card` | Two-column overview cards (Program Overview section) |
| `.explore-grid` (6-col) | Expanded topic card grid |
| `.journey-steps`, `.journey-step` | Horizontal 3-step progression |
| `.testimonials-section`, `.testimonial-card` | Hidden-at-launch testimonials block |
| Typography tweaks | Slightly larger h2, refined font-weight for prestige feel |

---

## JS Additions

| Feature | Implementation |
|---|---|
| Nav scroll shadow | `window.addEventListener('scroll', …)` toggles `.nav-scrolled` on `<nav>` |
| Mobile hamburger toggle | Click handler toggles `.mobile-menu.open` |
| Banner dismiss | Click handler hides `.announcement-banner`, stores in `sessionStorage` |
| Smooth scroll | `scroll-behavior: smooth` via CSS; JS fallback for Safari if needed |

---

## Files to Modify

| File | Changes |
|---|---|
| `public/index.html` | All section content (banner, nav, header rewrite, 3 new sections, updated sections, new FAQ items); section `id` attributes; Google Maps address link; mailto notification link; Charith modal removal |
| `public/style.css` | All new CSS classes listed above; `.testimonials-section { display:none }` |
| `public/script.js` | Nav scroll behavior, hamburger toggle, banner dismiss |

### SEO — JSON-LD Event Schema
Add a `<script type="application/ld+json">` block inside `<head>`. This enables Google to
surface the program in local event search results.

| Field | Value |
|---|---|
| `@type` | `Event` |
| `name` | `"Alpharetta CS Discovery & Mentorship Program"` |
| `startDate` | `"2026-06-07"` |
| `eventStatus` | `"https://schema.org/EventScheduled"` |
| `eventAttendanceMode` | `"https://schema.org/OfflineEventAttendanceMode"` |
| `location` | `Place` — name: `"Abbotts Bridge Dojo"`, full `PostalAddress` |
| `organizer` | `Organization` — name + `thecstutors039@gmail.com` |
| `isAccessibleForFree` | `true` |
| `audience.audienceType` | `"Children ages 8–15"` |

---

## Verification Checklist

- [ ] Nav sticks to top on scroll; gains shadow after scrolling past header
- [ ] Anchor links in nav scroll to correct sections
- [ ] "Sign Up Free" in nav and header opens MS Forms link
- [ ] Announcement banner shows "June 7th, 2026"; dismiss button hides it
- [ ] Quick Details shows **"Time: TBD"** (no hardcoded 2–4 PM)
- [ ] `<!-- SESSION_TIME -->` comment is present next to time text for easy replacement
- [ ] All 6 explore cards render in a responsive grid
- [ ] Journey steps display horizontally on desktop, stacked on mobile
- [ ] Pillar cards side-by-side on desktop, stacked on mobile
- [ ] FAQ: all 8 items open/close correctly (existing 3 + 5 new)
- [ ] Team bio modals (Brian, Vihaan, David) still open/close
- [ ] No orphaned bio modals remain in the DOM (Charith modal removed)
- [ ] Share menu still functions
- [ ] No layout breaks at 375 px (mobile), 768 px (tablet), 1100 px (desktop)
- [ ] Testimonials section is hidden (`display:none`) and does not affect page layout
- [ ] Address in Quick Details links to Google Maps
- [ ] "Email us to be notified" link in Quick Details uses correct `mailto:` href
- [ ] All nav anchor links resolve to correct section IDs (`#program`, `#topics`, `#team`, `#details`, `#faq`)
- [ ] JSON-LD `Event` schema is present in `<head>` and validates at [schema.org/validator](https://validator.schema.org/)

---

## Out of Scope

- New sign-up form (keeping existing MS Forms link)
- New team photos or completed bios for Vihaan/David
- Domain or Firebase hosting changes
- Multi-page routing
- Dark mode
