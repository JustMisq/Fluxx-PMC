export default function SectionDivider() {
  return (
    <div className="relative py-8">
      <div className="section-glow-separator" />
      {/* Center diamond */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-3.5 w-3.5 rotate-45 items-center justify-center border border-[var(--color-primary)]/50 bg-[var(--color-background)]">
          <div className="h-1.5 w-1.5 bg-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary-glow)]" />
        </div>
      </div>
    </div>
  );
}
