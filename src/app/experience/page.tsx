import type { Metadata } from "next";
import Link from "next/link";
import { BookingSection } from "@/components/BookingSection";
import { StoreImage } from "@/components/StoreImage";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Workshop Experience",
  description:
    "Hands-on craft ring making in Roppongi. Design, shape, and finish your own ring with expert artisans.",
};

const highlights = [
  {
    title: "Intimate Sessions",
    text: "Small-group and private sessions ensure personal attention from start to finish.",
  },
  {
    title: "Premium Materials",
    text: "Select from curated metals and finishes — each chosen for durability and character.",
  },
  {
    title: "Same-Day Completion",
    text: "Most rings are ready to wear within your session. A true Tokyo keepsake.",
  },
  {
    title: "English Support",
    text: "Full guidance in English for international guests. Japanese support also available.",
  },
];

const experienceGallery = [
  { src: siteImages.workshop.experienceGallery[0], alt: "Guests proudly showing their handmade rings" },
  { src: siteImages.workshop.experienceGallery[1], alt: "Couple crafting rings at the workshop bench" },
  { src: siteImages.workshop.experienceGallery[2], alt: "Smiling guests during the ring-making session" },
  { src: siteImages.workshop.experienceGallery[3], alt: "Family celebrating with their finished rings" },
  { src: siteImages.workshop.experienceGallery[4], alt: "International guests with traditional fan backdrop" },
  { src: siteImages.workshop.experienceGallery[5], alt: "Hands together displaying unique coin rings" },
  { src: siteImages.workshop.experienceGallery[6], alt: "Handcrafted silver coin ring with floral detail" },
  { src: siteImages.workshop.experienceGallery[7], alt: "Coin pendant necklace from the Share Your Heart experience" },
  { src: siteImages.workshop.experienceGallery[8], alt: "Matching handcrafted gold rings worn by guests" },
] as const;

export default function ExperiencePage() {
  return (
    <article className="pt-24">
      <header className="relative overflow-hidden bg-hero-gradient py-24 md:py-32">
        <div className="absolute inset-0">
          <StoreImage
            src={siteImages.experienceHero}
            alt="International guests crafting rings at EnRing Roppongi"
            fill
            className="opacity-30"
          />
          <div className="absolute inset-0 bg-enring-dark/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="section-label mb-4">Workshop Experience</p>
          <h1 className="section-title max-w-3xl">
            Craft a Ring That Is Unmistakably Yours
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-sm leading-relaxed text-enring-silver/75 md:text-base">
            Our flagship experience is the reason travelers come to EnRing
            Roppongi. Step into the atelier, work alongside artisans, and leave
            with a piece that carries your story home.
          </p>
          <p className="mt-2 font-sans text-sm text-enring-silver/50">
            あなただけのリングを、六本木の工房で。
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map(({ title, text }) => (
            <div
              key={title}
              className="border border-enring-silver/10 p-8 bg-enring-green-deep/30"
            >
              <h2 className="font-display text-xl text-enring-silver-bright">
                {title}
              </h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-enring-silver/70">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="section-label mb-8">Experience Gallery</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
            {experienceGallery.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/5] overflow-hidden border border-enring-silver/10"
              >
                <StoreImage src={img.src} alt={img.alt} fill sizes="33vw" />
              </div>
            ))}
          </div>
        </div>

        <BookingSection variant="experience" />

        <Link href="/" className="btn-ghost mt-8 inline-flex">
          Back to Home
        </Link>
      </section>
    </article>
  );
}
