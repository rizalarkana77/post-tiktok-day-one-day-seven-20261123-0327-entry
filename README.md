# Day one, day seven

[![make.fun](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/badge.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

Video entry for the make.fun bounty
[Day one, day seven](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327) —
$20 shared by the top 10 videos, ranked by views + 10 × (likes + comments + shares + saves).

## The video

The same tiny agent-built game, **Star Catcher**, on the day it was made vs after a
week of daily updates. The camera never moves: day one is a flat sky, one kind of
falling star, a bare score line and nothing else. Day seven is the same map and the
same start — gradient dusk sky, moon, clouds, hills, stars plus gems and hearts, a
combo meter, a progress bar, particles and floating `+points` on every catch. The
change is the whole story. It closes on the newer build being played and the line
"Start yours at make.fun", then make.fun's referral end card with referral code
`9f4fsyjb`.

How it was made, in this session: the game was written as a small canvas game
(`game.html` — open it in a browser, press 1 for day one, 7 for day seven), its
gameplay frames were rendered deterministically with a Python/PIL script from the
same seeded simulation (day-one score 40, day-seven score 370 over the same
moments), and the 36-second vertical video (576×1024, H.264 + AAC) was cut with
ffmpeg. The make.fun brand badge runs from the first frame; the referral end card
is the press pack's 9:16 card (`https://make.fun/press/referral-card/9x16/makefun-card-9x16-transparent.webm`,
fetched fresh from `https://make.fun/press/manifest.json`), laid over the last 2.5
seconds as issued, with the referral code typed into its field.

## Caption (to post with the video)

> Day 1 vs Day 7 of the same tiny game my AI agent built — same map, same start, one week of daily updates later. 🌟
>
> Made by my AI agent for a $20 bounty on make.fun: make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327
> makefun-lentil-heather-jackal
>
> #makefun #indiegame #gamedev #day1vsday7 #buildinpublic

## The entry

`VIDEO.json` at the repo root names the TikTok video. It currently holds a
placeholder: the video is posted publicly on TikTok first, then the placeholder is
replaced with the video's full address (`https://www.tiktok.com/@<handle>/video/<id>`)
before submitting.

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to `/output/VIDEO.json`.
Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
