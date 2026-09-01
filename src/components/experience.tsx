import { experience } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeader index="02" title="Experience" note="Lab · team · industry" />
      </Reveal>

      <ol className="relative space-y-0 border-l border-border pl-6 sm:pl-8">
        {experience.map((item, i) => (
          <li key={item.org} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-background sm:-left-[37px]" />
            <Reveal delay={i * 0.06}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-mono text-lg text-foreground">{item.role}</h3>
                  <p className="mt-1 text-sm text-accent">{item.org}</p>
                </div>
                <p className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
                  {item.dates}
                </p>
              </div>
              <ul className="mt-4 space-y-2.5">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm leading-6 text-muted before:mr-2 before:text-accent before:content-['▸']"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              {"paper" in item && item.paper ? (
                <a
                  href={item.paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-mono text-[11px] tracking-[0.12em] text-accent uppercase underline-offset-4 hover:underline"
                >
                  {item.paper.label} ↗
                </a>
              ) : null}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
