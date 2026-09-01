"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

type Project = (typeof projects)[number];

function ProjectMeta({ project }: { project: Project }) {
  const href = "href" in project ? project.href : undefined;

  return (
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
  );
}

function ProjectTags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="border border-border px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-muted transition-colors group-hover:border-accent/30 group-hover:text-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ProjectCopy({ project }: { project: Project }) {
  return (
    <>
      <h3 className="mt-4 font-mono text-xl tracking-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-accent/80 uppercase">
        {project.domain}
      </p>
      <p className="mt-4 flex-1 text-sm leading-6 text-muted">
        {project.description}
      </p>
      <ProjectTags tags={project.tags} />
    </>
  );
}

function ProjectImages({
  images,
  layout,
}: {
  images: readonly { src: string; alt: string }[];
  layout: "featured" | "card";
}) {
  if (layout === "card") {
    const cover = "fit" in images[0] && images[0].fit === "cover";

    return (
      <div
        className={`relative mb-5 aspect-[16/9] overflow-hidden border border-border ${
          cover ? "bg-surface" : "bg-white"
        }`}
      >
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          sizes="(min-width: 768px) 45vw, 90vw"
          className={cover ? "object-cover" : "object-contain p-2"}
        />
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
      <div className="relative aspect-[16/10] overflow-hidden border border-border bg-white">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          sizes="(min-width: 1024px) 640px, 90vw"
          className="object-contain p-3"
        />
      </div>
      {images.length > 1 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {images.slice(1).map((image) => (
            <div
              key={image.src}
              className="relative aspect-[16/10] overflow-hidden border border-border bg-white lg:aspect-auto lg:min-h-[148px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 320px, 45vw"
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Projects() {
  const featured = projects.find((project) => "featured" in project && project.featured);
  const rest = projects.filter((project) => !("featured" in project && project.featured));

  return (
    <section id="projects" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeader index="01" title="Projects" note="Selected work" />
      </Reveal>

      {featured && "images" in featured ? (
        <Reveal>
          <motion.article
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="group mb-4 border border-border bg-surface/60 p-5 transition-colors hover:border-accent/40 hover:bg-surface sm:p-6"
          >
            <ProjectImages images={featured.images} layout="featured" />
            <div className="mt-5">
              <ProjectMeta project={featured} />
              <ProjectCopy project={featured} />
            </div>
          </motion.article>
        </Reveal>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.05}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group flex h-full flex-col border border-border bg-surface/60 p-6 transition-colors hover:border-accent/40 hover:bg-surface"
            >
              {"images" in project ? (
                <ProjectImages images={project.images} layout="card" />
              ) : null}
              <ProjectMeta project={project} />
              <ProjectCopy project={project} />
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
