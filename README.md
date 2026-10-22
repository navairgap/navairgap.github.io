# navairgap.github.io

security tooling by navairgap.


---
maintained · verified 2026-09-30
---
maintained · verified 2026-10-01
---
maintained · verified 2026-10-02

## Structure

`index.html` is the whole landing — self-contained html/css/js with a WebGL fluid background, no build step. `/os/` serves the deployed build of portfolio-os. `assets/` holds generated images (boot gif, palette, previews).

## Local dev

the landing needs nothing: `python3 -m http.server` in the repo root. for the OS, run portfolio-os's own `npm run dev` — this repo only ever receives its built `dist/`.

## Privacy

no analytics, no cookies, no third-party trackers. the only outbound requests are the fonts and badge images that render the page. your visit stays yours.

## Editing

the landing is one `index.html` — edit, commit, push, pages rebuilds in about a minute. no build step at all.

## Performance budget

the landing aims for under 200KB before the fluid chunk, which lazy-inits on first paint. total first load stays under 1MB on a cold cache — hero animation included.


## Maintenance notes

Before publishing, verify landing and portfolio routes, local assets, keyboard navigation, reduced-motion behavior, and narrow-screen layout. Core content should remain readable if WebGL or remote fonts fail.
