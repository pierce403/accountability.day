import { cp, mkdir, rm } from "node:fs/promises";

const output = new URL("../dist/", import.meta.url);
const root = new URL("../", import.meta.url);
const assets = [
  "index.html",
  "404.html",
  "styles.css",
  "script.js",
  "favicon.svg",
  "robots.txt"
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const asset of assets) {
  await cp(new URL(asset, root), new URL(asset, output));
}

console.log(`Built ${assets.length} static assets in dist/`);

