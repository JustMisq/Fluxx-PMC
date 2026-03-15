"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/divisions", label: "Divisions" },
  { href: "/fleet", label: "Fleet" },
  { href: "/operations", label: "Operations" },
  { href: "/join", label: "Enlist" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-[#050507]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-b from-[#050507]/60 to-transparent"
      }`}
    >
      {/* Top HUD line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center border border-[var(--color-primary)]/60 bg-[var(--color-primary)]/10 font-[family-name:var(--font-orbitron)] text-sm font-bold text-[var(--color-primary)] transition-all group-hover:bg-[var(--color-primary)]/20 group-hover:shadow-[0_0_20px_var(--color-primary-glow)]">
            F
            {/* Corner ticks */}
            <div className="absolute -top-[2px] -left-[2px] h-2 w-2 border-t border-l border-[var(--color-primary)]/40" />
            <div className="absolute -bottom-[2px] -right-[2px] h-2 w-2 border-b border-r border-[var(--color-primary)]/40" />
          </div>
          <div>
            <div className="font-[family-name:var(--font-orbitron)] text-sm font-bold tracking-[0.2em] text-white">
              FLUXX
            </div>
            <div className="text-[9px] tracking-[0.2em] text-[var(--color-muted)]/60">
              PMC
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 font-[family-name:var(--font-rajdhani)] text-[13px] font-medium tracking-[0.12em] uppercase transition-all duration-300 ${
                pathname === link.href
                  ? "text-[var(--color-primary-light)]"
                  : "text-[var(--color-muted)] hover:text-white"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-1/2 h-[2px] w-8 -translate-x-1/2 bg-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary-glow)]" />
              )}
            </Link>
          ))}
          {/* Separator + Enlist highlight */}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation"
        >
          <span
            className={`h-[2px] w-6 bg-white transition-all ${
              mobileOpen ? "translate-y-[5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-all ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-all ${
              mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="border-t border-[var(--color-surface-border)] bg-[#050507]/95 backdrop-blur-md px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2 text-sm font-medium tracking-wider uppercase ${
                pathname === link.href
                  ? "text-[var(--color-primary-light)]"
                  : "text-[var(--color-muted)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
