# ServiceFlow — Design System

**ServiceFlow** is a local service booking & availability platform — think "airline booking flow, but for the haircut, massage, cleaning, or dog-walk down the street." Customers search a service, browse trusted local providers, see **real-time openings**, pick a time, and confirm instantly. Providers get a bright, friendly dashboard to manage their calendar and bookings.

The design language is deliberately **NOT a grey SaaS admin dashboard**. It is a **bright booking product**: sunny, optimistic, spacious, travel-like, conversion-focused. The mood reference is a modern airline booking site (SkyUp.aero was used only as *energy* inspiration — never copied): bold yellow, warm charcoal type, big rounded panels, generous air, and a clear **search → choose → select time → confirm** rhythm.

> **Sources:** This system was created from a written brief (no codebase or Figma was attached). If you have the production app or Figma, link them here so future updates can reference the source of truth.

---

## Personality in one breath
Bright booking product, not admin dashboard · large rounded booking panels · warm yellow accent · dark charcoal typography · playful-but-professional shapes · big touch-friendly inputs · clear service cards · strong CTAs · light airy background with subtle warm sections.

---

## CONTENT FUNDAMENTALS — how ServiceFlow writes

**Voice:** warm, confident, plainspoken, lightly upbeat. We sound like a helpful local who knows everyone in the neighborhood — never corporate, never cutesy.

- **Person:** Address the customer as **you**; the brand is **we**. ("**We** sent the details to your email." / "Pick a time that works for **you**.")
- **Casing:** Sentence case everywhere — headings, buttons, labels. The only uppercase is small **eyebrow/overline labels** (e.g. `SERVICE`, `NEAR`, `WHEN`) with wide tracking. Never Title Case Every Word.
- **Length:** Short. Headlines are 2–5 words ("Book it in seconds."). Body lines stay under ~14 words. Buttons are 1–3 words, verb-first ("Find times", "Confirm & pay", "Browse services").
- **Tone in numbers/urgency:** factual and friendly, never pushy. "2 left" and "Your slot is held for 5 more minutes" — helpful nudges, not fake scarcity caps.
- **Status copy:** plain past-tense or adjectives — "Confirmed", "Pending", "Cancelled", "No bookings yet".
- **Empty states & errors:** encouraging and forward-looking, never a dead end. "When you book a service it'll show up right here, ready to manage." Errors are honest + actionable: "Your card was declined. Try another."
- **Emoji:** **No.** The brand expresses warmth through the sun mark, yellow, and rounded shapes — not emoji. Don't use unicode emoji in product copy.
- **Punctuation:** ampersands are welcome in short labels ("Cut & Style", "Confirm & pay"). Use an em dash for asides. Currency and times are concrete: `$48`, `2:30 PM`, `45 min`.

**Sample copy bank**
- Hero: *"Book it in seconds."* / *"Local services, sunny and simple."*
- Sub: *"Find a trusted local pro, see real-time openings, and lock in a time — no phone tag."*
- Reassurance: *"Confirmed instantly. Free to change up to 24 hours before."*
- CTA: *Find times · Book · Confirm & pay · List your service · Browse services*

---

## VISUAL FOUNDATIONS

**Color.** The system is built on a **warm** triad: sunny **yellow** (the sun / primary action), **warm charcoal "ink"** (type & secondary actions), and **airy cream** surfaces. There are **no cold greys** anywhere — every neutral is warm-tinted. Blue exists **only** as a travel-like `info` accent (reminders), never as a primary button. Semantic colors (success green, warning amber, error warm-red, info sky) each ship as a soft tint + a solid pair. Primary buttons are **yellow with charcoal text** — never white-on-yellow, never white-on-blue — for poster-grade legibility.

