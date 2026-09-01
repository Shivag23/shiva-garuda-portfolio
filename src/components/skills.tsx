import { skills } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeader index="03" title="Skills" note="Languages · platforms · tools" />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <div className="h-full border border-border bg-surface/50 p-5">
              <h3 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
