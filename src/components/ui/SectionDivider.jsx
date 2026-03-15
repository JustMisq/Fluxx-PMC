export default function SectionDivider() {
  return (
    <div className="relative py-6">
      <div className="section-divider-line" />
      {/* Center diamond */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-3 w-3 rotate-45 items-center justify-center border border-[var(--color-primary)]/50 bg-[var(--color-background)]">
          <div className="h-1 w-1 bg-[var(--color-primary)] shadow-[0_0_6px_var(--color-primary-glow)]" />
        </div>
      </div>
    </div>
  );
}
