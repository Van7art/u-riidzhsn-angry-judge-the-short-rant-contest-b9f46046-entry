import { mkdirSync, writeFileSync } from "node:fs";

// One deterministic entry line (no network, no randomness, no input).
const ENTRY: string = "The office printer has one job and a PhD in excuses: out of paper, out of toner, out of the will to live, yet it still prints the test page nobody asked for in perfect color. I have apologized to a machine more than to my own family.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
