"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Slide = {
  src: string;
  alt: string;
};

export function Slideshow({
  images,
  className = "",
}: {
  images: readonly Slide[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const current = images[index];
  const canCycle = count > 1;

  function go(delta: number) {
    setIndex((i) => (i + delta + count) % count);
  }

  return (
    <div
      className={`relative aspect-[4/3] w-full shrink-0 overflow-hidden border border-border bg-surface ${className}`}
    >
      <div
        className={`absolute inset-0 ${canCycle ? "cursor-pointer" : ""}`}
        onClick={canCycle ? () => go(1) : undefined}
        role={canCycle ? "button" : undefined}
        tabIndex={canCycle ? 0 : undefined}
        onKeyDown={
          canCycle
            ? (event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  go(1);
                }
              }
            : undefined
        }
        aria-label={canCycle ? "Next image" : undefined}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-contain p-3"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {canCycle ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              go(-1);
            }}
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-border bg-background/85 font-mono text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              go(1);
            }}
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-border bg-background/85 font-mono text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            ›
          </button>
          <div className="pointer-events-none absolute bottom-2 left-0 right-0 z-10 flex items-center justify-center gap-1.5">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Show image ${i + 1}`}
                onClick={(event) => {
                  event.stopPropagation();
                  setIndex(i);
                }}
                className={`pointer-events-auto h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? "bg-accent" : "bg-muted/60 hover:bg-muted"
                }`}
              />
            ))}
          </div>
          <span className="pointer-events-none absolute right-2 top-2 z-10 font-mono text-[10px] tracking-[0.14em] text-muted">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        </>
      ) : null}
    </div>
  );
}
