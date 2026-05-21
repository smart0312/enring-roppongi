# EnRing Roppongi — Official Website

Inbound-focused landing site for **EnRing Roppongi**, a craft ring-making atelier and evening bar in Roppongi, Tokyo.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing — Hero, About, Workshop, Night Bar, Access |
| `/experience` | Workshop experience (main content) |
| `/night` | Nighttime bar (secondary) |
| `/visit` | Access, hours, company info |

## Getting started

```bash
npm install
node scripts/generate-placeholders.mjs   # if public/images/*.jpg are missing
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Publish online

See **[DEPLOY.md](./DEPLOY.md)** (Vercel + GitHub, step by step in Japanese).

Workshop booking: [GetYourGuide listing](https://www.getyourguide.com/tokyo-l193/tokyo-japanese-coin-ring-making-workshop-roppongi-t1328084/).

## Replace images

Drop your photos into `public/images/` using the filenames listed in [`public/images/README.md`](public/images/README.md).

## Brand colors (Tailwind)

- `enring-green` / `enring-green-deep` — muted wax-like green
- `enring-silver` / `enring-silver-bright` — logo & accents
- `enring-dark` / `enring-navy` — backgrounds

## Locations

**Shop (workshop & bar):** Power House Roppongi 2F, 7-12-3 Roppongi, Minato City, Tokyo 106-0032

**Company (RIOT inc.):** Roppongi Shimada Building 5F, 4-8 Roppongi, Minato City, Tokyo 106-0032
