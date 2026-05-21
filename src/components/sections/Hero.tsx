import Link from "next/link";
import { StoreImage } from "@/components/StoreImage";
import { booking } from "@/lib/booking";
import { siteImages } from "@/lib/site-images";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-hero-gradient"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <StoreImage
          src={siteImages.hero}
          alt="EnRing Roppongi workshop interior with traditional Japanese decor"
          fill
          priority
          className="opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-enring-green-deep/90 via-enring-dark/75 to-enring-dark" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-24 pt-32 lg:px-10">
        <p className="section-label mb-6 text-enring-silver/70">
          Roppongi, Tokyo · 東京・六本木
        </p>

        <h1
          id="hero-heading"
          className="font-display text-5xl font-light leading-tight tracking-[0.15em] silver-gradient-text sm:text-6xl md:text-7xl lg:text-8xl"
        >
          EnRing
          <br />
          <span className="text-4xl tracking-[0.25em] sm:text-5xl md:text-6xl">
            Roppongi
          </span>
        </h1>

        <p className="mt-8 max-w-xl font-display text-xl font-light italic text-enring-silver-bright/90 md:text-2xl">
          Craft Your Identity.
        </p>
        <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-enring-silver/80 md:text-base">
          A Premium Ring Experience in Roppongi.
          <span className="mt-2 block text-enring-silver/50">
            六本木で、あなただけの個性を形にするクラフトリング体験。
          </span>
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={booking.getYourGuideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book on GetYourGuide
          </a>
          <Link href="/night" className="btn-ghost">
            Discover the Night Bar
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-sans text-[10px] uppercase tracking-luxury text-enring-silver/30"
        aria-hidden
      >
        Scroll
      </div>
    </section>
  );
}
