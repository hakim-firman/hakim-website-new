# hakim-web

Astro implementation of the **Hakim Firman — Laravel Style** pen.dev design
(`pencil-welcome-desktop.pen`, frame `X5xw3o`).

## Commands

| Command         | Action                                   |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Dev server on http://localhost:4321      |
| `npm run build` | Static build into `dist/`                |
| `npm run preview` | Preview the production build            |

## Structure

```
src/
  data/site.ts        all copy, links and section data (single source of truth)
  styles/global.css   Tailwind v4 theme tokens (@theme) + component classes
  layouts/Base.astro  document shell, SEO head, scroll-reveal observer
  components/         Nav, Hero, Trust, About, Stack, Process, Services,
                      Upwork, Project, Testimonials, Faq, Cta, Footer, Seo, Icon
  layouts/SubPage.astro  shared shell for the sub pages (back bar, hero, closing CTA)
  pages/index.astro   the landing page
  pages/404.astro     not-found page
  pages/notes.astro   /notes
  pages/uses.astro    /uses
  pages/faq.astro     /faq
  pages/rate-card.astro                    /rate-card
  pages/deck.astro    /deck — 13-slide portfolio deck viewer
  pages/case-study/whatsapp-airtable.astro /case-study/whatsapp-airtable
```

The deck slides are exported from a separate .pen document
(`~/.pencil/documents/de2143ec-…/pencil-new.pen`, frames `01 Cover` … `13 Contact`)
to `src/assets/deck/slide-NN.png` plus `public/deck/hakim-firman-portfolio.pdf`.
Re-export from that document and drop the files back in the same place to update
the deck; slide titles live in `deckSlides` in `src/data/site.ts`.

All routes come from the same .pen document: the landing page is frame `X5xw3o`,
the sub pages are `v8DMIb` (case study), `r9Cn35` (notes), `GU1l6` (uses),
`U9XJ1x` (faq) and `g2O2P` (rate card). Uses / FAQ / Rate card still carry the
design's "placeholder content" banner — drop the `placeholder` prop on those
pages once the real copy is in.

## Design tokens

Ink `#11181C` · ink-2 `#5A646B` · ink-3 `#8B959C` · paper `#FFFFFF` /
`#FBF9FA` · hairline `#0000000F` · green `#00A651` / dark `#00803E` / deep
`#05391F` / tint `#F1FAF5`. Type: Instrument Sans (UI) + JetBrains Mono
(labels, numbers), self-hosted via Fontsource.

The `.rail` class reproduces the Laravel-style 1100px column with hairline side
rails; `.band` draws the section separator.

## Interactions

- Sticky nav: scrolled state, scroll-progress bar, scrollspy, mobile menu (Esc closes)
- Hero: availability pulse, portrait hover parallax
- Stack: keyboard-accessible tablist (arrows/Home/End); hovering a legend row highlights
  its slab and dims the others (slabs never move — the card clips them)
- Process: isometric slabs lift on hover
- Services: each row opens a native <dialog> modal (scope, deliverables, stack, CTA);
  Esc and backdrop click close it, page scroll locks while open. The modal was
  designed on the pen.dev canvas first (`Service Modal — Laravel`, frame HKUjA)
- FAQ: exclusive `<details>` accordion with animated open/close
- CTA: copy-email-to-clipboard button with mailto fallback
- Scroll reveal on every section, disabled under `prefers-reduced-motion`

Isometric artwork (the stack slabs, the about-band cube) and the diagonal hatch
backgrounds are rebuilt from the .pen path geometry and gradients, not
approximated with CSS boxes.

## SEO

- Per-page `<title>`, description, canonical, OG + Twitter cards, `og.png` (1200×630)
- JSON-LD `@graph`: Person, WebSite, ProfessionalService (+ OfferCatalog), FAQPage
- Per-page JSON-LD: CreativeWork (case study), Blog + BlogPosting (notes), FAQPage (faq)
- `@astrojs/sitemap` → `/sitemap-index.xml` (6 routes), `robots.txt`, geo meta
- Semantic landmarks (`header`/`main`/`section`/`footer`), one `h1`, skip link,
  descriptive alt text, focus-visible rings
- Self-hosted fonts, responsive WebP via `astro:assets`, zero-framework JS

Review markup is intentionally left out of the structured data: self-serving
`aggregateRating` on your own site is against Google's review-snippet policy.

## Regenerating `og.png`

`public/og.png` and `public/apple-touch-icon.png` were generated with sharp from
`src/assets/`. Re-run the snippet in git history or edit the PNGs directly.
