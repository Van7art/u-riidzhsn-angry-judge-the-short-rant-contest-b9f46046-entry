import { mkdirSync, writeFileSync } from "node:fs";

// One deterministic entry line (no network, no randomness, no input).
const ENTRY: string = "Nothing says 'I value your time' like a meeting invite titled 'quick sync' that runs 90 minutes and ends with 'let's circle back'. Circle back to what, Brenda? The will to live left the building in minute four.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
