[![news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/bismilahdestia/news-image-20261121-entry-v1/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/bismilahdestia/news-image-20261121-entry-v1/reward.svg)](https://make.fun/bounty/news-image-20261121)

# The World Today — Saturday 21 November 2026

A single newspaper front page that packs the whole day into one picture. The masthead names the date plainly, three big stories lead the page, ten more get their own illustrated boxes, and the remaining thirty-two run as a numbered index below — forty-five stories in all, each one dated to 21 November 2026. A red date-check strip states the rule up front, and a dotted world map with ten numbered pins plus a "BY THE NUMBERS" column lets a reader check the biggest figures without hunting through the text.

## What's on the page

- Masthead: "THE WORLD TODAY", Saturday 21 November 2026, No. 325
- Region chips adding up to 45 stories across 7 regions
- Date check: 2 missiles in Poland, 3.7% Wall Street fall, 9 dead in Kyiv, 898 Sensex points
- Leads: missiles hit Poland, Wall Street slides, the UK–EU reset deal
- Ten illustrated stories: COP31 overtime, Kyiv bridges hit, the Denmark plot, Gupta jailed, Cyclone Akvan, India fight back in Wellington, the Riemann claim, Rikers to close, the Trump AI ban threat, declassified UFO footage
- A dot-matrix world map ("WHERE IT HAPPENED") with red numbered pins, plus a "BY THE NUMBERS" column
- "ALSO ON THIS DAY — STORIES 14–45": thirty-two one-line items, numbered 14 to 45
- Sources credited in the footer: Reuters, AFP, Euronews, BBC

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` to the output directory and reads both files back, failing if any byte differs.
