export default function SectionHeading({ tag, title, description, center = true }) {
  return (
    <div className={`mb-20 ${center ? "text-center" : ""}`}>
      {tag && (
        <div className="mb-5 inline-flex items-center gap-2.5 border border-[var(--color-surface-border)] bg-[var(--color-surface)]/80 px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary-glow)]" />
          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.25em] text-[var(--color-muted)] uppercase">
            {tag}
          </span>
        </div>
      )}
      <h2 className="font-[family-name:var(--font-orbitron)] text-3xl font-bold tracking-wider text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {/* Accent line under title */}
      <div className="mx-auto mt-5 flex items-center justify-center gap-3">
        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[var(--color-primary)]/40" />
        <div className="h-1.5 w-1.5 rotate-45 bg-[var(--color-primary)]/40" />
        <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[var(--color-primary)]/40" />
      </div>
      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}
