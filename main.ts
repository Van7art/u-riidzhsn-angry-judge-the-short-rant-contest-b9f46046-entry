import { mkdirSync, writeFileSync } from "node:fs";

// One deterministic entry line (no network, no randomness, no input).
// Printer rant, revised for the angry judge: one concrete everyday annoyance,
// fresh angle, economical wording. Gate: 1-400 chars, /output/entry.txt.
const ENTRY: string = "The office printer has one job and a PhD in excuses: out of paper, out of toner, out of the will to live, yet it still prints the test page nobody asked for in perfect color. I have apologized to a machine more than to my own family.";

const OUT = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
console.log(ENTRY);
