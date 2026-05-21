import type { Metadata } from "next";
import Link from "next/link";
import { StoreImage } from "@/components/StoreImage";
import { hours } from "@/lib/hours";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Nighttime Bar",
  description:
    "An intimate, inbound-friendly bar in Roppongi — the after-hours face of EnRing Roppongi.",
};

export default function NightPage() {
  return (
    <article className="pt-24">
      <header className="relative min-h-[60vh] overflow-hidden bg-enring-green-deep">
        <StoreImage
          src={siteImages.night.pageHero}
          alt="Handcrafted silver coin ring — the craft behind the evening"
          fill
          className="opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-enring-dark via-enring-dark/90 to-transparent" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-end px-6 pb-16 lg:px-10">
          <p className="section-label mb-4 text-enring-silver/60">
            Nighttime Bar · 夜の営業
          </p>
          <h1 className="section-title">
            The Workshop&apos;s
            <br />
            Evening Soul
          </h1>
          <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-enring-silver/75 md:text-base">
            After the last ring is polished, EnRing transforms. Not a loud club —
            a considered hideaway where craft meets cocktail culture.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-6 font-sans text-sm leading-relaxed text-enring-silver/75 md:text-base">
            <p>
              Our bar is designed for international guests who appreciate
              authenticity without pretense. The menu favors seasonal ingredients,
              classic technique, and spirits selected for depth rather than flash.
            </p>
            <p>
              The space retains the atelier&apos;s DNA — muted greens, dark wood,
              silver accents — so the transition from day to night feels seamless,
              not jarring.
            </p>
            <p className="text-enring-silver/50">
              昼の工房が、夜は静かなバーへ。リング制作の余韻を、そのまま一杯の時間に。
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden border border-enring-silver/10">
            <StoreImage
              src={siteImages.night.pageDetail}
              alt="Premium bar counter with Japanese whisky and spirits selection"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 border border-enring-silver/10 bg-enring-navy p-8 md:grid-cols-3 md:p-12">
          <div>
            <h2 className="font-sans text-xs uppercase tracking-luxury text-enring-silver/50">
              Hours
            </h2>
            <p className="mt-2 font-display text-2xl text-enring-silver-bright">
              {hours.nightBar.label}
            </p>
            <p className="mt-1 text-sm text-enring-silver/50">
              Daily · 毎日 {hours.nightBar.open} – 翌{hours.nightBar.close}
            </p>
          </div>
          <div>
            <h2 className="font-sans text-xs uppercase tracking-luxury text-enring-silver/50">
              Dress Code
            </h2>
            <p className="mt-2 font-sans text-sm text-enring-silver/70">
              Smart casual. No sportswear.
            </p>
          </div>
          <div>
            <h2 className="font-sans text-xs uppercase tracking-luxury text-enring-silver/50">
              Reservations
            </h2>
            <p className="mt-2 font-sans text-sm text-enring-silver/70">
              Recommended for groups. Walk-ins welcome when seats allow.
            </p>
          </div>
        </div>

        <p className="mt-8 font-sans text-xs text-enring-silver/40">
          Note: Ring-making remains our primary offering. The bar is presented as
          a complementary evening experience for guests and visitors.
        </p>

        <Link href="/" className="btn-ghost mt-12 inline-flex">
          Back to Home
        </Link>
      </section>
    </article>
  );
}
