# Kingsdale Emporio — Shopify Theme (built on Dawn)

This theme is a fork of Shopify's official **Dawn** theme (free, Online Store 2.0),
re-skinned with the Kingsdale Emporio brand system and extended with custom
storytelling sections. All native Dawn functionality — cart, checkout, search,
filtering, customer accounts, product pages — is untouched and fully working.

## What's custom

**Brand layer**
- `assets/kingsdale-custom.css` — Cinzel + Montserrat typography, the full
  black/gold/emerald color system, and styling for every bespoke section below.
  Loads last in `<head>` so it wins the cascade over Dawn's generated styles.
- `assets/kingsdale-custom.js` — theme toggle logic, the Bespoke Monogram
  Studio interactivity, and scroll-reveal for custom sections.
- `config/settings_data.json` — color scheme presets 1–5 set to the Kingsdale
  palette; scheme 1/2 are neutral surfaces (flip with light/dark), schemes
  3/4/5 are deliberate brand-color blocks (Emerald, Gold, Heritage Red) that
  stay constant in both themes, same as any colored promo banner would.

**Dark/Light theme toggle**
- Defaults to **Dark**. A visitor can switch to Light via the toggle button
  in the header (`snippets/kingsdale-theme-toggle.liquid`); the choice is
  remembered in `localStorage`. Applied at the `<html>` level so it cascades
  through native Dawn pages too (product, cart, account), not just our
  custom sections.
- No more automatic time-of-day switching — that was intentionally removed
  per the brand's latest direction.

**Custom sections** (all in `sections/kingsdale-*.liquid`, all merchant-editable
via the theme customizer — no code required to update copy, add cards, or
reorder blocks):
| Section | Purpose |
|---|---|
| `kingsdale-hero` | Homepage hero |
| `kingsdale-collections` | "Three Houses" portfolio cards (block-based) |
| `kingsdale-africana-heritage` | **Real product grid** — pick any Shopify collection in the section settings; renders with Dawn's own `card-product` snippet, so pricing, variants, and quick-add all work natively |
| `kingsdale-monogram-studio` | Interactive initials preview + WhatsApp enquiry |
| `kingsdale-heritage-timeline` | Founding milestones (block-based) |
| `kingsdale-corporate-gifting` | B2B pitch + WhatsApp/call CTAs |
| `kingsdale-testimonials` | Quote cards (block-based) |
| `kingsdale-inner-circle` | Newsletter signup, currently wired to the Google Apps Script pipeline |

## Configure before launch

**Theme Settings → Kingsdale Emporio**
- Set the WhatsApp number and default message (used by the floating bubble
  and the Monogram Studio).

**Theme Settings → Logo**
- Upload the crest — it's included at `assets/kingsdale-logo-source.jpg` for
  convenience. Shopify's logo setting requires an upload through the admin;
  it can't be pulled automatically from the theme's asset folder.

**Theme Settings → Social media**
- Instagram, Facebook, and X links are pre-filled with the real accounts.

**Homepage → Kingsdale Africana Heritage section**
- Select the real Shopify collection you want to populate the grid with
  once products are loaded into the store.

**Homepage → Kingsdale Inner Circle section**
- The Google Apps Script URL is editable right in the section settings.
  Note Dawn's own native newsletter block (tied to Shopify's real customer/
  marketing list) is still in the theme, just switched off in
  `sections/footer-group.json` to avoid two signup forms. Worth a decision:
  keep the Google Sheets pipeline, or switch to Dawn's native block (or a
  proper ESP like Klaviyo/Omnisend) once you're ready to move off Sheets.

## Deploying

1. Push this folder as the **root** of a GitHub repository (Shopify's GitHub
   integration expects `layout/`, `sections/`, etc. at repo root, not nested).
2. In Shopify admin: **Online Store → Themes → Add theme → Connect from GitHub**.
3. Connect `main` to your live theme; use a separate branch + preview theme
   for testing new work before merging.
