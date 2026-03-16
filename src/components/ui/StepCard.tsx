"use client";

import { motion } from "framer-motion";

interface StepCardProps {
  number: string;
  title: string;
  text: string;
  delay?: number;
}

export default function StepCard({ number, title, text, delay = 0 }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="relative bg-brand-gray border border-white/5 p-6 lg:p-8 hover:border-brand-red/20 transition-colors"
    >
      <span className="text-7xl font-black text-brand-red/40 absolute top-2 right-4">
        {number}
      </span>
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <p className="text-sm text-brand-text-muted leading-relaxed">{text}</p>
    </motion.div>
  );
}
