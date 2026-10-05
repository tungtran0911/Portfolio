# Design · tungtran-site

The locked design system for this site. Read it before changing a page. Extend it here
rather than improvising on one page. Tokens live in [`tokens.css`](tokens.css). Front-page
styles are in [`src/styles/home.css`](src/styles/home.css); shared and study-page styles in
[`src/styles/global.css`](src/styles/global.css).

## Intent

- **Audience:** quant trading and research recruiters, interviewers, research collaborators.
- **Job:** impress in the first screen, then let people open the detail they care about.
- **Idea (v3, 2026-10-05):** a night museum of a quant, built on the format of the user's
  "Antique Parian" reference. Floating rounded panels, each with its own header and its section
  underlined. The marble veins are Brownian paths. The statue is the portrait, breaking out of a
  ring. The 2020 volatility spike breaks out of its tile the same way.
- **Copy rules:** short sentences. Straight to the point. No long dashes (—) anywhere.
  No invented numbers: every figure comes from the CV, a certificate or a linked repository.

## Structure

- **Front page (`/`):** one long scroll of panels: Home · About · Toolkit (typographic interlude,
  like the reference's "Fonts" block) · Research · Experience · Awards · Contact, then a glass card.
  Every "open" (story, project, experience row, certificate, index) is a `<dialog>` sheet.
  With the View Transitions API the clicked element morphs into the sheet; without it the
  sheet slides in. See `src/components/home/SheetController.astro`.
- **Inner pages** (About, Research, the four studies, Notes, Contact) sit in one panel with the same
  header, the same fixed backdrop, previous / next cards and the glass card. `BaseLayout` does this.
- **One sequence, A to Z** (`pageSequence` in `src/data/site.ts`): Home, About, Research, VN30,
  SPY, Quant factor portfolio, FinLab, Notes, Contact. Cross-document view transitions slide the
  page up when you move forward and down when you move back; the backdrop stays still; a study's
  title glides from the card or sheet you clicked into the page heading (`data-study-src` →
  `h1[data-study-title]`). Browsers without support simply navigate.

## Theme (dark only): navy and gold

| Token | Value | Use |
|---|---|---|
| `--color-paper` | `oklch(13% 0.032 262)` | page navy |
| `--color-paper-2` / `-3` | `oklch(17.5% 0.045 262)` / `oklch(22% 0.052 261)` | panel gradient |
| `--color-mist` | `oklch(18.5% 0.035 255)` | diagonal bands in the backdrop |
| `--color-prussian` | `oklch(25% 0.075 262)` | the disc behind the bust |
| `--color-ink` / `-2` | `oklch(95% 0.018 85)` / `oklch(83% 0.022 80)` | ivory text |
| `--color-accent` | `oklch(80% 0.115 80)` | gold: buttons, active nav, my model's line, good numbers |
| `--color-accent-2` | `oklch(64% 0.1 72)` | bronze: rings and Brownian veins |
| `--color-neg` | `oklch(71% 0.15 28)` | coral: losses and negative results only |

The user's own photos stay in full colour (bust cut-out, story portrait, triceratops).
Gold means "the thing I am arguing for". Coral means "this number is bad for me".

## Typography

- **Display:** Urbanist 300 to 600, tracked +0.04 to +0.06em (stand-in for Euclid Flex).
- **Body:** Mulish 300 to 700 (stand-in for Sofia Pro).
- **Data:** Geist Mono. Labels, numbers, the ticker, axis text.

## Signature components

- `HeroBust`: cut-out duotone portrait (`public/img/portrait-cut.webp`) in a disc; the head breaks
  out of the top; ring, dotted orbit and μ σ ρ as planets.
- `SpikeTile`: SPY 2020 realised volatility breaking out of its tile; my forecast in ice.
- `BackdropValley` (current wallpaper, chosen by the user): an autumn valley with a steam train on
  a viaduct, under a navy scrim. A scroll-driven animation slides the photo up as you scroll, so the
  page reads as a descent: misty sky, the train, the river. An owl crosses the sky every ~30 s,
  six candles float in the side lanes, a faint dashed random-walk constellation sits in the sky.
  Inner pages use a heavier scrim for reading. Alternatives kept: `BackdropArcane`, `Backdrop`.
- No section cards: content sits directly on the wallpaper. Legibility comes from the scrim, text
  shadows on titles and labels, and frosted `glass-surface` backings only on data (ticker, research
  cards, the cost chart, the experience table).
- One fixed top bar (`PanelHead` inside `.topnav`) that follows the section in view; `Socials`;
  dot pagination at ≥ 80rem; Index sheet on mobile.
- Awards: a horizontal moving strip of certificate scans (pause on hover, click to open).
- Toolkit interlude: outlined ∑ λ β glyphs behind each field, vertical label bars.
- Ticker tape of real numbers between the first two panels.

## Motion

- Easing `cubic-bezier(0.16, 1, 0.3, 1)`. Hero reveal on load; sections reveal once on entry;
  chart lines draw once; sheets morph or slide. Nothing loops except the ticker.
- `prefers-reduced-motion`: no morph, no slide, no ticker motion, opacity only.
