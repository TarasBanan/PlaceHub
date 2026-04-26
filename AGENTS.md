# AGENTS.md

Drop-in operating instructions for coding agents. Read this file before every task.

**Working code only. Finish the job. Plausibility is not correctness.**

Follows the [AGENTS.md](https://agents.md) open standard. To support other tools:

```bash
ln -s AGENTS.md CLAUDE.md
ln -s AGENTS.md GEMINI.md
```

---

## 0. Non-negotiables

Override everything else when in conflict:

1. **No flattery, no filler.** Skip "Great question", "I'd be happy to". Start with the answer or the action.
2. **Disagree when you disagree.** Say so before doing the work.
3. **Never fabricate.** Not file paths, not API names, not test results. Read the file, run the command, or say "I don't know, let me check."
4. **Stop when confused.** Two plausible interpretations → ask. Do not pick silently.
5. **Touch only what you must.** Every changed line traces to the user's request. No drive-by refactors.
6. **No typecasts. Never use `as`.** Fix the type at the source. If the type is wrong, fix the definition — not the call site.

---

## 1. Before writing code

- State your plan in one or two sentences before editing.
- Read files you will touch AND the files that call them.
- Match existing patterns. If the project uses pattern X, use X.
- Surface assumptions: "I'm assuming X. If wrong, say so."
- **Read `DESIGN.md` before touching any UI file.** See section 8.
- **Read `CASE.md` before starting any feature.** The full specification lives there.

---

## 2. Writing code: simplicity first

- No features beyond what was asked.
- No abstractions for single-use code.
- No error handling for impossible scenarios.
- If it runs 200 lines and could be 50, rewrite it first.
- Bias toward deleting code over adding.

The test: would a senior engineer call this overcomplicated? If yes, simplify.

---

## 3. Surgical changes

- Do not "improve" adjacent code, formatting, or imports not part of the task.
- Do not refactor working code just because you are in the file.
- Do clean up orphans your own edit created (unused imports, dead variables).
- Match the project's style exactly: indentation, quotes, naming, file layout.

The test: every changed line traces to the user's request. If a line fails that test, revert it.

---

## 4. Goal-driven execution

Rewrite vague asks into verifiable goals before starting:

- "Add validation" → "Write tests for invalid inputs, then make them pass."
- "Fix the bug" → "Write a failing test that reproduces it, then make it pass."
- "Refactor X" → "Test suite passes before and after, no public API changes."

For every task:
1. State success criteria before writing code.
2. Write the verification (test, script, screenshot diff).
3. Run it. Read the output. Never claim success without checking.
4. If it fails, fix the cause — not the test.

---

## 5. Tool use and verification

- Run code instead of guessing. Test suite exists → run it. Linter exists → run it.
- Never report "done" based on a plausible-looking diff. Plausibility is not correctness.
- For UI changes: screenshot before, screenshot after, describe the diff.
- When reading logs or stack traces, read the whole thing. Half-read traces produce wrong fixes.

---

## 6. Session hygiene

- After two failed corrections on the same issue, stop. Summarize what you learned and ask to reset.
- Use subagents for exploration so the main context stays clean.
- Commit messages: subject under 72 chars, body explains the why. No "fix bug" or "update file" commits.

---

## 7. Communication style

- Direct, not diplomatic. "This won't work because X" beats "have you considered...".
- Two or three short paragraphs unless asked for depth.
- Clear answer → give it. No answer → say so, give tradeoffs.

---

## 8. DESIGN.md — required for all UI work

`DESIGN.md` is the single source of truth for visual decisions. **Read it before touching any UI file.**

It defines:
- Color palette and CSS variable names (light theme primary; graphite / orange or teal accent; background `#F7F7F5`)
- Typography: font families, scale, weights
- Spacing system and breakpoints: 375 / 768 / 1024 / 1440px
- Component patterns: venue cards, category cards, filter panels, booking forms, badges, tabs, modals, drawers
- Mobile-specific patterns: burger menu, filter drawer, single-column card layout
- Motion: scroll-triggered reveals, hover effects (Framer Motion), card hover shadows
- Aesthetic direction: modern marketplace / booking service — clean grid, large photo cards, rounded corners, soft shadows, prominent CTAs

**Rules:**
- Never hardcode colors, font sizes, or spacing. Use the CSS variables / Tailwind tokens defined in `DESIGN.md`.
- If `DESIGN.md` does not cover the component you're building, extend it first — add the spec, then implement.
- When the user says "update the design", update `DESIGN.md` first, then propagate to code.
- `DESIGN.md` and the actual UI must stay in sync. Drift is a bug.

---

## 9. CASE.md — full product specification

The complete technical specification for PlaceHub lives in `CASE.md`.

Read it before implementing any page, section, component, or feature. Key sections:

| Section | Contains |
|---------|----------|
| 4.1 | Home page: all 12 blocks, hero search bar, calculator logic, booking form fields |
| 4.2 | Catalog page: all filter parameters, card structure, badge types |
| 4.3 | Venue page: 12-block structure, booking form fields |
| 4.4 | Collections page: 8 thematic collections |
| 4.5 | For owners page: 3 owner pricing tiers (Start / Pro / Business) |
| 4.6 | Pricing page: venue price table, add-on services table |
| 4.7 | About page: stats block content |
| 4.8 | Contacts page: exact contact details |
| 6 | Functional requirements: search, filtering, sorting, favourites, calculator formula, form validation |
| 9 | Canonical TypeScript types: `Venue`, `BookingRequest` — use these exactly |
| 10 | SEO requirements and URL structure |
| 11 | Content minimums: 18 categories, 12 venues, 6 venue detail pages, 8 collections, 4 reviews, 10 FAQ items |
| 12 | Acceptance criteria — the definition of done |
| 13 | Optional enhancements for portfolio value |
| 15 | MVP scope if shipping fast |

When in doubt about what a feature should do — check `CASE.md` first before asking.

---

## 10. Project architecture

### Overview

PlaceHub is a multi-page marketplace for booking urban spaces. It has a public catalog with real-time filtering and sorting, per-venue detail pages with a booking form and calculator, thematic collections, an owners landing page, and standard informational pages. The base version runs fully client-side — content from typed local data files, favourites in `localStorage`, form submissions handled with a success state. No backend is required for MVP.

### Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript — `strict: true`, zero `as` casts |
| Styling | Tailwind CSS with custom design tokens (see `DESIGN.md`) |
| Animation | Framer Motion — scroll reveals, card hovers, page transitions |
| Forms | React Hook Form + Zod |
| Global state | Zustand — filters, favourites, search query |
| Package manager | pnpm |
| Deployment | Vercel |

### Repository layout

```
/
├── AGENTS.md                          # This file
├── DESIGN.md                          # Visual source of truth — read before any UI work
├── CASE.md                            # Full product specification — read before any feature
├── README.md                          # Setup, run, deploy
│
├── public/
│   ├── images/
│   │   └── venues/                    # Venue photos (one subfolder per slug)
│   ├── icons/                         # SVG icons used outside components
│   ├── sitemap.xml
│   └── robots.txt
│
├── src/
│   ├── app/                           # Next.js App Router
│   │   ├── layout.tsx                 # Root layout: fonts, Header, Footer
│   │   ├── page.tsx                   # / — Home (long-scroll)
│   │   ├── catalog/
│   │   │   ├── page.tsx               # /catalog — Full venue catalog
│   │   │   └── [slug]/
│   │   │       └── page.tsx           # /catalog/:slug — Individual venue page
│   │   ├── collections/
│   │   │   ├── page.tsx               # /collections — All thematic collections
│   │   │   └── [slug]/
│   │   │       └── page.tsx           # /collections/:slug — Single collection
│   │   ├── pricing/
│   │   │   └── page.tsx               # /pricing — Price table + add-ons
│   │   ├── for-owners/
│   │   │   └── page.tsx               # /for-owners — Partner landing page
│   │   ├── about/
│   │   │   └── page.tsx               # /about — About PlaceHub
│   │   ├── contacts/
│   │   │   └── page.tsx               # /contacts — Contact form + details
│   │   └── api/
│   │       └── booking/
│   │           └── route.ts           # POST /api/booking — optional handler
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx             # Sticky nav, mobile burger, CTA button
│   │   │   └── Footer.tsx             # Links, categories, contacts, socials
│   │   │
│   │   ├── ui/                        # Primitives — no business logic, no data imports
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx              # «Популярное», «Быстрое подтверждение», «Новинка»
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Drawer.tsx             # Mobile filter panel
│   │   │   ├── Tabs.tsx
│   │   │   ├── Accordion.tsx          # FAQ sections
│   │   │   ├── RatingStars.tsx
│   │   │   ├── ImageGallery.tsx       # Venue photo gallery
│   │   │   └── SectionTitle.tsx
│   │   │
│   │   ├── forms/                     # Form components, each paired with a Zod schema
│   │   │   ├── BookingForm.tsx        # Used on venue pages
│   │   │   ├── LeadForm.tsx           # Used on home and contacts pages
│   │   │   └── OwnerForm.tsx          # Used on /for-owners
│   │   │
│   │   ├── catalog/                   # Catalog-specific components
│   │   │   ├── VenueCard.tsx          # Card with photo, badges, amenities, favourites button
│   │   │   ├── VenueGrid.tsx          # Responsive grid of VenueCards
│   │   │   ├── FilterPanel.tsx        # Desktop sidebar filters
│   │   │   ├── FilterDrawer.tsx       # Mobile drawer filters (wraps FilterPanel)
│   │   │   ├── SortSelect.tsx         # Popularity / price / rating / capacity
│   │   │   └── SearchBar.tsx          # City + type + date + guests
│   │   │
│   │   ├── venue/                     # Single venue page components
│   │   │   ├── VenueGallery.tsx
│   │   │   ├── VenueAmenities.tsx
│   │   │   ├── VenueRules.tsx
│   │   │   ├── VenueReviews.tsx
│   │   │   └── SimilarVenues.tsx
│   │   │
│   │   └── sections/                  # Page-level sections, composed from ui/ and catalog/
│   │       ├── home/
│   │       │   ├── Hero.tsx
│   │       │   ├── AboutPreview.tsx
│   │       │   ├── Categories.tsx
│   │       │   ├── PopularVenues.tsx
│   │       │   ├── HowItWorks.tsx
│   │       │   ├── Calculator.tsx     # Home quick calculator — pure view
│   │       │   ├── WhyUs.tsx
│   │       │   ├── Collections.tsx
│   │       │   ├── ForOwnersBanner.tsx
│   │       │   ├── Testimonials.tsx
│   │       │   ├── FAQ.tsx
│   │       │   └── LeadFormSection.tsx
│   │       ├── for-owners/
│   │       │   ├── OwnerHero.tsx
│   │       │   ├── OwnerBenefits.tsx
│   │       │   ├── OwnerHowTo.tsx
│   │       │   ├── OwnerCabinet.tsx
│   │       │   ├── OwnerPricing.tsx   # Start / Pro / Business tiers
│   │       │   ├── OwnerRequirements.tsx
│   │       │   ├── OwnerFAQ.tsx
│   │       │   └── OwnerFormSection.tsx
│   │       └── about/
│   │           ├── Stats.tsx
│   │           └── Team.tsx
│   │
│   ├── data/                          # All content — no hardcoded strings in components
│   │   ├── venues.ts                  # 12+ venues, typed as Venue[], matches CASE.md §9
│   │   ├── categories.ts              # 18 categories with descriptions and min prices
│   │   ├── collections.ts             # 8 thematic collections with slugs and venue refs
│   │   ├── reviews.ts                 # 4+ client reviews
│   │   ├── faq.ts                     # 10+ general FAQ + owner FAQ entries
│   │   ├── pricing.ts                 # Venue price table + add-on services table
│   │   ├── ownerPlans.ts              # Start / Pro / Business plan definitions
│   │   └── calculator.ts              # Base hourly rates and add-on prices for calculator
│   │
│   ├── lib/
│   │   ├── schemas/
│   │   │   ├── booking.ts             # Zod schema for BookingForm
│   │   │   ├── lead.ts                # Zod schema for LeadForm
│   │   │   └── owner.ts               # Zod schema for OwnerForm
│   │   ├── calculatePrice.ts          # Pure function: options → price (CASE.md §6.5 formula)
│   │   ├── filters.ts                 # Pure functions: filter + sort venue arrays
│   │   └── utils.ts                   # cn(), formatPrice(), slugify()
│   │
│   ├── hooks/
│   │   ├── useCalculator.ts           # Calculator state: params → computed price
│   │   ├── useFavourites.ts           # Read/write favourites to localStorage
│   │   └── useVenueFilters.ts         # Active filters + sort → filtered, sorted venues
│   │
│   ├── store/
│   │   └── catalogStore.ts            # Zustand: search query, active filters, sort order
│   │
│   └── types/
│       ├── venue.ts                   # Venue type — must match CASE.md §9 exactly
│       ├── booking.ts                 # BookingRequest type — must match CASE.md §9 exactly
│       ├── collection.ts
│       └── review.ts
│
├── tailwind.config.ts                 # Extends default theme with tokens from DESIGN.md
├── next.config.ts
├── tsconfig.json                      # strict: true — do not weaken
└── package.json
```

### Data flow rules

These are architectural invariants. Do not break them:

- **Content never lives in components.** All copy, prices, venue data, FAQ, reviews come from `src/data/`. Components receive typed props and render.
- **Calculator logic lives in `lib/calculatePrice.ts` and `useCalculator.ts` only.** The formula is defined in `CASE.md` §6.5: `total = pricePerHour * hours + addons`. Catering: `catering = pricePerGuest * guests`. No other file reimplements this.
- **Filter and sort logic lives in `lib/filters.ts` and `useVenueFilters.ts` only.** `FilterPanel.tsx`, `FilterDrawer.tsx`, `SortSelect.tsx`, and `VenueGrid.tsx` are pure views — they dispatch to the Zustand store and read from the hook.
- **Favourites live exclusively in `useFavourites.ts`.** It reads and writes `localStorage`. Components call the hook; they do not touch `localStorage` directly.
- **All Zod schemas live in `src/lib/schemas/`.** Never inline validation schemas inside form components or hooks.
- **Hooks own all state and side effects.** Components do not call `fetch` directly.
- **No inline styles.** Tailwind utility classes or CSS variables from `DESIGN.md` only.
- **The `Venue` and `BookingRequest` types in `src/types/` must match `CASE.md` §9 exactly.** If the spec changes, update the types first, then fix every consumer.

### Pages and their data sources

| Route | Data sources |
|-------|-------------|
| `/` | `venues.ts` (popular 6–8), `categories.ts`, `collections.ts`, `reviews.ts`, `faq.ts`, `calculator.ts` |
| `/catalog` | `venues.ts` (all), `categories.ts` |
| `/catalog/[slug]` | `venues.ts` (single by slug), `reviews.ts` (filtered by venue), `calculator.ts` |
| `/collections` | `collections.ts` |
| `/collections/[slug]` | `collections.ts` (single), `venues.ts` (refs) |
| `/pricing` | `pricing.ts` |
| `/for-owners` | `ownerPlans.ts`, `faq.ts` (owner subset) |
| `/about` | hardcoded stats (defined in section component, not data file) |
| `/contacts` | — |

### Routing conventions

```
/                              Home
/catalog                       Full venue catalog
/catalog/[slug]                Individual venue page
/collections                   All thematic collections
/collections/[slug]            Single collection
/pricing                       Price table
/for-owners                    Owner partner page
/about                         About PlaceHub
/contacts                      Contacts
```

### SEO

Every page exports `generateMetadata()`. Required fields: `title`, `description`, `openGraph.title`, `openGraph.description`, `openGraph.url`. Every `<Image>` has a meaningful `alt` — no exceptions. URLs follow the slug pattern defined in `CASE.md` §10.

### Mobile requirements

These are first-class, not afterthoughts. From `CASE.md` §6.8:
- Header collapses to burger menu at `< 1024px`
- Venue cards stack to single column at `< 768px`
- Filter panel opens as a `Drawer` on mobile — `FilterPanel` never renders inline below `768px`
- All forms must be comfortable to fill on a 375px screen

---

## 11. Code standards

- **Never typecast. Never use `as`.** Fix the type at the source.
- `strict: true` in `tsconfig.json`. Do not weaken it.
- Prefer `unknown` over `any`. Narrow with type guards, not casts.
- Zod for all runtime validation: form schemas, API response parsing, dynamic route params.
- All async functions that can fail must handle the failure path explicitly. No silent swallows.
- No `console.log` in committed code. Remove before commit.
- Components are pure where possible: props in, JSX out, no side effects inside render.
- `// @ts-ignore` and `// @ts-expect-error` require a documented reason in the same comment.

---

## 12. Commands

```bash
pnpm install        # Install dependencies
pnpm dev            # Start dev server → http://localhost:3000
pnpm build          # Production build
pnpm start          # Run production build locally
pnpm lint           # ESLint
pnpm typecheck      # tsc --noEmit
```

Run `pnpm typecheck` and `pnpm lint` after every non-trivial change. Do not commit if either fails.

---

## 13. Forbidden

- `as` casts anywhere in TypeScript
- `any` without an explicit comment explaining why it cannot be avoided
- Hardcoded colors, font sizes, or spacing — use tokens from `DESIGN.md`
- Hardcoded copy strings in components — all content comes from `src/data/`
- `Lorem ipsum` anywhere — `CASE.md` §11 requires realistic commercial Russian copy throughout
- Business logic (filtering, price calculation, favourites) inside components — extract to hooks or `lib/`
- Direct `localStorage` access in components — use `useFavourites`
- Direct `fetch` in components — encapsulate in hooks
- Reimplementing the calculator formula outside `lib/calculatePrice.ts`
- Weakening `tsconfig.json` `strict` settings

---

## 14. When to ask, when to proceed

**Ask before proceeding when:**
- The request has two plausible interpretations and the choice materially affects output.
- A change touches `src/types/venue.ts` or `src/types/booking.ts` — these are shared contracts.
- A change touches `catalogStore.ts` — filter shape affects every catalog consumer.
- You need a credential or env variable you don't have.
- The user's stated goal and the literal request appear to conflict.

**Proceed without asking when:**
- The task is trivial and reversible.
- Ambiguity resolves by reading `CASE.md`, `DESIGN.md`, or the existing code.
- The user already answered the question in this session.

---

## 15. Project Learnings

Agent maintains this section. Append one concrete rule per correction. Write it as "Always use X for Y", never "be careful with Y". Remove lines when the underlying issue goes away.

- (empty)
