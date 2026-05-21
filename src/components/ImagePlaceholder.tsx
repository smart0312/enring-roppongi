import Image from "next/image";

type ImagePlaceholderProps = {
  /** Replace with your asset path, e.g. /images/hero.jpg */
  src: string;
  alt: string;
  /** Shown when using SVG placeholder; update when you add real photos */
  label?: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
};

/**
 * Image region for photography. Default files are SVG placeholders in /public/images/.
 * Replace each file with your JPG/WEBP using the same filename — see public/images/README.md
 */
export function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
  priority = false,
  fill = false,
  width,
  height,
}: ImagePlaceholderProps) {
  const showReplaceHint = process.env.NODE_ENV === "development";

  if (fill) {
    return (
      <div className={`image-placeholder ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="100vw"
        />
        {showReplaceHint && label && (
          <span className="image-placeholder-label pointer-events-none absolute inset-0 flex items-center justify-center bg-enring-green-deep/60 px-4 text-center">
            Replace: {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`image-placeholder relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width ?? 800}
        height={height ?? 600}
        className="h-full w-full object-cover"
        priority={priority}
      />
      {showReplaceHint && label && (
        <span className="image-placeholder-label pointer-events-none absolute inset-0 flex items-center justify-center bg-enring-green-deep/60">
          Replace: {label}
        </span>
      )}
    </div>
  );
}
