import Image from "next/image";
import Link from "next/link";
import { siteImages } from "@/lib/site-images";

export function Footer() {
  return (
    <footer className="border-t border-enring-silver/10 bg-enring-navy">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image
              src={siteImages.brandLogo}
              alt="EnRing logo"
              width={120}
              height={120}
              className="mb-4 h-16 w-auto opacity-90"
            />
            <p className="font-display text-2xl silver-gradient-text">
              EnRing Roppongi
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-enring-silver/60">
              Craft your identity in the heart of Roppongi.
              <br />
              六本木で、あなただけのリングを。
            </p>
          </div>

          <div>
            <p className="section-label mb-4">Explore</p>
            <ul className="space-y-2 font-sans text-sm text-enring-silver/70">
              <li>
                <Link href="/experience" className="hover:text-enring-silver-bright">
                  Workshop Experience
                </Link>
              </li>
              <li>
                <Link href="/night" className="hover:text-enring-silver-bright">
                  Nighttime Bar
                </Link>
              </li>
              <li>
                <Link href="/visit" className="hover:text-enring-silver-bright">
                  Access & Information
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="section-label mb-4">Company</p>
            <address className="not-italic font-sans text-sm leading-relaxed text-enring-silver/60">
              RIOT inc.
              <br />
              Roppongi Shimada Building 5F
              <br />
              4-chōme-8 Roppongi, Minato City
              <br />
              Tokyo 106-0032, Japan
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-enring-silver/10 pt-8 font-sans text-xs text-enring-silver/40 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} EnRing Roppongi. All rights reserved.</p>
          <p>Operated by RIOT inc.</p>
        </div>
      </div>
    </footer>
  );
}
