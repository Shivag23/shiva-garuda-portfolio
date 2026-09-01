type SectionHeaderProps = {
  index: string;
  title: string;
  note?: string;
};

export function SectionHeader({ index, title, note }: SectionHeaderProps) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs tracking-[0.22em] text-accent">
          {index}
        </span>
        <h2 className="font-mono text-2xl tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
      </div>
      {note ? (
        <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
          {note}
        </p>
      ) : null}
    </div>
  );
}
