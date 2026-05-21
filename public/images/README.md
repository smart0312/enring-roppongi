# Image assets

Store photos live in `店舗関連/` (with nested `店舗写真/`).  
Run **`npm run images`** to copy them into the filenames below.

**Each of the 23 source photos is used exactly once** across the site.  
Mappings are defined in `scripts/setup-store-images.mjs` and `src/lib/site-images.ts`.

## Assigned files

| File | Section |
|------|---------|
| `hero.jpg` | Home hero |
| `about-concept.jpeg` | Home about |
| `experience-hero.jpg` | `/experience` header |
| `workshop-01.png` … `workshop-04.png` | Home workshop gallery |
| `gallery-01.png` … `gallery-10.png` (except `gallery-08`) | `/experience` gallery |
| `night-bar.jpg` | Home night bar background |
| `night-bar-interior.jpg` | Home night bar side image |
| `night-page-hero.png` | `/night` header |
| `night-bar-interior.jpg` | Home night + `/night` detail (bar counter) |
| `visit-building.jpg` | `/visit` building photo |
| `brand-logo.jpg` | Footer logo |

## After adding new photos

1. Place files under `public/images/店舗関連/`
2. Update `scripts/setup-store-images.mjs` assignments
3. Run `npm run images`
