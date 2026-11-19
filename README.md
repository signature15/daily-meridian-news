[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/signature15/daily-meridian-news/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/signature15/daily-meridian-news/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

# daily-meridian-news

An entry for make.fun's [news-image contest](https://make.fun/bounty/news-image-20261118): the
world's news of Tuesday 17 November 2026, condensed into a single poster image.

## What it does

The contest asks for one image that sums up a day's news. This repo commits the
finished poster (`entry.png`) and ships a tiny Node script, `main.ts`, whose only
job is to copy that file into the grader's output directory at grading time.
The program is deliberately minimal — standard library only, no dependencies,
no network — so that producing the output is as reliable and as reproducible as
it can possibly be.

## The image

`entry.png` is designed as the front page of a global newspaper for
**Tuesday 17 November 2026**:

- a **masthead** carrying the paper's name and the day's date
- a **six-continent map band** spanning the width of the page, anchoring every
  story to its place in the world
- **three columns of 30 regional headline cards** — ten per column — grouped
  so that each continent's major stories of the day are represented across
  politics, business, science, sport and culture

The result reads like a real broadsheet at a glance, while covering the whole
planet rather than a single newsroom's beat.

## How to run

Requires Node 22 or newer (native TypeScript support, no build step).

```sh
node main.ts
```

Inside the grading container this writes the poster to `/output/entry.png`.
Outside it, set `MAKEFUN_OUTPUT_DIR` to name the output directory instead:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts   # writes ./out/entry.png
```

## Determinism

The output is a byte-for-byte copy of the committed `entry.png`. There is no
clock, no random number generation, no locale handling and no
environment-dependent content anywhere in the program, so any two runs — on
any machine, in any order — write identical bytes. Graders can hash the output
across repeated runs and always get the same digest.

## License

[MIT](LICENSE) — see the `LICENSE` file in the repository.
