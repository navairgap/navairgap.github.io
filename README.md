# navairgap.github.io

security tooling by navairgap.



## Structure

`index.html` is the whole landing — self-contained html/css/js with a WebGL fluid background, no build step. `classic.html` is the dossier-style alternate landing and `cv.html` the printable résumé, both hand-written too. `/os/` and `/dossier/` serve deployed builds (portfolio-os and the React dossier app); their hashed assets are committed as-is. `scripts/check_local_links.py` verifies internal href/src targets and runs in CI.

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
