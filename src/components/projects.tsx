"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { Slideshow } from "@/components/slideshow";

type Project = (typeof projects)[number];

function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  const href = "href" in project ? project.href : undefined;
  const images = "images" in project ? project.images : undefined;

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`group h-full border border-border bg-surface/60 p-5 transition-colors hover:border-accent/40 hover:bg-surface sm:p-6 ${
        wide
          ? "flex flex-col md:grid md:grid-cols-2 md:items-stretch md:gap-8"
          : "flex flex-col"
      }`}
    >
      {images ? (
        <Slideshow
          images={images}
          className={wide ? "mb-5 md:mb-0" : "mb-5"}
        />
      ) : null}

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex items-center justify-between gap-3 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
          <span className="text-accent">{project.id}</span>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition-colors hover:underline"
            >
              Live demo ↗
            </a>
          ) : null}
        </div>

        <h3 className="mt-4 font-mono text-xl tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-accent/80 uppercase">
          {project.domain}
        </p>
        <p
          className={`mt-4 flex-1 text-sm leading-6 text-muted ${
            wide ? "" : "line-clamp-4 min-h-[6.5rem]"
          }`}
        >
          {project.description}
        </p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-border px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-muted transition-colors group-hover:border-accent/30 group-hover:text-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const last = projects.length - 1;

  return (
    <section id="projects" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeader index="01" title="Projects" note="Selected work" />
      </Reveal>

      <div className="grid items-stretch gap-4 md:grid-cols-2">
        {projects.map((project, i) => {
          const wide = i === last;
          return (
            <Reveal
              key={project.id}
              delay={i * 0.04}
              className={wide ? "h-full md:col-span-2" : "h-full"}
            >
              <ProjectCard project={project} wide={wide} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
