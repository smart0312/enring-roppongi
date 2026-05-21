import Image from "next/image";

type StoreImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
};

export function StoreImage({
  src,
  alt,
  className = "",
  priority = false,
  fill = false,
  width,
  height,
  sizes,
}: StoreImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        priority={priority}
        sizes={sizes ?? "100vw"}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1200}
      height={height ?? 900}
      className={`h-full w-full object-cover ${className}`}
      priority={priority}
      sizes={sizes}
    />
  );
}
