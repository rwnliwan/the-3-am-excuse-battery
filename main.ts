import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3 AM Excuse — make.fun entry.
// A hardware wallet refuses to sign at 3 AM. Its excuse, in its own voice:
// its battery died at 2:59 — one minute before the hour it is asked to work.
const ENTRY_TEXT = "My battery died at 2:59. Coincidence?";

const outputDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
const outputPath = process.env.ENTRY_OUTPUT ?? join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, ENTRY_TEXT, "utf8");
