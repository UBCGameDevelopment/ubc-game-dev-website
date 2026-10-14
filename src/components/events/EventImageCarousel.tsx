import { useState } from "react";

interface EventImageCarouselProps {
  images: Array<{ src: string; alt: string }>;
  title: string;
}

export default function EventImageCarousel({ images, title }: EventImageCarouselProps) {
  const [activeImage, setActiveImage] = useState(0);
  const showImage = (direction: number) => {
    setActiveImage((current) => (current + direction + images.length) % images.length);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} images`}
      tabIndex={0}
      className="pt-16 focus-visible:outline-2 focus-visible:outline-[var(--cyber-yellow)]"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          showImage(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className="aspect-square bg-black/20">
        <img
          src={images[activeImage].src}
          alt={images[activeImage].alt}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex items-center justify-center gap-5 border-y border-[var(--border-dim)] px-4 py-3">
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => showImage(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] transition-colors hover:bg-[var(--surface-3)] focus-visible:outline-2 focus-visible:outline-[var(--cyber-yellow)]"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m15 18-6-6 6-6"
            />
          </svg>
        </button>
        <span
          aria-live="polite"
          aria-atomic="true"
          className="text-sm font-medium text-[var(--text)]"
        >
          {activeImage + 1} of {images.length}
        </span>
        <button
          type="button"
          aria-label="Next image"
          onClick={() => showImage(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] transition-colors hover:bg-[var(--surface-3)] focus-visible:outline-2 focus-visible:outline-[var(--cyber-yellow)]"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m9 6 6 6-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
