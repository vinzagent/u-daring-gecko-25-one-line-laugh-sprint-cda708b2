import { mkdirSync, writeFileSync } from "node:fs";

// One original line on everyday life, written for make.fun's
// "One-Line Laugh Sprint" (u-daring-gecko-25-one-line-laugh-sprint-cda708b2).
// The gate allows 1-200 characters, so refuse to ship anything longer.
const line =
  "I bought a fake plant because I kept killing the real ones, and somehow the plastic one is dying too.";

if ([...line].length > 200) {
  throw new Error(`entry line is ${[...line].length} characters, over the 200 cap`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
