"use client";
import { useEffect, useRef } from "react";
import Button from "../ui/Button";

export default function HeroSection() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationId;
    const stars = [];
    const STAR_COUNT = 260;
    const particles = [];
    const PARTICLE_COUNT = 50;
    let scrollY = 0;
    let mouseX = -1000;
    let mouseY = -1000;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function onScroll() { scrollY = window.scrollY; }
    window.addEventListener("scroll", onScroll, { passive: true });

    function onMouse(e) { mouseX = e.clientX; mouseY = e.clientY; }
    window.addEventListener("mousemove", onMouse, { passive: true });

    // Stars — deep field + bright foreground
    for (let i = 0; i < STAR_COUNT; i++) {
      const layer = Math.random(); // 0 = far, 1 = near
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: layer < 0.6 ? Math.random() * 0.8 + 0.2 : Math.random() * 1.6 + 0.5,
        baseOpacity: layer < 0.6 ? Math.random() * 0.3 + 0.1 : Math.random() * 0.5 + 0.3,
        speed: layer < 0.6 ? 0.02 : 0.06,
        pulse: Math.random() * Math.PI * 2,
        parallax: layer < 0.6 ? 0.02 : 0.08,
        color: Math.random() < 0.15 ? [0, 212, 255] : Math.random() < 0.1 ? [196, 30, 58] : [255, 255, 255],
      });
    }

    // Floating particles (red)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.3,
        baseOpacity: Math.random() * 0.25 + 0.05,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;

      // Draw stars with parallax
      stars.forEach((s) => {
        const py = (s.y + scrollY * s.parallax) % canvas.height;
        const twinkle = s.baseOpacity + Math.sin(time * 1.5 + s.pulse) * 0.15;
        ctx.beginPath();
        ctx.arc(s.x, py, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color[0]}, ${s.color[1]}, ${s.color[2]}, ${Math.max(0, twinkle)})`;
        ctx.fill();
      });

      // Draw particles with connections
      particles.forEach((p) => {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const mouseDist = Math.sqrt(dx * dx + dy * dy);
        if (mouseDist < 120) {
          const force = (120 - mouseDist) / 120;
          p.x += (dx / mouseDist) * force * 1.2;
          p.y += (dy / mouseDist) * force * 1.2;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const opacity = p.baseOpacity + Math.sin(time + p.pulse) * 0.08;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 30, 58, ${opacity})`;
        ctx.fill();
      });

      // Particle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(196, 30, 58, ${0.04 * (1 - dist / 160)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  const heroStats = [
    { label: "ACTIVE PERSONNEL", value: "48" },
    { label: "OPERATIONAL SHIPS", value: "12" },
    { label: "CONTRACTS COMPLETED", value: "96" },
    { label: "SYSTEMS", value: "STANTON • PYRO" },
  ];

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Deep space background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0a0a18_0%,_#030308_50%,_#000002_100%)]" />

      {/* Planetary horizon silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#020204] via-[#060610]/80 to-transparent" />
      <div className="absolute bottom-[-5%] left-1/2 h-[600px] w-[1600px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,_#0c0c20_0%,_#060610_40%,_transparent_70%)] opacity-80" />
      {/* Atmospheric glow on horizon */}
      <div className="absolute bottom-[8%] left-1/2 h-[2px] w-[800px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-accent)]/15 to-transparent blur-[2px]" />
      <div className="absolute bottom-[7%] left-1/2 h-[60px] w-[600px] -translate-x-1/2 bg-[var(--color-accent)]/[0.02] blur-[40px]" />

      {/* Star grid pattern */}
      <div className="grid-bg absolute inset-0 opacity-20" />

      {/* Starfield + particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" aria-hidden="true" />

      {/* Animated scan line */}
      <div className="hud-scanline" />

      {/* Central radial glows */}
      <div className="absolute left-1/2 top-[40%] h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/[0.03] blur-[180px]" />
      <div className="absolute left-1/2 top-[30%] h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/[0.012] blur-[100px]" />

      {/* HUD corner brackets */}
      <div className="pointer-events-none absolute inset-8 hidden md:block">
        <div className="absolute top-0 left-0 h-16 w-16">
          <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-[var(--color-primary)]/40 to-transparent" />
          <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-[var(--color-primary)]/40 to-transparent" />
          <div className="absolute top-2 left-2 font-[family-name:var(--font-mono)] text-[8px] tracking-[0.2em] text-[var(--color-primary)]/30">01</div>
        </div>
        <div className="absolute top-0 right-0 h-16 w-16">
          <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-[var(--color-primary)]/40 to-transparent" />
          <div className="absolute top-0 right-0 h-[1px] w-full bg-gradient-to-l from-[var(--color-primary)]/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-16">
          <div className="absolute bottom-0 left-0 h-full w-[1px] bg-gradient-to-t from-[var(--color-primary)]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-[var(--color-primary)]/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 h-16 w-16">
          <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-[var(--color-primary)]/40 to-transparent" />
          <div className="absolute bottom-0 right-0 h-[1px] w-full bg-gradient-to-l from-[var(--color-primary)]/40 to-transparent" />
          <div className="absolute bottom-2 right-2 font-[family-name:var(--font-mono)] text-[8px] tracking-[0.2em] text-[var(--color-primary)]/30">F-X</div>
        </div>
      </div>

      {/* Side data tickers */}
      <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 space-y-6 lg:block">
        {["SYS.OK", "NET.ENC", "GPS.LCK", "COM.SEC"].map((label, i) => (
          <div
            key={label}
            className="animate-fade-in data-flicker font-[family-name:var(--font-mono)] text-[9px] tracking-[0.2em] text-[var(--color-primary)]/25"
            style={{ animationDelay: `${1.5 + i * 0.2}s`, opacity: 0 }}
          >
            {label}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 space-y-6 text-right lg:block">
        {["2951.03", "STANTON", "HURSTON", "SECTOR-7"].map((label, i) => (
          <div
            key={label}
            className="animate-fade-in data-flicker font-[family-name:var(--font-mono)] text-[9px] tracking-[0.2em] text-[var(--color-muted)]/20"
            style={{ animationDelay: `${1.7 + i * 0.2}s`, opacity: 0 }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Status bar */}
        <div
          className="animate-fade-in-down mb-10 inline-flex items-center gap-3 border border-[var(--color-surface-border)] bg-[var(--color-surface)]/60 px-6 py-2.5 backdrop-blur-md"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.25em] text-[var(--color-muted)]">
            SYSTEM OPERATIONAL — SECURE NODE ACTIVE
          </span>
        </div>

        {/* Main title block */}
        <div className="relative inline-block">
          <h1
            className="animate-fade-in-up font-[family-name:var(--font-orbitron)] text-7xl font-black tracking-[0.12em] text-white md:text-8xl lg:text-9xl text-glow"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            FLUXX
          </h1>
          <div
            className="animate-fade-in mx-auto mt-3 h-[2px] w-0"
            style={{
              animationDelay: "0.9s",
              opacity: 0,
              background: "linear-gradient(90deg, transparent, var(--color-primary), transparent)",
              animationFillMode: "forwards",
              width: "100%",
            }}
          />
        </div>

        {/* Subtitle */}
        <div
          className="animate-fade-in-up mt-5 flex items-center justify-center gap-4"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[var(--color-primary)]/60" />
          <span className="font-[family-name:var(--font-orbitron)] text-xs font-medium tracking-[0.35em] text-[var(--color-primary)]">
            PRIVATE MILITARY COMPANY
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[var(--color-primary)]/60" />
        </div>

        {/* Tagline */}
        <p
          className="animate-fade-in-up mx-auto mt-4 max-w-md font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] text-[var(--color-muted)]/60"
          style={{ animationDelay: "0.85s", opacity: 0 }}
        >
          OPERATING ACROSS MULTIPLE PLANETARY SYSTEMS — EST. 2947
        </p>

        {/* Description */}
        <p
          className="animate-fade-in-up mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-[var(--color-muted-light)]"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          An elite private military organization conducting reconnaissance,
          assault, logistics, and tactical operations across the Star Citizen
          universe.
        </p>

        {/* ——— STATS HUD PANEL ——— */}
        <div
          className="animate-fade-in-up mx-auto mt-12 max-w-3xl"
          style={{ animationDelay: "1.1s", opacity: 0 }}
        >
          <div className="relative border border-[var(--color-surface-border)]/60 bg-[var(--color-surface)]/40 backdrop-blur-md">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary)]/40 to-transparent" />
            {/* Corner ticks */}
            <div className="absolute -top-[3px] -left-[3px] h-2 w-2 border-t border-l border-[var(--color-primary)]/50" />
            <div className="absolute -top-[3px] -right-[3px] h-2 w-2 border-t border-r border-[var(--color-primary)]/50" />
            <div className="absolute -bottom-[3px] -left-[3px] h-2 w-2 border-b border-l border-[var(--color-primary)]/50" />
            <div className="absolute -bottom-[3px] -right-[3px] h-2 w-2 border-b border-r border-[var(--color-primary)]/50" />

            <div className="grid grid-cols-2 md:grid-cols-4">
              {heroStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`group px-5 py-5 text-center transition-colors hover:bg-[var(--color-primary)]/[0.04] ${
                    i < heroStats.length - 1 ? "border-r border-[var(--color-surface-border)]/40" : ""
                  } ${i < 2 ? "border-b border-[var(--color-surface-border)]/40 md:border-b-0" : ""}`}
                >
                  <div className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white transition-all group-hover:text-[var(--color-primary-light)] md:text-2xl"
                    style={{ textShadow: "0 0 12px rgba(196, 30, 58, 0.3)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-1.5 font-[family-name:var(--font-mono)] text-[9px] tracking-[0.2em] text-[var(--color-muted)]/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="animate-fade-in-up mt-12 flex flex-wrap items-center justify-center gap-5"
          style={{ animationDelay: "1.3s", opacity: 0 }}
        >
          <Button href="/join" variant="primary">
            Join the Organization
          </Button>
          <Button href="/divisions" variant="outline">
            Explore Divisions
          </Button>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fade-in mt-20 flex flex-col items-center gap-3"
          style={{ animationDelay: "2s", opacity: 0 }}
        >
          <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.3em] text-[var(--color-muted)]/30">
            SCROLL TO CONTINUE
          </span>
          <div className="flex flex-col items-center gap-1">
            <div className="h-6 w-[1px] animate-pulse bg-gradient-to-b from-[var(--color-primary)]/40 to-transparent" />
            <div className="h-1.5 w-1.5 rotate-45 border-b border-r border-[var(--color-primary)]/40" />
          </div>
        </div>
      </div>

      {/* Bottom data strip */}
      <div
        className="animate-fade-in absolute bottom-0 left-0 right-0 border-t border-[var(--color-surface-border)]/50 bg-[var(--color-surface)]/40 backdrop-blur-sm"
        style={{ animationDelay: "1.8s", opacity: 0 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5">
          <div className="flex items-center gap-6">
            {[
              { label: "NETWORK", value: "ENCRYPTED" },
              { label: "STATUS", value: "COMBAT READY" },
              { label: "SECTOR", value: "STANTON" },
            ].map((item) => (
              <div key={item.label} className="hidden sm:flex items-center gap-2">
                <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.15em] text-[var(--color-muted)]/40">
                  {item.label}:
                </span>
                <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.15em] text-[var(--color-primary)]/50">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500/60 shadow-[0_0_4px_rgba(34,197,94,0.4)]" />
            <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.15em] text-[var(--color-muted)]/40">
              FLUXX-NET v4.2.1
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
