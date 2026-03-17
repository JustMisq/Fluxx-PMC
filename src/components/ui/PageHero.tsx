"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import StatusBadge from "./StatusBadge";

interface PageHeroProps {
  label: string;
  title: string;
  text: string;
  classification?: "confidential" | "restricted" | "operational";
  status?: { label: string; variant: "red" | "amber" | "green" };
  children?: ReactNode;
}

export default function PageHero({ label, title, text, classification, status, children }: PageHeroProps) {
  const classLabels = {
    confidential: "CONFIDENTIAL",
    restricted: "RESTRICTED ACCESS",
    operational: "OPERATIONAL DOCUMENT",
  };

  return (
    <section className="relative min-h-[60vh] flex items-center bg-brand-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-dark" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      {/* Classification banner */}
      {classification && (
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="bg-brand-red/10 border-b border-brand-red/30 py-1.5 px-4 flex items-center justify-center gap-3">
            <div className="w-4 h-px bg-brand-red/50" />
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-red/80">
              {classLabels[classification]}
            </span>
            <div className="w-4 h-px bg-brand-red/50" />
          </div>
        </div>
      )}

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
            {status && (
              <StatusBadge label={status.label} variant={status.variant} pulse />
            )}
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

      {/* Corner decorations */}
      <div className="absolute top-20 left-6 w-6 h-6 border-t border-l border-brand-red/20" />
      <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-brand-red/20" />
    </section>
  );
}
