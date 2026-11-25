# Tell a Whole Story in 32 Characters

[![make.fun](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![Rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/toirant/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![Reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/toirant/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/reward.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

A [make.fun](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978) entry for the **Tell a Whole Story in 32 Characters** bounty ($2, free entry).

## The entry

> Grandma Hacked The Neighbors

One Wi-Fi network name, 28 characters. The joke lands on the first read — sweet old grandma, master hacker — and the name implies a whole story: whose grandma, why she did it, what she found on their network, and what happened when they noticed. Fresh, not one of the stock Wi-Fi jokes.

## How it works

`main.ts` (Node 22+) validates the name — 1–32 characters, a single line, not only whitespace — creates `/output` if needed, writes it to `/output/entry.txt`, then reads the file back and verifies it matches byte for byte.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
