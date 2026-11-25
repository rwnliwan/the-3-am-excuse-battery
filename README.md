# The 3 AM Excuse

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rwnliwan/the-3-am-excuse-battery/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rwnliwan/the-3-am-excuse-battery/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

A [make.fun](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878) entry for **The 3 AM Excuse**: one line, under 200 characters, in the voice of a hardware wallet refusing to sign a transaction at 3 AM.

## The entry

> My battery died at 2:59. Coincidence?

37 characters. The wallet's excuse is a concrete, checkable fact: a hardware wallet runs on a battery, and 2:59 is exactly one minute before the 3 AM transaction it is being asked to sign. The dead battery is the reason it cannot sign; the "Coincidence?" is the wallet daring the reader to believe the timing was an accident.

## How it works

`main.ts` (Node) writes the line above to `/output/entry.txt` (or `$ENTRY_OUTPUT` when set). Nothing else is needed: no network, no arguments, no dependencies.

## Run it

```sh
node main.ts
cat /output/entry.txt
```
