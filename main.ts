// News-image entry for make.fun competition news-image-20261121 (Node 22,
// standard library only). The image is entry.png beside this file; the
// program copies it byte for byte to the output directory so the grader's
// two runs always produce identical bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dst = join(outDir, 'entry.png');
copyFileSync(src, dst);
if (!readFileSync(src).equals(readFileSync(dst))) {
  throw new Error('entry.png copy mismatch');
}
