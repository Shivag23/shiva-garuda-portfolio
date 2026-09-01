import { site } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <SectionHeader index="04" title="Contact" note="Email · GitHub · LinkedIn" />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="grid gap-10 border border-border bg-surface/50 p-6 sm:grid-cols-[1.2fr_0.8fr] sm:p-8">
            <div>
              <p className="max-w-md text-lg leading-8 text-muted">
                Reach me by email, or through GitHub and LinkedIn.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-6 inline-block font-mono text-xl text-accent underline-offset-4 hover:underline sm:text-2xl"
              >
                {site.email}
              </a>
            </div>

            <ul className="flex flex-col gap-3 font-mono text-sm">
              <li>
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-border py-2 text-muted transition-colors hover:text-accent"
                >
                  <span>GitHub</span>
                  <span className="text-[11px] tracking-[0.16em] uppercase">
                    Shivag23
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-border py-2 text-muted transition-colors hover:text-accent"
                >
                  <span>LinkedIn</span>
                  <span className="text-[11px] tracking-[0.16em] uppercase">
                    shiva-garuda
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.links.resume}
                  className="flex items-center justify-between border-b border-border py-2 text-muted transition-colors hover:text-accent"
                >
                  <span>Resume</span>
                  <span className="text-[11px] tracking-[0.16em] uppercase">
                    PDF
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 font-mono text-[10px] tracking-[0.16em] text-muted uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Berkeley · ECE</span>
        </div>
      </div>
    </footer>
  );
}
