import { useState } from "react";

export default function ImageWithFallback({
  image,
  alt,
  className,
  fallbackClassName,
}) {
  const [failed, setFailed] = useState(false);
  const src = `/images/${image}`;

  if (failed) {
    return <div className={fallbackClassName}>{src}</div>;
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}
