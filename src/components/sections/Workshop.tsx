import Link from "next/link";
import { StoreImage } from "@/components/StoreImage";
import { siteImages } from "@/lib/site-images";

const steps = [
  {
    step: "01",
    title: "Consultation & Design",
    body: "Share your vision with our artisans. Select band profile, width, texture, and engraving — every detail is yours to define.",
    ja: "デザインの相談と素材選び",
  },
  {
    step: "02",
    title: "Hands-On Crafting",
    body: "Under expert guidance, shape and finish your ring at the bench. No prior experience required — only curiosity and intention.",
    ja: "職人の指導のもと、手作業で仕上げる",
  },
  {
    step: "03",
    title: "Polish & Personalize",
    body: "Refine the surface, apply your chosen patina or polish, and add final touches. Leave with a piece ready to wear.",
    ja: "磨き上げと仕上げ — その日のうちにお持ち帰り",
  },
];

const homeGallery = [
  { src: siteImages.workshop.homeGallery[0], alt: "Traditional coin selection display at EnRing workshop" },
  { src: siteImages.workshop.homeGallery[1], alt: "Handcrafted coin rings finished at the atelier" },
  { src: siteImages.workshop.homeGallery[2], alt: "Close-up of a silver coin ring with floral engraving" },
  { src: siteImages.workshop.homeGallery[3], alt: "Guests crafting rings at the workshop bench" },
] as const;

export function Workshop() {
  return (
    <section
      id="workshop"
      className="border-t border-enring-silver/10 bg-enring-dark py-24 md:py-32"
      aria-labelledby="workshop-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="section-label mb-4">Workshop Experience</p>
          <h2 id="workshop-heading" className="section-title">
            The Ring-Making Journey
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-enring-silver/70 md:text-base">
            Our signature experience places craft at the center. From first sketch
            to final polish, you are the author of your ring.
            <span className="mt-2 block text-enring-silver/50">
              リング制作体験が、EnRing Roppongi の主役です。
            </span>
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map(({ step, title, body, ja }) => (
            <article
              key={step}
              className="border border-enring-silver/10 bg-enring-green-deep/40 p-8 transition-colors hover:border-enring-silver/25"
            >
              <span className="font-display text-3xl text-enring-green-muted/80">
                {step}
              </span>
              <h3 className="mt-4 font-display text-xl text-enring-silver-bright">
                {title}
              </h3>
              <p className="mt-1 font-sans text-xs text-enring-silver/40">{ja}</p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-enring-silver/70">
                {body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <p className="section-label mb-8">Gallery</p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {homeGallery.map((img) => (
              <div
                key={img.src}
                className="relative aspect-square overflow-hidden rounded-sm border border-enring-silver/10"
              >
                <StoreImage src={img.src} alt={img.alt} fill sizes="25vw" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/experience" className="btn-primary">
            View Full Experience
          </Link>
        </div>
      </div>
    </section>
  );
}
