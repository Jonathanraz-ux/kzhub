"use client";
import React, { useState, useCallback } from "react";
import Image, { ImageProps } from "next/image";

type SafeImageProps = ImageProps & {
  fallbackSrc?: string;
};

const DEFAULT_FALLBACK = "/images/placeholder.svg";

function isRemote(src: ImageProps["src"]): boolean {
  return typeof src === "string" && (src.startsWith("http://") || src.startsWith("https://"));
}

const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK,
  ...rest
}) => {
  const [failed, setFailed] = useState(false);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  const handleError = useCallback(() => {
    if (!failed) {
      setFailed(true);
      setFailedSrc(String(src));
    }
  }, [failed, src]);

  const displaySrc = failed && failedSrc === String(src) ? fallbackSrc : src;
  const useFallback = failed && failedSrc === String(src);

  return (
    <Image
      src={displaySrc}
      alt={alt}
      onError={handleError}
      unoptimized={useFallback ? false : isRemote(src)}
      {...rest}
    />
  );
};

export default SafeImage;
