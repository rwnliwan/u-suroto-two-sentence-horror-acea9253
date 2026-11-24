# Trial log — u-suroto-two-sentence-horror-acea9253

- Slug: u-suroto-two-sentence-horror-acea9253
- Title: Two-Sentence Horror
- Opens: 2026-11-24 07:59:17Z — Closes: 2026-11-27 08:00:00Z (27 Nov 16:00 WITA)
- Prize: $2 winner-takes-all
- Field: 830 — only top 500 dev board reach the final heat, so dev quality matters
- Gate: UTF-8, 1–400 characters, not whitespace-only; story in exactly 2 sentences
- Judge (horror editor), criteria in order: (1) horror story in exactly 2 sentences and genuinely frightening, (2) second sentence twists/reveals something making the first worse on re-read, (3) horror implied, not explained — reader fills the worst part, (4) precise, concrete prose, every word earning its place, (5) original, not a familiar horror twist or retold old story. Restraint > shock; gore for its own sake does not count.
- Tie-break: smaller text wins, then earlier receipt.
- Field research (coordinator, aggregate title analysis, n=830): generic title words (voice, night, never, morning) — no dominant angle. Classic twists to AVOID: "the call is coming from inside the house", "I am the monster", mirror/reflection, moving doll/mannequin, "don't open the door". Target: domestic + concrete + second sentence reframing the first.
- Leaderboard live not visible (blind rounds, metrics withheld, source withheld) — no top entries readable; judge brief + field analysis are the available references.
- Kit: ~/workspace/make-fun/new-3-kit/u-suroto-two-sentence-horror-acea9253-kit/ (kit.json bundle_sha256 matches API)
- Wallet (owner.json): FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq

## Candidates (drafted fresh in this session, all exactly 2 sentences, char counts by Python, never hand-counted)

| # | Story | Chars | Sentences | Notes |
|---|---|---|---|---|
| 1 | I set the table for three every night, even though there are only two of us now. Last night, for the first time, the third plate was clean. | 139 | 2 | Grief ritual + eaten plate; strong reframe, but "someone ate the offering" is a known ghost-story beat |
| 2 | I always kick my shoes off by the door, and every morning I find them lined up neatly. This morning they were lined up facing the bed. | 134 | 2 | Concrete and domestic; the reframe is clear (someone stood at the bed) but the threat stays vague |
| 3 | **FINAL:** I count the stairs every night on my way to bed — thirteen, always thirteen. Tonight there were fourteen, and the top one was warm. | 131 | 2 | Counting ritual proves the house changed; "warm" says it happened moments ago, just above the bedroom. Implied, precise, original — no mirror/doll/door/monster twist |
| 4 | The dog sleeps at the foot of our bed every night, facing the door. Last night he slept facing me, and he did not stop growling until sunrise. | 142 | 2 | Sharp turn (guard turns from door to narrator) but "dog senses evil" is a familiar horror trope |
| 5 | My son draws our family every day, four stick figures, always four. Today's drawing had five, and the fifth was holding my hand. | 128 | 2 | Chilling image, but children's drawings are a well-worn horror vehicle |
| 6 | I hang my coat on the same hook every evening, the third one from the left. This morning it was on the first hook, still dripping, though it has not rained in a week. | 166 | 2 | Good implied dread (worn by someone, wet from something that was not rain); second-best, but longer and the implication is murkier than #3 |

## Trials

| Round | Version | Size | Result | Change |
|---|---|---|---|---|
| 0 | (pre-build) trial log + facts recorded; 6 fresh candidates drafted, char counts by Python | — | — | FINAL = candidate #3 (131 chars, 2 sentences) |
| 1 | Builder v1 — main.ts, entry FINAL (131 chars, 133 bytes: em dash is 3 bytes UTF-8) | 131 chars / 133 bytes, 2 sentences, UTF-8, non-whitespace | PASS — local run via ENTRY_OUTPUT twice, byte-identical sha256 8cfbda848c35a3b6f1b880379084ae83434167630adb9f6f582b76c9d0dd8436; Node 24.22.1 type-stripping runs main.ts directly, stdlib only, no network | Builder session 72776526-ef87-4245-916f-96d3b969b9a7 |

## Status
- NOT YET SUBMITTED. Entry final (131 chars, 2 sentences) + repo to be created and pushed. NEXT: local runs, GitHub repo, bundle, check; coordinator re-bundles with --muse-usage and submits after ACC.
- Deadline 27 Nov 16:00 WITA.
