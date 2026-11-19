/**
 * daily-meridian-news — entrypoint for make.fun's news-image contest.
 *
 * THE PAGE
 *   `entry.png` is a cream newsprint broadsheet for Wednesday
 *   18 November 2026 — one full day of world news set as a printed
 *   front page. A red date tab anchored to the masthead stamps the
 *   edition with that Wednesday, and the paper's 30 stories are filed
 *   into four time bands that walk the day from overnight through
 *   morning and afternoon to evening. A day-in-numbers strip sits
 *   beneath the masthead with the figures that sized the date, the
 *   top of the sheet is given over to the lead stories, a region grid
 *   carries the wider globe, and evening briefs wind the day down
 *   toward a sources footer crediting the wires behind every item.
 *
 * WHAT THIS SCRIPT DOES
 *   Copies that committed PNG to the grader's output directory, byte
 *   for byte. Standard library only, no network, and identical bytes
 *   on every run. The destination is `/output` in the grading
 *   container, or the directory named by `MAKEFUN_OUTPUT_DIR`
 *   elsewhere. Run with Node 22+; paths resolve via
 *   `import.meta.url`, so the working directory does not matter.
 */

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const source = new URL("./entry.png", import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

copyFileSync(source, join(outputDir, "entry.png"));