**Type.** Two families + a mono.
- **Bricolage Grotesque** (700/800) for display & headings — bold, friendly, slightly characterful: the "travel-poster" voice. Tight tracking (−3% on big sizes).
- **Plus Jakarta Sans** (400–700) for body, labels, lead copy — clean and highly readable.
- **DM Mono** for times, prices, and confirmation codes — gives data a tactile, ticket-stub feel.
- The scale is **poster-sized**: hero up to 68px, with confident jumps. Minimum UI text 14px.

**Backgrounds.** Light & airy. The page is cream (`#FCFAF4`); content sits on **white booking panels** that lift off the cream with soft shadow. Warm sections (`cream-100/200`) break up long pages with gentle bands — used sparingly (1–2 warm tones max per page). No heavy gradients as backgrounds; the only gradient is the warm yellow fallback block behind a service photo and the icon-halo radial in empty states. No textures, no noise, no dark mode.

**Shape & radius.** Everything is **generously rounded**. Inputs 14px, cards 20px, **booking panels 28px**, hero panels 40px, and **all actions + time slots + chips are full pills** (999px). This rounding is the single most identity-defining move — it reads friendly and physical, like objects on a sunny table.

**Cards.** White fill, soft warm hairline border (`#EFE7D8`), `shadow-sm` at rest, `shadow-lg` + a **−4px lift** on hover. ServiceCards are photo-led (big rounded image with a category pill + duration chip overlaid). BookingCards mimic a **boarding pass**: a yellow date block with a **dashed tear line**. Never the "rounded box with a colored left-border accent only" SaaS trope (the only left-rail we use is the Toast's semantic rail, and the BookingCard's yellow date panel).

**Shadows.** Soft, diffuse, **warm-tinted** (brown-black `rgba(43,36,20,…)`), like diffused sunlight — never hard black drop shadows. A special **yellow glow** (`shadow-accent`) sits under primary CTAs and selected slots to make them feel lit.

**Borders.** Hairline (1.5px) and warm. Inputs use `--border`; focus swaps the border to yellow-500 and adds a 4px soft-yellow glow ring (`--focus-ring`). Empty states use a friendly dashed border.

**Motion.** Gentle and optimistic. Standard transitions 140–220ms on `--ease-out`. Modals and toasts use a **soft spring** (`--ease-spring`, slight overshoot) to pop/slide in. Press states **nudge down + scale to ~0.985** (buttons) — a tactile "press". No infinite/looping decorative animation; nothing flashy.

**Hover / press states.**
- Primary button: darken yellow (`500 → 600`) on hover; nudge+shrink on press.
- Outline/ghost: border darkens to ink, or fill warms to cream.
- Cards: lift + deeper shadow.
- Time slots / date cells: border turns yellow + faint yellow tint fill on hover; selected = solid yellow + glow.
- Table rows: faint yellow (`yellow-50`) wash on hover.

**Transparency & blur.** Used intentionally, not everywhere: the **TopNav** is translucent cream with a 10px backdrop blur (content scrolls warmly beneath it); the **Modal scrim** is charcoal at 42% with a 3px blur. Duration chips over photos use an 82% charcoal pill for legibility.

**Imagery.** Warm, sunny, real photography of local services and providers — bright, optimistic, daylight. (No photos ship with this system; ServiceCard falls back to a warm yellow gradient block. Provide real imagery for production.)

**Layout rhythm.** Generous spacing (4px base, big steps up to 112px). Content max-width ~1200px. The booking flow always reads left-to-right / top-to-bottom as **search → choose option → select time → confirm**, echoing an airline flow. Touch targets never below 44px; primary inputs are 56–66px tall.

---

## ICONOGRAPHY

ServiceFlow uses **line icons** with a **rounded, ~2px stroke** — friendly, not sharp. The house style matches **Lucide** (rounded caps/joins, geometric, 24×24). Use Lucide for all product UI icons.

