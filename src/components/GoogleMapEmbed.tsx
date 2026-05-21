import { googleMapsEmbedSrc, googleMapsOpenUrl } from "@/lib/map";

type GoogleMapEmbedProps = {
  title?: string;
  minHeight?: string;
  className?: string;
};

export function GoogleMapEmbed({
  title = "EnRing Roppongi on Google Maps",
  minHeight = "280px",
  className = "",
}: GoogleMapEmbedProps) {
  return (
    <div className={className}>
      <div
        className="relative w-full overflow-hidden rounded-sm border border-enring-silver/10"
        style={{ minHeight }}
      >
        <iframe
          title={title}
          src={googleMapsEmbedSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        href={googleMapsOpenUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block font-sans text-xs text-enring-silver/60 underline-offset-4 hover:text-enring-silver-bright hover:underline"
      >
        Open in Google Maps · Googleマップで開く
      </a>
    </div>
  );
}
