import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/images");

// Minimal valid 1×1 JPEG (dark green tint via solid color would need larger file — neutral gray placeholder)
const MINIMAL_JPEG = Buffer.from(
  "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCAABAAEDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
  "base64"
);

const files = [
  "hero.jpg",
  "about-concept.jpg",
  "workshop-01.jpg",
  "workshop-02.jpg",
  "workshop-03.jpg",
  "workshop-04.jpg",
  "workshop-05.jpg",
  "workshop-06.jpg",
  "workshop-07.jpg",
  "night-bar.jpg",
  "night-bar-interior.jpg",
  "experience-hero.jpg",
];

mkdirSync(outDir, { recursive: true });
for (const name of files) {
  writeFileSync(join(outDir, name), MINIMAL_JPEG);
}
console.log(`Created ${files.length} placeholder JPEGs in public/images/`);
