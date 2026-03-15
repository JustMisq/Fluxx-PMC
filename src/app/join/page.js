"use client";
import { useState } from "react";
import SectionHeading from "../../components/ui/SectionHeading";

const requirements = [
  "Active Star Citizen account",
  "Working microphone for comms",
  "Willingness to participate in organized operations",
  "Respectful and team-oriented attitude",
  "Minimum age: 18+",
];

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    handle: "",
    timezone: "",
    division: "",
    experience: "",
    message: "",
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative overflow-hidden py-24">
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/5 blur-[80px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            tag="Recruitment Active"
            title="Join FLUXX PMC"
            description="We are actively recruiting skilled operatives to join our ranks. Fill out the application below and a recruiter will be in touch."
          />
        </div>
      </section>

      <section className="border-t border-[var(--color-surface-border)] bg-[var(--color-surface)] py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-2">
          {/* Requirements */}
          <div>
            <h3 className="mb-6 font-[family-name:var(--font-orbitron)] text-sm font-bold tracking-[0.15em] text-white">
              REQUIREMENTS
            </h3>
            <div className="space-y-3">
              {requirements.map((req) => (
                <div
                  key={req}
                  className="flex items-start gap-3 text-sm text-[var(--color-muted)]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[var(--color-primary)]" />
                  {req}
                </div>
              ))}
            </div>

            <div className="mt-10 border border-[var(--color-surface-border)] bg-[var(--color-background)] p-6">
              <div className="mb-3 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] text-[var(--color-primary)]/70">
                WHAT TO EXPECT
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                After submitting your application, a member of our recruitment
                team will review your profile and reach out within 48 hours.
                You&apos;ll receive a brief orientation followed by a trial period
                with your chosen division.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center border border-[var(--color-primary)]/30 bg-[var(--color-background)] p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center border border-[var(--color-primary)] text-2xl text-[var(--color-primary)]">
                  ✓
                </div>
                <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-bold tracking-wider text-white">
                  Application Received
                </h3>
                <p className="mt-3 text-sm text-[var(--color-muted)]">
                  Your application has been logged. A recruiter will contact you
                  shortly.
                </p>
                <div className="mt-4 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-muted)]/50">
                  STATUS: PENDING REVIEW
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] text-[var(--color-muted)]">
                    RSI HANDLE *
                  </label>
                  <input
                    type="text"
                    name="handle"
                    value={form.handle}
                    onChange={handleChange}
                    required
                    className="w-full border border-[var(--color-surface-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--color-primary)]"
                    placeholder="Your Star Citizen handle"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] text-[var(--color-muted)]">
                    TIMEZONE
                  </label>
                  <input
                    type="text"
                    name="timezone"
                    value={form.timezone}
                    onChange={handleChange}
                    className="w-full border border-[var(--color-surface-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--color-primary)]"
                    placeholder="e.g., UTC+1, EST, PST"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] text-[var(--color-muted)]">
                    PREFERRED DIVISION
                  </label>
                  <select
                    name="division"
                    value={form.division}
                    onChange={handleChange}
                    className="w-full border border-[var(--color-surface-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--color-primary)]"
                  >
                    <option value="">Select a division</option>
                    <option value="assault">Assault</option>
                    <option value="recon">Recon</option>
                    <option value="logistics">Logistics</option>
                    <option value="ems">EMS / Medical</option>
                    <option value="blackops">Black Ops</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] text-[var(--color-muted)]">
                    STAR CITIZEN EXPERIENCE
                  </label>
                  <select
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    className="w-full border border-[var(--color-surface-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--color-primary)]"
                  >
                    <option value="">Select experience level</option>
                    <option value="new">New Player</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="veteran">Veteran</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] text-[var(--color-muted)]">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-none border border-[var(--color-surface-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--color-primary)]"
                    placeholder="Tell us about yourself and why you want to join FLUXX"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer border border-[var(--color-primary)] bg-[var(--color-primary)] px-8 py-3 font-[family-name:var(--font-rajdhani)] text-sm font-semibold tracking-[0.15em] uppercase text-white transition-all duration-300 hover:bg-[var(--color-primary-light)] hover:shadow-[0_0_30px_var(--color-primary-glow)] active:scale-[0.98]"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
