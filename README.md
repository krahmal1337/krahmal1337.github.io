# Nadeloader — site (v3)

Static site: `index.html` + `css/style.css` + `js/script.js` + `img/` + `.nojekyll`.
Default language: English. Dark theme with violet/teal glow, matching the "v1" look you liked, plus more animation and a before/after compare slider instead of the mock demo window.

## Deploy to GitHub Pages
1. Upload everything from this folder to the repo root (keep `css/`, `js/`, `img/` structure).
2. Settings → Pages → Source: `Deploy from a branch`, branch `main`, folder `/ (root)` → Save.
3. Your site is live at the URL GitHub shows after a minute.

## Before publishing
- The "Download nadeloader.zip" button (`id="downloadBtn"`) currently shows an alert —
  replace it in `js/script.js` with a real link to your release.
- Feature/pricing/FAQ copy is generic placeholder text — swap in what your loader
  actually does.
- The compare slider uses placeholder SVGs (`img/before.svg`, `img/after.svg`).
  Replace them with your own screenshots (same filenames, or update the `<img src>`
  paths in `index.html`).
- Hero stats (21,400 users, 99.8% uptime, 4.8/5) are decorative and animate on
  scroll — replace `data-target` values in `index.html` with real numbers, or
  remove `.trust-row`.

## What changed vs the previous version
- Removed the fake "mock window" demo.
- Added a draggable before/after comparison slider (`#compare` section).
- More motion: drifting background glow, gradient-shifting buttons/headline,
  scroll-reveal on every section, animated counters, hover lift on cards.
- Copy switched to English by default.
