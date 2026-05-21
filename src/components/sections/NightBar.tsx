import Link from "next/link";
import { StoreImage } from "@/components/StoreImage";
import { siteImages } from "@/lib/site-images";

export function NightBar() {
  return (
    <section
      id="night"
      className="relative border-t border-enring-silver/10 overflow-hidden py-24 md:py-32"
      aria-labelledby="night-heading"
    >
      <div className="absolute inset-0 bg-enring-green-deep">
        <StoreImage
          src={siteImages.night.homeBackground}
          alt="EnRing Roppongi bar lounge with hexagonal mirror shelves"
          fill
          className="opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-enring-dark via-enring-dark/95 to-enring-dark/80" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <p className="section-label mb-4 text-enring-silver/60">
            After Hours · 夜のもう一つの顔
          </p>
          <h2 id="night-heading" className="section-title">
            A Hidden Bar
            <br />
            After the Craft
          </h2>

          <p className="mt-8 font-sans text-sm leading-relaxed text-enring-silver/75 md:text-base">
            When the workshop lights soften, EnRing reveals its second character:
            an intimate, inbound-friendly bar where the mood of the atelier lingers
            in every pour. Authentic cocktails, a curated spirits selection, and
            conversation in a setting that feels worlds away from the street below.
          </p>
          <p className="mt-4 font-sans text-sm text-enring-silver/50">
            リング制作の余韻を愉しむ、夜の隠れ家バー。クラフトの空気感をそのままに、洗練された一杯と静かな時間を。
          </p>

          <ul className="mt-8 space-y-3 font-sans text-sm text-enring-silver/70">
            <li className="flex gap-3">
              <span className="text-enring-silver/30">—</span>
              Inbound-focused hospitality & English-friendly service
            </li>
            <li className="flex gap-3">
              <span className="text-enring-silver/30">—</span>
              Seasonal cocktails & premium spirits
            </li>
            <li className="flex gap-3">
              <span className="text-enring-silver/30">—</span>
              Limited seating — reservations recommended
            </li>
          </ul>

          <Link href="/night" className="btn-ghost mt-10 inline-flex">
            Night Bar Details
          </Link>
        </div>

        <div className="relative aspect-[3/4] w-full max-w-md justify-self-end overflow-hidden rounded-sm border border-enring-silver/10">
          <StoreImage
            src={siteImages.night.homeInterior}
            alt="Premium bar counter with Japanese whisky and spirits selection"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
