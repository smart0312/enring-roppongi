import type { Metadata } from "next";
import Link from "next/link";
import { BookingSection } from "@/components/BookingSection";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { StoreImage } from "@/components/StoreImage";
import { hours } from "@/lib/hours";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Find EnRing Roppongi at Power House Roppongi 2F. Access, hours, and company information.",
};

export default function VisitPage() {
  return (
    <article className="pt-24">
      <header className="bg-enring-navy py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="section-label mb-4">Access & Information</p>
          <h1 className="section-title">Visit EnRing Roppongi</h1>
          <p className="mt-4 font-sans text-sm text-enring-silver/60">
            六本木へ — アクセス・営業情報
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h2 className="font-sans text-xs uppercase tracking-luxury text-enring-silver/50">
                Shop Address
              </h2>
              <address className="mt-4 not-italic font-sans text-base leading-relaxed text-enring-silver/85">
                EnRing Roppongi
                <br />
                Power House Roppongi 2F
                <br />
                7 Chome-12-3 Roppongi
                <br />
                Minato City, Tokyo 106-0032
                <br />
                Japan
              </address>
              <p className="mt-3 font-sans text-sm text-enring-silver/50">
                〒106-0032 東京都港区六本木7丁目12-3
                <br />
                パワーハウス六本木 2F
              </p>
            </div>

            <div>
              <h2 className="font-sans text-xs uppercase tracking-luxury text-enring-silver/50">
                Getting Here
              </h2>
              <ul className="mt-4 space-y-3 font-sans text-sm text-enring-silver/75">
                <li>
                  <strong className="text-enring-silver-bright">Tokyo Metro</strong>
                  {" — "}
                  Roppongi Station (Hibiya / Oedo Line), approx. 5 min walk
                </li>
                <li>
                  <strong className="text-enring-silver-bright">Toei Oedo Line</strong>
                  {" — "}
                  Roppongi Station Exit 3
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-sans text-xs uppercase tracking-luxury text-enring-silver/50">
                Hours
              </h2>
              <dl className="mt-4 space-y-2 font-sans text-sm text-enring-silver/75">
                <div className="flex justify-between gap-4 border-b border-enring-silver/10 py-2">
                  <dt>Workshop</dt>
                  <dd>{hours.workshop.label}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-enring-silver/10 py-2">
                  <dt>Night Bar</dt>
                  <dd>{hours.nightBar.label}</dd>
                </div>
                <div className="flex justify-between gap-4 py-2 text-enring-silver/70">
                  <dt>Regular closing</dt>
                  <dd>
                    {hours.openDailyLabel}
                    <span className="block text-xs text-enring-silver/50">
                      {hours.openDailyLabelJa}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden border border-enring-silver/10">
              <StoreImage
                src={siteImages.visitBuilding}
                alt="Power House Roppongi building entrance — EnRing is on the 2nd floor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <GoogleMapEmbed minHeight="220px" />
          </div>
        </div>

        <div className="mt-20 border-t border-enring-silver/10 pt-16">
          <h2 className="section-label mb-6">Company Information</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="font-display text-xl text-enring-silver-bright">RIOT inc.</p>
              <address className="mt-4 not-italic font-sans text-sm leading-relaxed text-enring-silver/70">
                Roppongi Shimada Building 5F
                <br />
                4-chōme-8 Roppongi
                <br />
                Minato City, Tokyo 106-0032
                <br />
                Japan
              </address>
              <p className="mt-2 font-sans text-sm text-enring-silver/50">
                〒106-0032 東京都港区六本木4丁目8
                <br />
                六本木しまだビル 5F
              </p>
            </div>
            <p className="font-sans text-sm leading-relaxed text-enring-silver/60">
              EnRing Roppongi is operated by RIOT inc. Company address above is
              the registered office. The workshop and bar are located at Power
              House Roppongi 2F.
            </p>
          </div>
        </div>

        <BookingSection variant="visit" />

        <Link href="/" className="btn-ghost mt-8 inline-flex">
          Return Home
        </Link>
      </section>
    </article>
  );
}
