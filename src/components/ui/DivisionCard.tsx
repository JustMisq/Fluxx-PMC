"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DivisionCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  status: string;
  delay?: number;
}

export default function DivisionCard({
  icon,
  title,
  text,
  status,
  delay = 0,
}: DivisionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-brand-gray border border-white/5 p-6 lg:p-8 hover:border-brand-red/20 transition-all duration-300 group"
    >
      <div className="w-12 h-12 border border-brand-red/30 flex items-center justify-center mb-5 group-hover:border-brand-red transition-colors">
        <span className="text-brand-red">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <p className="text-sm text-brand-text-muted leading-relaxed mb-4">
        {text}
      </p>
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-red/60">
        {status}
      </span>
    </motion.div>
  );
}
