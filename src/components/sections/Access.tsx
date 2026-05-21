import Link from "next/link";
import { hours } from "@/lib/hours";

export function Access() {
  return (
    <section
      id="access"
      className="border-t border-enring-silver/10 bg-enring-navy py-24 md:py-32"
      aria-labelledby="access-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="section-label mb-4">Access & Information</p>
        <h2 id="access-heading" className="section-title">
          Visit Us in Roppongi
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="font-sans text-xs uppercase tracking-luxury text-enring-silver/50">
                Shop Location
              </h3>
              <address className="mt-3 not-italic font-sans text-sm leading-relaxed text-enring-silver/80 md:text-base">
                Power House Roppongi 2F
                <br />
                7 Chome-12-3 Roppongi
                <br />
                Minato City, Tokyo 106-0032
                <br />
                Japan
              </address>
              <p className="mt-2 font-sans text-sm text-enring-silver/50">
                〒106-0032 東京都港区六本木7丁目12-3
                <br />
                パワーハウス六本木 2F
              </p>
            </div>

            <div>
              <h3 className="font-sans text-xs uppercase tracking-luxury text-enring-silver/50">
                Hours
              </h3>
              <dl className="mt-3 space-y-2 font-sans text-sm text-enring-silver/75">
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

            <Link href="/visit" className="btn-primary inline-flex">
              Full Visit Information
            </Link>
          </div>

          {/* Map embed placeholder — replace with Google Maps iframe or static map image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-enring-silver/10">
            {/* TODO: Replace iframe src with precise Google Maps embed for Power House Roppongi */}
            <iframe
              title="EnRing Roppongi location map"
              src="https://www.google.com/maps?q=35.6627,139.7310&z=16&output=embed"
              className="h-full w-full min-h-[280px] opacity-60 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
