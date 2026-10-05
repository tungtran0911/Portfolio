# tungtran-site

Personal research portfolio for Tung Tran (Tom), UTS Computing Science (Honours).
Astro 4, static, one small script for the interactive chart. Design rules are in
[`design.md`](design.md); colour, type and spacing tokens in [`tokens.css`](tokens.css).

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + static build to ./dist
npm run preview    # serve ./dist
```

## Layout

```
src/
├── data/
│   ├── site.ts                 # contact links, record, skills — edit facts here
│   ├── spy-vol-crash.json      # exported from vol-har-conformal (Feb–Jun 2020 test window)
├── components/
│   ├── Header.astro            # masthead
│   ├── Footer.astro            # colophon
│   ├── CaseHead.astro          # title block for study pages
│   ├── home/                   # front page: Sheet + SheetController (morphing dialogs), SeriesStrip, MiniCost, Venn
│   └── charts/                 # VolCrashChart, Bars, Diverging, DotInterval (SVG at build time)
├── pages/
│   ├── index.astro             # front page: one long scroll, t0 Intro to t6 Contact
│   ├── projects/               # research index, two studies, two earlier projects
│   ├── blog/                   # notes (MDX in src/content/blog; drafts are not built)
│   ├── about.astro · contact.astro · 404.astro
└── styles/                    # global.css (content), frame.css (panels, sheets, page transitions), home.css (front page)
public/
├── cv.pdf                      # the CV linked everywhere
├── img/                        # duotone portrait, certificate scans (awards/)
├── og.png                      # 1200×630 link preview
└── favicon.svg
```

## Updating numbers

Every number on the site comes from a repository:

- **SPY volatility** — rerun `notebooks/A2_main.py` in
  [vol-har-conformal](https://github.com/tungtran0911/vol-har-conformal), dump `test_fc`, and
  regenerate `src/data/spy-vol-crash.json` (annualised: `sqrt(252 * variance)`). Tables are in
  `src/pages/projects/spy-volatility.astro`.
- **VN30 futures** — tables and figures in `src/pages/projects/vn30-futures.astro` are
  transcribed from the README of [Vn30-future_pred](https://github.com/tungtran0911/Vn30-future_pred).
  Update them when the study sample grows.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

1. Create a GitHub repo named `tungtran0911.github.io` and push this folder to `main`.
2. Repo Settings → Pages → Source: **GitHub Actions**.
3. The site goes live at `https://tungtran0911.github.io`. If you use another repo name or a
   custom domain, change `site` in `astro.config.mjs` (and add `base` for a project page).

## Before publishing

- `public/img/bg-valley*.webp` (the wallpaper photo) came from the internet and its licence is
  unknown. Replace it with your own or a free-licensed photo (for example an Unsplash photo of a
  steam train on a viaduct) before the site goes public.

- `public/cv.pdf` includes a phone number. Swap in a version without it if you don’t want it public.
- Blog posts with `draft: true` are not built.
