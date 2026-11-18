/**
 * daily-meridian-news — entrypoint for make.fun's news-image contest.
 *
 * WHAT IT DOES
 *   Copies this repository's rendered poster image, `entry.png`, to the
 *   grader's output directory under the same name. The artwork itself — a
 *   front-page layout of the world's news of Tuesday 17 November 2026 — is a
 *   static PNG committed to the repo, so the entry's entire job at grading
 *   time is to place that exact file where the contest harness expects it.
 *
 * DETERMINISM
 *   Two runs write identical bytes. The output is a straight byte-for-byte
 *   transfer of a file that never changes between runs: no clock, no RNG,
 *   no locale, no environment-dependent content ever enters the pipeline, so
 *   any two runs — on any machine, in any order — produce the same size and
 *   the same hash.
 *
 * WHY NO NETWORK
 *   Nothing is fetched, resolved or streamed. The image ships inside the
 *   repository and the only imports are `node:fs` and `node:path`, both from
 *   the Node standard library, so the program runs with networking disabled
 *   and needs zero installs — there are no dependencies to download.
 *
 * OUTPUT LOCATION
 *   Inside the grading container the destination directory is fixed at
 *   `/output`. Outside it, the `MAKEFUN_OUTPUT_DIR` environment variable
 *   names the output directory instead, so the same script runs unchanged on
 *   a local machine for inspection:
 *
 *     MAKEFUN_OUTPUT_DIR=./out node main.ts
 *
 * PORTABILITY
 *   The source is resolved against `import.meta.url` rather than the current
 *   working directory, so `node main.ts` behaves identically no matter where
 *   it is invoked from. Node's `fs` functions accept a `file:` URL directly,
 *   which is why the URL can be handed to `copyFileSync` as-is — no
 *   `fileURLToPath` conversion step is needed. Run with Node 22+.
 */

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const source = new URL("./entry.png", import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

copyFileSync(source, join(outputDir, "entry.png"));
