/**
 * Copies store photos from nested folders into public/images/
 * Each source file is used exactly once across the site.
 */
import { copyFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const base = join(root, "public/images");
const shop = join(base, "店舗関連");
const nested = join(shop, "店舗写真");

mkdirSync(base, { recursive: true });

/** @type {{ dest: string; src: string }[]} */
const assignments = [
  { dest: "hero.jpg", src: join(nested, "IMG_8584.jpg") },
  { dest: "about-concept.jpeg", src: join(shop, "IMG_8593.jpeg") },
  { dest: "experience-hero.jpg", src: join(nested, "IMG_8586.jpg") },
  { dest: "night-bar.jpg", src: join(shop, "IMG_8867.jpg") },
  { dest: "night-bar-interior.jpg", src: join(shop, "IMG_8862 2.jpg") },
  { dest: "night-page-hero.png", src: join(shop, "IMG_8738.PNG") },
  { dest: "visit-building.jpg", src: join(shop, "IMG_8726.JPG") },
  { dest: "brand-logo.jpg", src: join(shop, "IMG_8870.JPG") },
  { dest: "workshop-01.png", src: join(nested, "IMG_8625.PNG") },
  { dest: "workshop-02.jpg", src: join(nested, "IMG_8585.jpg") },
  { dest: "workshop-03.png", src: join(nested, "IMG_8623.PNG") },
  { dest: "workshop-04.png", src: join(shop, "IMG_8742.PNG") },
  { dest: "gallery-01.png", src: join(nested, "IMG_8721.PNG") },
  { dest: "gallery-02.png", src: join(nested, "IMG_8626.PNG") },
  { dest: "gallery-03.png", src: join(shop, "IMG_8740.PNG") },
  { dest: "gallery-04.png", src: join(nested, "IMG_8628.PNG") },
  { dest: "gallery-05.png", src: join(nested, "IMG_8629.PNG") },
  { dest: "gallery-06.png", src: join(nested, "IMG_8627.PNG") },
  { dest: "gallery-07.png", src: join(shop, "IMG_8728.PNG") },
  { dest: "gallery-09.png", src: join(nested, "IMG_8630.PNG") },
  { dest: "gallery-10.png", src: join(nested, "IMG_8631.PNG") },
];

for (const { dest, src } of assignments) {
  copyFileSync(src, join(base, dest));
  console.log(`✓ ${dest} ← ${src.replace(root, "")}`);
}

console.log(`\nDone: ${assignments.length} images (each used once on the site).`);
