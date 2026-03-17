"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DivisionCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  specialties?: string;
  strength?: string;
  status: string;
  delay?: number;
}

export default function DivisionCard({
  icon,
  title,
  text,
  specialties,
  strength,
  status,
  delay = 0,
}: DivisionCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      className="relative h-96 cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* Front of card - minimal */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
        className="absolute inset-0 bg-brand-gray border border-white/5 hover:border-brand-red/30 transition-colors duration-300 p-6 lg:p-8 flex items-center justify-center"
      >
        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-red/5 rounded-full -mr-10 -mt-10" />

        <div className="relative z-10 text-center space-y-4">
          {/* Icon */}
          <div className="w-16 h-16 border border-brand-red/30 flex items-center justify-center mx-auto hover:border-brand-red hover:bg-brand-red/10 transition-all duration-300">
            <span className="text-brand-red text-2xl">{icon}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white">{title}</h3>

          {/* Status badge */}
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-red/80 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-red"></span>
            {status}
            {strength && <span className="text-brand-text-muted">{strength}</span>}
          </p>
        </div>
      </motion.div>

      {/* Back of card - full info */}
      <motion.div
        initial={{ rotateY: -180 }}
        animate={{ rotateY: isFlipped ? 0 : -180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
        className="absolute inset-0 bg-brand-gray border border-brand-red/30 p-6 lg:p-8 flex flex-col justify-between"
      >
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-red/10 rounded-full -mr-10 -mt-10" />

        {/* Content back */}
        <div className="relative z-10 space-y-4">
          {/* Icon and Title bar */}
          <div className="pb-4 border-b border-white/5">
            <div className="w-12 h-12 border border-brand-red/30 flex items-center justify-center mb-4">
              <span className="text-brand-red">{icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-red/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red"></span>
              {status}
              {strength && <span className="text-brand-text-muted">{strength}</span>}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs text-brand-text-muted leading-relaxed">
            {text}
          </p>

          {/* Specialties */}
          {specialties && (
            <div className="pt-2 border-t border-brand-red/10">
              <p className="text-[10px] text-brand-red/60 tracking-wider mb-2 uppercase font-semibold">
                Key Specialties
              </p>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                {specialties}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
