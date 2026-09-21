# Signage Studio — Project Status

**OS version tracked:** v2.7
**Site status:** Content-complete, shipping.
**Last major refresh:** 2026-09-21 — brought up to OS v2.7 standards
(motion migration, accent-rule alignment, surface-rhythm reorder,
token pass).

---

## Visual direction

| Setting | Value | Reason |
|---|---|---|
| **Motion character** | `considered` (default) | Professional signage manufacturer — needs assured, premium timing (0.7s section / 0.5s card / 0.8s hero, stagger 0.08). Not `precise` (that reads as tech/SaaS); not `editorial` (that reads as luxury). |
| **Density mode** | Substantive | Manufacturer with real capability — dense evidence sections earn confidence. Homepage runs 11 sections; each one answers a question or supplies proof. |
| **Typefaces** | Space Grotesk (display) + Inter (body), via `next/font` | Space Grotesk carries structure and industrial character in headings; Inter is a proven body face. Two typefaces total. |
| **Colour** | Primary teal `#008896`, Accent amber `#F2B443`, Ink/charcoal/graphite/steel/mist/bone + optional cream/sand | Client-supplied brand marks. Cream added strategically (WhyUs / Process / Reviews / About Story / Contact / ServiceDetail) — see surface rhythm below. |
| **Button radius** | `rounded-full` | Softens against the industrial type + wraps content signage-style. Applied everywhere via the Button component. |
| **Photography plan** | Real project photography only (real client-owned installations in `public/projects/`). No stock. Vehicle Branding folder is intentionally empty until real vehicle-wrap photos are supplied — a small honest placeholder card is shown in the meantime. |

---

## Surface rhythm (homepage)

Alternating tone rhythm per Design Language §4:

```
hero(ink) → marquee(charcoal) → services(ink) → whyus(cream)
→ projects(graphite) → process(cream) → stats(charcoal)
→ reviews(cream) → faq(charcoal) → cta(ink) → footer(ink)
```

Cream sections are always separated by a dark break. The dark stats
band between Process and Reviews prevents a 2-section cream stretch
and doubles as a factual proof beat.

---

## Deviations from OS defaults

None currently. Cream / sand extensions are permitted by
`SYSTEM/01-DESIGN-TOKENS.md` §1 for warm brands and are used within
the standard.

---

## Third-party dependencies

| Package | Version | Notes |
|---|---|---|
| `next` | ^14.2.0 | App Router |
| `react` | ^18.3.0 | |
| `motion` | ^12.43.0 | Single motion library. `framer-motion` removed 2026-09-21. |
| `lucide-react` | ^0.460.0 | Icon set |
| `tailwindcss` | ^3.4.0 | |

`@bbettr/motion` (ENGINE) copied into `engine/motion/`. All motion
imports resolve via `@/engine/motion`. MotionProvider is mounted in
`app/layout.tsx` and enforces `LazyMotion strict` + `reducedMotion="user"`.

---

## Third-party embeds

| Widget | Purpose | Notes |
|---|---|---|
| Elfsight Google Reviews | Client Voices section | app id `4fa6cf16-eb30-453c-b4d8-740f5d5db8ef`; renders on production domain once whitelisted in the Elfsight dashboard. |
| GoHighLevel form | Contact page quote form | Placeholder container `#ghl-quote-form` in `contact-form.tsx` — paste the embed to activate. |

---

## Client-facing values (single source of truth)

All contact / copy values are in `config/site-config.ts`:

- Primary phone: `066 296 9142` — `tel:+27662969142`
- WhatsApp: `082 450 3848` — pre-filled enquiry message
- Email: `info@signagestudio.co.za`
- Address: 329 Dykor Road, Silverton, 0184
- Hours: Mon–Fri 07:30–16:30 · closed weekends + public holidays
- Established: 2004
- Instagram: `instagram.com/signagestudio_silverton`
- Facebook: profile id `100090483562207`

---

## Outstanding

- Vehicle wrap photography — client to supply. Uncomment the entry in
  `config/projects-config.ts` once the folder has real photos.
- Elfsight domain whitelist (post-launch): the widget will show the
  editorial shell but empty content until the production domain is
  added in the Elfsight dashboard.
- Client Brief + BKB — a formal Client Brief and Business Knowledge Base
  don't exist yet for Signage Studio. Content and voice have been
  captured across previous sessions and are correct; formalising them
  in `RESEARCH/schemas/client-brief.md` would unlock the Gate 1
  research check and the deeper section-purpose audit.
