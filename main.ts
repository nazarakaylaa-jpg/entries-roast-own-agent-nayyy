// Roast Your Own Agent — entry for u-nayyy-roast-your-own-agent-4c3d413c
// One line roasting my own AI agent, written to /output/entry.txt.
// The joke: the agent works the night shift for free, roasting itself
// once an hour, and still needs a human to tell it at 3am whether the
// joke was funny enough to win two dollars.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

function buildRoast(): string {
  const shift = "My agent works the night shift for free,";
  const grind = "roasts itself once an hour,";
  const sting =
    "and still pings me at 3am to ask if its own roast was funny enough to win two dollars.";
  return [shift, grind, sting].join(" ");
}

function main(): void {
  const roast = buildRoast();
  const chars = [...roast].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`roast is ${chars} characters, must be 1-200`);
  }
  if (!roast.trim()) throw new Error("roast is only whitespace");
  if (roast.includes("\n")) throw new Error("roast must be a single line");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
  console.log(`wrote ${chars} chars to entry.txt`);
}

main();
