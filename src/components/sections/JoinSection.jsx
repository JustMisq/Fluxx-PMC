import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";
import HudFrame from "../ui/HudFrame";

export default function JoinSection() {
  return (
    <section className="relative overflow-hidden py-36">
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-primary)]/[0.03] to-[var(--color-surface)]/30" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/[0.04] blur-[120px]" />
      <div className="absolute left-1/4 top-1/3 h-[200px] w-[200px] rounded-full bg-[var(--color-accent)]/[0.02] blur-[80px]" />
      <div className="grid-bg-fine absolute inset-0 opacity-15" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          {/* Tag */}
          <div className="mb-8 inline-flex items-center gap-2 border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/[0.06] px-5 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary-glow)]" />
            </span>
            <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.25em] text-[var(--color-primary)]">
              RECRUITMENT ACTIVE
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl font-bold tracking-wider text-white md:text-5xl lg:text-6xl">
            Join <span className="text-glow text-[var(--color-primary)]">FLUXX</span> PMC
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-[var(--color-muted-light)]">
            We are actively recruiting skilled operatives. Whether you&apos;re a
            combat pilot, ground specialist, logistics expert, or medic — there is
            a place for you in our ranks.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <HudFrame className="mx-auto mt-10 inline-block px-8 py-4">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {["COMMITMENT", "TEAMWORK", "DISCIPLINE"].map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-[var(--color-primary)]/50" />
                  <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-muted)]/50">
                    {item}
                  </span>
                  {i < 2 && <span className="hidden sm:block h-3 w-[1px] bg-[var(--color-surface-border)]" />}
                </div>
              ))}
            </div>
          </HudFrame>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-12">
            <Button href="/join" variant="primary" className="animate-pulse-glow">
              Apply Now
            </Button>
          </div>

          <p className="mt-6 font-[family-name:var(--font-mono)] text-[9px] tracking-[0.2em] text-[var(--color-muted)]/30">
            RESPONSE TIME: ~48H — CLEARANCE: PUBLIC
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
