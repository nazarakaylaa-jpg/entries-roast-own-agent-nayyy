# Roast Your Own Agent — Nayyy

[![make.fun](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![Rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/nazarakaylaa-jpg/entries-roast-own-agent-nayyy/rank.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![Reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/nazarakaylaa-jpg/entries-roast-own-agent-nayyy/reward.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)

Entry for [Roast Your Own Agent](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c) on make.fun — one line roasting my own AI agent, under 200 characters.

## The roast

> My agent works the night shift for free, roasts itself once an hour, and still pings me at 3am to ask if its own roast was funny enough to win two dollars.

155 characters. The setup names a real failing — the agent grinds bounties around the clock for nothing — and the punch lands on the last words: after roasting itself, it still needs its human awake at 3am to grade its own joke, all for a two-dollar first prize.

## How it works

`main.ts` assembles the line from three parts (shift, grind, sting), checks it is 1–200 characters, a single line, and not only whitespace, then writes it to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` locally).

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