- **Where icons live now:** A few essential glyphs are drawn **inline as SVG inside components** (search magnifier in `SearchField`, chevron in `Select`, location pin + sun mark in `TopNav`, close/check in `Modal`/`Select`, the rating **star** in `ServiceCard`, status icons in `Toast`). These are intentionally inline so components are self-contained.
- **For new work:** pull from **Lucide** (CDN: `https://unpkg.com/lucide-static`) at ~2px stroke, rounded — it matches the existing glyphs. *(Substitution flag: no original icon set was provided; Lucide is the closest match to the hand-drawn style here. Swap to the brand's real set when available.)*
- **The rating star is the one filled glyph** — always in `--accent-strong` yellow.
- **No emoji** as icons. **No unicode dingbats.** Brand expression comes from the **sun mark** (8-ray sunburst around a solid center), used in the logo and as the app's signature motif.
- **Logo:** the wordmark "ServiceFlow" in Bricolage Grotesque 800 next to a yellow rounded-square tile holding the charcoal sun mark. See `assets/logo-serviceflow.svg` and `assets/sunmark.svg`.

---

## INDEX — what's in this system

**Foundations (root)**
- `styles.css` — the single entry point consumers link. `@import`s everything below.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/fonts.css`

**Components** (`components/<group>/` — React + TS, styled via CSS custom properties)
- `forms/` — **Button**, **Input**, **Select**, **SearchField** (signature booking bar), **DatePicker** (day strip), **TimeSlot**
- `data/` — **ServiceCard**, **BookingCard** (boarding-pass), **Badge**, **DataTable**, **EmptyState**
- `feedback/` — **Modal**, **Toast**
- `navigation/` — **TopNav**, **Tabs**

Each component directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a `@dsCard` showcase HTML.

**Specimen cards** (`guidelines/*.card.html`) — the Design System tab: color (primary, ink, surfaces, semantic), type (display, body, mono, scale), spacing (radius, shadow, scale).

**UI kit** (`ui_kits/booking/`) — `index.html` is an interactive click-through of the ServiceFlow customer booking flow (search → results → pick time → confirm), composed from the components above. See its `README.md`.

**Assets** (`assets/`) — `logo-serviceflow.svg`, `sunmark.svg`.

**Skill** — `SKILL.md` makes this folder usable as a downloadable Claude Agent Skill.

---

## Tokens for React + TypeScript + Tailwind

All design decisions are CSS custom properties on `:root` (see `tokens/`). To wire into Tailwind, map them in `tailwind.config.ts`:

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        yellow: { DEFAULT: 'var(--yellow-400)', strong: 'var(--yellow-500)', hover: 'var(--yellow-600)', press: 'var(--yellow-700)' },
        ink:    { DEFAULT: 'var(--ink-800)', body: 'var(--ink-600)', muted: 'var(--ink-400)' },
        cream:  { DEFAULT: 'var(--cream-50)', warm: 'var(--cream-100)', sunk: 'var(--cream-200)' },
        success:'var(--success-500)', warning:'var(--warning-500)', error:'var(--error-500)', info:'var(--info-500)',
      },
      borderRadius: { md:'14px', lg:'20px', xl:'28px', '2xl':'40px', pill:'999px' },
      boxShadow: {
        sm:'var(--shadow-sm)', md:'var(--shadow-md)', lg:'var(--shadow-lg)', xl:'var(--shadow-xl)',
        accent:'var(--shadow-accent)',
      },
      fontFamily: {
        display:['Bricolage Grotesque','sans-serif'],
        sans:['Plus Jakarta Sans','sans-serif'],
        mono:['DM Mono','monospace'],
      },
    },
  },
}
```

**Component golden rules** (carry into every new component):
1. Primary action = yellow fill, **charcoal** text, pill shape, glow shadow.
2. Round generously; inputs ≥ 56px tall; touch targets ≥ 44px.
3. Warm neutrals only — no cold grey, no default blue buttons.
4. Soft warm shadows; lift on hover; nudge-shrink on press.
5. Sentence case; uppercase only for wide-tracked eyebrow labels; no emoji.
