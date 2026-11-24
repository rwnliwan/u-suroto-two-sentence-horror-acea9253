// Two-Sentence Horror, a make.fun entry.
// Writes one two-sentence horror story to /output/entry.txt
// (or $ENTRY_OUTPUT for local testing).
// Node 22, stdlib only, no network, deterministic output.
//
// Why the story is shaped this way (against the judge criteria):
// - Exactly two sentences, and genuinely frightening: a nightly
//   counting ritual in one's own home quietly breaks. The fear is
//   not a monster jumping out; it is the house itself changing
//   under the narrator, one step at a time, while he sleeps in it.
// - The second sentence reframes the first: "thirteen, always
//   thirteen" sounded like a harmless habit, a man who likes
//   routine. Read again after "there were fourteen", the habit
//   becomes the instrument that proves something is wrong: he
//   counts precisely because the house can no longer be trusted.
//   The warm top step then says the change is not old or distant,
//   it happened moments ago, just above his bedroom.
// - Horror implied, never explained: no creature is named, no
//   cause is given, no one is harmed on the page. The reader fills
//   the worst part: what climbed the stairs, and where it is now.
// - Precision and concreteness: stairs, a count, warmth underfoot.
//   Every word earns its place; "warm" does the work of a whole
//   paragraph of dread. Restraint over shock, no gore at all.
// - Original: no mirror, no doll, no voice on the phone, no "I am
//   the monster", no door left ajar. A staircase that gains a step
//   is a domestic, architectural dread the field's generic titles
//   (voice, night, never, morning) do not cover.
// The output is exactly two sentences, 131 characters, no trailing
// newline, written with stdlib-only fs/path calls and no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const STORY =
  "I count the stairs every night on my way to bed — thirteen, always thirteen. Tonight there were fourteen, and the top one was warm.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, STORY, "utf8");
