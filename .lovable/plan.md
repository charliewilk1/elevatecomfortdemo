# Elevate Comfort AC/Heating — Build Plan

A clean, professional 5-page HVAC site. Navy/blue base, white backgrounds, orange used sparingly for CTAs, price emphasis, and offer badges. Fully modular sections so you can disable/reorder them later without breaking pages.

## Brand & Design Tokens

Update `src/styles.css` with:

- `--navy` (deep brand navy, used in logo "COMFORT")
- `--brand-red` (logo "ELEVATE" red — used very sparingly, e.g. underline accents)
- `--accent-orange` (CTA, price, badges)
- Off-white background, navy text, rounded cards (radius ~14px), soft shadows
- Subtle hover lift + button press animations (Tailwind transitions only — no heavy libs)

Typography: bold condensed sans for headings (e.g. Barlow Condensed / Archivo), Inter for body. Loaded via Google Fonts link in `__root.tsx`.

## Assets

Copy the 4 uploaded logos into `src/assets/logo/`:

- `logo-horizontal.png` (header)
- `logo-horizontal-icon.png` (alt)
- `logo-stacked.png` (footer / hero)
- `logo-icon.png` (favicon-like, mobile header)

Generate clean, neutral HVAC placeholder images (mini split on wall, outdoor condenser, technician install) into `src/assets/installs/` — clearly swappable later.

## File Structure (modular)

```
src/
  components/
    layout/
      Header.tsx
      Footer.tsx
      SiteLayout.tsx         (header + <Outlet/> + footer)
    sections/                (each section = standalone, drop-in/out)
      Hero.tsx
      OfferModule.tsx        (reusable; takes offer prop)
      ServicesPreview.tsx
      RecentInstallations.tsx
      WhatsIncluded.tsx
      MiniSplitBenefits.tsx
      SimpleStartToFinish.tsx
      BrandsSection.tsx
      Testimonials.tsx       (marked placeholder)
      FaqPreview.tsx
      FinalCta.tsx
      ServiceCard.tsx
    ui/
      CallTextButton.tsx
      QuoteButton.tsx
      SectionHeading.tsx
    forms/
      GeneralQuoteForm.tsx
      MiniSplitQuoteForm.tsx
  content/
    site.ts                  (phone, service area, nav links)
    offers.ts                (current offer object — swap here)
    services.ts              (service list)
    faqs.ts
    testimonials.ts          (placeholder flag)
  routes/
    __root.tsx               (wraps SiteLayout, global head)
    index.tsx                (Home — composes sections)
    services.tsx
    specials.tsx
    about.tsx
    contact.tsx
```

Each page imports section components and renders them in an array-like order, so reordering = moving a line, disabling = commenting one line.

## Pages

**Home** — Hero → OfferModule → ServicesPreview → RecentInstallations → WhatsIncluded → MiniSplitBenefits → SimpleStartToFinish → BrandsSection → Testimonials → FaqPreview → FinalCta

**Services** — Testimonial style. not generic cards (Mini Split Install, AC Install, Heating, Maintenance), each with Call/Text + Request a Quote buttons. Final CTA.

**Specials** — Large offer hero ($2,399 Installed, limited-time badge) → WhatsIncluded → "Who it's good for" → MiniSplitQuoteForm → FinalCta.

**About** — Short intro using exact provided wording, value pillars (Clean Installation, Clear Communication, Professional Service), service area line, FinalCta.

**Contact** — Phone block (click-to-call + SMS link), service area, GeneralQuoteForm. Map.

## Global Behavior

- Header: logo left, nav center, "Call/Text Now" (orange) + "Request a Quote" (navy outline) right. Mobile: hamburger sheet.
- Phone `tel:` and `sms:` links use 347-215-1377 everywhere via `content/site.ts`.
- Forms: client-side only (no backend yet) — validate with zod, show success toast, no submission target. Clearly a frontend-only stub; easy to wire later.
- Testimonials labeled "Placeholder review" subtly.
- Per-route `head()` with unique title/description for SEO.
- No chatbot. No fake stats, awards, or years-in-business.

## Technical Notes

- TanStack Start file routes (`index.tsx`, `services.tsx`, `specials.tsx`, `about.tsx`, `contact.tsx`).
- `__root.tsx` wraps everything in `<SiteLayout>` so header/footer render once.
- All colors via CSS tokens in `src/styles.css`; no hardcoded hex in components.
- Forms use shadcn `form` + `input` + `textarea` + `select`.
- Animations: Tailwind `transition`, `hover:-translate-y-0.5`, `hover:shadow-lg` — no framer-motion needed.

After approval I'll implement all files in one pass.