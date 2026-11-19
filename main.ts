/**
 * daily-meridian-news — entrypoint for make.fun's news-image contest.
 *
 * THE PAGE
 *   `entry.png` is the front page of a one-day world newspaper for
 *   Wednesday 18 November 2026, printed on a warm cream sheet. Its stories
 *   sit in dark navy cards, numbered 1-40 and credited to their wires, and
 *   seven color-coded region bands — Asia, Americas, Europe, Africa, Middle
 *   East, World and Ukraine — sort the day's news by where it happened. A
 *   "day in numbers" strip runs beneath the masthead with the figures that
 *   define the date, from drones fired at Ukraine to Voyager 1's distance.
 *   Lower down, a two-column city list sweeps through the rest of the day,
 *   and a date-check footer notes the source, the cut-off and the rule that
 *   everything on the page happened on or was first reported that Wednesday.
 *
 * WHAT THIS SCRIPT DOES
 *   Copies that committed PNG to the grader's output directory, byte for
 *   byte. It uses only the Node standard library, never touches the network,
 *   and writes identical bytes on every run. The destination is `/output`
 *   in the grading container, or the directory named by `MAKEFUN_OUTPUT_DIR`
 *   elsewhere. Run with Node 22+; paths resolve via `import.meta.url`, so
 *   the working directory at invocation time does not matter.
 */

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const source = new URL("./entry.png", import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

copyFileSync(source, join(outputDir, "entry.png"));
