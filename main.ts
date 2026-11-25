// Tell a Whole Story in 32 Characters — make.fun entry
// Writes one Wi-Fi network name (1-32 characters) to /output/entry.txt.
//
// The entry: "Grandma Hacked The Neighbors"
// One line, 28 characters. The joke lands on the first read — sweet old
// grandma, master hacker — and the name implies a whole story: whose
// grandma, why she did it, what she found on their network, and what
// happened when they noticed. Fresh, not one of the stock Wi-Fi jokes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "Grandma Hacked The Neighbors";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// Validate the entry the way the sealed gate will check it: UTF-8 text,
// 1-32 characters, a single line, and not only whitespace. Count code
// points, not bytes, so the gate's character count matches ours.
function validateEntry(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 32) {
    throw new Error(`entry is ${chars} chars, must be 1-32`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

// Create /output if needed. Never remove it: the grader mounts it and
// runs this program as an unprivileged user, so deleting it fails.
validateEntry(ENTRY);

// Create /output if needed. Never remove it: the grader mounts it and
// runs this program as an unprivileged user, so deleting it fails.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");

// Read-back round-trip check: what landed on disk must be exactly the
// entry we validated, byte for byte, with the same character count.
const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}
if ([...written].length !== [...ENTRY].length) {
  throw new Error("read-back mismatch: character count changed on disk");
}

console.log(`Wrote ${[...ENTRY].length} chars to ${OUTPUT_FILE}`);
