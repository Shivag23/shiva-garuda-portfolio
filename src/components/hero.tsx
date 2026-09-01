"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/content";

const socials = [
  { href: site.links.github, label: "GitHub" },
  { href: site.links.linkedin, label: "LinkedIn" },
  { href: site.links.resume, label: "Resume" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28"
    >
      <div>
        <motion.p
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase"
        >
          {site.education.school} · {site.education.expected}
        </motion.p>

        <motion.h1
          initial={{ y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-mono text-4xl leading-[1.1] tracking-tight text-foreground sm:text-6xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-xl font-mono text-sm leading-relaxed text-accent sm:text-base"
        >
          {site.identity}
        </motion.p>

        <motion.p
          initial={{ y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
        >
          {site.intro}
        </motion.p>

        <motion.div
          initial={{ y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="border border-border px-3.5 py-2 font-mono text-[11px] tracking-[0.16em] text-muted uppercase transition-colors hover:border-accent/50 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="bg-accent px-3.5 py-2 font-mono text-[11px] tracking-[0.16em] text-background uppercase transition-opacity hover:opacity-85"
          >
            Email
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 16 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-sm lg:max-w-none"
      >
        <div className="relative aspect-[4/5] overflow-hidden border border-border bg-surface">
          <div className="pointer-events-none absolute inset-3 z-10 border border-accent/20" />
          <span className="pointer-events-none absolute left-0 top-0 z-10 h-5 w-5 border-l-2 border-t-2 border-accent" />
          <span className="pointer-events-none absolute right-0 top-0 z-10 h-5 w-5 border-r-2 border-t-2 border-accent" />
          <span className="pointer-events-none absolute bottom-0 left-0 z-10 h-5 w-5 border-b-2 border-l-2 border-accent" />
          <span className="pointer-events-none absolute bottom-0 right-0 z-10 h-5 w-5 border-b-2 border-r-2 border-accent" />

          <Image
            src="/images/headshot.jpg"
            alt="Portrait of Shiva Garuda"
            fill
            priority
            sizes="(min-width: 1024px) 380px, 80vw"
            className="object-cover object-[center_18%] contrast-[1.08] saturate-[0.7] brightness-[0.82] hue-rotate-[12deg]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-accent/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-accent/10 mix-blend-color" />
        </div>

        <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
          <span>Fig. 01 / Headshot</span>
          <span>Dark-adapted</span>
        </div>
      </motion.div>
    </section>
  );
}
