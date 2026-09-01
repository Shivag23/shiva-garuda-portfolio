"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeader
          index="01"
          title="Projects"
          note="Selected work"
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.05}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group flex h-full flex-col border border-border bg-surface/60 p-6 transition-colors hover:border-accent/40 hover:bg-surface"
            >
              <div className="flex items-center justify-between gap-3 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                <span className="text-accent">{project.id}</span>
                <span>{project.dates}</span>
              </div>

              <h3 className="mt-4 font-mono text-xl tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-accent/80 uppercase">
                {project.domain}
              </p>
              <p className="mt-4 flex-1 text-sm leading-6 text-muted">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-border px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-muted transition-colors group-hover:border-accent/30 group-hover:text-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
