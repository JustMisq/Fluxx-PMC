"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  label: string;
  title: string;
  text: string;
  children?: ReactNode;
}

export default function PageHero({ label, title, text, children }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-brand-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-dark" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-red">
              {label}
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-brand-text-muted max-w-2xl leading-relaxed">
            {text}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
