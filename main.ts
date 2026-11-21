import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync("entry.png", dest);
// Read both files back and compare byte for byte: the two graded runs
// must produce exactly the same image, so any difference is a hard failure.
const src = readFileSync("entry.png");
const out = readFileSync(dest);
if (!src.equals(out)) {
  throw new Error(
    `output mismatch: entry.png is ${src.length} bytes but ${dest} is ${out.length} bytes`,
  );
}
console.log("wrote", dest, out.length, "bytes");
