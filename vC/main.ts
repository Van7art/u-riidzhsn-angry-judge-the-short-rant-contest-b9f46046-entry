import { mkdirSync, writeFileSync } from "node:fs";

// One deterministic entry line (no network, no randomness, no input).
const ENTRY: string = "Autocorrect changed 'deploy' to 'destroy' in the email to my boss, then underlined my apology in red like it was grading my shame.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
