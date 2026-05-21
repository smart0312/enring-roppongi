import { StoreImage } from "@/components/StoreImage";
import { siteImages } from "@/lib/site-images";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-enring-silver/10 bg-enring-navy py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        <div>
          <p className="section-label mb-4">About / Concept</p>
          <h2 id="about-heading" className="section-title">
            Where Identity
            <br />
            Becomes Form
          </h2>
          <p className="mt-2 font-sans text-sm text-enring-silver/50">
            個性を、指先に刻む。
          </p>

          <div className="mt-8 space-y-6 font-sans text-sm leading-relaxed text-enring-silver/75 md:text-base">
            <p>
              EnRing Roppongi is a boutique craft atelier in the heart of
              Roppongi — designed for travelers who seek something more than a
              souvenir. Here, you do not simply purchase a ring; you compose
              one that reflects your story, your taste, and your moment in
              Tokyo.
            </p>
            <p>
              Guided by skilled artisans in an intimate studio setting, each
              guest shapes metal, selects finishes, and leaves with a piece that
              is unmistakably personal. The atmosphere is quiet, deliberate, and
              refined — the kind of experience Roppongi is known for at its
              best.
            </p>
            <p className="text-enring-silver/50">
              六本木の喧騒の中にある、静かなクラフトの隠れ家。職人の手ほどきのもと、素材と仕上げを選び、世界にひとつだけのリングを仕上げます。旅の記憶を、指輪という形で持ち帰る特別な時間をお届けします。
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full max-w-lg justify-self-end overflow-hidden rounded-sm border border-enring-silver/10">
          <StoreImage
            src={siteImages.about}
            alt="International guests smiling with their handmade rings at EnRing Roppongi"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
