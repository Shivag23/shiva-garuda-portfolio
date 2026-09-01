"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, site } from "@/lib/content";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center border border-accent/40 font-mono text-[11px] text-accent">
            SG
          </span>
          <span className="hidden font-mono text-xs tracking-[0.18em] text-muted sm:inline">
            {site.name.toUpperCase()}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.links.resume}
            className="border border-accent/40 px-3 py-1.5 font-mono text-[11px] tracking-[0.16em] text-accent uppercase transition-colors hover:bg-accent hover:text-background"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 items-center justify-center border border-border font-mono text-xs text-muted md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-2 font-mono text-sm tracking-[0.14em] text-muted uppercase"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={site.links.resume}
                className="mt-2 inline-flex w-fit border border-accent/40 px-3 py-1.5 font-mono text-[11px] tracking-[0.16em] text-accent uppercase"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
